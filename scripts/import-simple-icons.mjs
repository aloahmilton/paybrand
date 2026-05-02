import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as icons from 'simple-icons'

const root = fileURLToPath(new URL('..', import.meta.url))

const mappings = [
  ['orange-money', 'siOrange'],
  ['airtel-money', 'siAirtel'],
  ['deutsche-bank', 'siDeutschebank'],
  ['barclays', 'siBarclays'],
  ['hsbc', 'siHsbc'],
  ['bank-of-america', 'siBankofamerica'],
  ['chase', 'siChase'],
  ['wells-fargo', 'siWellsfargo'],
  ['nubank', 'siNubank'],
  ['hdfc', 'siHdfcbank'],
  ['icici', 'siIcicibank'],
  ['paytm', 'siPaytm'],
  ['grabpay', 'siGrab'],
  ['visa', 'siVisa'],
  ['mastercard', 'siMastercard'],
  ['amex', 'siAmericanexpress'],
  ['apple-pay', 'siApplepay'],
  ['google-pay', 'siGooglepay'],
  ['paypal', 'siPaypal'],
  ['stripe', 'siStripe'],
  ['klarna', 'siKlarna'],
  ['afterpay', 'siAfterpay'],
  ['revolut', 'siRevolut'],
  ['wise', 'siWise'],
]

const svgPaths = {
  'orange-money': 'mobile-money/orange-money.svg',
  'airtel-money': 'mobile-money/airtel-money.svg',
  'deutsche-bank': 'banks/europe/deutsche-bank.svg',
  barclays: 'banks/europe/barclays.svg',
  hsbc: 'banks/europe/hsbc.svg',
  'bank-of-america': 'banks/americas/bank-of-america.svg',
  chase: 'banks/americas/chase.svg',
  'wells-fargo': 'banks/americas/wells-fargo.svg',
  nubank: 'banks/americas/nubank.svg',
  hdfc: 'banks/asia/hdfc.svg',
  icici: 'banks/asia/icici.svg',
  paytm: 'wallets/paytm.svg',
  grabpay: 'wallets/grabpay.svg',
  visa: 'cards/visa.svg',
  mastercard: 'cards/mastercard.svg',
  amex: 'cards/amex.svg',
  'apple-pay': 'wallets/apple-pay.svg',
  'google-pay': 'wallets/google-pay.svg',
  paypal: 'wallets/paypal.svg',
  stripe: 'wallets/stripe.svg',
  klarna: 'wallets/klarna.svg',
  afterpay: 'wallets/afterpay.svg',
  revolut: 'wallets/revolut.svg',
  wise: 'wallets/wise.svg',
}

const sourceManifest = []

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function toPaybrandSvg(icon) {
  return [
    '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" role="img">',
    `  <title>${escapeXml(icon.title)}</title>`,
    `  <path fill="#${icon.hex}" transform="translate(40 0) scale(5)" d="${icon.path}"/>`,
    '</svg>',
    '',
  ].join('\n')
}

for (const [id, exportName] of mappings) {
  const icon = icons[exportName]
  if (!icon) {
    throw new Error(`Missing Simple Icons export: ${exportName}`)
  }

  const outputPath = join(root, 'packages/core/svgs', svgPaths[id])
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, toPaybrandSvg(icon), 'utf8')
  sourceManifest.push({
    id,
    svgPath: svgPaths[id],
    source: 'Simple Icons',
    sourceSlug: icon.slug,
    sourceUrl: icon.source,
    license: 'CC0-1.0',
  })
  console.log(`Imported ${id} from Simple Icons (${icon.slug})`)
}

await writeFile(
  join(root, 'packages/core/sources.json'),
  `${JSON.stringify(sourceManifest, null, 2)}\n`,
  'utf8',
)
