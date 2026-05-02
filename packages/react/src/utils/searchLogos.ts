import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function searchLogos(query: string): LogoEntry[] {
  const q = query.toLowerCase()
  return (logos as LogoEntry[]).filter((l: LogoEntry) =>
    l.name.toLowerCase().includes(q) ||
    l.id.toLowerCase().includes(q) ||
    l.aliases.some((a: string) => a.toLowerCase().includes(q))
  )
}
