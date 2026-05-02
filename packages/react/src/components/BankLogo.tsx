import { PayLogo } from './PayLogo'
import type { PayLogoName } from '../types'

interface BankLogoProps {
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

export function BankLogo(props: BankLogoProps) {
  return <PayLogo {...props} />
}
