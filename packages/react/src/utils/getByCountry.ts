import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function getByCountry(code: string): LogoEntry[] {
  return (logos as LogoEntry[]).filter((l: LogoEntry) =>
    l.country.toUpperCase() === code.toUpperCase()
  )
}
