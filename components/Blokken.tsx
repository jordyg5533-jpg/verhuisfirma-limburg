import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PrijsTabel, Bron } from "@/lib/prijzen";
import type { Sectie, Vraag } from "@/lib/diensten";
import { site } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export type Kruimel = { naam: string; href?: string };

export function Kruimels({ pad }: { pad: Kruimel[] }) {
  const items = [{ naam: "Home", href: "/" }, ...pad];
  return (
    <>
      <nav aria-label="Kruimelpad" className="text-sm text-ink-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((k, i) => (
            <li key={k.naam} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {k.href && i < items.length - 1 ? (
                <Link href={k.href} className="text-ink-500 hover:text-ink">{k.naam}</Link>
              ) : (
                <span aria-current="page" className="font-semibold text-ink">{k.naam}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: k.naam,
            ...(k.href ? { item: `${site.url}${k.href === "/" ? "" : k.href}` } : {}),
          })),
        }}
      />
    </>
  );
}

export function Bronnen({ bronnen, titel = "Bronnen" }: { bronnen: Bron[]; titel?: string }) {
  if (!bronnen.length) return null;
  return (
    <p className="mt-3 text-sm text-ink-500">
      <span className="font-semibold">{titel}:</span>{" "}
      {bronnen.map((b, i) => (
        <span key={b.url}>
          <a href={b.url} rel="nofollow noopener" target="_blank" className="underline hover:text-ink">{b.naam}</a>
          {i < bronnen.length - 1 ? ", " : ""}
        </span>
      ))}
      . Nagekeken op {site.nagekekenOp}.
    </p>
  );
}

export function PrijsTabelBlok({ tabel, kop = "h2" }: { tabel: PrijsTabel; kop?: "h2" | "h3" }) {
  const Kop = kop;
  return (
    <section aria-labelledby={`prijs-${tabel.id}`} className="mt-8">
      <Kop id={`prijs-${tabel.id}`}>{tabel.titel}</Kop>
      <div className="tabel-wrap mt-4">
        <table className="tabel">
          <caption>{tabel.titel}</caption>
          <thead>
            <tr>
              <th scope="col">Wat</th>
              <th scope="col">Richtprijs</th>
            </tr>
          </thead>
          <tbody>
            {tabel.rijen.map((r) => (
              <tr key={r.omschrijving}>
                <td>
                  <span className="font-semibold">{r.omschrijving}</span>
                  {r.toelichting && <span className="block text-sm text-ink-500">{r.toelichting}</span>}
                </td>
                <td>
                  <span className="prijs">{r.prijs}</span>
                  {r.btw && <span className="block text-sm text-ink-500">{r.btw}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tabel.voetnoot && <p className="mt-3 text-[0.95rem] text-ink-700">{tabel.voetnoot}</p>}
      <Bronnen bronnen={tabel.bronnen} />
    </section>
  );
}

export function SectieBlok({ sectie }: { sectie: Sectie }) {
  return (
    <section className="mt-10">
      <h2>{sectie.titel}</h2>
      {sectie.alineas && (
        <div className="lees mt-4">
          {sectie.alineas.map((a) => (
            <p key={a.slice(0, 40)}>{a}</p>
          ))}
        </div>
      )}
      {sectie.stappen && (
        <ol className="stappen lees mt-5">
          {sectie.stappen.map((s) => (
            <li key={s.slice(0, 40)}>{s}</li>
          ))}
        </ol>
      )}
      {sectie.lijst && (
        <ul className="punten lees mt-5">
          {sectie.lijst.map((s) => (
            <li key={s.slice(0, 40)}>{s}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function Faq({ vragen, titel = "Veelgestelde vragen" }: { vragen: Vraag[]; titel?: string }) {
  if (!vragen.length) return null;
  return (
    <section className="mt-12" aria-labelledby="faq-titel">
      <h2 id="faq-titel">{titel}</h2>
      <div className="mt-4 border-t border-kraft-200">
        {vragen.map((v) => (
          <details key={v.vraag} className="vraag">
            <summary><h3 className="!text-lg">{v.vraag}</h3></summary>
            <div><p>{v.antwoord}</p></div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: vragen.map((v) => ({
            "@type": "Question",
            name: v.vraag,
            acceptedAnswer: { "@type": "Answer", text: v.antwoord },
          })),
        }}
      />
    </section>
  );
}

export function CtaBand({ titel, tekst }: { titel: string; tekst: string }) {
  return (
    <section className="sectie">
      <div className="wrap">
        <div className="doos-donker flex flex-col items-start gap-5 !p-8 sm:flex-row sm:items-center sm:justify-between sm:!p-10">
          <div className="max-w-xl">
            <h2 className="!text-white">{titel}</h2>
            <p className="mt-2 text-kraft-200">{tekst}</p>
          </div>
          <Link href="/offerte" className="knop-primair shrink-0 text-lg">Offerte aanvragen</Link>
        </div>
      </div>
    </section>
  );
}

/** Vaste balk onderaan op mobiel. */
export function MobieleBalk() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-kraft-200 bg-white p-3 md:hidden">
      <div className="flex gap-2">
        {site.telefoon && (
          <a href={`tel:${site.telefoonLink || site.telefoon}`} className="knop-rand flex-1 !py-2.5">Bel ons</a>
        )}
        <Link href="/offerte" className="knop-primair flex-1 !py-2.5">Gratis offerte aanvragen</Link>
      </div>
    </div>
  );
}
