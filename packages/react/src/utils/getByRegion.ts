import logos from '../../../core/logos.json'
import type { LogoEntry } from '../types'

export function getByRegion(region: string): LogoEntry[] {
  return (logos as LogoEntry[]).filter((l: LogoEntry) =>
    l.region.toLowerCase() === region.toLowerCase()
  )
}
