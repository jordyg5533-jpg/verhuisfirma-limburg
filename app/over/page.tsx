import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Kruimels } from "@/components/Blokken";

export const metadata: Metadata = {
  title: "Over Verhuisfirma Limburg: wie zit achter deze site?",
  description:
    "Verhuisfirma Limburg is een gids en aanvraagsite, geen verhuisfirma. Lees hoe de site werkt, waar de prijzen vandaan komen en wat er met je aanvraag gebeurt.",
  alternates: { canonical: "/over" },
};

export default function Over() {
  const u = site.uitgever;
  return (
    <section className="sectie">
      <div className="wrap">
        <Kruimels pad={[{ naam: "Over deze site" }]} />
        <h1 className="mt-6 !text-4xl sm:!text-5xl">Over {site.naam}</h1>
        <div className="lees mt-6">
          <p>
            {site.naam} is een gids en aanvraagsite over verhuizen in Belgisch Limburg. Wij zijn zelf geen
            verhuisfirma en voeren geen verhuizingen uit.
          </p>
          <h2 className="mt-10">Wat gebeurt er met je aanvraag?</h2>
          <p className="mt-3">
            Als je het offerteformulier invult, bezorgen wij je gegevens aan een verhuisfirma die in jouw
            gemeente werkt. Die firma neemt zelf contact met je op en maakt je offerte. Je bent tot niets
            verplicht.
          </p>
          <p>
            Deze site kan een vergoeding krijgen van de verhuisfirma die je aanvraag ontvangt. Voor jou blijft
            de aanvraag gratis.
          </p>
          <h2 className="mt-10">Waar komen de prijzen vandaan?</h2>
          <p className="mt-3">
            Alle bedragen zijn richtprijzen uit openbare bronnen: prijslijsten van verhuisfirma's,
            vergelijkingssites en websites van gemeenten en Limburg.net. Bij elke tabel staat de bron. Het zijn
            geen offertes en geen prijzen van één bepaalde firma.
          </p>
          <h2 className="mt-10">Waar komen de gemeentegegevens vandaan?</h2>
          <p className="mt-3">
            De regels voor het parkeerverbod, de adreswijziging en het recyclagepark komen van de website van
            elke gemeente. We hebben ze nagekeken op {site.nagekekenOp}. Gemeenten passen hun tarieven geregeld
            aan, dus controleer ze altijd op de website van je gemeente voor je een aanvraag doet. Zie je een
            fout? Laat het ons weten.
          </p>
          {(u.naam || u.email) && (
            <>
              <h2 className="mt-10">Uitgever</h2>
              <p className="mt-3">
                {u.naam}
                {u.ondernemingsnummer ? `, ${u.ondernemingsnummer}` : ""}
                {u.adres ? `, ${u.adres}` : ""}
                {u.email ? `. Contact: ${u.email}` : ""}
              </p>
            </>
          )}
          <p className="mt-10">
            <Link href="/offerte" className="knop-primair">Offerte aanvragen</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
