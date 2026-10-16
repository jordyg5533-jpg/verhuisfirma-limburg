import Link from "next/link";
import { ArrowRight, ShieldCheck, Receipt, ParkingSquare } from "lucide-react";
import { site } from "@/lib/site";
import { diensten } from "@/lib/diensten";
import { gemeenten } from "@/lib/gemeenten";
import { artikels } from "@/lib/kennis";
import { prijsVerhuisTotaal, prijsVerhuislift } from "@/lib/prijzen";
import { eersteZin } from "@/lib/gemeenteTekst";
import { LeadForm } from "@/components/LeadForm";
import { CtaBand, Faq, JsonLd, PrijsTabelBlok } from "@/components/Blokken";
import { DienstIcoon } from "@/components/DienstIcoon";
import { HeroLift } from "@/components/Illustraties";
import type { Vraag } from "@/lib/diensten";

const faq: Vraag[] = [
  {
    vraag: "Wat kost een verhuisfirma in Limburg?",
    antwoord:
      "Reken op € 500 tot € 900 voor een studio of appartement, € 800 tot € 1.400 voor een eengezinswoning en € 1.400 tot € 2.400 voor een grote woning. Dat zijn richtprijzen van Belgische vergelijkers. Een ploeg van twee verhuizers met vrachtwagen kost € 100 tot € 120 per uur exclusief btw.",
  },
  {
    vraag: "Wat kost een verhuislift huren in Limburg?",
    antwoord:
      "Een ladderlift met één bediener kost € 50 tot € 90 per uur. Zonder bediener huur je er een vanaf ongeveer € 90 tot € 150 per dag inclusief btw. Reken op een minimum van 1 tot 2 uur en een verplaatsingskost.",
  },
  {
    vraag: "Heb ik een parkeerverbod nodig voor mijn verhuis?",
    antwoord:
      "Ja, zodra de verhuiswagen of de lift op de openbare weg staat. De aanvraag doe je bij de gemeente. De termijn verschilt sterk: 2 werkdagen in Diepenbeek, 5 werkdagen in Hasselt, 10 werkdagen in Genk en zes weken in Kinrooi.",
  },
  {
    vraag: "Is deze site zelf een verhuisfirma?",
    antwoord:
      "Nee. Verhuisfirma Limburg is een gids en aanvraagsite. Wij voeren zelf geen verhuizingen uit. Je offerteaanvraag bezorgen we aan een verhuisfirma die in jouw gemeente werkt, en die neemt zelf contact met je op.",
  },
  {
    vraag: "Hoe herken ik een betrouwbare verhuisfirma?",
    antwoord:
      "Vraag naar het label BKV Erkend Verhuizer van de Belgische Kamer der Verhuizers, vraag een prijs inclusief 21% btw en laat noteren wanneer de klok start. Vraag ook tot welk bedrag je inboedel verzekerd is: standaard is de aansprakelijkheid beperkt tot € 125 per m³.",
  },
  {
    vraag: "Binnen hoeveel dagen meld ik mijn nieuwe adres?",
    antwoord:
      "Binnen 8 werkdagen na je verhuis, bij de dienst Burgerzaken van je nieuwe gemeente. In de meeste gemeenten kan dat online.",
  },
];

