import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { artikels, getArtikel } from "@/lib/kennis";
import { gemeenten } from "@/lib/gemeenten";
import { Bronnen, CtaBand, Faq, JsonLd, Kruimels, PrijsTabelBlok, SectieBlok } from "@/components/Blokken";

export const dynamicParams = false;

export function generateStaticParams() {
  return artikels.map((a) => ({ artikel: a.slug }));
}

export function generateMetadata({ params }: { params: { artikel: string } }): Metadata {
  const a = getArtikel(params.artikel);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/kennis/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url: `/kennis/${a.slug}`, type: "article" },
  };
}

const NAVRAGEN = "Niet vermeld, navragen";

export default function ArtikelPagina({ params }: { params: { artikel: string } }) {
  const a = getArtikel(params.artikel);
  if (!a) notFound();
  const andere = artikels.filter((x) => x.slug !== a.slug).slice(0, 5);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.titel,
          description: a.metaDescription,
          inLanguage: "nl-BE",
          datePublished: site.nagekekenIso,
          dateModified: site.nagekekenIso,
          mainEntityOfPage: `${site.url}/kennis/${a.slug}`,
          author: { "@id": `${site.url}/#organisatie` },
          publisher: { "@id": `${site.url}/#organisatie` },
        }}
      />

      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap py-10 lg:py-14">
          <Kruimels pad={[{ naam: "Verhuisgids", href: "/kennis" }, { naam: a.titel.split(":")[0] }]} />
          <p className="etiket mt-6">Verhuisgids · nagekeken op {site.nagekekenOp}</p>
          <h1 className="mt-3 max-w-4xl !text-4xl sm:!text-5xl">{a.titel}</h1>
          <div className="lees mt-5 text-lg text-ink-700">
            {a.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>

      <div className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0">
          {a.prijzen?.map((t) => <PrijsTabelBlok key={t.id} tabel={t} />)}

          {a.toonParkeerTabel && (
            <section className="mt-2">
              <h2>Termijn en kostprijs per gemeente</h2>
              <p className="lees mt-3">
                De gegevens komen van de websites van de gemeenten zelf. Klik op een gemeente voor alle details en
                de link naar de aanvraag.
              </p>
              <div className="tabel-wrap mt-5">
                <table className="tabel min-w-[36rem]">
                  <caption>Parkeerverbod bij een verhuis: termijn en kostprijs in 24 Limburgse gemeenten</caption>
                  <thead>
                    <tr>
                      <th scope="col">Gemeente</th>
                      <th scope="col">Hoe lang vooraf</th>
                      <th scope="col">Kostprijs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gemeenten.map((g) => (
                      <tr key={g.slug}>
                        <th scope="row" className="!bg-transparent !text-ink align-top">
                          <Link href={`/${g.slug}#parkeerverbod`} className="link">{g.naam}</Link>
                        </th>
                        <td>{g.parkeerverbod.termijn ?? NAVRAGEN}</td>
                        <td>{g.parkeerverbod.kostprijs ?? NAVRAGEN}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-ink-500">
                Nagekeken op {site.nagekekenOp}. De bron per gemeente staat op de gemeentepagina.
              </p>
            </section>
          )}

          {a.secties.map((s) => (
            <SectieBlok key={s.titel} sectie={s} />
          ))}

          <div className="lees">
            <Faq vragen={a.faq} />
          </div>

          <section className="mt-10">
            <h2 className="!text-xl">Bronnen</h2>
            <Bronnen bronnen={a.bronnen} titel="Geraadpleegd" />
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Meer uit de verhuisgids" className="doos">
            <h2 className="!text-lg">Meer uit de verhuisgids</h2>
            <ul className="mt-3 space-y-2.5 text-[0.97rem]">
              {andere.map((x) => (
                <li key={x.slug}>
                  <Link href={`/kennis/${x.slug}`} className="link">{x.titel.split(":")[0]}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="doos-donker">
            <h2 className="!text-lg">Offerte nodig?</h2>
            <p className="mt-2 text-[0.95rem] text-kraft-200">Gratis en vrijblijvend, van een verhuisfirma uit jouw streek.</p>
            <Link href="/offerte" className="knop-primair mt-4 w-full">Offerte aanvragen</Link>
          </div>
        </aside>
      </div>

      <CtaBand titel="Laat het zware werk aan een verhuisfirma" tekst="Vul het formulier in en vergelijk de offerte met de richtprijzen op deze site." />
    </>
  );
}
