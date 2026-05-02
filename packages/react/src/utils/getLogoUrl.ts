import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'
import type { PayLogoName } from '../types'

export function getLogoUrl(name: PayLogoName): string {
  const logo = (logos as LogoEntry[]).find((l) => l.id === name)
  return `https://cdn.jsdelivr.net/npm/paybrand/svgs/${logo?.svgPath ?? `${name}.svg`}`
}
