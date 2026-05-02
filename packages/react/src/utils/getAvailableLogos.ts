import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function getAvailableLogos(): LogoEntry[] {
  return (logos as LogoEntry[]).filter((l: LogoEntry) => l.hasIcon || l.hasFull)
}
