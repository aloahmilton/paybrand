import { access, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const logosPath = join(root, 'packages/core/logos.json')
const sourcesPath = join(root, 'packages/core/sources.json')
const svgsRoot = join(root, 'packages/core/svgs')
const typesPath = join(root, 'packages/react/src/types.ts')

const logos = JSON.parse(await readFile(logosPath, 'utf8'))
const sources = JSON.parse(await readFile(sourcesPath, 'utf8'))
const types = await readFile(typesPath, 'utf8')
const errors = []

async function fileExists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const ids = new Set()
const svgPaths = new Set()
const sourceIds = new Set(sources.map((source) => source.id))

for (const logo of logos) {
  if (ids.has(logo.id)) {
    errors.push(`Duplicate logo id: ${logo.id}`)
  }
  ids.add(logo.id)

  if (svgPaths.has(logo.svgPath)) {
    errors.push(`Duplicate svgPath: ${logo.svgPath}`)
  }
  svgPaths.add(logo.svgPath)

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(logo.id)) {
    errors.push(`Invalid id format: ${logo.id}`)
  }

  if (!/^[A-Z]{2}$/.test(logo.country)) {
    errors.push(`Invalid country code for ${logo.id}: ${logo.country}`)
  }

  if (!Array.isArray(logo.aliases)) {
    errors.push(`aliases must be an array for ${logo.id}`)
  }

  const hasSvg = await fileExists(join(svgsRoot, logo.svgPath))
  if (hasSvg !== logo.hasIcon || hasSvg !== logo.hasFull) {
    errors.push(`Asset metadata mismatch for ${logo.id}: ${logo.svgPath}`)
  }

  if (hasSvg && !sourceIds.has(logo.id)) {
    errors.push(`Missing source entry for imported SVG: ${logo.id}`)
  }

  if (!types.includes(`'${logo.id}'`)) {
    errors.push(`Missing PayLogoName type for ${logo.id}`)
  }
}

for (const source of sources) {
  if (!ids.has(source.id)) {
    errors.push(`Source entry has no matching logo id: ${source.id}`)
  }

  if (!(await fileExists(join(svgsRoot, source.svgPath)))) {
    errors.push(`Source entry points to missing SVG: ${source.svgPath}`)
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Validated ${logos.length} logo entries and ${sources.length} sourced SVGs`)
