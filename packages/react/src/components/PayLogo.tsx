import React from 'react'
import type { PayLogoName } from '../types'
import { getLogoUrl } from '../utils/getLogoUrl'

export interface PayLogoProps {
  name: PayLogoName
  size?: number
  width?: number
  height?: number
  variant?: 'full' | 'icon'
  theme?: 'light' | 'dark'
  className?: string
  style?: React.CSSProperties
  title?: string
  /** When true, renders nothing if the logo asset is missing. Default: false (shows a placeholder). */
  hideIfMissing?: boolean
}

function MissingPlaceholder({
  name,
  width,
  height,
  className,
  style,
  title,
}: {
  name: string
  width: number
  height: number
  className?: string
  style?: React.CSSProperties
  title: string
}) {
  return (
    <span
      role="img"
      aria-label={title}
      title={title}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
        borderRadius: 4,
        background: 'var(--paybrand-placeholder-bg, #f1f5f9)',
        color: 'var(--paybrand-placeholder-fg, #64748b)',
        fontSize: Math.max(10, Math.min(width, height) * 0.28),
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        userSelect: 'none',
        ...style,
      }}
      data-paybrand-missing="true"
      data-name={name}
    >
      {name.slice(0, 3).toUpperCase()}
    </span>
  )
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
  hideIfMissing = false,
}: PayLogoProps) {
  const url = getLogoUrl(name)
  const w = width ?? size
  const h = height ?? size
  const label = title ?? `${name} logo`

  if (!url) {
    if (hideIfMissing) return null
    return (
      <MissingPlaceholder
        name={name}
        width={w}
        height={h}
        className={className}
        style={style}
        title={label}
      />
    )
  }

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
      loading="lazy"
      decoding="async"
    />
  )
}
