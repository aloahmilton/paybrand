export type PayLogoName =
  | 'mpesa' | 'mtn-momo' | 'orange-money' | 'wave' | 'airtel-money'
  | 'moov-money' | 'free-money' | 'tigo-pesa' | 'ecocash' | 'zamtel'
  | 'mobicash' | 'momo-rwanda' | 'm-gurush' | 'gtbank' | 'zenith-bank'
  | 'access-bank' | 'uba' | 'first-bank-ng' | 'equity-bank-ke' | 'kcb'
  | 'ecobank' | 'standard-bank' | 'absa' | 'capitec' | 'fnb'
  | 'nedbank' | 'cib-egypt' | 'attijariwafa' | 'bcp-morocco' | 'stanbic'
  | 'bnp-paribas' | 'societe-generale' | 'credit-agricole' | 'deutsche-bank' | 'santander'
  | 'bbva' | 'ing' | 'rabobank' | 'abn-amro' | 'barclays'
  | 'hsbc' | 'natwest' | 'lloyds' | 'unicredit' | 'intesa-sanpaolo'
  | 'bank-of-america' | 'chase' | 'wells-fargo' | 'citibank' | 'nubank'
  | 'itau' | 'bradesco' | 'bancolombia' | 'davivienda' | 'nequi'
  | 'bbva-mx' | 'scotiabank' | 'dbs' | 'ocbc' | 'uob'
  | 'hdfc' | 'icici' | 'sbi' | 'bri' | 'bca'
  | 'mandiri' | 'bangkok-bank' | 'gcash' | 'bkash' | 'paytm'
  | 'grabpay' | 'visa' | 'mastercard' | 'amex' | 'unionpay'
  | 'apple-pay' | 'google-pay' | 'paypal' | 'stripe' | 'klarna'
  | 'afterpay' | 'revolut' | 'wise' | 'flutterwave' | 'paystack'
  | 'ozow'

export interface LogoEntry {
  id: PayLogoName
  name: string
  category: string
  region: string
  country: string
  aliases: string[]
  hasIcon: boolean
  hasFull: boolean
  hasDark: boolean
  svgPath: string
}
