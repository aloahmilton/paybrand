import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/paybrand-logo.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

const regions = [
  { name: "Africa", count: 38, examples: "M-Pesa, MTN MoMo, Airtel Money, GTBank, Equity, Standard Bank" },
  { name: "Europe", count: 22, examples: "Revolut, N26, HSBC, BNP Paribas, ING, Santander" },
  { name: "Americas", count: 14, examples: "Chase, Bank of America, Nubank, Mercado Pago, Itaú" },
  { name: "Asia", count: 12, examples: "Paytm, GCash, Alipay, WeChat Pay, DBS, HDFC" },
  { name: "Cards", count: 10, examples: "Visa, Mastercard, Amex, UnionPay, JCB, Discover" },
];

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border bg-muted/50 p-4 text-sm">
      <code className="font-mono text-foreground">{code}</code>
    </pre>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <img src={logo} alt="paybrand" className="h-8 w-8" />
            <span>paybrand</span>
          </a>
          <nav className="flex items-center gap-2 text-sm">
            <a href="#usage" className="hidden px-3 py-1.5 text-muted-foreground hover:text-foreground sm:inline">Usage</a>
            <a href="#coverage" className="hidden px-3 py-1.5 text-muted-foreground hover:text-foreground sm:inline">Coverage</a>
            <a href="#contribute" className="hidden px-3 py-1.5 text-muted-foreground hover:text-foreground sm:inline">Contribute</a>
            <Button asChild size="sm" variant="outline">
              <a href="https://github.com/aloahmilton/paybrand" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <img src={logo} alt="paybrand logo" className="mx-auto h-32 w-32" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          React payment logo library
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Tree-shakable React components for banks, mobile money providers, and card networks across
          Africa, Europe, Asia and the Americas. Open source, MIT licensed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#usage">Get started</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://www.npmjs.com/package/paybrand" target="_blank" rel="noreferrer">
              npm install paybrand
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="https://github.com/sponsors/aloahmilton" target="_blank" rel="noreferrer">
              ❤ Sponsor
            </a>
          </Button>
        </div>
      </section>

      {/* Usage */}
      <section id="usage" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold">Usage</h2>
          <p className="mt-2 text-muted-foreground">Install and import only what you need.</p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Install</h3>
              <CodeBlock code={`npm install paybrand\n# or\npnpm add paybrand`} />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Use a component</h3>
              <CodeBlock
                code={`import { PayLogo, BankLogo } from 'paybrand';\n\nexport function Checkout() {\n  return (\n    <div className="flex gap-3">\n      <PayLogo id="visa" size={48} />\n      <PayLogo id="mastercard" size={48} />\n      <BankLogo id="mpesa" size={48} />\n      <BankLogo id="gtbank" size={48} />\n    </div>\n  );\n}`}
              />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Query helpers</h3>
              <CodeBlock
                code={`import { getByCountry, searchLogos } from 'paybrand';\n\nconst kenyanBanks = getByCountry('KE');\nconst results = searchLogos('mobile money');`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Coverage</h2>
          <p className="mt-2 text-muted-foreground">
            96+ logos across 5 categories. Real SVGs sourced from open source projects (simple-icons, gilbarbara/logos)
            and re-extracted on every release.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <Card key={r.name}>
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle>{r.name}</CardTitle>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {r.count}
                  </span>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{r.examples}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section id="contribute" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold">Contribute or support</h2>
          <p className="mt-2 text-muted-foreground">
            Missing a bank? Open a PR with the SVG and an entry in <code className="font-mono text-xs">logos.json</code>,
            or sponsor the project to fund ongoing maintenance.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Button asChild variant="outline">
              <a href="https://github.com/aloahmilton/paybrand" target="_blank" rel="noreferrer">
                ⭐ Star on GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/aloahmilton/paybrand/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                📝 Contribution guide
              </a>
            </Button>
            <Button asChild>
              <a href="https://github.com/sponsors/aloahmilton" target="_blank" rel="noreferrer">
                ❤ Sponsor
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>
          Built by{" "}
          <a
            href="https://github.com/aloahmilton"
            className="font-medium text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @aloahmilton
          </a>{" "}
          · MIT License
        </p>
      </footer>
    </div>
  );
}
