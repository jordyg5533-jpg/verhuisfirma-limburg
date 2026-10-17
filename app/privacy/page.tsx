import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Kruimels } from "@/components/Blokken";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Welke gegevens Verhuisfirma Limburg verzamelt via het offerteformulier en wat ermee gebeurt.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  const u = site.uitgever;
  return (
    <section className="sectie">
      <div className="wrap">
        <Kruimels pad={[{ naam: "Privacy" }]} />
        <h1 className="mt-6 !text-4xl sm:!text-5xl">Privacyverklaring</h1>
        <div className="lees mt-6">
          <p>Laatst bijgewerkt op {site.nagekekenOp}.</p>

          <h2 className="mt-10">Wie is verantwoordelijk?</h2>
          <p className="mt-3">
            {u.naam
              ? `${u.naam}${u.ondernemingsnummer ? ` (${u.ondernemingsnummer})` : ""}${u.adres ? `, ${u.adres}` : ""} is verantwoordelijk voor de verwerking van je gegevens.`
              : `De uitgever van ${site.naam} is verantwoordelijk voor de verwerking van je gegevens.`}
            {u.email ? ` Contact: ${u.email}.` : ""}
          </p>

          <h2 className="mt-10">Welke gegevens verzamelen we?</h2>
          <p className="mt-3">
            Alleen wat je zelf invult in het offerteformulier: je naam, telefoonnummer en, als je die opgeeft, je
            e-mailadres, de gemeenten van vertrek en aankomst, de gewenste dienst en periode, en je bericht.
          </p>

          <h2 className="mt-10">Waarvoor gebruiken we ze?</h2>
          <p className="mt-3">
            Om je aanvraag te bezorgen aan een verhuisfirma die je een offerte kan maken. Dat doen we op basis
            van je toestemming, die je geeft door het vakje in het formulier aan te vinken. We gebruiken je
            gegevens niet voor reclame en verkopen ze niet door aan andere partijen.
          </p>

          <h2 className="mt-10">Wie ontvangt je gegevens?</h2>
          <p className="mt-3">
            De verhuisfirma die je offerte maakt, en de dienst Formspree die het formulier technisch verwerkt en
            naar ons doormailt.
          </p>

          <h2 className="mt-10">Hoe lang bewaren we ze?</h2>
          <p className="mt-3">Niet langer dan nodig om je aanvraag af te handelen, en maximaal 12 maanden.</p>

          <h2 className="mt-10">Je rechten</h2>
          <p className="mt-3">
            Je mag je gegevens inkijken, laten verbeteren of laten wissen, en je toestemming op elk moment
            intrekken. Neem daarvoor contact met ons op. Je kan ook klacht indienen bij de
            Gegevensbeschermingsautoriteit.
          </p>

          <h2 className="mt-10">Cookies</h2>
          <p className="mt-3">Deze site plaatst geen trackingcookies.</p>
        </div>
      </div>
    </section>
  );
}
