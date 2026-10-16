import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { diensten } from "@/lib/diensten";
import { CtaBand, Kruimels } from "@/components/Blokken";
import { DienstIcoon } from "@/components/DienstIcoon";

export const metadata: Metadata = {
  title: "Verhuisdiensten in Limburg: van verhuislift tot opslag",
  description:
    "Alle verhuisdiensten in Limburg op een rij: particuliere verhuis, verhuislift huren, verhuiswagen, opslag, piano, bedrijfsverhuizing en meer, met richtprijzen.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenIndex() {
  return (
    <>
      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap py-10 lg:py-14">
          <Kruimels pad={[{ naam: "Diensten" }]} />
          <h1 className="mt-6 !text-4xl sm:!text-5xl">Verhuisdiensten in Limburg</h1>
          <p className="lees mt-4 text-lg text-ink-700">
            Van een volledige verhuis tot alleen een lift voor die ene zetel. Bij elke dienst lees je hoe het
            werkt, wat het kost en waar je op let.
          </p>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>
      <section className="sectie">
        <div className="wrap">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((d) => (
              <li key={d.slug}>
                <Link href={`/diensten/${d.slug}`} className="doos group flex h-full flex-col no-underline hover:border-ink">
                  <DienstIcoon naam={d.icoon} className="h-9 w-9 text-signaal" />
                  <h2 className="mt-4 !text-xl">{d.naam}</h2>
                  <p className="mt-2 flex-1 text-[0.97rem] text-ink-700">{d.kort}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink group-hover:text-signaal-600">
                    Lees meer <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand titel="Weet je al wat je nodig hebt?" tekst="Vraag een vrijblijvende offerte aan bij een verhuisfirma uit jouw streek." />
    </>
  );
}
