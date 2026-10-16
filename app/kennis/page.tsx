import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { artikels } from "@/lib/kennis";
import { CtaBand, Kruimels } from "@/components/Blokken";

export const metadata: Metadata = {
  title: "Verhuisgids Limburg: prijzen, parkeerverbod en checklist",
  description:
    "Praktische gidsen over verhuizen in Limburg en België: wat een verhuisfirma kost, het parkeerverbod per gemeente, je adreswijziging en een volledige checklist.",
  alternates: { canonical: "/kennis" },
};

export default function KennisIndex() {
  return (
    <>
      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap py-10 lg:py-14">
          <Kruimels pad={[{ naam: "Verhuisgids" }]} />
          <h1 className="mt-6 !text-4xl sm:!text-5xl">Verhuisgids voor Limburg</h1>
          <p className="lees mt-4 text-lg text-ink-700">
            Korte, nagekeken antwoorden op de vragen die bij elke verhuis terugkomen. Elke gids vermeldt zijn
            bronnen.
          </p>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>
      <section className="sectie">
        <div className="wrap">
          <ul className="grid gap-5 md:grid-cols-2">
            {artikels.map((a) => (
              <li key={a.slug}>
                <Link href={`/kennis/${a.slug}`} className="doos group flex h-full flex-col no-underline hover:border-ink">
                  <h2 className="!text-xl group-hover:text-signaal-600">{a.titel}</h2>
                  <p className="mt-2 flex-1 text-[0.97rem] text-ink-700">{a.kort}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink">
                    Lees de gids <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand titel="Liever meteen een prijs op maat?" tekst="Vraag een vrijblijvende offerte aan bij een verhuisfirma uit jouw streek." />
    </>
  );
}
