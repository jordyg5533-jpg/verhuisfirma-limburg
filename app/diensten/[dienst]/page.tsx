import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { diensten, getDienst } from "@/lib/diensten";
import { gemeenten } from "@/lib/gemeenten";
import { LeadForm } from "@/components/LeadForm";
import { Faq, JsonLd, Kruimels, PrijsTabelBlok, SectieBlok } from "@/components/Blokken";
import { DienstIcoon } from "@/components/DienstIcoon";
import { DozenStapel, HeroLift, Vrachtwagen } from "@/components/Illustraties";

export const dynamicParams = false;

export function generateStaticParams() {
  return diensten.map((d) => ({ dienst: d.slug }));
}

export function generateMetadata({ params }: { params: { dienst: string } }): Metadata {
  const d = getDienst(params.dienst);
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: `/diensten/${d.slug}` },
    openGraph: { title: d.metaTitle, description: d.metaDescription, url: `/diensten/${d.slug}`, type: "article" },
  };
}

export default function DienstPagina({ params }: { params: { dienst: string } }) {
  const d = getDienst(params.dienst);
  if (!d) notFound();
  const andere = diensten.filter((x) => x.slug !== d.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${d.naam} in Limburg`,
          serviceType: d.naam,
          description: d.metaDescription,
          url: `${site.url}/diensten/${d.slug}`,
          provider: { "@id": `${site.url}/#organisatie` },
          areaServed: { "@type": "AdministrativeArea", name: "Limburg, België" },
        }}
      />

      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap grid gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          <div>
            <Kruimels pad={[{ naam: "Diensten", href: "/diensten" }, { naam: d.naam }]} />
            <DienstIcoon naam={d.icoon} className="mt-7 h-11 w-11 text-signaal" />
            <h1 className="mt-4 !text-4xl sm:!text-5xl">{d.h1}</h1>
            <div className="lees mt-5 text-lg text-ink-700">
              {d.intro.map((a) => (
                <p key={a.slice(0, 30)}>{a}</p>
              ))}
            </div>
            <div className="mt-8 hidden lg:block">
              {d.icoon === "lift" ? (
                <HeroLift className="w-full max-w-sm" />
              ) : d.icoon === "truck" || d.icoon === "bus" || d.icoon === "office" || d.icoon === "grens" ? (
                <Vrachtwagen className="w-64" />
              ) : (
                <DozenStapel className="w-52" />
              )}
            </div>
          </div>
          <div>
            <LeadForm bron={`Dienstpagina ${d.naam}`} titel={`Offerte voor ${d.naam.toLowerCase()}`} dienst={d.naam} />
          </div>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>

      <div className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0">
          {d.prijzen?.map((t) => <PrijsTabelBlok key={t.id} tabel={t} />)}
          {d.secties.map((s) => (
            <SectieBlok key={s.titel} sectie={s} />
          ))}

          <section className="mt-12">
            <h2>{d.naam} per gemeente</h2>
            <p className="lees mt-3">
              De regels voor een verhuiswagen of lift op straat verschillen per gemeente. Kies je gemeente voor de
              termijn en de kost van het parkeerverbod.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {gemeenten.map((g) => (
                <li key={g.slug}>
                  <Link href={`/${g.slug}`} className="block rounded-md border border-kraft-200 bg-white px-3 py-2 text-[0.95rem] font-semibold text-ink no-underline hover:border-ink">
                    {g.naam}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="lees">
            <Faq vragen={d.faq} titel={`Veelgestelde vragen over ${d.naam.toLowerCase()}`} />
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Andere diensten" className="doos">
            <h2 className="!text-lg">Andere diensten</h2>
            <ul className="mt-3 space-y-2 text-[0.97rem]">
              {andere.map((x) => (
                <li key={x.slug}>
                  <Link href={`/diensten/${x.slug}`} className="link">{x.naam}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="doos-donker">
            <h2 className="!text-lg">Vrijblijvende offerte</h2>
            <p className="mt-2 text-[0.95rem] text-kraft-200">Van een verhuisfirma die in jouw gemeente werkt.</p>
            <a href="#offerte" className="knop-primair mt-4 w-full">Naar het formulier</a>
          </div>
        </aside>
      </div>
    </>
  );
}
