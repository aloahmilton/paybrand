# Contributing

Thanks for helping make paybrand broader, cleaner, and more useful.

## How to add a new logo

1. Add the SVG file to the right folder under `packages/core/svgs/`.
2. Add a matching entry to `packages/core/logos.json` with the correct `id`, `name`, `category`, `region`, `country`, `aliases`, and `svgPath`.
3. Add the new `id` to the `PayLogoName` union in `packages/react/src/types.ts`.
4. Run the local checks and open a pull request with a short note about the logo source.

## SVG requirements

SVG files should use a `200x120` viewBox and must not include hardcoded `width` or `height` attributes. Keep paths clean, avoid embedded raster images, and prefer current brand artwork from official or open source references.

## How to run locally

Install dependencies from the repository root:

```sh
npm install
```

Build the React package:

```sh
npm run build --workspace=packages/react
```

Run the demo app:

```sh
npm run dev
```

## Pull request checklist

- The new logo is in the correct category folder.
- `packages/core/logos.json` includes the new logo metadata.
- `packages/react/src/types.ts` includes the new logo id.
- The package builds locally.
- The SVG has a `200x120` viewBox and no hardcoded dimensions.

Made with ❤️ by [@aloahmilton](https://github.com/aloahmilton)
