import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import { gemeenten, getGemeente, vindGemeenteBijNaam, isFusie } from "@/lib/gemeenten";
import { diensten } from "@/lib/diensten";
import { prijsVerhuisTotaal, prijsVerhuislift } from "@/lib/prijzen";
import { gemeenteFaq, introAlineas, metaDescription, metaTitle, parkeerRijen } from "@/lib/gemeenteTekst";
import { LeadForm } from "@/components/LeadForm";
import { Faq, JsonLd, Kruimels, PrijsTabelBlok } from "@/components/Blokken";

export const dynamicParams = false;

export function generateStaticParams() {
  return gemeenten.map((g) => ({ gemeente: g.slug }));
}

export function generateMetadata({ params }: { params: { gemeente: string } }): Metadata {
  const g = getGemeente(params.gemeente);
  if (!g) return {};
  return {
    title: metaTitle(g),
    description: metaDescription(g),
    alternates: { canonical: `/${g.slug}` },
    openGraph: { title: metaTitle(g), description: metaDescription(g), url: `/${g.slug}`, type: "article" },
  };
}

function hostnaam(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function GemeentePagina({ params }: { params: { gemeente: string } }) {
  const g = getGemeente(params.gemeente);
  if (!g) notFound();

  const intro = introAlineas(g);
  const faq = gemeenteFaq(g);
  const rijen = parkeerRijen(g);
  const p = g.parkeerverbod;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Verhuisfirma ${g.naam}`,
          serviceType: "Verhuisdienst",
          description: metaDescription(g),
          url: `${site.url}/${g.slug}`,
          provider: { "@id": `${site.url}/#organisatie` },
          areaServed: {
            "@type": "City",
            name: g.officieleNaam,
            containedInPlace: { "@type": "AdministrativeArea", name: "Limburg, België" },
          },
        }}
      />

      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap grid gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          <div>
            <Kruimels pad={[{ naam: "Gemeenten", href: "/gemeenten" }, { naam: g.naam }]} />
            <p className="etiket mt-6">Limburg · {g.postcodes.slice(0, 3).join(", ")}</p>
            <h1 className="mt-3 !text-4xl sm:!text-5xl">
              Verhuisfirma {g.naam}: prijzen en regels voor je verhuis
            </h1>
            <div className="lees mt-5 text-lg text-ink-700">
              {intro.map((a) => (
                <p key={a.slice(0, 30)}>{a}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-3">
              <li><a href="#parkeerverbod" className="knop-rand !py-2 text-sm">Parkeerverbod in {g.naam}</a></li>
              <li><a href="#prijzen" className="knop-rand !py-2 text-sm">Prijzen</a></li>
              <li><a href="#vragen" className="knop-rand !py-2 text-sm">Veelgestelde vragen</a></li>
            </ul>
          </div>
          <div>
            <LeadForm bron={`Gemeentepagina ${g.naam}`} titel={`Offerte voor je verhuis in ${g.naam}`} gemeente={g.naam} />
          </div>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>

      <div className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0">
          {/* Lokaal */}
          {(g.woonprofiel || g.bijzonderheden.length > 0) && (
            <section>
              <p className="etiket">Lokaal</p>
              <h2 className="mt-3">Verhuizen in {g.naam}: dit moet je weten</h2>
              {g.woonprofiel && (
                <div className="lees mt-4">
                  <p>{g.woonprofiel}</p>
                </div>
              )}
              {g.bijzonderheden.length > 0 && (
                <ul className="punten lees mt-6">
                  {g.bijzonderheden.map((b) => (
                    <li key={b.tekst.slice(0, 40)}>
                      {b.tekst}{" "}
                      {b.bron && (
                        <a href={b.bron} target="_blank" rel="nofollow noopener" className="whitespace-nowrap text-sm text-ink-500 underline hover:text-ink">
                          ({hostnaam(b.bron)})
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* Parkeerverbod */}
          <section id="parkeerverbod" className="mt-14 scroll-mt-24">
            <p className="etiket">Regels van {g.officieleNaam}</p>
            <h2 className="mt-3">Parkeerverbod aanvragen voor je verhuis in {g.naam}</h2>
            <p className="lees mt-4">
              Staat de verhuiswagen of de verhuislift op de stoep, een parkeerplaats of de rijbaan, dan vraag je
              dat aan bij {isFusie(g) ? `de fusiegemeente ${g.officieleNaam}` : `${g.officieleNaam}`}. Dit zijn de
              regels zoals de gemeente ze zelf publiceert.
            </p>
            <div className="tabel-wrap mt-6">
              <table className="tabel tabel-vast">
                <caption>Regels voor het parkeerverbod bij een verhuis in {g.naam}</caption>
                <tbody>
                  {rijen.map((r) => (
                    <tr key={r.label}>
                      <th scope="row" className="!bg-kraft-100 align-top !text-ink">{r.label}</th>
                      <td>{r.waarde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {p.url && (
              <p className="mt-5">
                <a href={p.url} target="_blank" rel="nofollow noopener" className="knop-donker">
                  Naar de aanvraag bij {g.officieleNaam} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </p>
            )}
            <p className="mt-4 text-sm text-ink-500">
              Nagekeken op {site.nagekekenOp}. Gemeenten passen hun tarieven en termijnen geregeld aan, dus
              controleer ze op de website van de gemeente voor je aanvraagt.
            </p>
          </section>

          {/* Prijzen */}
          <section id="prijzen" className="mt-14 scroll-mt-24">
            <p className="etiket">Prijzen</p>
            <PrijsTabelBlok tabel={{ ...prijsVerhuisTotaal, titel: `Wat kost een verhuisfirma in ${g.naam}?` }} />
            <p className="lees mt-4">
              Verhuisfirma's publiceren geen aparte tarieven voor {g.naam}. De bedragen hierboven zijn Belgische
              richtprijzen. Wat jij betaalt, hangt af van het volume, de verdieping en de rijtijd vanaf het depot
              van de verhuizer.
            </p>
            <PrijsTabelBlok tabel={{ ...prijsVerhuislift, titel: `Wat kost een verhuislift huren in ${g.naam}?` }} kop="h3" />
          </section>

          {/* Na de verhuis */}
          <section className="mt-14">
            <p className="etiket">Na de verhuis</p>
            <h2 className="mt-3">Adreswijziging en afval in {g.naam}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="doos">
                <h3>Adreswijziging</h3>
                <p className="mt-2 text-[0.97rem] text-ink-700">
                  Meld je nieuwe adres binnen 8 werkdagen bij de dienst Burgerzaken van {g.officieleNaam}. Daarna
                  komt de wijkagent langs.
                </p>
                {g.adreswijzigingUrl && (
                  <p className="mt-3">
                    <a href={g.adreswijzigingUrl} target="_blank" rel="nofollow noopener" className="link">
                      Adreswijziging melden in {g.naam}
                    </a>
                  </p>
                )}
              </div>
              <div className="doos">
                <h3>Recyclagepark en grofvuil</h3>
                <p className="mt-2 text-[0.97rem] text-ink-700">
                  {g.recyclagepark?.naam ? (
                    <>
                      {g.recyclagepark.naam}
                      {g.recyclagepark.adres ? `, ${g.recyclagepark.adres}` : ""}.{" "}
                    </>
                  ) : null}
                  Grofvuil aan huis laten ophalen kost in Limburg € 30 tot 2 m³.
                </p>
                <p className="mt-3">
                  {g.recyclagepark?.url ? (
                    <a href={g.recyclagepark.url} target="_blank" rel="nofollow noopener" className="link">
                      Info over het recyclagepark
                    </a>
                  ) : (
                    <Link href="/kennis/grofvuil-en-opruimen-bij-verhuis" className="link">Zo werkt grofvuil in Limburg</Link>
                  )}
                </p>
              </div>
            </div>
          </section>

          <div id="vragen" className="lees scroll-mt-24">
            <Faq vragen={faq} titel={`Veelgestelde vragen over verhuizen in ${g.naam}`} />
          </div>

          {g.bronnen.length > 0 && (
            <section className="mt-12">
              <h2 className="!text-xl">Bronnen voor {g.naam}</h2>
              <ul className="mt-3 space-y-1 text-sm text-ink-500">
                {g.bronnen.map((b) => (
                  <li key={b} className="truncate">
                    <a href={b} target="_blank" rel="nofollow noopener" className="underline hover:text-ink">{b}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label={`Diensten in ${g.naam}`} className="doos">
            <h2 className="!text-lg">Diensten in {g.naam}</h2>
            <ul className="mt-3 space-y-2 text-[0.97rem]">
              {diensten.map((d) => (
                <li key={d.slug}>
                  <Link href={`/diensten/${d.slug}`} className="link">{d.naam}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {g.buurgemeenten.length > 0 && (
            <nav aria-label="Buurgemeenten" className="doos">
              <h2 className="!text-lg">Buurgemeenten van {g.naam}</h2>
              <ul className="mt-3 space-y-2 text-[0.97rem]">
                {g.buurgemeenten.map((b) => {
                  const buur = vindGemeenteBijNaam(b);
                  return (
                    <li key={b}>
                      {buur ? (
                        <Link href={`/${buur.slug}`} className="link">Verhuisfirma {buur.naam}</Link>
                      ) : (
                        <span className="text-ink-700">{b}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          <div className="doos-donker">
            <h2 className="!text-lg">Offerte voor {g.naam}</h2>
            <p className="mt-2 text-[0.95rem] text-kraft-200">Gratis en vrijblijvend, van een verhuisfirma die in {g.naam} werkt.</p>
            <a href="#offerte" className="knop-primair mt-4 w-full">Naar het formulier</a>
          </div>
        </aside>
      </div>
    </>
  );
}
