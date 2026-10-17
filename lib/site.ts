// Centrale instellingen. Pas hier aan, nergens anders.
// Lege waarden worden niet getoond op de site.

export const site = {
  naam: "Verhuisfirma Limburg",
  kort: "Verhuisfirma Limburg",
  // Canonieke host. Aanpassen zodra het domein geregistreerd is.
  url: "https://www.verhuisfirmalimburg.be",
  regio: "Limburg",
  land: "BE",
  taal: "nl-BE",

  // Formspree-formulier "verhuisfirma limburg" (formspree.io). De aanvragen
  // komen aan op het e-mailadres dat in Formspree bij dit formulier staat.
  formspreeId: "mnpjwrna",

  // Vul in zodra er een eigen oproepnummer is. Leeg = nergens getoond.
  telefoon: "",
  telefoonLink: "",
  whatsapp: "",

  // Verplichte identificatie van de uitgever (Belgisch recht). Vul in voor livegang.
  uitgever: {
    naam: "JG Scale",
    ondernemingsnummer: "BTW BE 1031.863.828",
    adres: "Meytersveld 94, 3640 Kinrooi",
    email: "info@jgscale.be",
  },

  // Datum waarop de richtprijzen en gemeentegegevens zijn nagekeken.
  nagekekenOp: "12 oktober 2026",
  nagekekenIso: "2026-10-12",
};

export type Site = typeof site;
