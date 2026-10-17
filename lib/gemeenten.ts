import data from "./data/gemeenten.json";

export type Bijzonderheid = { tekst: string; bron: string | null };

/** Extra lokale uitleg voor grotere gemeenten: elk blok heeft een kop, alinea's en een bron. */
export type LokaalBlok = { kop: string; alineas: string[]; bron: string | null };

export type Gemeente = {
  slug: string;
  naam: string;
  officieleNaam: string;
  postcodes: string[];
  deelgemeenten: string[];
  wijken: string[];
  buurgemeenten: string[];
  streek: string | null;
  inwoners: { aantal: number; jaar: number; bron: string | null } | null;
  woonprofiel: string | null;
  parkeerverbod: {
    procedure: string | null;
    url: string | null;
    termijn: string | null;
    kostprijs: string | null;
    borden: string | null;
    opmerking: string | null;
  };
  adreswijzigingUrl: string | null;
  recyclagepark: { naam: string | null; adres: string | null; url: string | null } | null;
  bijzonderheden: Bijzonderheid[];
  lokaal?: LokaalBlok[];
  bronnen: string[];
};

export const gemeenten = data as Gemeente[];

export function getGemeente(slug: string): Gemeente | undefined {
  return gemeenten.find((g) => g.slug === slug);
}

/** Zoekt bij een naam uit een lijst buurgemeenten de pagina op deze site, als die bestaat. */
export function vindGemeenteBijNaam(naam: string): Gemeente | undefined {
  const n = naam.toLowerCase();
  return gemeenten.find(
    (g) => g.naam.toLowerCase() === n || g.officieleNaam.toLowerCase() === n
  );
}

export function isFusie(g: Gemeente): boolean {
  return g.officieleNaam.toLowerCase() !== g.naam.toLowerCase();
}

export function formatInwoners(n: number): string {
  return n.toLocaleString("nl-BE");
}

/** Deelgemeenten zonder de hoofdkern zelf. */
export function andereKernen(g: Gemeente): string[] {
  return g.deelgemeenten.filter((d) => d.toLowerCase() !== g.naam.toLowerCase());
}

export function opsomming(items: string[], max = 99): string {
  const lijst = items.slice(0, max);
  if (lijst.length === 0) return "";
  if (lijst.length === 1) return lijst[0];
  return `${lijst.slice(0, -1).join(", ")} en ${lijst[lijst.length - 1]}`;
}
