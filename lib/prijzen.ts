// Richtprijzen uit openbare bronnen, nagekeken op 12 oktober 2026.
// Elk bedrag heeft een bron. Geen enkel bedrag is een offerte.
// De volledige onderzoeksdata staat in docs/onderzoek-prijzen.json.

export type PrijsRij = {
  omschrijving: string;
  prijs: string;
  btw?: "incl. btw" | "excl. btw" | "btw niet vermeld";
  toelichting?: string;
};

export type Bron = { naam: string; url: string };

export type PrijsTabel = {
  id: string;
  titel: string;
  rijen: PrijsRij[];
  bronnen: Bron[];
  voetnoot?: string;
};

export const prijsVerhuisTotaal: PrijsTabel = {
  id: "verhuis-totaal",
  titel: "Wat kost een verhuis met een verhuisfirma?",
  rijen: [
    {
      omschrijving: "Kleine verhuis: studio of appartement, tot ongeveer 25 m³",
      prijs: "€ 500 tot € 900",
      btw: "btw niet vermeld",
      toelichting: "Weekdag, binnen 50 km, met 2 verhuizers",
    },
    {
      omschrijving: "Gemiddelde verhuis: eengezinswoning, tot ongeveer 50 m³",
      prijs: "€ 800 tot € 1.400",
      btw: "btw niet vermeld",
      toelichting: "Met 2 verhuizers, zonder inpakservice",
    },
    {
      omschrijving: "Grote verhuis: ruime woning of villa, meer dan 50 m³",
      prijs: "€ 1.400 tot € 2.400",
      btw: "btw niet vermeld",
      toelichting: "Met 2 of meer verhuizers en extra diensten",
    },
  ],
  bronnen: [
    { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
    { naam: "Callmepower", url: "https://callmepower.be/nl/verhuizen/verhuisfirma" },
    { naam: "Verhuisoffertes (regio Limburg)", url: "https://be.verhuisoffertes.com/regio/verhuisfirma-limburg/" },
  ],
  voetnoot:
    "De vergelijkers waaruit deze bedragen komen zeggen meestal niet of ze inclusief btw zijn. Op een verhuis geldt 21% btw. Vraag in je offerte dus altijd de prijs inclusief btw.",
};

export const prijsVerhuisUur: PrijsTabel = {
  id: "verhuis-uur",
  titel: "Uurtarieven van verhuizers",
  rijen: [
    { omschrijving: "Eén extra verhuizer", prijs: "€ 30 tot € 40 per uur", btw: "btw niet vermeld" },
    { omschrijving: "Verhuiswagen van 20 m³ met 1 verhuizer", prijs: "€ 60 tot € 70 per uur", btw: "btw niet vermeld" },
    { omschrijving: "Verhuiswagen van 50 m³ met 1 verhuizer", prijs: "€ 70 tot € 80 per uur", btw: "btw niet vermeld" },
    {
      omschrijving: "Ploeg van 2 verhuizers met vrachtwagen",
      prijs: "€ 100 tot € 120 per uur",
      btw: "excl. btw",
      toelichting: "Gepubliceerd tarief van een verhuisfirma, minimum 2 uur",
    },
    { omschrijving: "Toeslag op zaterdag", prijs: "tot 25% extra", btw: "btw niet vermeld" },
    { omschrijving: "Kilometervergoeding", prijs: "€ 0,50 tot € 1 per km", btw: "btw niet vermeld", toelichting: "Vaak pas na de eerste 20 km" },
  ],
  bronnen: [
    { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
    { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
    { naam: "Verhuisoffertes (regio Limburg)", url: "https://be.verhuisoffertes.com/regio/verhuisfirma-limburg/" },
  ],
};

export const prijsVerhuislift: PrijsTabel = {
  id: "verhuislift",
  titel: "Wat kost een verhuislift huren?",
  rijen: [
    {
      omschrijving: "Ladderlift met 1 bediener, verdieping 1 tot 6",
      prijs: "€ 50 tot € 90 per uur",
      btw: "btw niet vermeld",
      toelichting: "Een aanvraagsite rekent voor Hasselt en Genk € 70 per uur op weekdagen en € 90 op zaterdag, incl. btw",
    },
    {
      omschrijving: "Ladderlift met 1 bediener, eerste uur bij een verhuisfirma",
      prijs: "€ 59 tot € 100",
      btw: "excl. btw",
      toelichting: "Daarna per half uur verder gerekend",
    },
    { omschrijving: "Ladderlift met 2 bedieners", prijs: "€ 90 tot € 130 per uur", btw: "incl. btw" },
    {
      omschrijving: "Ladderwagen voor hoge verdiepingen, met 2 bedieners",
      prijs: "€ 120 tot € 200 per uur",
      btw: "btw niet vermeld",
      toelichting: "Vanaf ongeveer de 7de verdieping",
    },
    { omschrijving: "Verhuislift zonder bediener", prijs: "€ 90 tot € 150 per dag", btw: "incl. btw" },
  ],
  bronnen: [
    { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
    { naam: "Locationlift (Hasselt)", url: "https://locationlift.be/verhuislift-hasselt/" },
    { naam: "Studentverhuizers", url: "https://studentverhuizers.be/verhuislift-huren/" },
    { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
    { naam: "Verhuizingen Jespers", url: "https://verhuizingenjespers.com/verhuislift-huren-brussel/" },
  ],
  voetnoot:
    "Reken op een minimumafname van 1 tot 2 uur. Verplaatsing wordt vaak apart gerekend, bijvoorbeeld rond € 1 per km of als vaste voorrijkost. Een vast tarief van een Limburgse liftverhuurder hebben we niet gevonden: die werken met een offerte.",
};

export const prijsVerhuiswagen: PrijsTabel = {
  id: "verhuiswagen",
  titel: "Wat kost een verhuiswagen huren?",
  rijen: [
    { omschrijving: "Kleine bestelwagen, 3 tot 7 m³", prijs: "€ 40 tot € 80 per dag", btw: "incl. btw" },
    { omschrijving: "Bestelwagen van ongeveer 12 m³", prijs: "€ 60 tot € 120 per dag", btw: "incl. btw" },
    { omschrijving: "Grote bestelwagen van ongeveer 20 m³", prijs: "€ 80 tot € 150 per dag", btw: "incl. btw" },
    { omschrijving: "Laadklep", prijs: "€ 20 tot € 50 per dag extra", btw: "incl. btw" },
    {
      omschrijving: "Extra kilometers",
      prijs: "€ 0,20 tot € 0,35 per km",
      btw: "btw niet vermeld",
      toelichting: "Meestal zijn 100 tot 200 km per dag inbegrepen",
    },
  ],
  bronnen: [
    { naam: "Callmepower", url: "https://callmepower.be/nl/verhuizen/materiaal/verhuiswagen" },
    { naam: "Verhuiskampioen", url: "https://www.verhuiskampioen.be/verhuiswagen-huren/kosten/" },
    { naam: "DEWA-rent", url: "https://dewa-rent.be/te-huur/verhuiswagens-trucks/camion-met-laadklep" },
  ],
  voetnoot:
    "Met rijbewijs B mag je rijden met een wagen tot 3,5 ton maximaal toegelaten massa. Een tarief van een Limburgse verhuurder hebben we niet gevonden.",
};

export const prijsOpslag: PrijsTabel = {
  id: "opslag",
  titel: "Wat kost opslagruimte huren?",
  rijen: [
    {
      omschrijving: "Box van 5 m² in Limburg",
      prijs: "€ 84 per maand",
      btw: "incl. btw",
      toelichting: "Self Storage Box, met vestigingen in Genk, Maasmechelen, Lanklaar en Lanaken",
    },
    { omschrijving: "Box van 10 m² in Limburg", prijs: "€ 159 per maand", btw: "incl. btw", toelichting: "Self Storage Box" },
    { omschrijving: "Box van 20 m² in Limburg", prijs: "€ 265 per maand", btw: "incl. btw", toelichting: "Self Storage Box" },
    {
      omschrijving: "Meubelbewaring bij een verhuisfirma, 10 m³",
      prijs: "€ 40 tot € 80 per maand",
      btw: "btw niet vermeld",
    },
    {
      omschrijving: "Meubelbewaring bij een verhuisfirma, 20 m³",
      prijs: "€ 110 tot € 130 per maand",
      btw: "btw niet vermeld",
    },
  ],
  bronnen: [
    { naam: "Self Storage Box (prijzen)", url: "https://www.selfstoragebox.be/prijzen" },
    { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
    { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
  ],
  voetnoot: "Reken daarbovenop met een waarborg, een verzekering en soms een administratiekost.",
};

export const prijsPiano: PrijsTabel = {
  id: "piano",
  titel: "Wat kost een piano verhuizen?",
  rijen: [
    { omschrijving: "Buffetpiano, van gelijkvloers naar gelijkvloers", prijs: "€ 200 tot € 400", btw: "btw niet vermeld" },
    { omschrijving: "Buffetpiano met trap of lift", prijs: "€ 350 tot € 700", btw: "btw niet vermeld" },
    { omschrijving: "Vleugel, gelijkvloers", prijs: "€ 400 tot € 800", btw: "btw niet vermeld" },
    { omschrijving: "Stemmen na de verhuis", prijs: "€ 80 tot € 150", btw: "btw niet vermeld" },
  ],
  bronnen: [
    { naam: "Verhuiskampioen", url: "https://www.verhuiskampioen.be/verhuizingen/piano-verhuizing/" },
    { naam: "Verhuisfirma-gids", url: "https://www.verhuisfirma-gids.be/piano-verhuizen/" },
  ],
  voetnoot:
    "De bedragen voor trappen en vleugels komen uit één bron. Gespecialiseerde pianoverhuizers in Limburg publiceren zelf geen tarieven en werken op offerte.",
};

export const prijsGrofvuil: PrijsTabel = {
  id: "grofvuil",
  titel: "Wat kost grofvuil afvoeren in Limburg?",
  rijen: [
    { omschrijving: "Ophaling aan huis op afroep, tot 2 m³", prijs: "€ 30" },
    { omschrijving: "Ophaling aan huis op afroep, 2 tot 4 m³", prijs: "€ 60" },
    { omschrijving: "Grofvuil zelf naar een recyclagepark van Limburg.net", prijs: "€ 0,25 per kg" },
    { omschrijving: "Recycleerbaar afval naar het recyclagepark", prijs: "gratis" },
  ],
  bronnen: [
    { naam: "Limburg.net: grofvuil aan huis", url: "https://limburg.net/grofvuil-ophaling-aan-huis" },
    { naam: "Limburg.net: tarieven recyclagepark", url: "https://limburg.net/recyclageparken/tarieven" },
  ],
  voetnoot: "In gemeenten met een eigen recyclagepark kunnen de tarieven afwijken. Vraag ze na bij je gemeente.",
};

export const allePrijsTabellen = [
  prijsVerhuisTotaal,
  prijsVerhuisUur,
  prijsVerhuislift,
  prijsVerhuiswagen,
  prijsOpslag,
  prijsPiano,
  prijsGrofvuil,
];
