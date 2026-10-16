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
      `Hieronder zie je hoe die bedragen opgebouwd zijn, zodat je een offerte kan lezen en vergelijken.`,
    ],
    secties: [
      {
        titel: "Hoe rekent een verhuisfirma?",
        alineas: [
          `De meeste verhuisfirma's rekenen per uur voor een ploeg met een vrachtwagen. De klok start vaak bij vertrek uit het depot en wordt per begonnen half uur gerekend, met een minimum van 2 uur.`,
          `Sommige firma's geven na een plaatsbezoek een vaste prijs. Dat geeft zekerheid, maar vraag dan wat er gebeurt als het volume groter blijkt dan geschat.`,
        ],
      },
      {
        titel: "Wat maakt een verhuis duurder?",
        lijst: [
          `Een verhuis op zaterdag: tot 25% toeslag. Sommige bronnen noemen voor het weekend 25% tot 50%.`,
          `Hogere verdiepingen zonder lift, of een lift die te klein is voor meubels.`,
          `Een verhuislift: € 50 tot € 90 per uur extra.`,
          `Een lange draagafstand omdat de wagen niet voor de deur kan staan.`,
          `Kilometers: vaak € 0,50 tot € 1 per km, soms pas na de eerste 20 km.`,
          `Inpakken, demonteren en monteren.`,
        ],
      },
      {
        titel: "Zo hou je de prijs laag",
        lijst: [
          `Verhuis op een weekdag in het midden van de maand.`,
          `Zorg dat alles ingepakt en gedemonteerd klaarstaat voor de ploeg aankomt.`,
          `Regel het parkeerverbod op tijd, zodat de wagen voor de deur staat.`,
          `Breng zelf alvast dozen en kleine spullen over.`,
          `Ruim op voor je verhuist: elke kubieke meter minder scheelt tijd.`,
        ],
      },
      {
        titel: "Btw en verzekering",
        alineas: [
          `Op verhuisdiensten voor particulieren geldt 21% btw. Vergelijkers vermelden zelden of hun bedragen inclusief btw zijn, en verhuisfirma's publiceren hun uurtarief vaak exclusief. Vraag dus altijd de totaalprijs inclusief btw.`,
          `De aansprakelijkheid van een verhuizer is volgens de sectorvoorwaarden beperkt tot € 125 per m³. Een verzekering alle risico's is aangeraden als je waardevolle stukken hebt, maar niet verplicht.`,
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
        antwoord: `De richtprijzen die een vergelijker specifiek voor Limburg publiceert, liggen in dezelfde vork als de Belgische: € 600 tot € 850 voor een appartement en € 1.400 tot € 1.700 voor een villa.`,
      },
    ],
    bronnen: [
      { naam: "Bobex", url: "https://www.bobex.be/nl-be/verhuisfirmas/" },
      { naam: "Callmepower", url: "https://callmepower.be/nl/verhuizen/verhuisfirma" },
      { naam: "Verhuisoffertes (regio Limburg)", url: "https://be.verhuisoffertes.com/regio/verhuisfirma-limburg/" },
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
      `Een verhuislift met één bediener kost € 50 tot € 90 per uur. Zonder bediener huur je een lift vanaf ongeveer € 90 tot € 150 per dag inclusief btw.`,
      `De uurprijs is maar een deel van de rekening. Minimumafname, verplaatsing en de dag van de week tellen mee.`,
    ],
    secties: [
      {
        titel: "Waaruit bestaat de prijs?",
        lijst: [
          `Het uurtarief, met een minimum van 1 tot 2 uur.`,
          `De verplaatsing: rond € 1 per km of een vaste voorrijkost.`,
          `De verdieping: vanaf ongeveer de 6de of 7de verdieping is een duurdere ladderwagen nodig.`,
          `Het aantal bedieners. Met twee bedieners gaat het sneller, maar betaal je € 90 tot € 130 per uur.`,
          `Zaterdag: één aanbieder rekent € 90 in plaats van € 70 per uur.`,
        ],
      },
      {
        titel: "Voorbeeld: appartement op de derde verdieping",
        alineas: [
          `Stel dat je inboedel in 2 uur naar beneden moet. Met een lift van € 70 per uur inclusief btw betaal je € 140, plus de verplaatsing. Doe je het met een verhuisfirma die zelf een lift meebrengt, dan zit de lift vaak als toeslag in het uurtarief: één firma rekent € 128 in plaats van € 110 per uur exclusief btw voor een wagen met twee verhuizers en lift.`,
        ],
      },
      {
        titel: "Vergeet de gemeente niet",
        alineas: [
          `Staat de lift op openbaar domein, dan komt daar de kost van de vergunning en de borden bij. In Genk is de eerste dag gratis en kosten de borden eenmalig € 50. In Hasselt betaal je per vierkante meter per dag, met € 25 voor het plaatsen van de borden.`,
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
    ],
    bronnen: [
      { naam: "Locationlift (Hasselt)", url: "https://locationlift.be/verhuislift-hasselt/" },
      { naam: "Studentverhuizers", url: "https://studentverhuizers.be/verhuislift-huren/" },
      { naam: "Verhuizingen Deceuninck (tarieven)", url: "https://verhuizingendeceuninck.be/tarieven/" },
      { naam: "Boels: ladderlift 18 m", url: "https://www.boels.com/nl-be/huren/ladderlift-18-m/p/11801" },
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
      `Een verhuis loopt het vlotst als je de administratie spreidt over de weken ervoor. Deze checklist volgt de Belgische regels en termijnen.`,
    ],
    secties: [
      {
        titel: "6 tot 8 weken vooraf",
        lijst: [
          `Leg je verhuisdatum vast en vraag offertes aan bij verhuisfirma's.`,
          `Zeg je huur op binnen de termijn van je contract en plan de plaatsbeschrijving bij uittrede.`,
          `Kijk in je arbeidsreglement of je recht hebt op een verhuisdag. Een wettelijk recht bestaat er niet.`,
          `Begin met opruimen: wat niet meegaat, gaat naar de kringwinkel of het recyclagepark.`,
        ],
      },
      {
        titel: "3 tot 5 weken vooraf",
        lijst: [
          `Vraag het parkeerverbod aan bij de gemeente. In Kinrooi moet dat zes weken vooraf, in de meeste andere gemeenten 5 tot 15 dagen.`,
          `Meld je verhuis bij je internetprovider. Operatoren vragen 2 tot 5 weken, afhankelijk van de aanbieder.`,
          `Bestel verhuisdozen en begin met de kamers die je het minst gebruikt.`,
          `Reserveer indien nodig een verhuislift of opslagruimte.`,
        ],
      },
      {
        titel: "De laatste week",
        lijst: [
          `Ontdooi de diepvriezer en maak de koelkast leeg.`,
          `Hou een doos apart met wat je de eerste dag nodig hebt: papieren, laders, gereedschap, koffie.`,
          `Controleer of de parkeerverbodsborden op tijd staan.`,
          `Download het energieovernamedocument en het overnameformulier van De Watergroep.`,
        ],
      },
      {
        titel: "Op de verhuisdag",
        lijst: [
          `Noteer de meterstanden van elektriciteit, gas en water op beide adressen, en neem er een foto van.`,
          `Vul het energieovernamedocument in samen met de vorige of volgende bewoner.`,
          `Loop met de verhuizers door de woning en noteer zichtbare schade meteen.`,
        ],
      },
      {
        titel: "Na de verhuis",
        lijst: [
          `Meld je adreswijziging binnen 8 werkdagen bij je nieuwe gemeente, online of aan het loket.`,
          `Bezorg het energieovernamedocument uiterlijk 7 kalenderdagen na de verhuisdatum aan je leverancier.`,
          `Wacht op het bezoek van de wijkagent en laat daarna de chip van je identiteitskaart aanpassen. Neem je pincode mee.`,
          `Verwittig zelf je werkgever, bank, verzekeraar en telecomoperator. Die krijgen je nieuwe adres niet automatisch.`,
          `Meld verborgen verhuisschade binnen 2 werkdagen aan de verhuisfirma.`,
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
        antwoord: `Overheidsdiensten zoals de sociale zekerheid, je ziekenfonds en de VDAB. Je werkgever, bank, verzekeraar, energieleverancier en telecomoperator moet je zelf verwittigen.`,
      },
    ],
    bronnen: [
      { naam: "Vlaanderen.be: aangifte van adreswijziging", url: "https://www.vlaanderen.be/aangifte-van-adreswijziging" },
      { naam: "Belgium.be: adreswijziging", url: "https://www.belgium.be/nl/huisvesting/verhuizen/adreswijziging" },
      { naam: "Vlaanderen.be: energiecontracten en verhuis", url: "https://www.vlaanderen.be/energiecontracten-en-verhuis" },
      { naam: "De Watergroep: ik verhuis", url: "https://www.dewatergroep.be/nl-be/drinkwater/wat-te-doen-bij/verhuizen/ik-verhuis" },
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
      `Na een verhuis meld je je nieuwe adres binnen 8 werkdagen bij de dienst Burgerzaken van je nieuwe gemeente. Dat kan in de meeste gemeenten online.`,
    ],
    secties: [
      {
        titel: "De aangifte in vier stappen",
        stappen: [
          `Doe de aangifte online via het digitale loket van je nieuwe gemeente, of aan het loket. Eén meerderjarig gezinslid kan het voor het hele gezin doen.`,
          `Een wijkagent of ambtenaar komt controleren of je werkelijk op het adres woont.`,
          `Na de vaststelling word je ingeschreven en uitgenodigd om de chip van je identiteitskaart aan te passen.`,
          `Ga langs met je eID en je pincode. Het adres staat alleen op de chip, niet op de kaart zelf.`,
        ],
      },
      {
        titel: "Wat moet je zelf nog melden?",
        alineas: [
          `Overheidsdiensten krijgen je nieuwe adres automatisch door. Je werkgever, bank, verzekeraar, energie- en waterleverancier en telecomoperator verwittig je zelf.`,
          `Op het inschrijvingsbewijs van je auto hoeft de adreswijziging niet meer aangebracht te worden.`,
        ],
      },
      {
        titel: "Wat als je te laat bent?",
        alineas: [
          `Een laattijdige aangifte kan een gemeentelijke boete opleveren. Wacht dus niet tot alles uitgepakt is.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Kan ik mijn adreswijziging online doen?",
        antwoord: `In de meeste gemeenten wel, via het digitale loket. Op onze gemeentepagina's staat de link naar de aangifte van je gemeente.`,
      },
      {
        vraag: "Moet ik iets melden bij mijn oude gemeente?",
        antwoord: `Nee. Je doet de aangifte bij je nieuwe gemeente, die de rest regelt. Alleen bij een verhuis naar het buitenland meld je je vertrek bij je huidige gemeente.`,
      },
    ],
    bronnen: [
      { naam: "Vlaanderen.be: aangifte van adreswijziging", url: "https://www.vlaanderen.be/aangifte-van-adreswijziging" },
      { naam: "Belgium.be: adreswijziging", url: "https://www.belgium.be/nl/huisvesting/verhuizen/adreswijziging" },
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
      `Je energiecontract verhuist in principe met je mee. Wat je moet regelen zijn de meterstanden op het moment van de overdracht, voor zowel je oude als je nieuwe adres.`,
    ],
    secties: [
      {
        titel: "Elektriciteit en gas",
        stappen: [
          `Download het officiële energieovernamedocument van de Vlaamse Nutsregulator. Je hebt het ook nodig met een digitale meter.`,
          `Vul het in samen met de vorige of volgende bewoner, of met de eigenaar. Elk tekent, elk krijgt een exemplaar.`,
          `Bezorg het document uiterlijk 7 kalenderdagen na de verhuisdatum aan je energieleverancier. Een telefoontje alleen volstaat niet.`,
        ],
      },
      {
        titel: "Wil de andere partij niet tekenen?",
        alineas: [
          `Neem een gedateerde foto van de meterstanden, vul het document zelf in en bezorg het samen met de foto aan je leverancier.`,
        ],
      },
      {
        titel: "Water",
        alineas: [
          `Bij De Watergroep meld je de overname digitaal of met het overnameformulier. Daarop staan het meternummer, de meterstand, de datum en de handtekening van wie vertrekt en wie overneemt.`,
        ],
      },
      {
        titel: "Internet en tv",
        alineas: [
          `Meld je verhuis ruim vooraf aan je operator. Afhankelijk van de aanbieder gaat het om 2 tot 5 weken, en langer als er een nieuwe aansluiting nodig is.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Moet ik een nieuw energiecontract afsluiten als ik verhuis?",
        antwoord: `Nee, je contract verhuist mee naar je nieuwe adres. Je mag wel van de verhuis gebruikmaken om te vergelijken en over te stappen.`,
      },
      {
        vraag: "Heb ik het energieovernamedocument nodig met een digitale meter?",
        antwoord: `Ja. De Vlaamse overheid raadt aan het ook dan in te vullen, zodat de meterstanden op de dag van de overdracht voor beide partijen vastliggen.`,
      },
    ],
    bronnen: [
      { naam: "Vlaanderen.be: energiecontracten en verhuis", url: "https://www.vlaanderen.be/energiecontracten-en-verhuis" },
      { naam: "Energieovernamedocument (pdf)", url: "https://assets.vlaamsenutsregulator.be/2025-12/energieovernamedocument_1.pdf" },
      { naam: "De Watergroep: ik verhuis", url: "https://www.dewatergroep.be/nl-be/drinkwater/wat-te-doen-bij/verhuizen/ik-verhuis" },
      { naam: "Selectra: telecom verhuizen", url: "https://selectra.be/nl/verhuizen/telecom" },
    ],
  },
  {
    slug: "erkende-verhuizer-bkv",
    titel: "Erkende verhuizer: wat betekent het BKV-label?",
    kort: "Wat het label garandeert, hoe de aansprakelijkheid zit en hoe je schade meldt.",
    metaTitle: "Erkende verhuizer (BKV): wat betekent het label?",
    metaDescription:
      "Het label BKV Erkend Verhuizer is van de Belgische Kamer der Verhuizers. Lees wat het garandeert, hoe de aansprakelijkheid van € 125 per m³ werkt en hoe je schade meldt.",
    intro: [
      `Iedereen met een bestelwagen kan zich verhuizer noemen. Het label BKV Erkend Verhuizer helpt je het kaf van het koren te scheiden.`,
    ],
    secties: [
      {
        titel: "Wat is de BKV?",
        alineas: [
          `De Belgische Kamer der Verhuizers is de beroepsfederatie van de verhuissector. Ze kent het label BKV Erkend Verhuizer toe aan bedrijven die wettelijk in orde zijn en haar kwaliteitseisen volgen.`,
          `De federatie raadt aan om na te gaan of de verhuizer een vervoersvergunning heeft. Die is van belang zodra de goederen meer dan 500 kg wegen. Erkend personeel herken je aan de verhuizerskaart.`,
        ],
      },
      {
        titel: "Hoe zit het met de aansprakelijkheid?",
        alineas: [
          `Volgens de nationale verhuisvoorwaarden van de BKV is de aansprakelijkheid van de verhuizer beperkt tot € 125 per kubieke meter verloren of beschadigde goederen. Die grens geldt niet bij opzet of grove schuld.`,
          `Voor waardevolle stukken sluit je daarom best een verzekering alle risico's af. Dat kan via de verhuizer of via je eigen verzekeraar. Het is een aanrader, geen verplichting.`,
        ],
      },
      {
        titel: "Schade melden",
        lijst: [
          `Zichtbare schade: meteen bij de aflevering, op het document dat je tekent.`,
          `Niet-zichtbare schade: binnen 2 werkdagen na de levering, per e-mail of aangetekende brief.`,
        ],
      },
      {
        titel: "Vijf vragen voor je tekent",
        lijst: [
          `Draag je het label BKV Erkend Verhuizer?`,
          `Is de prijs inclusief 21% btw?`,
          `Wanneer start en stopt de klok?`,
          `Tot welk bedrag ben ik verzekerd, en wat kost een verzekering alle risico's?`,
          `Wie vraagt het parkeerverbod aan?`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Is een verzekering verplicht bij een verhuis?",
        antwoord: `Een verzekering alle risico's is volgens de voorwaarden van de BKV aangeraden maar niet verplicht. Een bron voor een wettelijk verplichte verhuisverzekering hebben we niet gevonden.`,
      },
      {
        vraag: "Hoe controleer ik of een verhuizer erkend is?",
        antwoord: `Vraag naar het label in je offerteaanvraag en kijk het bij twijfel na bij de Belgische Kamer der Verhuizers.`,
      },
    ],
    bronnen: [
      { naam: "Erkende Verhuizers: over ons", url: "https://erkendeverhuizers.be/over-ons/" },
      { naam: "Belgische Kamer der Verhuizers", url: "https://bkv-cbd.be/verhuizen/" },
      {
        naam: "BKV nationale verhuisvoorwaarden (pdf)",
        url: "https://www.coppensverhuizingen.be/wp-content/uploads/2020/12/Algemene-Voorwaarden-Verhuizing.pdf",
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
      `Kort antwoord: nee, in België bestaat geen algemeen wettelijk recht op verlof voor een verhuis. Verhuizen staat niet in de wettelijke lijst van klein verlet.`,
    ],
    secties: [
      {
        titel: "Waarom denken veel mensen van wel?",
        alineas: [
          `Klein verlet, ook omstandigheidsverlof genoemd, geeft je betaald verlof bij gebeurtenissen zoals een huwelijk, geboorte of overlijden. Een verhuis hoort daar wettelijk niet bij.`,
          `Sectoren en bedrijven mogen wel gunstigere regels hebben. Daardoor krijgen sommige werknemers een verhuisdag en andere niet.`,
        ],
      },
      {
        titel: "Zo ga je het na",
        stappen: [
          `Kijk in je arbeidsreglement onder klein verlet of omstandigheidsverlof.`,
          `Vraag het aan je personeelsdienst.`,
          `Vraag je vakbond wat de cao van je sector voorziet.`,
        ],
      },
      {
        titel: "Geen verhuisdag? Dit zijn je opties",
        lijst: [
          `Neem een gewone vakantiedag of recuperatie.`,
          `Verhuis op zaterdag. Reken dan wel op een toeslag bij de verhuisfirma.`,
          `Laat de verhuisfirma werken terwijl jij maar een halve dag vrij neemt voor de sleuteloverdracht.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Hoeveel dagen verhuisverlof krijg je in België?",
        antwoord: `Wettelijk geen. Of je een dag krijgt, hangt af van je sector, je cao of je werkgever. Websites die één wettelijke verhuisdag vermelden, worden tegengesproken door de wettelijke lijst van klein verlet.`,
      },
    ],
    bronnen: [
      {
        naam: "Securex: wat is klein verlet",
        url: "https://www.securex.be/nl/lex4you/werkgever/themas/vakantie-afwezigheid/tijd-voor-de-werknemer/wat-is-klein-verlet",
      },
      {
        naam: "Vlaanderen.be: omstandigheidsverlof",
        url: "https://www.vlaanderen.be/werken/verlof-en-tijdelijk-minder-werken/omstandigheidsverlof-klein-verlet",
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
      `Elke kubieke meter die je niet meeneemt, hoef je niet te verhuizen. Opruimen voor de verhuis verlaagt dus rechtstreeks je factuur.`,
    ],
    secties: [
      {
        titel: "Eerst hergebruik, dan afval",
        alineas: [
          `Herbruikbare meubels en huisraad gaan eerst naar de kringwinkel. Wat echt weg moet, breng je naar het recyclagepark of laat je ophalen.`,
        ],
      },
      {
        titel: "Grofvuil laten ophalen",
        stappen: [
          `Meld je aan op je account bij Limburg.net.`,
          `Kies de afvalsoort grofvuil en een datum.`,
          `Betaal online: € 30 tot 2 m³, € 60 voor 2 tot 4 m³. Meer dan 4 m³ per ophaling kan niet.`,
          `Zet het grofvuil buiten de avond voor de ophaling. Per stuk of bundel geldt een maximum van 70 kg, 2 meter lang en 1 meter breed. Volle zakken of dozen worden niet meegenomen.`,
        ],
      },
      {
        titel: "Zelf naar het recyclagepark",
        alineas: [
          `Recycleerbaar afval lever je gratis in. Voor grofvuil betaal je in een park van Limburg.net € 0,25 per kg. Hout kost € 0,11 per kg en gemengd bouwpuin € 0,08 per kg.`,
          `Sommige gemeenten hebben een eigen recyclagepark met eigen tarieven. Op onze gemeentepagina's staat welk park bij jouw gemeente hoort.`,
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
        antwoord: `Dat is geen standaarddienst. Sommige firma's werken samen met een ontruimingsbedrijf. Vraag het in je offerte.`,
      },
    ],
    bronnen: [
      { naam: "Limburg.net: grofvuil aan huis", url: "https://limburg.net/grofvuil-ophaling-aan-huis" },
      { naam: "Limburg.net: grofvuil op het recyclagepark", url: "https://limburg.net/grofvuil-recyclagepark" },
      { naam: "Limburg.net: tarieven recyclagepark", url: "https://limburg.net/recyclageparken/tarieven" },
    ],
  },
];

export function getArtikel(slug: string): Artikel | undefined {
  return artikels.find((a) => a.slug === slug);
}
