import logos from '../../../core/logos.json'
import type { LogoEntry, PayLogoName } from '../types'

/**
 * Returns the CDN URL for a logo SVG when the asset is available.
 * Returns `null` when the logo has no packaged SVG (hasIcon/hasFull are false).
 */
export function getLogoUrl(name: PayLogoName): string | null {
  const logo = (logos as LogoEntry[]).find((l) => l.id === name)

  if (!logo || (!logo.hasIcon && !logo.hasFull)) {
    return null
  }

  return `https://cdn.jsdelivr.net/npm/paybrand/svgs/${logo.svgPath}`
}
