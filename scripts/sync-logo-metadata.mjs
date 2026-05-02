import { access, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const logosPath = join(root, 'packages/core/logos.json')
const svgsRoot = join(root, 'packages/core/svgs')

async function fileExists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const logos = JSON.parse(await readFile(logosPath, 'utf8'))

for (const logo of logos) {
  const exists = await fileExists(join(svgsRoot, logo.svgPath))
  logo.hasIcon = exists
  logo.hasFull = exists
}

await writeFile(logosPath, `${JSON.stringify(logos, null, 2)}\n`, 'utf8')
console.log(`Synced SVG metadata for ${logos.length} logo entries`)
