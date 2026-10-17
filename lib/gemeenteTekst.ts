import type { Gemeente } from "./gemeenten";
import { andereKernen, formatInwoners, isFusie, opsomming } from "./gemeenten";
import type { Vraag } from "./diensten";

const NIET_VERMELD = "Dat staat niet op de website van de gemeente. Vraag het na bij de dienst mobiliteit voor je je verhuisdatum vastlegt.";

/** Eerste zin van een langere tekst, voor compacte weergave. */
export function eersteZin(tekst: string | null, max = 150): string | null {
  if (!tekst) return null;
  const zin = tekst.split(/(?<=[.;])\s+/)[0].replace(/[;.]$/, "");
  return zin.length > max ? `${zin.slice(0, max - 1).trimEnd()}…` : zin;
}

export function metaTitle(g: Gemeente): string {
  const metJaar = `Verhuisfirma ${g.naam}: prijzen en parkeerverbod (2026)`;
  return metJaar.length <= 60 ? metJaar : `Verhuisfirma ${g.naam}: prijzen en parkeerverbod`;
}

/** Korte termijn voor in de meta description: eerste zin, zonder haakjes, niet afgebroken. */
function termijnKort(tekst: string | null): string | null {
  const zin = eersteZin(tekst, 999);
  if (!zin) return null;
  const schoon = zin.replace(/\s*\([^)]*\)/g, "").replace(/[,:;]\s*$/, "").trim();
  if (!schoon || schoon.length > 60) return null;
  return `${schoon.charAt(0).toLowerCase()}${schoon.slice(1)}`;
}

export function metaDescription(g: Gemeente): string {
  const basis = `Verhuizen in ${g.naam}? Richtprijzen voor een verhuisfirma en verhuislift`;
  const termijn = termijnKort(g.parkeerverbod.termijn);
  const met = termijn ? `${basis}, plus de regels voor het parkeerverbod: ${termijn}.` : null;
  if (met && met.length <= 155) return met;
  return `${basis}, plus de regels van de gemeente voor het parkeerverbod.`;
}

export function introAlineas(g: Gemeente): string[] {
  const kernen = andereKernen(g);
  const delen: string[] = [];

  let eerste = `Verhuis je naar, uit of binnen ${g.naam}? Op deze pagina vind je richtprijzen voor een verhuisfirma en een verhuislift, en de regels die ${g.naam} zelf oplegt voor een verhuiswagen op straat.`;
  delen.push(eerste);

  const feiten: string[] = [];
  if (isFusie(g)) {
    feiten.push(`${g.naam} maakt sinds 2025 deel uit van de fusiegemeente ${g.officieleNaam}`);
  }
  if (g.inwoners) {
    feiten.push(
      `${isFusie(g) ? "die" : g.naam} telt ${formatInwoners(g.inwoners.aantal)} inwoners (${g.inwoners.jaar})`
    );
  }
  let tweede = feiten.length ? `${feiten.join(", ")}.` : "";
  if (tweede) tweede = tweede.charAt(0).toUpperCase() + tweede.slice(1);
  if (kernen.length) {
    tweede += ` Verhuisfirma's die hier werken, rijden ook naar ${opsomming(kernen, 8)}${kernen.length > 8 ? " en de andere kernen" : ""}.`;
  }
  if (g.postcodes.length) {
    tweede += ` Postcode${g.postcodes.length > 1 ? "s" : ""}: ${opsomming(g.postcodes)}.`;
  }
  if (tweede.trim()) delen.push(tweede.trim());
  return delen;
}

export function parkeerRijen(g: Gemeente): { label: string; waarde: string }[] {
  const p = g.parkeerverbod;
  return [
    { label: "Naam van de aanvraag", waarde: p.procedure ?? NIET_VERMELD },
    { label: "Hoe lang vooraf", waarde: p.termijn ?? NIET_VERMELD },
    { label: "Kostprijs", waarde: p.kostprijs ?? NIET_VERMELD },
    { label: "Borden", waarde: p.borden ?? NIET_VERMELD },
    ...(p.opmerking ? [{ label: "Goed om te weten", waarde: p.opmerking }] : []),
  ];
}

export function gemeenteFaq(g: Gemeente): Vraag[] {
  const p = g.parkeerverbod;
  const vragen: Vraag[] = [];

  vragen.push({
    vraag: `Wat kost een verhuisfirma in ${g.naam}?`,
    antwoord: `Reken op € 500 tot € 900 voor een appartement, € 800 tot € 1.400 voor een eengezinswoning en € 1.400 tot € 2.400 voor een grote woning. Dat zijn Belgische richtprijzen. Verhuisfirma's rekenen meestal per uur, dus de verdieping, de draagafstand en de rijtijd naar ${g.naam} bepalen je eigen prijs.`,
  });

  if (p.termijn) {
    vragen.push({
      vraag: `Hoe lang vooraf vraag ik een parkeerverbod aan in ${g.naam}?`,
      antwoord: `${p.termijn}${/[.!?]$/.test(p.termijn) ? "" : "."} De aanvraag heet bij ${g.officieleNaam}: ${p.procedure ?? "inname openbaar domein"}.`,
    });
  } else {
    vragen.push({
      vraag: `Hoe vraag ik een parkeerverbod aan in ${g.naam}?`,
      antwoord: `De aanvraag verloopt via de gemeente${p.procedure ? ` en heet ${p.procedure}` : ""}. De termijn staat niet op de website, dus neem contact op met de dienst mobiliteit zodra je verhuisdatum vastligt.`,
    });
  }

  if (p.kostprijs) {
    vragen.push({
      vraag: `Wat kost een parkeerverbod voor een verhuis in ${g.naam}?`,
      antwoord: p.kostprijs,
    });
  }

  vragen.push({
    vraag: `Wat kost een verhuislift huren in ${g.naam}?`,
    antwoord: `Met één bediener reken je op € 50 tot € 90 per uur, met een minimum van 1 tot 2 uur en een verplaatsingskost. Staat de lift op de stoep of de straat, dan heb je de vergunning van ${g.officieleNaam} nodig.`,
  });

  vragen.push({
    vraag: `Waar meld ik mijn adreswijziging in ${g.naam}?`,
    antwoord: `Bij de dienst Burgerzaken van ${g.officieleNaam}, binnen 8 werkdagen na je verhuis. Daarna komt de wijkagent langs en laat je de chip van je identiteitskaart aanpassen.`,
  });

  if (g.recyclagepark?.naam) {
    vragen.push({
      vraag: `Waar kan ik met afval terecht na mijn verhuis in ${g.naam}?`,
      antwoord: `${g.recyclagepark.naam}${g.recyclagepark.adres ? `, ${g.recyclagepark.adres}` : ""}. Grofvuil kan je in Limburg ook aan huis laten ophalen via Limburg.net: € 30 tot 2 m³ en € 60 voor 2 tot 4 m³.`,
    });
  }

  return vragen;
}
