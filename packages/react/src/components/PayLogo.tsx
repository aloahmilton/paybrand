import React from 'react'
import type { PayLogoName } from '../types'
import { getLogoUrl } from '../utils/getLogoUrl'

interface PayLogoProps {
  name: PayLogoName
  size?: number
  width?: number
  height?: number
  variant?: 'full' | 'icon'
  theme?: 'light' | 'dark'
  className?: string
  style?: React.CSSProperties
  title?: string
}

export function PayLogo({
  name,
  size = 24,
  width,
  height,
  variant = 'full',
  theme = 'light',
  className,
  style,
  title,
}: PayLogoProps) {
  const url = getLogoUrl(name)
  const w = width ?? size
  const h = height ?? size
  const label = title ?? `${name} logo`

  return (
    <img
      src={url}
      alt={label}
      aria-label={label}
      width={w}
      height={h}
      className={className}
      style={style}
      data-variant={variant}
      data-theme={theme}
    />
  )
}