export default function Home() {
  const top = gemeenten.slice(0, 8);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${site.url}/#organisatie`,
              name: site.naam,
              url: site.url,
              description: "Gids over verhuizen in Belgisch Limburg.",
              areaServed: { "@type": "AdministrativeArea", name: "Limburg, België" },
            },
            {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: site.url,
              name: site.naam,
              inLanguage: "nl-BE",
              publisher: { "@id": `${site.url}/#organisatie` },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="border-b border-kraft-200 bg-kraft-100">
        <div className="wrap grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="etiket">De verhuisgids voor Limburg</p>
            <h1 className="mt-4">
              Verhuisfirma in Limburg: prijzen, verhuislift en de regels van jouw gemeente
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-700">
              Een verhuis met een verhuisfirma kost in Limburg ruwweg € 500 tot € 2.400. Hier zie je waar dat
              bedrag vandaan komt, wat een verhuislift kost en wat je bij je gemeente moet aanvragen. Daarna
              vraag je in één minuut een vrijblijvende offerte aan.
            </p>
            <ul className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
              <li className="doos !p-4">
                <span className="prijs block text-2xl">€ 100 tot 120</span>
                <span className="text-sm text-ink-500">per uur voor 2 verhuizers met wagen, excl. btw</span>
              </li>
              <li className="doos !p-4">
                <span className="prijs block text-2xl">€ 50 tot 90</span>
                <span className="text-sm text-ink-500">per uur voor een verhuislift met bediener</span>
              </li>
              <li className="doos !p-4">
                <span className="prijs block text-2xl">24</span>
                <span className="text-sm text-ink-500">gemeenten met termijn en kost van het parkeerverbod</span>
              </li>
            </ul>
            <HeroLift className="mt-8 hidden w-full max-w-md lg:block" />
          </div>
          <div className="lg:pt-2">
            <LeadForm bron="Startpagina" />
          </div>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>

      {/* Prijzen */}
      <section className="sectie">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="etiket">Prijzen</p>
            <PrijsTabelBlok tabel={{ ...prijsVerhuisTotaal, titel: "Wat kost een verhuisfirma in Limburg?" }} />
            <p className="mt-5">
              <Link href="/kennis/wat-kost-een-verhuisfirma" className="link">
                Bekijk ook de uurtarieven en wat een verhuis duurder maakt
              </Link>
            </p>
          </div>
          <aside className="doos-donker self-start">
            <p className="etiket etiket-licht">Zo lees je een offerte</p>
            <h2 className="mt-3 !text-2xl">Drie dingen die de prijs bepalen</h2>
            <ol className="stappen mt-5 [&>li]:before:bg-signaal [&>li]:before:text-white">
              <li>
                <strong>Volume.</strong> Een studio is rond 25 m³, een eengezinswoning rond 50 m³.
              </li>
              <li>
                <strong>Uren.</strong> De klok start vaak bij vertrek uit het depot, met een minimum van 2 uur.
              </li>
              <li>
                <strong>Toegang.</strong> Verdieping, trap en draagafstand. Een verhuislift kost extra, maar spaart
                uren uit.
              </li>
            </ol>
          </aside>
        </div>
      </section>

      {/* Diensten */}
      <section className="sectie border-y border-kraft-200 bg-white">
        <div className="wrap">
          <p className="etiket">Diensten</p>
          <h2 className="mt-3">Waarvoor kan je een verhuisfirma in Limburg inschakelen?</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((d) => (
              <li key={d.slug}>
                <Link href={`/diensten/${d.slug}`} className="doos group flex h-full flex-col no-underline hover:border-ink">
                  <DienstIcoon naam={d.icoon} className="h-9 w-9 text-signaal" />
                  <h3 className="mt-4">{d.naam}</h3>
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

      {/* Verhuislift */}
      <section className="sectie">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="etiket">Verhuislift</p>
            <h2 className="mt-3">Verhuislift huren in Limburg</h2>
            <div className="lees mt-4">
              <p>
                Woon je op een verdieping zonder lift, of raakt de zetel niet door het trapgat? Dan gaat het via
                het raam. Een ladderlift reikt tot ongeveer de 6de tot 8ste verdieping en tilt 150 tot 350 kg per
                rit.
              </p>
              <p>
                Je huurt hem per uur met een bediener, of per dag zonder. Staat hij op de stoep of de straat, dan
                heb je een vergunning van de gemeente nodig.
              </p>
            </div>
            <Link href="/diensten/verhuislift-huren" className="knop-donker mt-6">
              Alles over een verhuislift huren
            </Link>
            <HeroLift className="mt-8 w-full max-w-sm lg:hidden" />
          </div>
          <div>
            <PrijsTabelBlok tabel={prijsVerhuislift} kop="h3" />
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="sectie bg-ink text-white">
        <div className="wrap">
          <p className="etiket etiket-licht">Zo werkt het</p>
          <h2 className="mt-3 !text-white">Van aanvraag tot offerte in drie stappen</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Jij vult het formulier in",
                d: "Naam, telefoon en van waar naar waar je verhuist. Meer hebben we niet nodig.",
              },
              {
                t: "Een verhuisfirma belt je op",
                d: "Wij bezorgen je aanvraag aan een verhuisfirma die in jouw gemeente werkt. Die plant een plaatsbezoek of stelt enkele vragen.",
              },
              {
                t: "Je krijgt een offerte",
                d: "Je vergelijkt ze met de richtprijzen op deze site en beslist zelf. Je zit nergens aan vast.",
              },
            ].map((s, i) => (
              <li key={s.t} className="rounded-lg border border-ink-500 p-6">
                <span className="font-display text-4xl font-extrabold text-signaal">0{i + 1}</span>
                <h3 className="mt-3 !text-white">{s.t}</h3>
                <p className="mt-2 text-kraft-200">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gemeenten */}
      <section className="sectie">
        <div className="wrap">
          <p className="etiket">Per gemeente</p>
          <h2 className="mt-3">Verhuizen in jouw gemeente: zo lang vooraf vraag je het parkeerverbod aan</h2>
          <p className="lees mt-4">
            Elke Limburgse gemeente heeft eigen regels voor een verhuiswagen of lift op straat. Dit zijn de
            termijnen van de acht gemeenten waar het vaakst naar een verhuisfirma gezocht wordt. De volledige tabel staat in de{" "}
            <Link href="/kennis/parkeerverbod-aanvragen-verhuis" className="link">gids over het parkeerverbod</Link>.
          </p>
          <div className="tabel-wrap mt-6">
            <table className="tabel">
              <caption>Termijn voor het parkeerverbod bij een verhuis, per gemeente</caption>
              <thead>
                <tr>
                  <th scope="col">Gemeente</th>
                  <th scope="col">Hoe lang vooraf aanvragen</th>
                </tr>
              </thead>
              <tbody>
                {top.map((g) => (
                  <tr key={g.slug}>
                    <td>
                      <Link href={`/${g.slug}`} className="link">Verhuisfirma {g.naam}</Link>
                    </td>
                    <td>{eersteZin(g.parkeerverbod.termijn, 170) ?? "Navragen bij de gemeente"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-10">Alle gemeenten</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {gemeenten.map((g) => (
              <li key={g.slug}>
                <Link href={`/${g.slug}`} className="block rounded-md border border-kraft-200 bg-white px-3.5 py-2.5 font-display text-[0.95rem] font-bold text-ink no-underline hover:border-ink">
                  {g.naam}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Waar let je op */}
      <section className="sectie border-y border-kraft-200 bg-white">
        <div className="wrap">
          <p className="etiket">Voor je tekent</p>
          <h2 className="mt-3">Waar let je op bij een verhuisfirma?</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            <li className="doos">
              <ShieldCheck className="h-8 w-8 text-signaal" aria-hidden="true" />
              <h3 className="mt-4">Erkenning en verzekering</h3>
              <p className="mt-2 text-[0.97rem] text-ink-700">
                Het label BKV Erkend Verhuizer staat voor firma's die wettelijk in orde zijn. De aansprakelijkheid
                is standaard beperkt tot € 125 per m³.{" "}
                <Link href="/kennis/erkende-verhuizer-bkv" className="link">Wat het label betekent</Link>
              </p>
            </li>
            <li className="doos">
              <Receipt className="h-8 w-8 text-signaal" aria-hidden="true" />
              <h3 className="mt-4">Prijs inclusief btw</h3>
              <p className="mt-2 text-[0.97rem] text-ink-700">
                Op een verhuis geldt 21% btw. Uurtarieven staan vaak exclusief btw op de website. Vraag de
                totaalprijs en wanneer de klok start.{" "}
                <Link href="/kennis/wat-kost-een-verhuisfirma" className="link">Zo is de prijs opgebouwd</Link>
              </p>
            </li>
            <li className="doos">
              <ParkingSquare className="h-8 w-8 text-signaal" aria-hidden="true" />
              <h3 className="mt-4">Parkeerverbod op tijd</h3>
              <p className="mt-2 text-[0.97rem] text-ink-700">
                Zonder vrije plaats voor de deur betaal je verhuizers om te wachten of ver te dragen. Spreek af wie
                de aanvraag doet.{" "}
                <Link href="/kennis/parkeerverbod-aanvragen-verhuis" className="link">Regels per gemeente</Link>
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Verhuisgids */}
      <section className="sectie">
        <div className="wrap">
          <p className="etiket">Verhuisgids</p>
          <h2 className="mt-3">Alles wat je rond je verhuis moet regelen</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-1 md:grid-cols-2">
            {artikels.map((a) => (
              <li key={a.slug} className="border-b border-kraft-200">
                <Link href={`/kennis/${a.slug}`} className="group flex items-start justify-between gap-4 py-4 no-underline">
                  <span>
                    <span className="block font-display text-lg font-bold text-ink group-hover:text-signaal-600">{a.titel}</span>
                    <span className="block text-[0.95rem] text-ink-500">{a.kort}</span>
                  </span>
                  <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 text-signaal" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-kraft-200 bg-white pb-4">
        <div className="wrap lees">
          <Faq vragen={faq} titel="Veelgestelde vragen over verhuizen in Limburg" />
        </div>
      </section>

      <CtaBand
        titel="Klaar om offertes te vergelijken?"
        tekst="Vul het formulier in en een verhuisfirma uit jouw streek neemt contact op. Gratis en vrijblijvend."
      />
    </>
  );
}
