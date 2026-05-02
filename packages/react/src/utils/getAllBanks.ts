import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function getAllBanks(): LogoEntry[] {
  return (logos as LogoEntry[]).filter((l: LogoEntry) => l.category === 'bank')
}
