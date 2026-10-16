import type { Metadata } from "next";
import Link from "next/link";
import { gemeenten, formatInwoners } from "@/lib/gemeenten";
import { eersteZin } from "@/lib/gemeenteTekst";
import { CtaBand, Kruimels } from "@/components/Blokken";

export const metadata: Metadata = {
  title: "Verhuisfirma per gemeente in Limburg: 24 gemeenten",
  description:
    "Kies je gemeente in Limburg en bekijk de richtprijzen voor een verhuisfirma, de termijn voor het parkeerverbod en waar je je adreswijziging meldt.",
  alternates: { canonical: "/gemeenten" },
};

export default function GemeentenIndex() {
  return (
    <>
      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap py-10 lg:py-14">
          <Kruimels pad={[{ naam: "Gemeenten" }]} />
          <h1 className="mt-6 !text-4xl sm:!text-5xl">Verhuisfirma per gemeente in Limburg</h1>
          <p className="lees mt-4 text-lg text-ink-700">
            Elke gemeente heeft eigen regels voor een verhuiswagen op straat. Kies je gemeente voor de termijn,
            de kostprijs en de link naar de aanvraag.
          </p>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>
      <section className="sectie">
        <div className="wrap">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gemeenten.map((g) => (
              <li key={g.slug}>
                <Link href={`/${g.slug}`} className="doos flex h-full flex-col no-underline hover:border-ink">
                  <p className="etiket">{g.postcodes.slice(0, 2).join(", ")}{g.inwoners ? ` · ${formatInwoners(g.inwoners.aantal)} inwoners` : ""}</p>
                  <h2 className="mt-2 !text-xl">Verhuisfirma {g.naam}</h2>
                  <p className="mt-2 text-[0.95rem] text-ink-700">
                    <span className="font-semibold">Parkeerverbod:</span>{" "}
                    {eersteZin(g.parkeerverbod.termijn, 120) ?? "termijn navragen bij de gemeente"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="lees mt-8 text-ink-700">
            Staat je gemeente er niet bij? Vraag gerust een offerte aan: verhuisfirma's uit Limburg rijden naar
            de hele provincie.
          </p>
        </div>
      </section>
      <CtaBand titel="Verhuizen in Limburg?" tekst="Vraag een vrijblijvende offerte aan bij een verhuisfirma uit jouw streek." />
    </>
  );
}
