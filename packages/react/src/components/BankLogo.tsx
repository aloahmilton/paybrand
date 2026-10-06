import { PayLogo, type PayLogoProps } from './PayLogo'

export type BankLogoProps = PayLogoProps

/** Semantic wrapper around PayLogo for bank-focused UIs. */
export function BankLogo(props: BankLogoProps) {
  return <PayLogo {...props} />
}
