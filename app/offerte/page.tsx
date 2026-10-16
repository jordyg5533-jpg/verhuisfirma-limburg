import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Kruimels } from "@/components/Blokken";
import { Vrachtwagen } from "@/components/Illustraties";

export const metadata: Metadata = {
  title: "Offerte verhuisfirma Limburg aanvragen: gratis",
  description:
    "Vraag gratis en vrijblijvend een offerte aan voor je verhuis in Limburg. Alleen je naam en telefoonnummer zijn nodig.",
  alternates: { canonical: "/offerte" },
};

export default function Offerte() {
  return (
    <section className="bg-kraft-100">
      <div className="wrap grid gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div>
          <Kruimels pad={[{ naam: "Offerte aanvragen" }]} />
          <h1 className="mt-6 !text-4xl sm:!text-5xl">Offerte voor je verhuis in Limburg</h1>
          <div className="lees mt-5 text-lg text-ink-700">
            <p>
              Vul het formulier in. Wij bezorgen je aanvraag aan een verhuisfirma die in jouw gemeente werkt, en
              die neemt zelf contact met je op voor een plaatsbezoek of enkele vragen.
            </p>
          </div>
          <ul className="punten mt-6 text-ink-700">
            <li>Gratis en vrijblijvend.</li>
            <li>Alleen naam en telefoon zijn verplicht.</li>
            <li>Je gegevens gaan enkel naar de verhuisfirma die je offerte maakt.</li>
          </ul>
          <Vrachtwagen className="mt-10 hidden w-64 lg:block" />
        </div>
        <LeadForm bron="Offertepagina" />
      </div>
    </section>
  );
}
