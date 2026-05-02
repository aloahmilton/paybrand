import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function getByCategory(category: string): LogoEntry[] {
  return (logos as LogoEntry[]).filter((l: LogoEntry) =>
    l.category.toLowerCase() === category.toLowerCase()
  )
}
