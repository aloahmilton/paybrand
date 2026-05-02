<div align="center">

<svg width="120" height="120" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
  <polygon points="120,20 172,50 172,110 120,140 68,110 68,50" fill="#534AB7"/>
  <polygon points="120,20 172,50 172,110 120,140 68,110 68,50" fill="none" stroke="#7F77DD" stroke-width="2" opacity="0.4"/>
  <polygon points="68,50 120,20 120,80 68,110" fill="#7F77DD"/>
  <polygon points="172,50 120,20 120,80 172,110" fill="#D4537E"/>
  <polygon points="172,110 120,80 120,140 172,170" fill="#BA7517"/>
  <polygon points="120,140 172,110 172,170 120,200 68,170 68,110" fill="#1D9E75"/>
  <polygon points="68,110 120,80 120,140 68,170" fill="#185FA5"/>
  <polygon points="68,50 120,80 68,110" fill="#3B6D11"/>
</svg>

# paybrand

**The only React library with 400+ payment & bank logos covering Africa, Europe, Asia, and the Americas.**

[![npm version](https://img.shields.io/npm/v/paybrand?color=534AB7)](https://www.npmjs.com/package/paybrand)
[![npm downloads](https://img.shields.io/npm/dm/paybrand)](https://www.npmjs.com/package/paybrand)
[![GitHub stars](https://img.shields.io/github/stars/aloahmilton/paybrand?style=social)](https://github.com/aloahmilton/paybrand)
[![license](https://img.shields.io/npm/l/paybrand)](./LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](./CONTRIBUTING.md)

</div>

---

## Why paybrand?

Every other payment logo library is Western-centric. **paybrand** is the first library built with Africa, Asia, and Latin America as first-class citizens — alongside all the global brands you already know.

- ✅ M-Pesa, MTN MoMo, Wave, Orange Money, Airtel Money
- ✅ GTBank, Equity Bank, Capitec, Ecobank, Attijariwafa
- ✅ Nubank, Nequi, PIX, Bancolombia
- ✅ GCash, bKash, Paytm, GrabPay
- ✅ Visa, Mastercard, Apple Pay, Stripe, PayPal
- ✅ Tree-shakeable, TypeScript, SSR-safe, zero dependencies

---

## Installation


# npm
npm install paybrand

# yarn
yarn add paybrand

# pnpm
pnpm add paybrand
```

---

## Quick Start

```tsx
import { PayLogo } from 'paybrand'

export default function CheckoutPage() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <PayLogo name="mpesa"      size={40} />
      <PayLogo name="visa"       size={40} />
      <PayLogo name="mtn-momo"   size={40} />
      <PayLogo name="gtbank"     size={40} />
    </div>
  )
}



## Components

### `<PayLogo />`

The main component. Works for any logo in the library.

```tsx
import { PayLogo } from 'paybrand'

<PayLogo
  name="mpesa"       // required — logo id
  size={32}          // width + height (default: 24)
  variant="full"     // "full" | "icon"  (default: "full")
  theme="light"      // "light" | "dark" (default: "light")
  className=""       // your CSS class
  style={{}}         // inline styles
  title="M-Pesa"     // overrides auto aria-label
/>

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `PayLogoName` | required | Logo identifier |
| `size` | `number` | `24` | Width and height in px |
| `width` | `number` | — | Override width only |
| `height` | `number` | — | Override height only |
| `variant` | `"full" \| "icon"` | `"full"` | Full logo or icon only |
| `theme` | `"light" \| "dark"` | `"light"` | Light or dark variant |
| `className` | `string` | — | CSS class name |
| `style` | `CSSProperties` | — | Inline styles |
| `title` | `string` | auto | Accessibility label |

---

### `<BankLogo />`

For bank logos specifically — query by country code.

```tsx
import { BankLogo } from 'paybrand'

<BankLogo country="NG" bank="gtbank"  variant="full" size={32} />
<BankLogo country="KE" bank="equity"  variant="icon" size={32} />
<BankLogo country="ZA" bank="capitec"                size={32} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `country` | `string` | required | ISO 2-letter country code |
| `bank` | `string` | required | Bank id |
| `variant` | `"full" \| "icon"` | `"full"` | Full logo or icon only |
| `size` | `number` | `24` | Width and height in px |

---

## Utility Functions

```ts
import {
  getLogoUrl,
  getAllBanks,
  getByCountry,
  getByRegion,
  getByCategory,
  searchLogos,
} from 'paybrand'
```

### `getLogoUrl(name)`
Returns the SVG URL for any logo. Use when you need a URL not a component.

```ts
const url = getLogoUrl('mpesa')
// → 'https://cdn.jsdelivr.net/npm/paybrand/svgs/mobile-money/mpesa.svg'

<img src={getLogoUrl('visa')} width={40} alt="Visa" />
```

### `getAllBanks()`
Returns all bank entries from the library.

```ts
const banks = getAllBanks()
// → [{ id, name, country, region, category, ... }, ...]
```

### `getByCountry(code)`
Returns all logos for a specific country.

```ts
const nigerian = getByCountry('NG')
// → GTBank, Zenith, Access Bank, UBA, First Bank...
```

### `getByRegion(region)`
Returns all logos for a region.

```ts
const african = getByRegion('africa')
// → all African banks + mobile money providers
```

Available regions: `africa` · `europe` · `americas` · `asia` · `global`

### `searchLogos(query)`
Fuzzy search across all logo names and aliases.

```ts
const results = searchLogos('mpes')
// → [{ id: 'mpesa', name: 'M-Pesa', ... }]
```

---

## CDN Usage

No install needed. Works in plain HTML, Vue, Svelte, WordPress, Webflow — anywhere.

```html
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/mobile-money/mpesa.svg" width="40" />
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/cards/visa.svg" width="40" />
<img src="https://cdn.jsdelivr.net/npm/paybrand/svgs/banks/africa/gtbank.svg" width="40" />
```

**URL pattern:**
```
https://cdn.jsdelivr.net/npm/paybrand/svgs/{category}/{id}.svg
```

**Categories:**
`mobile-money` · `banks/africa` · `banks/europe` · `banks/americas` · `banks/asia` · `cards`

---

## TypeScript

Fully typed. Get autocomplete on every logo name.

```ts
import { PayLogo, type PayLogoName } from 'paybrand'

// Full autocomplete — type "mp" and see "mpesa" suggested
const method: PayLogoName = 'mpesa'

<PayLogo name={method} size={32} />
```

---

## Logo Coverage

| Region | Banks | Mobile Money | Cards & Wallets |
|--------|------:|-------------:|----------------:|
| Africa | 17 | 13 | — |
| Europe | 15 | — | — |
| Americas | 12 | 3 | — |
| Asia | 14 | 4 | — |
| Global | — | — | 15 |
| **Total** | **58** | **20** | **15** |

> Missing a logo? [Open a logo request →](https://github.com/aloahmilton/paybrand/issues/new?template=logo_request.md)

---

## Contributing

Contributions are welcome! Adding a new logo takes less than 5 minutes.

1. Add an entry to `packages/core/logos.json`
2. Add the SVG file to the correct folder in `packages/core/svgs/`
3. Run `pnpm test` to make sure everything passes
4. Open a pull request

Read the full [Contributing Guide →](./CONTRIBUTING.md)



## License

MIT © [aloahmilton](https://github.com/aloahmilton)



<div align="center">

Made  by [@aloahmilton](https://github.com/aloahmilton)

</div>
 


