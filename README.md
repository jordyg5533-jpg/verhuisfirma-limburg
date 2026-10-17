# Verhuisfirma Limburg

Gids en aanvraagsite over verhuizen in Belgisch Limburg. Next.js (app router), alles statisch gegenereerd.

- 24 gemeentepagina's (`/hasselt`, `/genk`, ...) met de regels van de gemeente voor het parkeerverbod
- 9 dienstpagina's (`/diensten/...`) met richtprijzen
- 9 gidsen (`/kennis/...`)
- Offerteformulier zonder JavaScript, via Formspree

## Starten

```
npm install
npm run dev      # http://localhost:3000
npm run build    # controle: 55 statische pagina's
```

## Waar staat wat

| Bestand | Inhoud |
| --- | --- |
| `lib/site.ts` | Naam, domein, Formspree-id, telefoon, uitgever. Alles wat je moet invullen staat hier. |
| `lib/data/gemeenten.json` | Feiten per gemeente, met bron per feit. |
| `lib/prijzen.ts` | Alle prijstabellen, met bron per tabel. |
| `lib/diensten.ts` | Tekst van de dienstpagina's. |
| `lib/kennis.ts` | Tekst van de gidsen. |
| `lib/gemeenteTekst.ts` | Bouwt intro, titels en vragen van de gemeentepagina's op uit de data. |
| `components/Illustraties.tsx` | De tekeningen die nu de plaats van foto's innemen. |
| `docs/zoekwoordenonderzoek.md` | Gemeten zoekvolumes en welke pagina op welke term mikt. |
| `docs/onderzoek-prijzen.json` | Ruwe onderzoeksdata achter de prijzen (126 feiten met bron). |
| `scripts/merge-gemeenten.py` | Voegt nieuw gemeenteonderzoek samen tot `gemeenten.json`. |

De sitemap wordt automatisch afgeleid uit de databestanden.

## Checklist voor je live gaat

Niet live zetten voor deze punten in orde zijn.

1. **Een verhuisfirma die de aanvragen krijgt.** De site belooft dat een aanvraag bij een verhuisfirma terechtkomt. Zonder partner klopt die belofte niet.
2. **Domein registreren** en `url` aanpassen in `lib/site.ts`. Nu staat er `www.verhuisfirmalimburg.be`, dat nog niet geregistreerd is.
3. **Uitgever invullen** in `lib/site.ts` (naam, ondernemingsnummer, adres, e-mail). Dat is wettelijk verplicht en de privacyverklaring verwijst ernaar.
4. **Formspree testen.** Het formulier post naar het Formspree-formulier met id `formspreeId` in `lib/site.ts`. Doe één testaanvraag en controleer dat de mail aankomt en dat je op /bedankt uitkomt.
5. **Privacyverklaring laten nalezen.** De tekst is een degelijk vertrekpunt, geen juridisch advies.
6. **Lummen, Dilsen-Stokkem en Kinrooi nakijken.** Voor die gemeenten ontbreekt de termijn of de kostprijs van het parkeerverbod. De site zegt dat eerlijk ("staat niet op de website van de gemeente"), maar een telefoontje naar de gemeente maakt de pagina sterker.
7. **Telefoonnummer** (liefst een eigen oproepnummer per site) invullen in `lib/site.ts`. Zolang het leeg is, toont de site nergens een nummer.
8. **Search Console en Bing Webmaster Tools**: sitemap indienen. Bing voedt de zoekfunctie van ChatGPT.

## Foto's

De site gebruikt nu eigen tekeningen (verhuislift, vrachtwagen, dozen) en geen stockfoto's. Dat is bewust:
een stockfoto van een onbekende verhuisploeg suggereert een bedrijf dat niet bestaat.

Zodra er een partner is:

1. Vraag 10 tot 15 echte foto's: de vrachtwagen met logo, de ploeg aan het werk, de verhuislift tegen een gevel, een ingeladen wagen.
2. Zet ze als WebP van maximaal 1.200 pixels breed in `public/fotos/`.
3. Vervang `HeroLift` op de homepage en voeg een fotoblok toe op de dienstpagina's.

Wil je voor die tijd toch beeld: gebruik AI-beelden alleen voor sfeer (dozen, een lege kamer, een sleutel), nooit voor "ons team" of "onze wagen".

## Gegevens bijwerken

Prijzen en gemeenteregels zijn nagekeken op 12 oktober 2026. Die datum staat op de site (`nagekekenOp` in `lib/site.ts`).
Kijk ze minstens één keer per jaar na: enkele gemeenten hebben een retributiereglement dat in 2026 vernieuwd is.

## Wat er niet in zit

- Geen reviews, geen jaren ervaring, geen adres: die bestaan nog niet en worden niet verzonnen.
- Geen Google Analytics. Voeg GA4 met toestemmingsbanner toe als je wil meten welke pagina's leads opleveren. In elke aanvraag staat wel al de pagina waar ze vandaan komt.
- Geen kaartvermelding. De site mikt op de gewone zoekresultaten en op AI-antwoorden.
