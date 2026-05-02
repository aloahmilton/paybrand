# paybrand

React components and SVG assets for payment, wallet, mobile money, and bank logos across Africa, Europe, Asia, and the Americas.

[![npm version](https://img.shields.io/npm/v/paybrand?color=534AB7)](https://www.npmjs.com/package/paybrand)
[![license](https://img.shields.io/npm/l/paybrand)](./LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](./CONTRIBUTING.md)

## Why paybrand?

Most logo packages cover global cards and Western banks first. paybrand is built to make Africa, Asia, and Latin America first-class citizens too: M-Pesa, MTN MoMo, Wave, Orange Money, GCash, bKash, Paytm, Nubank, Nequi, Bancolombia, GTBank, Equity Bank, Capitec, Visa, Mastercard, Apple Pay, Stripe, PayPal, and more.

## Installation

```sh
npm install paybrand
```

```sh
yarn add paybrand
```

```sh
pnpm add paybrand
```

## Quick Start

```tsx
import { PayLogo } from 'paybrand'

export default function CheckoutPage() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <PayLogo name="mpesa" size={40} />
      <PayLogo name="visa" size={40} />
      <PayLogo name="mtn-momo" size={40} />
      <PayLogo name="gtbank" size={40} />
    </div>
  )
}
```

## Components

### `PayLogo`

```tsx
import { PayLogo } from 'paybrand'

<PayLogo
  name="mpesa"
  size={32}
  variant="full"
  theme="light"
  title="M-Pesa"
/>
```

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `PayLogoName` | required | Logo identifier |
| `size` | `number` | `24` | Width and height in pixels |
| `width` | `number` | - | Override width only |
| `height` | `number` | - | Override height only |
| `variant` | `"full" \| "icon"` | `"full"` | Variant metadata passed as a data attribute |
| `theme` | `"light" \| "dark"` | `"light"` | Theme metadata passed as a data attribute |
| `className` | `string` | - | CSS class name |
| `style` | `CSSProperties` | - | Inline styles |
| `title` | `string` | auto | Accessibility label |

### `BankLogo`

`BankLogo` is a semantic wrapper around `PayLogo` for bank-focused interfaces.

```tsx
import { BankLogo } from 'paybrand'

<BankLogo name="gtbank" size={32} />
<BankLogo name="equity-bank-ke" variant="icon" size={32} />
<BankLogo name="capitec" size={32} />
```

## Utility Functions

```ts
import {
  getLogoUrl,
  getAllBanks,
  getByCountry,
  getByRegion,
  getByCategory,
  getAvailableLogos,
  searchLogos,
} from 'paybrand'
```

```ts
const url = getLogoUrl('visa')
const banks = getAllBanks()
const nigerian = getByCountry('NG')
const african = getByRegion('africa')
const wallets = getByCategory('wallet')
const available = getAvailableLogos()
const results = searchLogos('mpesa')
```

## CDN Usage

SVGs are published with the npm package and can be loaded from jsDelivr:

```html
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/mobile-money/mpesa.svg" width="40" alt="M-Pesa" />
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/cards/visa.svg" width="40" alt="Visa" />
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/banks/africa/gtbank.svg" width="40" alt="GTBank" />
```

## Logo Coverage

The catalog starts with 86 typed entries across mobile money, banks, cards, and wallets. The first seeded SVG batch comes from open source sources where exact matches are available, and the remaining catalog entries are ready for community contributions.

Use `getAvailableLogos()` when you only want entries that currently have a packaged SVG asset.

| Region | Banks | Mobile Money | Cards & Wallets |
| --- | ---: | ---: | ---: |
| Africa | 17 | 13 | 3 |
| Europe | 15 | 0 | 2 |
| Americas | 12 | 0 | 0 |
| Asia | 10 | 0 | 4 |
| Global | 0 | 0 | 10 |

## Logo Sources

The first SVG seed uses [Simple Icons](https://github.com/simple-icons/simple-icons), which is released under CC0-1.0. Imported file-level source metadata lives in `packages/core/sources.json`.

The project also tracks [gilbarbara/logos](https://github.com/gilbarbara/logos) as a future CC0 fallback source for exact matches not available in Simple Icons.

See [ATTRIBUTION.md](./ATTRIBUTION.md) for source and trademark notes.

## Development

```sh
npm install
npm run logos:import
npm run logos:sync
npm run types:generate
npm run catalog:validate
npm run build --workspace=packages/react
npx tsc --noEmit
```

`npm run logos:import` imports known exact matches from Simple Icons into `packages/core/svgs`. The React package build copies those SVGs into `packages/react/svgs` before bundling so they are included when publishing to npm.

## Contributing

Missing a logo? Add the SVG to `packages/core/svgs`, add or update the entry in `packages/core/logos.json`, update `PayLogoName` in `packages/react/src/types.ts`, and open a pull request.

Read the full [Contributing Guide](./CONTRIBUTING.md).

## License

MIT © [aloahmilton](https://github.com/aloahmilton)

Brand names and logos are trademarks of their respective owners.

Made by [@aloahmilton](https://github.com/aloahmilton)
