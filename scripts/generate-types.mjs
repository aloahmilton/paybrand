import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const logos = JSON.parse(
  await readFile(join(root, 'packages/core/logos.json'), 'utf8'),
)

const ids = logos.map((logo) => logo.id)
const typeLines = []

for (let index = 0; index < ids.length; index += 5) {
  typeLines.push(`  | ${ids.slice(index, index + 5).map((id) => `'${id}'`).join(' | ')}`)
}

const contents = `export type PayLogoName =\n${typeLines.join('\n')}\n\nexport interface LogoEntry {\n  id: PayLogoName\n  name: string\n  category: string\n  region: string\n  country: string\n  aliases: string[]\n  hasIcon: boolean\n  hasFull: boolean\n  hasDark: boolean\n  svgPath: string\n}\n`

await writeFile(join(root, 'packages/react/src/types.ts'), contents, 'utf8')
console.log(`Generated PayLogoName with ${ids.length} ids`)
