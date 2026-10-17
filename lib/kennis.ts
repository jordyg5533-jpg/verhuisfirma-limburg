import type { PrijsTabel, Bron } from "./prijzen";
import type { Sectie, Vraag } from "./diensten";
import {
  prijsVerhuisTotaal,
  prijsVerhuisUur,
  prijsVerhuislift,
  prijsGrofvuil,
} from "./prijzen";

export type Artikel = {
  slug: string;
  titel: string;
  kort: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  secties: Sectie[];
  prijzen?: PrijsTabel[];
  /** Toont de tabel met termijn en kost per gemeente (gids over het parkeerverbod). */
  toonParkeerTabel?: boolean;
  faq: Vraag[];
  bronnen: Bron[];
};

export const artikels: Artikel[] = [
  {
    slug: "wat-kost-een-verhuisfirma",
    titel: "Wat kost een verhuisfirma in Limburg?",
    kort: "Richtprijzen per woningtype en per uur, en wat de prijs omhoog of omlaag duwt.",
    metaTitle: "Wat kost een verhuisfirma in Limburg? Prijzen 2026",
    metaDescription:
      "Een verhuisfirma kost in Limburg ruwweg € 500 tot € 2.400, afhankelijk van het volume. Bekijk de richtprijzen per woning en per uur, met bronnen.",
    intro: [
      `Een verhuis met een verhuisfirma kost in Limburg ruwweg € 500 tot € 900 voor een appartement, € 800 tot € 1.400 voor een eengezinswoning en € 1.400 tot € 2.400 voor een grote woning. Dat zijn richtprijzen van Belgische vergelijkers, geen offertes.`,
      `Hieronder zie je hoe die bedragen opgebouwd zijn, welke uurtarieven Limburgse firma's publiceren, wat de prijs omhoog duwt en hoe je zelf een ruwe schatting maakt. Zo kan je een offerte lezen en vergelijken in plaats van alleen naar het eindbedrag te kijken.`,
    ],
    secties: [
      {
        titel: "Hoe rekent een verhuisfirma?",
        alineas: [
          `De meeste verhuisfirma's rekenen per uur voor een ploeg met een vrachtwagen. De klok start vaak bij vertrek uit het depot en wordt per begonnen half uur gerekend, met een minimum van 2 tot 4 uur. Een firma die in Hasselt werkt, publiceert bijvoorbeeld € 100 per uur voor twee verhuizers met wagen en € 130 voor drie, exclusief btw, met een minimum van 3 uur.`,
          `Sommige firma's geven na een plaatsbezoek een vaste prijs. Dat geeft zekerheid, maar vraag dan wat er gebeurt als het volume groter blijkt dan geschat. Een vergelijker die prijzen voor Hasselt publiceert, noemt € 900 als gemiddelde verhuis.`,
        ],
      },
      {
        titel: "Zo schat je je eigen verhuis",
        stappen: [
          `Schat je volume. Een studio of klein appartement is tot 25 m³, een eengezinswoning rond 50 m³, een villa meer. Een vuistregel: ongeveer 10 m³ per volledig ingerichte kamer.`,
          `Reken de uren. Twee verhuizers laden en lossen ongeveer 10 m³ per uur als alles ingepakt klaarstaat op het gelijkvloers. Tel de rijtijd van depot naar jou, van jou naar je nieuwe adres en terug.`,
          `Vermenigvuldig met het uurtarief: € 100 tot € 120 voor twee verhuizers met wagen. Voor een appartement van 25 m³ op de eerste verdieping, 20 km verderop, kom je zo op 5 tot 6 uur, dus € 500 tot € 720 exclusief btw.`,
          `Tel de extra's bij: verhuislift, inpakservice, kilometers, weekendtoeslag en de vergunning van de gemeente.`,
          `Tel er 21% btw bij als het uurtarief exclusief is.`,
        ],
      },
      {
        titel: "Wat maakt een verhuis duurder?",
        lijst: [
          `Een verhuis op zaterdag: tot 25% toeslag. Sommige bronnen noemen voor het weekend 25% tot 50%, en voor zondag tot 75%.`,
          `Hogere verdiepingen zonder lift, of een lift die te klein is voor meubels. Elke verdieping is extra draagtijd per stuk.`,
          `Een verhuislift: € 50 tot € 90 per uur extra, of een toeslag op het uurtarief als de firma er zelf een meebrengt.`,
          `Een lange draagafstand omdat de wagen niet voor de deur kan staan. Daarom is het parkeerverbod zo belangrijk.`,
          `Kilometers: vaak € 0,50 tot € 1 per km, soms pas na de eerste 20 of 50 km.`,
          `Inpakken, demonteren en monteren: een inpakker kost € 30 tot € 40 per uur.`,
          `Bijzondere stukken: een buffetpiano kost € 200 tot € 400 extra, met trap of lift € 350 tot € 700.`,
          `De piek: eind juni, juli, augustus en september zitten verhuisfirma's vol. Dan betaal je het volle tarief en is er weinig onderhandelingsruimte.`,
        ],
      },
      {
        titel: "Zo hou je de prijs laag",
        lijst: [
          `Verhuis op een weekdag in het midden van de maand, buiten de zomer als dat kan.`,
          `Zorg dat alles ingepakt en gedemonteerd klaarstaat voor de ploeg aankomt. Elk kwartier dat de verhuizers wachten, betaal je.`,
          `Regel het parkeerverbod op tijd, zodat de wagen voor de deur staat.`,
          `Breng zelf alvast dozen en kleine spullen over, en zet de zware stukken dicht bij de deur.`,
          `Ruim op voor je verhuist: elke kubieke meter minder scheelt tijd. Een grofvuilophaling van Limburg.net kost € 30.`,
          `Vraag drie offertes en vergelijk op uurtarief, minimumafname en wat inbegrepen is, niet alleen op het eindbedrag.`,
        ],
      },
      {
        titel: "Btw en verzekering",
        alineas: [
          `Op verhuisdiensten voor particulieren geldt 21% btw. Vergelijkers vermelden zelden of hun bedragen inclusief btw zijn, en verhuisfirma's publiceren hun uurtarief vaak exclusief, omdat ze ook voor bedrijven werken. Voor consumenten moet een prijs volgens het Wetboek van economisch recht nochtans de totaalprijs zijn. Vraag dus altijd de totaalprijs inclusief btw.`,
          `De aansprakelijkheid van een verhuizer is volgens de voorwaarden van de Belgische Kamer der Verhuizers beperkt tot € 125 per m³. Een verzekering alle risico's op de vervangingswaarde van je inboedel is aangeraden als je waardevolle stukken hebt, maar niet verplicht. Vraag de prijs ervan mee in de offerte.`,
        ],
      },
      {
        titel: "Wat kost een offerte?",
        alineas: [
          `Niets. Een verhuisfirma komt gratis ter plaatse kijken of schat op basis van foto's en een lijst. Hou er wel rekening mee dat annuleren na een bevestigde boeking wel geld kost: volgens de sectorvoorwaarden 10% van de prijs als je meer dan een week vooraf annuleert, oplopend tot 100% in de laatste 24 uur.`,
        ],
      },
    ],
    prijzen: [prijsVerhuisTotaal, prijsVerhuisUur],
    faq: [
      {
        vraag: "Wat kost een verhuisfirma per uur?",
        antwoord: `Een ploeg van twee verhuizers met vrachtwagen kost bij firma's die hun tarief publiceren € 100 tot € 120 per uur exclusief btw. Een wagen met één verhuizer kost € 60 tot € 80 per uur en elke extra verhuizer € 30 tot € 40 per uur.`,
      },
      {
        vraag: "Is een prijs per m³ gebruikelijk?",
        antwoord: `In België rekenen de meeste verhuizers per uur of met een vaste prijs na plaatsbezoek. Een betrouwbare richtprijs per m³ hebben we in geen enkele bron gevonden.`,
      },
      {
        vraag: "Zijn de prijzen in Limburg anders dan elders?",
        antwoord: `De richtprijzen die vergelijkers specifiek voor Limburg of Hasselt publiceren, liggen in dezelfde vork als de Belgische: € 600 tot € 850 voor een appartement en € 1.400 tot € 1.700 voor een villa.`,
      },
      {
        vraag: "Wat kost een kleine verhuis van een studio?",
        antwoord: `Reken op € 500 tot € 900 met een verhuisfirma. Een Limburgse firma publiceert een complete verhuis vanaf € 355 exclusief btw, maar dat is een instapprijs voor een minimum aantal uren zonder verplaatsing.`,
      },
      {
        vraag: "Wanneer is een verhuisfirma het goedkoopst?",
        antwoord: `Op een weekdag, buiten de zomermaanden en buiten het begin en einde van de maand. Dan hebben firma's ruimte in hun planning en betaal je geen weekendtoeslag.`,
      },
    ],
    bronnen: [
      { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
      { naam: "Callmepower", url: "https://callmepower.be/nl/verhuizen/verhuisfirma" },
      { naam: "Verhuisoffertes (regio Hasselt)", url: "https://be.verhuisoffertes.com/regio/verhuisfirma-hasselt/" },
      { naam: "Studentverhuizers: tarieven", url: "https://studentverhuizers.be/tarieven/" },
      { naam: "Homedeal: verhuis", url: "https://www.homedeal.be/nl/verhuis/" },
      { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
      { naam: "Belgische Kamer der Verhuizers", url: "https://bkv-cbd.be/verhuizen/" },
    ],
  },
  {
    slug: "verhuislift-huren-prijs",
    titel: "Verhuislift huren: wat kost het per uur?",
    kort: "Prijzen met en zonder bediener, minimumafname en verplaatsingskosten.",
    metaTitle: "Verhuislift huren prijs: per uur en per dag (2026)",
    metaDescription:
      "Een verhuislift met bediener kost € 50 tot € 90 per uur, zonder bediener € 90 tot € 150 per dag. Bekijk alle richtprijzen en bijkomende kosten.",
    intro: [
      `Een verhuislift met één bediener kost € 50 tot € 90 per uur. Zonder bediener huur je een lift vanaf ongeveer € 90 tot € 150 per dag inclusief btw. Limburgse aanbieders publiceren instapprijzen vanaf € 59 exclusief btw (€ 71,39 inclusief) voor het eerste uur met bediener.`,
      `De uurprijs is maar een deel van de rekening. Minimumafname, verplaatsing, de verdieping, de dag van de week en de vergunning van de gemeente tellen mee. Hieronder zie je waaruit de prijs bestaat en wanneer een lift je geld bespaart in plaats van kost.`,
    ],
    secties: [
      {
        titel: "Waaruit bestaat de prijs?",
        lijst: [
          `Het uurtarief, met een minimum van 1 tot 2 uur. Eén Limburgse aanbieder rekent een startprijs voor het eerste uur en daarna per half uur.`,
          `De verplaatsing: rond € 1 per km of een vaste voorrijkost, soms pas na de eerste kilometers. Vraag of brandstof inbegrepen is; bij sommige aanbieders komt die apart op de factuur.`,
          `De verdieping: een ladderlift reikt tot de 6de of 7de verdieping. Daarboven is een ladderwagen nodig, met twee bedieners, aan € 120 tot € 200 per uur.`,
          `Het aantal bedieners. Met twee bedieners gaat het sneller, maar betaal je € 90 tot € 130 per uur.`,
          `Zaterdag: een Hasseltse aanbieder rekent € 90 in plaats van € 70 per uur, een nationale vergelijker spreekt van ongeveer 25% meer in het weekend en op feestdagen.`,
          `De vergunning van de gemeente als de lift op de openbare weg staat (zie verder).`,
        ],
      },
      {
        titel: "Met of zonder bediener?",
        alineas: [
          `Een ladderlift met bediener is de gewone keuze voor een verhuis: de bediener zet de lift op, bedient hem en haalt hem weer weg. Jij en de verhuizers laden en lossen het plateau.`,
          `Zonder bediener huur je een kleinere elektrische lift voor de eerste drie verdiepingen, per dag. In Hasselt kost zo'n lift ongeveer € 100 per dag inclusief btw. Dat loont als je zelf verhuist, veel kleine ritten hebt en iemand hebt die de lift kan opstellen. Voor één zware zetel is een uurtje met bediener goedkoper.`,
        ],
      },
      {
        titel: "Voorbeeld: appartement op de derde verdieping in Hasselt",
        alineas: [
          `Stel dat je inboedel in 2 uur naar beneden moet. Met een lift van € 70 per uur inclusief btw betaal je € 140, plus de verplaatsing. Staat de lift op straat, dan komt daar in Hasselt de retributie bij: € 2,50 per m² per dag binnen de kleine ring, € 1 tussen de kleine en de grote ring, plus € 25 voor de parkeerverbodsborden. Voor een lift van 12 m² in het centrum is dat € 55 extra.`,
          `Doe je het met een verhuisfirma die zelf een lift meebrengt, dan zit de lift vaak als toeslag in het uurtarief: één firma rekent € 128 in plaats van € 110 per uur exclusief btw voor een wagen met twee verhuizers en lift. Over 4 uur is dat € 72 extra, minder dan een aparte liftverhuurder.`,
        ],
      },
      {
        titel: "Wanneer bespaart een lift je geld?",
        alineas: [
          `Een verhuisploeg rekent per uur. Twee verhuizers die een zetel en een koelkast langs een smal trapgat naar de derde verdieping dragen, zijn daar makkelijk een halfuur per stuk mee bezig. Met een lift gaat het hele appartement in een uur of twee naar beneden. Bij een verhuis vanaf de tweede verdieping zonder lift in het gebouw verdient een verhuislift zichzelf meestal terug in bespaarde werkuren, en je meubels en trappenhuis blijven heel.`,
          `Op het gelijkvloers of de eerste verdieping met een brede trap heb je hem zelden nodig.`,
        ],
      },
      {
        titel: "Vergeet de gemeente niet",
        alineas: [
          `Staat de lift op openbaar domein, dan heb je een vergunning nodig. In Genk is de eerste dag gratis en kosten de borden eenmalig € 50; de stadsdiensten plaatsen ze, zelf plaatsen mag niet, en je vraagt minstens 10 werkdagen vooraf aan. In Hasselt betaal je per vierkante meter per dag en € 25 voor de borden, en moet je de borden in de binnenstad minstens 24 uur vooraf laten plaatsen. In Sint-Truiden geldt vanaf 1 oktober 2026 een venstertijd voor voertuigen boven 3,5 ton in de binnenstad, maar met een geldige inname-vergunning krijg je een uitzondering.`,
          `De termijnen lopen van 2 werkdagen in Diepenbeek tot zes weken in Kinrooi. In onze gids over het parkeerverbod staat de termijn en de kost voor 24 Limburgse gemeenten.`,
        ],
      },
      {
        titel: "Vragen voor je boekt",
        lijst: [
          `Is de prijs inclusief btw, verplaatsing en brandstof?`,
          `Wat is de minimumafname, en per hoeveel tijd rekent de klok daarna?`,
          `Tot welke verdieping reikt de lift, en hoeveel kg kan er per rit op?`,
          `Hoeveel plaats heeft de lift nodig op straat, en wie vraagt de vergunning aan?`,
          `Wat gebeurt er als de verhuisploeg later komt en de lift staat te wachten?`,
        ],
      },
    ],
    prijzen: [prijsVerhuislift],
    faq: [
      {
        vraag: "Wat is de minimumhuur van een verhuislift?",
        antwoord: `Meestal 1 tot 2 uur. Eén aanbieder rekent een startprijs voor het eerste uur en daarna per half uur.`,
      },
      {
        vraag: "Wat kan er op een verhuislift?",
        antwoord: `Tussen 150 en 350 kg per rit, afhankelijk van het model. Een zetel, een koelkast of een stapel dozen is geen probleem. Een piano kan alleen op een lift die daarvoor geschikt is.`,
      },
      {
        vraag: "Wat kost een verhuislift in het weekend?",
        antwoord: `Reken op ongeveer 25% meer. Een Hasseltse aanbieder vraagt op zaterdag € 90 per uur in plaats van € 70.`,
      },
      {
        vraag: "Heb ik een vergunning nodig voor een verhuislift?",
        antwoord: `Alleen als hij op de openbare weg staat: de stoep, een parkeerplaats of de rijbaan. Op je eigen oprit of in een private parking niet.`,
      },
    ],
    bronnen: [
      { naam: "Locationlift (Hasselt)", url: "https://locationlift.be/verhuislift-hasselt/" },
      { naam: "Verhuiskampioen (Genk)", url: "https://www.verhuiskampioen.be/verhuislift/limburg/genk/" },
      { naam: "Lift Express (Limburg)", url: "https://www.liftexpress.be/ladderliftverhuur/limburg.html" },
      { naam: "Studentverhuizers: tarieven", url: "https://studentverhuizers.be/tarieven/" },
      { naam: "Callmepower: verhuislift", url: "https://callmepower.be/nl/verhuizen/materiaal/verhuislift" },
      { naam: "Bobex: verhuisfirma's", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
      { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
      { naam: "Stad Genk", url: "https://www.genk.be/verhuizen-leveringen-of-kleine-werken" },
      { naam: "Stad Hasselt", url: "https://www.hasselt.be/nl/inname-openbaar-domein" },
    ],
  },
  {
    slug: "parkeerverbod-aanvragen-verhuis",
    titel: "Parkeerverbod aanvragen voor je verhuis: regels per Limburgse gemeente",
    kort: "Termijn, kostprijs en aanvraaglink voor 24 gemeenten in één tabel.",
    metaTitle: "Parkeerverbod verhuis aanvragen: 24 Limburgse gemeenten",
    metaDescription:
      "Hoeveel dagen vooraf vraag je een parkeerverbod aan voor je verhuis, en wat kost het? Termijnen, tarieven en aanvraaglinks voor 24 gemeenten in Limburg.",
    intro: [
      `Voor een verhuiswagen of verhuislift op de openbare weg heb je in bijna elke Limburgse gemeente een vergunning nodig. Die heet meestal inname openbaar domein, soms signalisatievergunning of tijdelijk parkeerverbod.`,
      `De termijn loopt van 2 werkdagen in Diepenbeek tot zes weken in Kinrooi. Vraag het dus aan zodra je verhuisdatum vastligt.`,
    ],
    secties: [
      {
        titel: "Zo werkt het in grote lijnen",
        stappen: [
          `Vraag de inname aan bij de gemeente waar de wagen of lift komt te staan. Verhuis je tussen twee gemeenten, dan heb je twee aanvragen nodig.`,
          `Voeg waar gevraagd een schets toe met de plaats en de lengte die je nodig hebt.`,
          `Betaal de retributie, als die er is. In veel gemeenten is een inname van minder dan 24 uur gratis.`,
          `Zorg dat de parkeerverbodsborden op tijd staan, meestal 24 tot 48 uur vooraf. Soms plaatst de gemeente ze, soms haal je ze zelf af.`,
          `Verwittig de buren als de gemeente dat vraagt.`,
        ],
      },
      {
        titel: "Wat als je te laat bent?",
        alineas: [
          `Enkele gemeenten hebben een spoedprocedure tegen een toeslag, bijvoorbeeld Riemst, Lanaken en Tongeren-Borgloon. Andere, zoals Maasmechelen, aanvaarden geen laattijdige aanvragen. Bel in dat geval met de dienst mobiliteit en vraag wat nog kan.`,
          `Zonder vergunning mag je geen borden plaatsen en heb je geen recht op de plaats. Een verhuiswagen die het verkeer hindert kan beboet worden.`,
        ],
      },
    ],
    toonParkeerTabel: true,
    faq: [
      {
        vraag: "Wat kost een parkeerverbod voor een verhuis?",
        antwoord: `Dat verschilt sterk. In Genk is de eerste dag gratis en betaal je € 50 als de stad de borden plaatst. In Hasselt betaal je € 0,50 tot € 2,50 per m² per dag naargelang de zone, plus € 25 voor de borden. In Beringen, Heusden-Zolder en Alken is een inname tot 24 uur vrijgesteld.`,
      },
      {
        vraag: "Wie vraagt het parkeerverbod aan: ik of de verhuisfirma?",
        antwoord: `Dat spreek je af. Sommige verhuisfirma's regelen het voor je tegen een vergoeding, vaak € 20 tot € 50. Vraag het uitdrukkelijk, want standaard is het jouw taak.`,
      },
      {
        vraag: "Heb ik een parkeerverbod nodig op mijn eigen oprit?",
        antwoord: `Nee. De vergunning is alleen nodig als de wagen of lift op openbaar domein staat: de stoep, een parkeerplaats, de berm of de rijbaan.`,
      },
    ],
    bronnen: [
      { naam: "Bobex (vergoeding parkeervergunning)", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
    ],
  },
  {
    slug: "checklist-verhuizen",
    titel: "Checklist verhuizen in België: van 8 weken vooraf tot na de verhuis",
    kort: "Alles wat je regelt, in de juiste volgorde, met de Belgische termijnen.",
    metaTitle: "Checklist verhuizen België: wat regel je wanneer?",
    metaDescription:
      "Een verhuischecklist met Belgische termijnen: parkeerverbod, energieovernamedocument, water, internet en je adreswijziging binnen 8 werkdagen.",
    intro: [
      `Een verhuis loopt het vlotst als je de administratie spreidt over de weken ervoor. Deze checklist volgt de Belgische regels en termijnen, van de huuropzeg tot de aanpassing van je identiteitskaart, met de Limburgse bijzonderheden erbij.`,
      `Print ze af of zet de datums in je agenda. De termijnen die ertoe doen: 3 maanden voor de huuropzeg, 5 tot 15 dagen (en in Kinrooi zes weken) voor het parkeerverbod, 7 dagen voor het energieovernamedocument en 8 werkdagen voor je adreswijziging.`,
    ],
    secties: [
      {
        titel: "3 maanden vooraf: huur opzeggen",
        lijst: [
          `Huur je, dan zeg je op met een aangetekende brief. De opzegtermijn is 3 maanden en start op de eerste dag van de maand na je opzeg. Verhuis je dus op 1 juli, dan moet je brief vóór 1 april toekomen.`,
          `Zeg je op in de eerste drie jaar van een negenjarig contract, dan betaal je een opzegvergoeding van 3, 2 of 1 maand huur, naargelang je in het eerste, tweede of derde jaar zit. Bij een contract van korte duur is dat 1,5, 1 of 0,5 maand.`,
          `Is je contract na 2 maanden nog niet geregistreerd door de verhuurder, dan gelden de opzegtermijn en de vergoeding niet.`,
        ],
      },
      {
        titel: "6 tot 8 weken vooraf",
        lijst: [
          `Leg je verhuisdatum vast en vraag offertes aan bij verhuisfirma's. Vraag de totaalprijs inclusief 21% btw en wanneer de klok start.`,
          `Plan de plaatsbeschrijving bij uittrede met je verhuurder. Beide partijen mogen erom vragen. Een expert kost € 150 tot € 300 en wordt gedeeld.`,
          `Kijk in je arbeidsreglement of je recht hebt op een verhuisdag. Een wettelijk recht bestaat er niet; vraag anders tijdig een vakantiedag.`,
          `Begin met opruimen. Wat niet meegaat, gaat naar de Kringwinkel (gratis ophaling, met wachttijd) of het recyclagepark.`,
          `Verhuis je naar Kinrooi? Vraag het parkeerverbod nu al aan: de gemeente vraagt zes weken.`,
        ],
      },
      {
        titel: "3 tot 5 weken vooraf",
        lijst: [
          `Vraag het parkeerverbod aan bij de gemeente waar de verhuiswagen komt te staan. In de meeste Limburgse gemeenten is dat 5 tot 15 dagen vooraf; verhuis je tussen twee gemeenten, dan heb je twee aanvragen nodig.`,
          `Meld je verhuis bij je internetprovider. Proximus vraagt minstens 5 weken, Telenet 3 weken als de kabel al ligt en 8 weken als een technicus moet aansluiten.`,
          `Bestel verhuisdozen (vanaf € 1 per stuk bij de grote ketens) en begin met de kamers die je het minst gebruikt.`,
          `Reserveer indien nodig een verhuislift of opslagruimte, zeker in juli, augustus en september.`,
          `Boek de grofvuilophaling van Limburg.net (€ 30 tot 2 m³).`,
          `Activeer de verhuisdienst van bpost als je post wil laten doorsturen: € 11 per maand, voor 3 tot 24 maanden, aanvragen ten vroegste twee weken voor de startdatum, die altijd een maandag is.`,
        ],
      },
      {
        titel: "De laatste week",
        lijst: [
          `Ontdooi de diepvriezer en maak de koelkast leeg.`,
          `Hou een doos apart met wat je de eerste dag nodig hebt: papieren, laders, gereedschap, koffie, toiletpapier.`,
          `Controleer of de parkeerverbodsborden op tijd staan: in de meeste gemeenten 24 tot 48 uur vooraf.`,
          `Download het energieovernamedocument van de Vlaamse Nutsregulator (twee exemplaren per adres) en het overnameformulier van De Watergroep.`,
          `Spreek met de verhuisfirma af wie de lift bedient en wie het parkeerverbod controleert.`,
        ],
      },
      {
        titel: "Op de verhuisdag",
        lijst: [
          `Noteer de meterstanden van elektriciteit, gas en water op beide adressen, en neem er een gedateerde foto van.`,
          `Vul het energieovernamedocument in samen met de vorige of volgende bewoner, op het moment van de sleuteloverdracht. Beiden tekenen met "Gelezen en goedgekeurd".`,
          `Loop met de verhuizers door de woning voor ze vertrekken en noteer zichtbare schade meteen op het afleveringsdocument.`,
          `Doe de plaatsbeschrijving bij uittrede en de sleuteloverdracht van je oude woning.`,
        ],
      },
      {
        titel: "De eerste week na de verhuis",
        lijst: [
          `Stuur het energieovernamedocument binnen 7 dagen naar je energieleverancier, en regel de overname bij De Watergroep. Je verhuis is pas geregeld als je een eindafrekening hebt gekregen.`,
          `Meld je adreswijziging binnen 8 werkdagen bij je nieuwe gemeente, online of aan het loket. Eén meerderjarig gezinslid doet het voor het hele gezin.`,
          `Meld verborgen verhuisschade binnen 3 werkdagen aan de verhuisfirma, per e-mail of aangetekende brief.`,
          `Pas het adres van je hond aan in DogID en van je kat in CatID. Een foute registratie kan een boete opleveren.`,
        ],
      },
      {
        titel: "De weken erna",
        lijst: [
          `Wacht op het bezoek van de wijkagent (binnen 15 werkdagen na je aangifte) en laat daarna de chip van je identiteitskaart aanpassen. Neem je pincode mee.`,
          `Verwittig zelf je werkgever, bank, verzekeraars (brand en auto), telecomoperator, school of crèche en je abonnementen. Die krijgen je nieuwe adres niet automatisch.`,
          `Wie wel automatisch verwittigd wordt via het Rijksregister: ziekenfonds, belastingdienst, Groeipakket, pensioendienst, OCMW en de DIV voor je voertuig.`,
          `Heb je een eigen zaak? Laat binnen 1 maand je nieuwe adres inschrijven bij een ondernemingsloket.`,
          `Vraag de vrijgave van je huurwaarborg: dat kan alleen met een schriftelijk akkoord dat ten vroegste bij het einde van de huur wordt opgesteld. De wet legt geen termijn op; 4 tot 6 weken is gangbaar.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Binnen hoeveel dagen moet ik mijn adreswijziging melden?",
        antwoord: `Binnen 8 werkdagen na de verhuis, bij de dienst Burgerzaken van je nieuwe gemeente. Dat geldt ook als je binnen dezelfde gemeente verhuist.`,
      },
      {
        vraag: "Wie wordt automatisch verwittigd van mijn nieuwe adres?",
        antwoord: `Overheidsdiensten via het Rijksregister: je ziekenfonds, de belastingdienst, de uitbetaler van het Groeipakket, de pensioendienst, het OCMW en de DIV. Je werkgever, bank, verzekeraar, energieleverancier en telecomoperator moet je zelf verwittigen.`,
      },
      {
        vraag: "Hoe lang vooraf moet ik mijn huur opzeggen?",
        antwoord: `3 maanden, met een aangetekende brief. De termijn start op de eerste dag van de maand na je opzeg. In de eerste drie jaar van een negenjarig contract betaal je daarbovenop een opzegvergoeding van 3, 2 of 1 maand huur.`,
      },
      {
        vraag: "Wat kost het om mijn post te laten doorsturen?",
        antwoord: `De verhuisdienst van bpost kost € 11 per maand en loopt 3, 6, 12 of 24 maanden. Alleen geadresseerde brieven worden doorgestuurd; pakjes, kranten en je pensioen meld je zelf.`,
      },
    ],
    bronnen: [
      {
        naam: "Vlaams Woninghuurdecreet (Codex Vlaanderen)",
        url: "https://codex.vlaanderen.be/PrintDocument.ashx?id=1029963",
      },
      { naam: "Vlaanderen.be: aangifte van adreswijziging", url: "https://www.vlaanderen.be/aangifte-van-adreswijziging" },
      { naam: "Vlaanderen.be: een verhuis regelen", url: "https://www.vlaanderen.be/een-verhuis-regelen" },
      { naam: "Vlaanderen.be: energiecontracten en verhuis", url: "https://www.vlaanderen.be/energiecontracten-en-verhuis" },
      { naam: "De Watergroep: ik verhuis", url: "https://www.dewatergroep.be/nl-be/drinkwater/wat-te-doen-bij/verhuizen/ik-verhuis" },
      { naam: "bpost: verhuisdienst", url: "https://www.bpost.be/nl/verhuisdienst" },
      { naam: "Wikifin: wie verwittig ik bij een verhuis", url: "https://www.wikifin.be/nl/faq/1-wie-moet-ik-verwittigen-als-ik-verhuis-binnen-belgie" },
      { naam: "Parentia: verhuis en Groeipakket", url: "https://www.parentia.be/nl/vlaanderen/groeipakket/de-gevolgen-van-een-verhuis-voor-je-groeipakket" },
      {
        naam: "Vlaanderen.be: gegevens van je hond aanpassen in DogID",
        url: "https://www.vlaanderen.be/huisdierinfo/adopteren-en-verkoop/is-jouw-huisdier-geidentificeerd-en-correct-geregistreerd-check-je-chip/gegevens-van-je-hond-controleren-en-aanpassen-in-dogid",
      },
      { naam: "Selectra: telecom verhuizen", url: "https://selectra.be/nl/verhuizen/telecom" },
    ],
  },
  {
    slug: "adreswijziging-na-verhuis",
    titel: "Adreswijziging na je verhuis: zo doe je het in België",
    kort: "De termijn van 8 werkdagen, het bezoek van de wijkagent en je eID.",
    metaTitle: "Adreswijziging na verhuis: termijn en stappen in België",
    metaDescription:
      "Meld je adreswijziging binnen 8 werkdagen bij je nieuwe gemeente. Zo verloopt de aangifte, de controle door de wijkagent en de aanpassing van je eID.",
    intro: [
      `Na een verhuis meld je je nieuwe adres binnen 8 werkdagen bij de dienst Burgerzaken van je nieuwe gemeente. Dat geldt ook als je binnen dezelfde gemeente verhuist. In de meeste gemeenten kan het online en het is gratis.`,
      `De aangifte is alleen het begin. Daarna volgt een controle van de wijkagent, je inschrijving in het bevolkingsregister en een bezoek aan het gemeentehuis om de chip van je identiteitskaart aan te passen. Zo verloopt het stap voor stap.`,
    ],
    secties: [
      {
        titel: "Wanneer en waar doe je de aangifte?",
        alineas: [
          `De termijn van 8 werkdagen start op de dag dat je de nieuwe woning effectief betrekt. Vroeger aangeven kan niet: je moet er al wonen. De regel staat in het koninklijk besluit van 16 juli 1992 over de bevolkingsregisters.`,
          `Je doet de aangifte bij de gemeente van je nieuwe adres, niet bij je oude gemeente. Dat kan via het digitale loket van de gemeente of aan het loket van Burgerzaken. Je hebt een geldig identiteitsbewijs met rijksregisternummer nodig. Op onze gemeentepagina's staat de rechtstreekse link naar de aangifte van elke Limburgse gemeente.`,
          `Eén meerderjarig gezinslid volstaat om de aangifte voor het hele gezin te doen. Verhuist het hele gezin, dan doet de referentiepersoon van het gezin de aangifte.`,
        ],
      },
      {
        titel: "De aangifte in vier stappen",
        stappen: [
          `Doe de aangifte online of aan het loket. Geef daarbij de momenten op waarop je thuis bereikbaar bent voor de controle.`,
          `Een wijkagent of bevoegde ambtenaar komt ter plaatse controleren of je er werkelijk je hoofdverblijfplaats hebt. Volgens de omzendbrief van Binnenlandse Zaken moet dat onderzoek binnen 15 werkdagen na je aangifte afgerond zijn. Een telefoontje volstaat niet; de controle gebeurt op het adres zelf.`,
          `Na een positieve vaststelling word je ingeschreven. De inschrijvingsdatum is de datum van je aangifte, nooit later dan de datum van de vaststelling. Dat is belangrijk voor je belastingen en premies.`,
          `Je krijgt een uitnodiging om de chip van je identiteitskaart te laten aanpassen. Ga langs met je eID en je pincode, voor elk gezinslid met een kaart. Het adres staat alleen op de chip, niet op de kaart zelf. Laat je dat na binnen de termijn die de gemeente oplegt, dan kan de gemeente dat melden aan het parket.`,
        ],
      },
      {
        titel: "Verhuis je met kinderen?",
        alineas: [
          `Vermeld bij de aangifte of er voor de kinderen een rechterlijke beslissing, een notariële akte of een onderlinge overeenkomst over het verblijf bestaat, en breng die mee. Bij co-ouderschap moet de gemeente weten bij welke ouder het kind ingeschreven wordt.`,
          `Een minderjarige die voor het eerst het ouderlijke huis verlaat, bijvoorbeeld om alleen te gaan wonen, moet voor de aangifte vergezeld zijn van iemand die het ouderlijk gezag uitoefent.`,
        ],
      },
      {
        titel: "Wie wordt automatisch verwittigd en wie niet?",
        alineas: [
          `Overheidsinstellingen krijgen je nieuwe adres automatisch via het Rijksregister: je ziekenfonds en het RIZIV, de belastingadministratie, het kinderbijslagfonds, de uitbetalingsinstelling voor werkloosheidsuitkeringen, het OCMW en de Federale Pensioendienst. Ook de DIV past het adres van je voertuig automatisch aan; je oude adres mag gewoon op het papieren inschrijvingsbewijs blijven staan.`,
          `Zelf verwittig je je werkgever, de VDAB als je werkzoekend bent, je bank en verzekeraar, je energieleverancier, De Watergroep, je telecomoperator en je abonnementen. Die krijgen je nieuwe adres niet door.`,
        ],
      },
      {
        titel: "Wat als je te laat bent of niet aangeeft?",
        alineas: [
          `Wie niet of te laat aangeeft, overtreedt de wet op de bevolkingsregisters. De gemeente kan de politie een proces-verbaal laten opmaken en de zaak naar het parket sturen. Een vast boetebedrag staat niet in de regelgeving, dus laat je niet afschrikken door websites die een exact bedrag noemen, maar wacht ook niet tot alles uitgepakt is.`,
          `Weigert de gemeente je inschrijving, dan moet ze dat motiveren. Je kan binnen 30 kalenderdagen beroep aantekenen bij de FOD Binnenlandse Zaken.`,
        ],
      },
      {
        titel: "Bijzondere situaties",
        lijst: [
          `Verhuis naar het buitenland: meld je vertrek uiterlijk de dag vóór je vertrekt bij je huidige gemeente. Daarna regel je je documenten via de Belgische ambassade of het consulaat.`,
          `Tijdelijk weg, bijvoorbeeld voor werk of een lange reis: meld een tijdelijke afwezigheid bij Burgerzaken. Die mag maximaal 1 jaar duren en kan eenmalig met 1 jaar verlengd worden. Wie meer dan 6 maanden onafgebroken weg is zonder melding, riskeert van ambtswege afgevoerd te worden.`,
          `Geen vaste woning: in strikt omschreven gevallen kan je een referentieadres nemen bij een particulier of het OCMW. Dat is gratis en mag nooit een adres poste restante zijn.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Kan ik mijn adreswijziging online doen?",
        antwoord: `In de meeste gemeenten wel, via het digitale loket van je nieuwe gemeente. Het kan niet via Mijn Burgerprofiel; daar zie je alleen welke gegevens het Rijksregister over je heeft. Op onze gemeentepagina's staat de link naar de aangifte van je gemeente.`,
      },
      {
        vraag: "Moet ik iets melden bij mijn oude gemeente?",
        antwoord: `Nee. Je doet de aangifte bij je nieuwe gemeente, die de uitschrijving op je oude adres regelt. Alleen bij een verhuis naar het buitenland meld je je vertrek bij je huidige gemeente.`,
      },
      {
        vraag: "Hoe lang duurt het voor de wijkagent langskomt?",
        antwoord: `De gemeente moet het woonstonderzoek binnen 15 werkdagen na je aangifte afronden. Geef bij je aangifte op wanneer je thuis bent, dan verloopt het sneller.`,
      },
      {
        vraag: "Kost een adreswijziging iets?",
        antwoord: `De aangifte zelf is gratis. Voor het aanpassen van de chip van je eID heb je je pincode nodig; neem die mee voor elk gezinslid.`,
      },
      {
        vraag: "Moet ik mijn rijbewijs of inschrijvingsbewijs laten aanpassen?",
        antwoord: `Het inschrijvingsbewijs van je voertuig hoeft niet aangepast te worden: de DIV krijgt je nieuwe adres automatisch. Over het rijbewijs hebben we geen officiële regel gevonden; vraag het na bij je gemeente.`,
      },
    ],
    bronnen: [
      { naam: "Vlaanderen.be: aangifte van adreswijziging", url: "https://www.vlaanderen.be/aangifte-van-adreswijziging" },
      {
        naam: "FOD Binnenlandse Zaken: omzendbrief inschrijving bevolkingsregisters (2025)",
        url: "https://www.ibz.rrn.fgov.be/sites/default/files/documents/nl/bevolking/omzendbrieven/20250613_Omzendbrief-herrinnering-inschrijving-bevolkingsregisters.pdf",
      },
      {
        naam: "Wikifin: wat moet je doen bij een verhuis binnen België",
        url: "https://www.wikifin.be/nl/woning-en-hypothecaire-lening/adreswijziging-verhuizen/wat-moet-je-doen-als-je-binnen-belgie",
      },
      { naam: "Belgium.be: adreswijziging DIV automatisch", url: "https://news.belgium.be/nl/node/21499/pdf" },
      { naam: "Vlaanderen.be: melding van tijdelijke afwezigheid", url: "https://www.vlaanderen.be/melding-van-tijdelijke-afwezigheid" },
      { naam: "Vlaanderen.be: referentieadres", url: "https://www.vlaanderen.be/referentieadres" },
    ],
  },
  {
    slug: "energie-en-water-verhuizen",
    titel: "Energie en water verhuizen: het energieovernamedocument",
    kort: "Meterstanden, het officiële document en de termijn van 7 dagen.",
    metaTitle: "Energie en water bij verhuis: energieovernamedocument",
    metaDescription:
      "Bij een verhuis vul je het energieovernamedocument in en meld je de verhuis binnen 7 kalenderdagen aan je leverancier. Zo regel je ook water en internet.",
    intro: [
      `Je energiecontract verhuist in principe met je mee. Wat je moet regelen, zijn de meterstanden op het moment van de overdracht, voor zowel je oude als je nieuwe adres. Daarvoor bestaat één officieel document: het energieovernamedocument van de Vlaamse Nutsregulator.`,
      `Wie dat overslaat, blijft facturen krijgen voor het oude adres of krijgt een geschat verbruik aangerekend. Hieronder lees je wat je invult, wanneer je het opstuurt en wat je doet als de andere partij niet meewerkt. Ook water, internet en een nieuwe aansluiting komen aan bod.`,
    ],
    secties: [
      {
        titel: "Elektriciteit en gas: het energieovernamedocument",
        stappen: [
          `Download het energieovernamedocument van de Vlaamse Nutsregulator. Op het formulier staan per adres de EAN-code van 18 cijfers, het meternummer, de meterstand in kWh of m³, de datum van de overname, de gegevens van wie vertrekt en wie overneemt, en de naam van elke leverancier.`,
          `Vul het in op het moment van de sleuteloverdracht, samen met de vorige of volgende bewoner of met de eigenaar. Maak twee exemplaren. Elk tekent met de vermelding "Gelezen en goedgekeurd".`,
          `Stuur jouw exemplaar binnen 7 dagen naar je eigen energieleverancier. Niet naar Fluvius, tenzij je sociale klant bent bij Fluvius. Een telefoontje alleen volstaat niet.`,
          `Bewaar een kopie of een foto. Fluvius raadt aan dat twee jaar te doen, want het document heeft juridische waarde bij een betwisting.`,
        ],
      },
      {
        titel: "Ook met een digitale meter",
        alineas: [
          `Een digitale meter stuurt zijn standen automatisch door naar Fluvius, en die uitlezing krijgt voorrang op wat je zelf invult. Toch raadt Fluvius aan om het energieovernamedocument ook dan in te vullen: vooral de datum van de verhuis heeft juridische waarde, en ze bepaalt vanaf wanneer het verbruik op wiens naam staat.`,
          `Is de meter op je nieuwe adres nog niet in dienst, neem dan contact op met Fluvius om hem te laten openen.`,
        ],
      },
      {
        titel: "Wil de andere partij niet tekenen?",
        alineas: [
          `Een document met maar één handtekening kan je leverancier niet aanvaarden. Neem daarom een gedateerde foto van de meterstanden, vul het document zelf in, vermeld dat de andere partij niet wilde tekenen en stuur alles samen met de foto naar je leverancier.`,
        ],
      },
      {
        titel: "Wat als je het niet meldt?",
        alineas: [
          `Dan blijf je facturen ontvangen voor het verbruik op je oude adres. Fluvius maakt zonder correcte meterstanden een schatting, en als er na 90 dagen nog geen overname is, kan de leverancier de levering stopzetten. Fluvius start dan een buurtonderzoek en beperkt een digitale meter eerst op afstand tot 10 ampère. De afsluit- en heraansluitkosten zijn voor wie verantwoordelijk is voor het verbruik.`,
        ],
      },
      {
        titel: "Niemand neemt over: leegstand",
        alineas: [
          `Neemt niemand de aansluiting op je oude adres over, dan laat je de meter sluiten of vraag je een leegstandscontract aan. De meeste leveranciers bieden zo'n contract of leegstandstarief aan. Een meter laten afsluiten kost geld, afhankelijk van het type meter, en is pas voordelig bij een lange leegstand.`,
          `Verhuur je de woning, dan ben je als eigenaar zelf verantwoordelijk voor het verbruik tussen twee huurders.`,
        ],
      },
      {
        titel: "Van leverancier veranderen bij je verhuis?",
        alineas: [
          `Je contract verhuist mee, je hoeft het niet stop te zetten. Je kan ook niet het contract van de vorige bewoner overnemen. Wil je van de verhuis gebruikmaken om over te stappen, dan kan dat altijd en gratis: de opzegvergoeding voor energiecontracten is in 2012 afgeschaft. Hou wel rekening met een opzegtermijn van minstens 3 weken.`,
        ],
      },
      {
        titel: "Water: De Watergroep in Limburg",
        alineas: [
          `In Limburg levert De Watergroep het drinkwater. Bij een verhuis regel je twee overnames: één voor je oude en één voor je nieuwe woning. Dat kan digitaal op je smartphone, met meteen een bevestiging, of met het overnamedocument op papier.`,
          `Je laadt het overnamedocument op samen met een foto van de watermeter en een foto van de identiteitskaart van de overnemer, en je vult het meternummer en de klantrekening van de vertrekkende klant in. Zonder meterstand maakt De Watergroep een schatting op basis van vroegere periodes om je eindfactuur te berekenen.`,
          `Blijft de woning leeg, vraag dan de stopzetting aan. Anders blijf je verantwoordelijk voor de vaste kosten. Een watermeter laten wegnemen kost ook geld.`,
        ],
      },
      {
        titel: "Internet en tv",
        alineas: [
          `Meld je verhuis ruim vooraf aan je operator. Proximus raadt minstens 5 weken aan; zelfinstallatie is gratis, een technicus kost € 79 behalve wanneer zelfinstallatie technisch niet kan of je een Pack hebt. Telenet vraagt 8 weken als een technicus je distributiekabel nog op het netwerk moet aansluiten, 3 weken als de kabel al aangesloten is en 8 dagen bij zelfinstallatie.`,
        ],
      },
      {
        titel: "Nieuwbouw: een nieuwe aansluiting",
        alineas: [
          `Een nieuwe aansluiting voor elektriciteit vraag je online aan bij Fluvius. Je krijgt een offerte, en na aanvaarding leg je een datum voor de werken vast. De kosten rekent Fluvius aan. Voor de indienststelling moet de installatie gekeurd zijn (AREI-keuringsattest). Nieuwbouw wordt in Vlaanderen niet meer op het aardgasnet aangesloten.`,
        ],
      },
      {
        titel: "Huur je? Vergeet de plaatsbeschrijving niet",
        alineas: [
          `Bij een huurcontract is een plaatsbeschrijving verplicht: huurder en verhuurder stellen ze samen op, dateren en tekenen ze ten laatste in de eerste maand van de huur, en laten ze gratis registreren. Neem de meterstanden van elektriciteit, gas en water mee op in dat document, met een foto. Zo liggen begin- en eindstand voor beide partijen vast.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Moet ik een nieuw energiecontract afsluiten als ik verhuis?",
        antwoord: `Nee, je contract verhuist mee naar je nieuwe adres. Je mag wel van de verhuis gebruikmaken om te vergelijken en over te stappen; dat is gratis, met een opzegtermijn van minstens 3 weken.`,
      },
      {
        vraag: "Heb ik het energieovernamedocument nodig met een digitale meter?",
        antwoord: `Ja. Fluvius raadt aan het ook dan in te vullen, zodat de verhuisdatum en de meterstanden op de dag van de overdracht voor beide partijen vastliggen. De automatische uitlezing krijgt wel voorrang op de ingevulde standen.`,
      },
      {
        vraag: "Hoeveel dagen heb ik om mijn verhuis te melden aan mijn energieleverancier?",
        antwoord: `Stuur het energieovernamedocument binnen 7 dagen na de sleuteloverdracht naar je leverancier. Sommige bronnen noemen 10 of 30 dagen, maar met 7 dagen zit je altijd goed.`,
      },
      {
        vraag: "Wat met de resterende mazout in de tank?",
        antwoord: `Daarvoor bestaat geen vaste regel; dat spreek je af met de koper of verhuurder en zet je in de verkoop- of huurovereenkomst. Bij verkoop bezorg je wel alle attesten en documenten van de stookolietank aan de koper.`,
      },
    ],
    bronnen: [
      {
        naam: "Vlaanderen.be: energiecontracten en verhuis",
        url: "https://www.vlaanderen.be/bouwen-wonen-en-energie/elektriciteit-en-aardgas/energiecontracten-en-verhuis",
      },
      { naam: "Energieovernamedocument (Vlaamse Nutsregulator, pdf)", url: "https://assets.vlaamsenutsregulator.be/2025-11/energieovernamedocument.pdf" },
      { naam: "Fluvius: elektriciteit na mijn verhuis", url: "https://www.fluvius.be/nl/verhuizen/elektriciteit-na-mijn-verhuis" },
      {
        naam: "Fluvius: verhuis niet gemeld bij energieleverancier",
        url: "https://www.fluvius.be/nl/energielevering-fluvius/stopzetting/verhuis-niet-gemeld-bij-energieleverancier",
      },
      {
        naam: "Vlaanderen.be: energieleveranciers en energiecontracten",
        url: "https://www.vlaanderen.be/bouwen-wonen-en-energie/elektriciteit-en-aardgas/energieleveranciers-en-energiecontracten",
      },
      {
        naam: "Vlaanderen.be: aansluiting voor elektriciteit of aardgas",
        url: "https://www.vlaanderen.be/bouwen-wonen-en-energie/elektriciteit-en-aardgas/aansluiting-voor-elektriciteit-of-aardgas",
      },
      { naam: "De Watergroep: ik verhuis", url: "https://www.dewatergroep.be/nl-be/drinkwater/wat-te-doen-bij/verhuizen/ik-verhuis" },
      { naam: "Proximus: verhuizen", url: "https://www.proximus.be/nl/id_cr_move/particulieren/support/verhuizen.html" },
      { naam: "Telenet: verhuizen", url: "https://www2.telenet.be/residential/nl/landingspaginas/verhuizen.html" },
      {
        naam: "Vlaanderen.be: een woninghuurovereenkomst sluiten",
        url: "https://www.vlaanderen.be/bouwen-wonen-en-energie/huren-en-verhuren/een-woninghuurovereenkomst-sluiten",
      },
    ],
  },
  {
    slug: "erkende-verhuizer-bkv",
    titel: "Erkende verhuizer: wat betekent het BKV-label?",
    kort: "Wat het label garandeert, hoe de aansprakelijkheid zit en hoe je schade meldt.",
    metaTitle: "Erkende verhuizer (BKV): wat betekent het label?",
    metaDescription:
      "Wat het label BKV Erkend Verhuizer van de Belgische Kamer der Verhuizers garandeert, hoe de aansprakelijkheid van € 125 per m³ werkt en hoe je schade meldt.",
    intro: [
      `Iedereen met een bestelwagen kan zich verhuizer noemen. Het label BKV Erkend Verhuizer van de Belgische Kamer der Verhuizers helpt je het kaf van het koren te scheiden: alleen firma's die wettelijk in orde zijn, verzekerd zijn en volgens het kwaliteitshandboek van de sector werken, mogen het dragen.`,
      `Hieronder lees je wat het label precies inhoudt, hoe je controleert of een verhuisfirma erkend is, wat de nationale verhuisvoorwaarden zeggen over schade en annulering, en waar je terechtkan als het toch misloopt.`,
    ],
    secties: [
      {
        titel: "Wat is de Belgische Kamer der Verhuizers?",
        alineas: [
          `De Belgische Kamer der Verhuizers (BKV) is de beroepsfederatie van de verhuissector. Ze bestaat sinds 1902, groepeert meer dan honderd professionele verhuisbedrijven en is erkend door de FOD Economie. De federatie vertegenwoordigt de werkgevers in de paritaire comités van de verhuissector.`,
          `De BKV kent het label BKV Erkend Verhuizer toe. Op de website erkendeverhuizers.be vind je de zoekfunctie "Vind je verhuizer" en een ledenlijst die de federatie geregeld bijwerkt. Verhuisliftbedrijven hebben een aparte lijst.`,
        ],
      },
      {
        titel: "Wat moet een erkende verhuizer bewijzen?",
        alineas: [
          `Het label is geen lidkaart. Elke firma vult om de twee jaar een zelfassessment in op basis van het kwaliteitshandboek van de BKV en moet op elke pijler minstens 60% scoren. Een greep uit de voorwaarden:`,
        ],
        lijst: [
          `Boekhouding, fiscale en sociale verplichtingen in orde.`,
          `Een vervoersvergunning. Die is wettelijk verplicht voor voertuigen met een nuttig laadvermogen van meer dan 500 kg. Een nationale vergunning geldt alleen in België, een communautaire vergunning ook in de rest van de Europese Economische Ruimte en Zwitserland.`,
          `Voldoende verzekerd tegen de risico's van de sector.`,
          `Minstens 80% van het personeel heeft de vereiste kwalificaties en een verhuizerskaart.`,
          `Een jaarlijks actieplan voor veiligheid en een klachtenprocedure met registratie.`,
        ],
      },
      {
        titel: "De verhuizerskaart",
        alineas: [
          `Verhuizers die in orde zijn met de sociale zekerheid, hebben een verhuizerskaart van het Sociaal Fonds Verhuizingen: een P-kaart voor wie een contract van onbepaalde duur heeft, een S-kaart per maand voor tijdelijke krachten. De sociale inspectie vraagt die kaarten bij controles. Vraag gerust of de ploeg die bij jou komt er een heeft; het is de eenvoudigste manier om zwartwerk uit te sluiten.`,
          `De sector kampt met malafide spelers. De BKV ondertekende in 2024 het Plan voor Eerlijke Concurrentie met de overheid en meldt naar eigen zeggen wekelijks wanpraktijken aan de federale inspectiediensten. Inspecteurs mogen zonder voorafgaande waarschuwing binnenvallen en vragen dan onder meer de Dimona-aangiften, de vervoersvergunning en de verhuizerskaarten op.`,
        ],
      },
      {
        titel: "Hoe zit het met de aansprakelijkheid?",
        alineas: [
          `Volgens de algemene verhuisvoorwaarden van de BKV (versie september 2023) is de aansprakelijkheid van de verhuizer beperkt tot € 125 per kubieke meter verloren of beschadigde goederen. Die grens geldt niet bij opzet of grove fout. Voor een inboedel van 40 m³ komt dat op maximaal € 5.000, veel minder dan de werkelijke waarde van de meeste inboedels.`,
          `Daarom raden de voorwaarden een verzekering alle risico's aan. De verzekerde waarde moet overeenstemmen met de vervangingswaarde van alles wat verhuisd wordt; verzeker je te laag, dan geldt de evenredigheidsregel en krijg je ook bij schade maar een deel terug. Je mag ook je eigen verzekeraar aanspreken, als die afstand doet van verhaal op de verhuizer. Hoeveel de verzekering kost, staat niet in de voorwaarden; vraag het bij de offerte.`,
        ],
      },
      {
        titel: "Schade melden: de termijnen",
        lijst: [
          `Zichtbare schade: meteen, en uiterlijk bij de aflevering op het afleveringsdocument dat je tekent. Loop dus met de ploeg door de woning voor ze vertrekken.`,
          `Niet-zichtbare schade: ten laatste binnen 3 werkdagen na de levering, per e-mail of aangetekende brief.`,
          `Een factuur betaal je binnen 14 kalenderdagen; wil je ze betwisten, dan heb je 8 kalenderdagen.`,
        ],
      },
      {
        titel: "Annuleren: wat kost dat?",
        alineas: [
          `De BKV-voorwaarden werken met een trap: 10% van de prijs als je meer dan een week vooraf annuleert, 25% tussen 7 en 3 dagen vooraf, 50% tussen 3 dagen en 24 uur vooraf, en 100% binnen de laatste 24 uur. Leg je verhuisdatum dus pas vast als de sleuteloverdracht zeker is, of vraag aan de firma wat haar eigen regeling is.`,
        ],
      },
      {
        titel: "Prijzen moeten inclusief btw zijn",
        alineas: [
          `Voor consumenten moet een prijs volgens het Wetboek van economisch recht altijd de totaalprijs zijn, inclusief btw en andere taksen. Veel verhuisfirma's zetten hun uurtarief toch exclusief btw op hun website, omdat ze ook voor bedrijven werken. Vraag in je offerte uitdrukkelijk de totaalprijs inclusief 21% btw en wanneer de klok start en stopt.`,
        ],
      },
      {
        titel: "Loopt het mis? Hier kan je terecht",
        alineas: [
          `Probeer eerst een oplossing met de verhuisfirma zelf, schriftelijk. Lukt dat niet, dan kan je gratis een dossier indienen bij de Consumentenombudsdienst, een autonome openbare dienst die bemiddelt tussen consumenten en ondernemingen en streeft naar een afhandeling binnen 90 dagen. Gaat het om een erkende verhuizer, dan kan je ook de klantendienst van erkendeverhuizers.be contacteren.`,
        ],
      },
      {
        titel: "Vijf vragen voor je tekent",
        lijst: [
          `Draag je het label BKV Erkend Verhuizer, en sta je in de ledenlijst?`,
          `Is de prijs inclusief 21% btw, en wanneer start en stopt de klok?`,
          `Heb je een vervoersvergunning en hebben je mensen een verhuizerskaart?`,
          `Tot welk bedrag ben ik verzekerd, en wat kost een verzekering alle risico's op de vervangingswaarde van mijn inboedel?`,
          `Wie vraagt het parkeerverbod aan bij de gemeente?`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Is een verzekering verplicht bij een verhuis?",
        antwoord: `Een verzekering alle risico's is volgens de voorwaarden van de BKV aangeraden maar niet verplicht. Zonder die verzekering is de aansprakelijkheid van de verhuizer beperkt tot € 125 per m³.`,
      },
      {
        vraag: "Hoe controleer ik of een verhuizer erkend is?",
        antwoord: `Zoek de firma op via "Vind je verhuizer" op erkendeverhuizers.be of in de ledenlijst van de Belgische Kamer der Verhuizers. Staat ze er niet in, dan mag ze het label niet gebruiken.`,
      },
      {
        vraag: "Binnen hoeveel dagen moet ik verhuisschade melden?",
        antwoord: `Zichtbare schade meld je bij de aflevering op het document dat je tekent. Verborgen schade meld je binnen 3 werkdagen per e-mail of aangetekende brief. Dat zijn de termijnen uit de BKV-voorwaarden; een firma die eigen voorwaarden gebruikt, kan andere termijnen hanteren.`,
      },
      {
        vraag: "Mag een verhuisfirma zonder vervoersvergunning werken?",
        antwoord: `Niet met voertuigen met een nuttig laadvermogen boven 500 kg, en dat is zowat elke verhuiswagen. Een firma zonder vergunning is dus een rode vlag.`,
      },
    ],
    bronnen: [
      { naam: "Erkende Verhuizers: over ons", url: "https://erkendeverhuizers.be/over-ons/" },
      { naam: "Erkende Verhuizers: vind je verhuizer", url: "https://erkendeverhuizers.be/vind-je-verhuizer/" },
      {
        naam: "BKV: kwaliteitshandboek verhuis en meubelbewaring (pdf)",
        url: "https://erkendeverhuizers.be/wp-content/uploads/2024/02/Kwaliteitshandboek-Verhuis-en-Meubelbewaring-versie-201913.pdf",
      },
      {
        naam: "BKV: ledenlijst verhuizers (pdf)",
        url: "https://cbd-bkv.be/wp-content/uploads/2026/01/BKV-leden-lijst-Verhuizers-20-01-2026.pdf",
      },
      {
        naam: "BKV: algemene voorwaarden nationale verhuizingen (pdf)",
        url: "https://cbd-bkv.be/wp-content/uploads/2023/08/Algemene-voorwaarden-BKV.pdf",
      },
      { naam: "Sociaal Fonds Verhuizingen: verhuizerskaarten", url: "https://sociaalfonds-verhuizingen.be/verhuizerskaarten/" },
      {
        naam: "SIOD: checklist controles verhuissector (pdf)",
        url: "https://www.siod.belgie.be/sites/default/files/2026-03/20260331_Checklist%20Verhuissector.pdf",
      },
      { naam: "Consumentenombudsdienst", url: "https://consumentenombudsdienst.be/nl" },
      {
        naam: "UNIZO: prijsaanduiding",
        url: "https://www.unizo.be/ondernemersgids/bedrijfsvoering/marketing-en-verkoop/prijsaanduiding",
      },
    ],
  },
  {
    slug: "verhuisverlof",
    titel: "Verhuisverlof in België: heb je recht op een vrije dag?",
    kort: "Geen wettelijk recht, maar soms wel via je sector of arbeidsreglement.",
    metaTitle: "Verhuisverlof België: heb je recht op een verhuisdag?",
    metaDescription:
      "Er bestaat in België geen wettelijk verhuisverlof. Sommige sectoren en werkgevers geven wel een verhuisdag. Zo ga je na waar je recht op hebt.",
    intro: [
      `Kort antwoord: nee, in België bestaat geen algemeen wettelijk recht op verlof voor een verhuis. Verhuizen staat niet in de wettelijke lijst van klein verlet, en ook niet in de lijst van het verlof om dwingende redenen.`,
      `Toch krijgen sommige werknemers wel een verhuisdag. Dat komt dan uit een sector-cao, een bedrijfsakkoord, het arbeidsreglement of je eigen contract. Hieronder lees je wat de wet zegt, waar je een eventuele verhuisdag terugvindt en wat je opties zijn als je er geen hebt.`,
    ],
    secties: [
      {
        titel: "Wat zegt de wet over klein verlet?",
        alineas: [
          `Klein verlet, officieel omstandigheidsverlof, geeft je het recht om met behoud van loon afwezig te blijven voor een beperkte lijst van familiale en burgerlijke gebeurtenissen. Die lijst staat in het koninklijk besluit van 28 augustus 1963 en wordt gepubliceerd door de FOD Werkgelegenheid.`,
          `In die lijst staan onder meer je eigen huwelijk (2 dagen), het huwelijk van een kind, broer, zus of ouder (1 dag), het overlijden van je partner of kind (10 dagen), het overlijden van een ouder of schoonouder (3 dagen), de plechtige communie of het feest van de vrijzinnige jeugd van een kind (1 dag), en de tijd die je nodig hebt als jurylid, getuige of bijzitter in een stembureau.`,
          `Een verhuis komt in die lijst niet voor. Een werkgever is dus wettelijk niet verplicht om je een betaalde dag te geven om te verhuizen.`,
        ],
      },
      {
        titel: "Waar een verhuisdag wél vandaan kan komen",
        alineas: [
          `Sectoren en bedrijven mogen gunstiger zijn dan de wet. De sociale secretariaten raden werkgevers daarom aan om altijd na te kijken of hun paritair comité een voordeligere regeling heeft. Zo geven sommige sectoren drie dagen voor een huwelijk in plaats van twee.`,
          `Voor een verhuisdag hebben we in de publiek raadpleegbare cao-teksten geen sector gevonden die er standaard één toekent. Websites die tabellen tonen met sectoren en aantallen verhuisdagen, baseren zich vaak op Nederlandse cao's, die in België niet gelden. Neem die cijfers dus niet over.`,
          `Een verhuisdag bestaat in België dus alleen als hij uitdrukkelijk is opgenomen in een cao van je sector, een akkoord op bedrijfsniveau, het arbeidsreglement of je arbeidsovereenkomst. Ook bij de Vlaamse overheid staat verhuizen niet in de lijst van het omstandigheidsverlof uit het personeelsstatuut.`,
        ],
      },
      {
        titel: "Zo ga je het na",
        stappen: [
          `Lees je arbeidsreglement onder klein verlet, omstandigheidsverlof of bijzonder verlof. Daar staat wat je bedrijf toekent bovenop de wet.`,
          `Vraag het aan je personeelsdienst of sociaal secretariaat. Zij kennen de regeling van je paritair comité.`,
          `Ben je lid van een vakbond, vraag dan wat de sector-cao voorziet. De vakbonden benadrukken zelf dat veel regels afhangen van de sector waarin je werkt.`,
          `Werk je bij een lokaal bestuur of de overheid, kijk dan in de rechtspositieregeling. Bij sommige provinciebesturen krijg je 2 werkdagen bij een verandering van standplaats die de dienst oplegt, maar niet bij een verhuis op eigen initiatief.`,
        ],
      },
      {
        titel: "Verlof om dwingende redenen: niet voor een geplande verhuis",
        alineas: [
          `Het verlof om dwingende redenen (cao nr. 45) geeft je maximaal 10 arbeidsdagen per jaar voor een onvoorzienbare gebeurtenis die los van het werk staat en je dringende tussenkomst vraagt: ziekte of ongeval van een huisgenoot, ernstige schade aan je woning door brand of een natuurramp, of een verplichte verschijning voor de rechtbank. Die dagen zijn onbetaald, tenzij je sector of werkgever anders beslist.`,
          `Een verhuis die je weken op voorhand plant, is geen onvoorzienbare gebeurtenis. De cao laat wel toe dat werkgever en werknemer in onderling akkoord een andere gebeurtenis als dwingende reden beschouwen. Dat is dus bespreekbaar, maar geen recht.`,
        ],
      },
      {
        titel: "Geen verhuisdag? Dit zijn je opties",
        lijst: [
          `Neem een gewone vakantiedag. Vraag hem tijdig aan: je werkgever mag een verlofaanvraag weigeren, maar wie niet reageert op een tijdige aanvraag, wordt geacht akkoord te gaan.`,
          `Gebruik inhaalrust of recuperatie als je die hebt opgebouwd.`,
          `Vraag een dag onbetaald verlof. Dat kan alleen in onderling akkoord.`,
          `Verhuis op zaterdag. Reken dan wel op een toeslag bij de verhuisfirma, vaak tot 25%.`,
          `Laat de verhuisfirma inpakken en laden terwijl jij maar een halve dag vrij neemt voor de sleuteloverdracht en de meterstanden.`,
        ],
      },
      {
        titel: "Wat je wel kan inplannen rond je verhuis",
        alineas: [
          `Ook zonder verhuisdag kan je de administratie spreiden. Het parkeerverbod vraag je in de meeste Limburgse gemeenten 5 tot 15 dagen vooraf aan, in Kinrooi zelfs zes weken. Je adreswijziging meld je binnen 8 werkdagen na de verhuis, meestal online, dus daarvoor hoef je geen verlof te nemen. Alleen het bezoek van de wijkagent en het aanpassen van je identiteitskaart vragen dat je even thuis of op het gemeentehuis bent.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Hoeveel dagen verhuisverlof krijg je in België?",
        antwoord: `Wettelijk geen. Of je een dag krijgt, hangt af van je sector, je cao of je werkgever. Websites die één of meer wettelijke verhuisdagen vermelden, worden tegengesproken door de wettelijke lijst van klein verlet, waarin verhuizen niet voorkomt.`,
      },
      {
        vraag: "Mag mijn werkgever een verhuisdag weigeren?",
        antwoord: `Staat de verhuisdag in je cao, arbeidsreglement of contract, dan kan je werkgever hem niet weigeren, net zoals bij het wettelijke klein verlet. Staat hij nergens, dan is het een gunst. Een gewone vakantiedag mag je werkgever weigeren, maar niet zonder reden en niet door te zwijgen op een tijdige aanvraag.`,
      },
      {
        vraag: "Is een verhuis een dwingende reden?",
        antwoord: `Nee. Het verlof om dwingende redenen is bedoeld voor onvoorzienbare gebeurtenissen. Een geplande verhuis valt er alleen onder als jij en je werkgever dat samen zo afspreken.`,
      },
      {
        vraag: "Krijgen ambtenaren verhuisverlof?",
        antwoord: `In het Vlaams personeelsstatuut staat verhuizen niet bij het omstandigheidsverlof. Voor federale ambtenaren konden we de officiële lijst niet nakijken. Vraag het na bij je personeelsdienst en neem geen cijfers over van websites zonder bron.`,
      },
    ],
    bronnen: [
      {
        naam: "FOD Werkgelegenheid: klein verlet",
        url: "https://werk.belgie.be/nl/themas/arbeidsovereenkomsten/schorsing-van-de-arbeidsovereenkomst/oorzaken-van-schorsing-hoofde-12",
      },
      {
        naam: "FOD Werkgelegenheid: verlof om dwingende redenen",
        url: "https://werk.belgie.be/nl/themas/arbeidsovereenkomsten/schorsing-van-de-arbeidsovereenkomst/oorzaken-van-schorsing-hoofde-7",
      },
      {
        naam: "Securex: overzichtstabel klein verlet",
        url: "https://www.securex.be/nl/lex4you/werkgever/themas/vakantie-afwezigheid/tijd-voor-de-werknemer/overzichtstabel",
      },
      {
        naam: "SD Worx: veelgestelde vragen klein verlet",
        url: "https://www.sdworx.be/nl-be/nieuws-inspiratie/afwezigheden/veelgestelde-vragen-klein-verlet",
      },
      {
        naam: "ACV: klein verlet",
        url: "https://www.hetacv.be/je-rechten/werken-in-de-prive-sector/vakantie/klein-verlet",
      },
      {
        naam: "Vlaams personeelsstatuut: omstandigheidsverlof",
        url: "https://www.vlaanderen.be/vlaams-personeelsstatuut/inhoudstafel-statuut/inhoudstafel-deel-x-de-verloven-en-dienstvrijstellingen/deel-x-de-verloven-en-dienstvrijstellingen-6",
      },
    ],
  },
  {
    slug: "grofvuil-en-opruimen-bij-verhuis",
    titel: "Opruimen voor je verhuis: grofvuil en recyclagepark in Limburg",
    kort: "Wat Limburg.net ophaalt, wat het kost en wat gratis naar het recyclagepark mag.",
    metaTitle: "Grofvuil bij verhuis in Limburg: ophaling en prijzen",
    metaDescription:
      "Grofvuil laten ophalen in Limburg kost € 30 tot 2 m³ en € 60 tot 4 m³. Zo vraag je het aan bij Limburg.net en zo werkt het recyclagepark.",
    intro: [
      `Elke kubieke meter die je niet meeneemt, hoef je niet te verhuizen. Opruimen voor de verhuis verlaagt dus rechtstreeks je factuur: een verhuisfirma rekent per uur, en minder volume is minder uren.`,
      `In Limburg regelt de afvalintercommunale Limburg.net de ophaling van grofvuil en de meeste recyclageparken. Hieronder lees je wat er bij het grofvuil mag, wat het kost aan huis en op het park, en waar herbruikbare spullen gratis naartoe kunnen.`,
    ],
    secties: [
      {
        titel: "Eerst hergebruik, dan afval",
        alineas: [
          `Herbruikbare meubels en huisraad gaan eerst naar De Kringwinkel. Grote stukken die je niet zelf kan wegbrengen, laat je gratis ophalen: je vult je postcode in op kringwinkel.be en maakt online een afspraak of vraagt een terugbelverzoek. Niet elke Kringwinkel haalt aan huis op, dus kijk dat vooraf na. Kleding geef je niet mee met de ophaling maar in de kledingcontainer.`,
          `Moet een hele woning leeg, bijvoorbeeld na een overlijden of bij een verhuis naar een woonzorgcentrum, dan bieden sommige Kringwinkels een betalende inboedelopruiming aan: gratis inventaris en voorstel, daarna een offerte voor werkuren, verplaatsing en parkeerborden, en de woning wordt bezemschoon achtergelaten.`,
          `Werkende elektrotoestellen kunnen ook naar de kringwinkel. Kapotte elektro lever je gratis in op het recyclagepark, bij een elektrowinkel of in een supermarkt met een Recupel-inzamelpunt.`,
        ],
      },
      {
        titel: "Wat is grofvuil, en wat niet?",
        alineas: [
          `Grofvuil is afval dat niet selectief ingezameld wordt, niet herbruikbaar is en te groot of te zwaar is voor de huisvuilzak of -container. Denk aan meubels met een gemengde samenstelling, tapijt en linoleum, een zwembad, glaswol, een reiskoffer of een polyester douchebak.`,
          `Geen grofvuil zijn oude metalen, elektro, bouw- en sloopafval, hout, harde plastics en piepschuim: die hebben een eigen container op het park en zijn vaak gratis. Ook herbruikbare spullen en gasflessen horen niet bij het grofvuil. Een droge matras in één stuk is sinds de recyclagebijdrage van Valumat gratis op het recyclagepark; een vervuilde of beschimmelde matras en een boxspring zijn wel grofvuil.`,
        ],
      },
      {
        titel: "Grofvuil laten ophalen",
        stappen: [
          `Meld je aan op je account bij Limburg.net (mijn.limburg.net), met eID of itsme.`,
          `Kies de afvalsoort grofvuil en een datum.`,
          `Betaal online: € 30 tot 2 m³, € 60 voor 2 tot 4 m³. Meer dan 4 m³ per ophaling kan niet. Sommige gemeentepagina's tonen nog de oude prijs van € 20; het tarief van 2026 is € 30.`,
          `Zet het grofvuil buiten de avond voor de ophaling. Volle zakken of dozen worden niet meegenomen: alleen losse, grote stukken.`,
        ],
      },
      {
        titel: "Zelf naar het recyclagepark",
        alineas: [
          `Limburg.net baat 32 recyclageparken uit. Je komt binnen met je eID of toegangskaart, en elke fractie wordt apart gewogen op een weegbrug die tot 5 kg nauwkeurig is; minder dan 5 kg wordt als 5 kg aangerekend. Voertuigen boven 5.000 kg mogen niet binnen. Betalen kan met Bancontact aan de betaalzuil of via een voorstorting op je account.`,
          `Recycleerbaar afval lever je onbeperkt en gratis in: elektro, metalen, textiel, pmd, papier en karton, batterijen, harde plastics en glas. Grofvuil kost sinds 1 januari 2026 € 0,25 per kg, net als roofing en geïmpregneerd hout. Gewoon hout kost € 0,11 per kg en gemengd bouwpuin € 0,08 per kg. Voor tuinafval (400 kg), zuiver steenpuin (1.000 kg) en asbest (600 kg) heeft elk gezin een gratis quotum per jaar; asbest moet verpakt zijn in een verpakking die je op het park koopt.`,
          `Alle Limburg.net-parken zijn gesloten op zondag, maandag en feestdagen. In de winter zijn ze open van dinsdag tot zaterdag van 9 tot 12.30 en van 13 tot 16 uur; in de zomer op dinsdag tot 18 uur en op woensdag tot vrijdag tot 17 uur.`,
          `Niet elke gemeente zit bij de Limburg.net-parken: Hasselt (behalve Kortessem), Genk, Sint-Truiden, Dilsen-Stokkem en enkele andere gemeenten hebben eigen stedelijke parken met eigen regels en tarieven. Op onze gemeentepagina's staat welk park bij jouw gemeente hoort.`,
        ],
      },
      {
        titel: "Wanneer begin je?",
        lijst: [
          `6 tot 8 weken vooraf: sorteer kamer per kamer en maak drie stapels: mee, Kringwinkel, weg.`,
          `4 weken vooraf: vraag de ophaling van de Kringwinkel aan, want die heeft een wachttijd.`,
          `2 tot 3 weken vooraf: boek de grofvuilophaling bij Limburg.net en plan een rit naar het recyclagepark.`,
          `De laatste week: gooi niets meer in de grofvuilstapel; wat dan nog opduikt, gaat mee of naar het park na de verhuis.`,
        ],
      },
      {
        titel: "Tip voor wie huurt",
        alineas: [
          `Bij de plaatsbeschrijving bij uittrede moet de woning leeg en proper zijn. Wat je laat staan, laat de verhuurder op jouw kosten weghalen, en dat is bijna altijd duurder dan een grofvuilophaling van € 30. Plan het opruimen dus voor de verhuisdag, niet erna.`,
        ],
      },
    ],
    prijzen: [prijsGrofvuil],
    faq: [
      {
        vraag: "Wat kost grofvuil laten ophalen in Limburg?",
        antwoord: `€ 30 voor maximaal 2 m³ en € 60 voor 2 tot 4 m³ per ophaling, aan te vragen via je account bij Limburg.net.`,
      },
      {
        vraag: "Kan de verhuisfirma mijn afval meenemen?",
        antwoord: `Dat is geen standaarddienst. Sommige firma's werken samen met een ontruimingsbedrijf. Vraag het in je offerte, en vergelijk met de prijs van een Limburg.net-ophaling of een Kringwinkel-ophaling, die gratis is voor herbruikbare spullen.`,
      },
      {
        vraag: "Mag een matras bij het grofvuil?",
        antwoord: `Een droge matras in één geheel lever je gratis in op het recyclagepark. Een vervuilde of beschimmelde matras en een boxspring zijn grofvuil en betaal je per kg.`,
      },
      {
        vraag: "Wat met mijn oude elektrotoestellen?",
        antwoord: `Werkende toestellen gaan naar de Kringwinkel. Kapotte toestellen lever je gratis in op het recyclagepark, bij een elektrowinkel of in een supermarkt met een Recupel-inzamelpunt.`,
      },
    ],
    bronnen: [
      { naam: "Limburg.net: grofvuil", url: "https://limburg.net/grofvuil" },
      { naam: "Limburg.net: grofvuil aan huis", url: "https://limburg.net/grofvuil-ophaling-aan-huis" },
      { naam: "Limburg.net: tarieven recyclagepark", url: "https://limburg.net/recyclageparken/tarieven" },
      { naam: "Limburg.net: werking recyclagepark", url: "https://limburg.net/recyclageparken/werking" },
      { naam: "Limburg.net: openingsuren", url: "https://limburg.net/recyclageparken/openingsuren" },
      { naam: "De Kringwinkel: ophalingen", url: "https://www.kringwinkel.be/ophalingen" },
      { naam: "De Kringwinkel: inboedelopruiming", url: "https://www.kringwinkel.be/inboedelopruiming" },
      { naam: "Valumat: oude matras", url: "https://www.valumat.be/nl" },
      { naam: "Recupel: elektro inleveren", url: "https://www.recupel.be/nl/lampen-en-elektro-inleveren/recycleren-begint-bij-jou" },
    ],
  },
];

export function getArtikel(slug: string): Artikel | undefined {
  return artikels.find((a) => a.slug === slug);
}
