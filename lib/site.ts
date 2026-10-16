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

  // Waar offerteaanvragen naartoe gaan (FormSubmit.co). Bevestig het adres
  // één keer via de activatiemail van FormSubmit voor je live gaat.
  leadEmail: "info@jgscale.be",

  // Vul in zodra er een eigen oproepnummer is. Leeg = nergens getoond.
  telefoon: "",
  telefoonLink: "",
  whatsapp: "",

  // Verplichte identificatie van de uitgever (Belgisch recht). Vul in voor livegang.
  uitgever: {
    naam: "",
    ondernemingsnummer: "",
    adres: "",
    email: "",
  },

  // Datum waarop de richtprijzen en gemeentegegevens zijn nagekeken.
  nagekekenOp: "12 oktober 2026",
  nagekekenIso: "2026-10-12",
};

export type Site = typeof site;
