import type { PrijsTabel } from "./prijzen";
import {
  prijsVerhuisTotaal,
  prijsVerhuisUur,
  prijsVerhuislift,
  prijsVerhuiswagen,
  prijsOpslag,
  prijsPiano,
} from "./prijzen";

export type Vraag = { vraag: string; antwoord: string };
export type Sectie = { titel: string; alineas?: string[]; lijst?: string[]; stappen?: string[] };

export type Dienst = {
  slug: string;
  naam: string;
  kort: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  secties: Sectie[];
  prijzen?: PrijsTabel[];
  faq: Vraag[];
  icoon: "truck" | "lift" | "bus" | "box" | "piano" | "office" | "senior" | "grens" | "doos";
};

export const diensten: Dienst[] = [
  {
    slug: "verhuisfirma",
    naam: "Particuliere verhuis",
    kort: "Je volledige inboedel verhuisd door een ploeg met vrachtwagen, van inladen tot uitladen.",
    icoon: "truck",
    metaTitle: "Verhuisfirma Limburg: prijzen en offerte voor je verhuis",
    metaDescription:
      "Wat doet een verhuisfirma in Limburg, wat kost het per uur en per woning, en waar let je op in de offerte? Met richtprijzen uit openbare bronnen.",
    h1: "Verhuisfirma in Limburg: wat je krijgt en wat het kost",
    intro: [
      `Een verhuisfirma neemt het zware werk van je verhuis over: demonteren, dragen, laden, rijden en alles weer op zijn plaats zetten. In Limburg betaal je daarvoor meestal per uur, met een ploeg van twee of drie verhuizers en een vrachtwagen.`,
      `Op deze pagina lees je hoe een verhuis verloopt, welke prijzen gangbaar zijn en welke vragen je best stelt voor je tekent. Onderaan vraag je een vrijblijvende offerte aan.`,
    ],
    secties: [
      {
        titel: "Zo verloopt een verhuis met een verhuisfirma",
        stappen: [
          `Plaatsbezoek of videogesprek. De verhuizer schat het volume in kubieke meter en bekijkt de toegang: trap, lift, afstand tot de straat.`,
          `Offerte. Je krijgt een prijs per uur of een vaste prijs, met het aantal verhuizers, de wagen en eventuele extra's zoals een verhuislift.`,
          `Parkeerverbod. Voor de wagen en de lift moet er plaats zijn voor de deur. In de meeste Limburgse gemeenten vraag je daarvoor zelf een inname van het openbaar domein aan.`,
          `Verhuisdag. De ploeg beschermt vloeren en meubels, laadt in, rijdt naar het nieuwe adres en zet alles in de juiste kamer.`,
          `Controle. Loop samen door de woning en noteer zichtbare schade meteen op de vrachtbrief.`,
        ],
      },
      {
        titel: "Wat bepaalt de prijs?",
        lijst: [
          `Het volume. Een studio is rond 25 m³, een eengezinswoning rond 50 m³.`,
          `Het aantal verhuizers en het aantal uren, inclusief de rijtijd vanaf het depot.`,
          `De bereikbaarheid: verdieping, een smalle trap of een lange draagafstand kosten tijd.`,
          `De dag. Op zaterdag rekenen veel verhuizers een toeslag tot 25%.`,
          `Extra's zoals een verhuislift, inpakken, demonteren of tijdelijke opslag.`,
        ],
      },
      {
        titel: "Waar let je op in de offerte?",
        alineas: [
          `Vraag altijd een prijs inclusief 21% btw en laat noteren of de klok start bij vertrek uit het depot of bij aankomst. Vraag ook of de verhuislift, de kilometers en het parkeerverbod in de prijs zitten.`,
          `Kijk na of de firma het label BKV Erkend Verhuizer draagt. Dat label is van de Belgische Kamer der Verhuizers en staat voor firma's die wettelijk in orde zijn en een kwaliteitscharter volgen.`,
          `Volgens de sectorvoorwaarden is de aansprakelijkheid van de verhuizer beperkt tot € 125 per m³. Heb je waardevolle stukken, vraag dan naar een verzekering alle risico's. Die is aangeraden, niet verplicht.`,
        ],
      },
    ],
    prijzen: [prijsVerhuisTotaal, prijsVerhuisUur],
    faq: [
      {
        vraag: "Wat kost een verhuisfirma in Limburg?",
        antwoord: `Voor een kleine verhuis reken je op € 500 tot € 900, voor een gemiddelde eengezinswoning op € 800 tot € 1.400 en voor een grote woning op € 1.400 tot € 2.400. Dat zijn richtprijzen van Belgische vergelijkers. Je eigen prijs hangt af van volume, verdieping en afstand.`,
      },
      {
        vraag: "Hoeveel verhuizers heb ik nodig?",
        antwoord: `Voor een appartement volstaan meestal twee verhuizers. Bij een eengezinswoning of veel trappen gaat het met drie sneller, en omdat je per uur betaalt is dat niet altijd duurder.`,
      },
      {
        vraag: "Hoe lang op voorhand boek ik een verhuisfirma?",
        antwoord: `Reken op enkele weken, en langer voor een zaterdag of het einde van de maand. Het parkeerverbod bepaalt vaak je planning: sommige gemeenten vragen de aanvraag tot 15 kalenderdagen of meer vooraf.`,
      },
      {
        vraag: "Wat als er iets beschadigd raakt?",
        antwoord: `Zichtbare schade meld je meteen bij de aflevering. Schade die je pas later ziet, meld je volgens de sectorvoorwaarden binnen 2 werkdagen per e-mail of aangetekende brief.`,
      },
    ],
  },
  {
    slug: "verhuislift-huren",
    naam: "Verhuislift huren",
    kort: "Een ladderlift met of zonder bediener, voor meubels die niet via de trap kunnen.",
    icoon: "lift",
    metaTitle: "Verhuislift huren in Limburg: prijs per uur en per dag",
    metaDescription:
      "Wat kost een verhuislift huren in Limburg? Richtprijzen per uur met bediener en per dag zonder, hoe hoog een ladderlift reikt en wat je bij de gemeente regelt.",
    h1: "Verhuislift huren in Limburg: prijzen en praktische regels",
    intro: [
      `Een verhuislift, ook ladderlift of meubellift genoemd, brengt meubels en dozen langs de gevel naar binnen via een raam of balkon. Je huurt hem per uur met een bediener, of per dag zonder.`,
      `Hieronder vind je richtprijzen, de grenzen van wat een lift kan en wat je vooraf met je gemeente regelt.`,
    ],
    secties: [
      {
        titel: "Met of zonder bediener?",
        alineas: [
          `Met bediener betaal je per uur. De bediener stelt de lift op, bedient hem en neemt de verantwoordelijkheid voor een veilige opstelling. Dat is de gebruikelijke keuze voor een verhuis.`,
          `Zonder bediener huur je de lift per dag. Dat is goedkoper als je veel tijd nodig hebt, maar je stelt de lift zelf op en je bent zelf aansprakelijk.`,
        ],
      },
      {
        titel: "Hoe hoog en hoe zwaar?",
        lijst: [
          `Een compacte ladderlift reikt tot ongeveer de 6de tot 8ste verdieping. Hoger werk je met een ladderwagen.`,
          `Het draagvermogen ligt tussen 150 en 350 kg per rit, afhankelijk van het type. Een verhuurmodel van 18 meter tilt 250 kg.`,
          `Je hebt een raam of balkondeur nodig die breed genoeg open kan, en vrije ruimte op straat of oprit om de lift schuin op te stellen.`,
        ],
      },
      {
        titel: "Wat regel je bij de gemeente?",
        alineas: [
          `Staat de lift op de stoep, een parkeerplaats of de rijbaan, dan heb je in bijna elke Limburgse gemeente een vergunning voor de inname van het openbaar domein nodig. De termijn loopt van 2 werkdagen tot enkele weken vooraf.`,
          `De regels en tarieven per gemeente vind je in onze gids over het parkeerverbod bij een verhuis.`,
        ],
      },
      {
        titel: "Wanneer loont een verhuislift?",
        lijst: [
          `Vanaf de eerste verdieping zonder personenlift.`,
          `Bij een smalle of draaiende trap.`,
          `Voor grote stukken: een hoekzetel, een boxspring, een Amerikaanse koelkast.`,
          `Als je per uur betaalt voor verhuizers: een lift spaart vaak meer uren uit dan hij kost.`,
        ],
      },
    ],
    prijzen: [prijsVerhuislift],
    faq: [
      {
        vraag: "Wat kost een verhuislift huren per uur?",
        antwoord: `Met één bediener reken je op € 50 tot € 90 per uur. Bij verhuisfirma's die hun tarief publiceren kost het eerste uur € 59 tot € 100 exclusief btw. Reken op een minimum van 1 tot 2 uur en een verplaatsingskost.`,
      },
      {
        vraag: "Kan ik een verhuislift huren zonder bediener?",
        antwoord: `Ja. Dat kost ongeveer € 90 tot € 150 per dag inclusief btw. Je stelt de lift dan zelf op en je bent zelf verantwoordelijk voor de veiligheid en de signalisatie.`,
      },
      {
        vraag: "Heb ik een vergunning nodig voor een verhuislift?",
        antwoord: `Op je eigen oprit niet. Op de stoep, een parkeerplaats of de straat wel: dan vraag je bij de gemeente een inname van het openbaar domein aan. Diepenbeek vraagt bijvoorbeeld minstens 14 dagen vooraf voor een verhuislift.`,
      },
      {
        vraag: "Tot welke verdieping reikt een verhuislift?",
        antwoord: `Een gewone ladderlift haalt ongeveer de 6de tot 8ste verdieping. Voor hogere verdiepingen bestaat de ladderwagen, die volgens één aanbieder tot ongeveer de 18de verdieping reikt.`,
      },
    ],
  },
  {
    slug: "verhuiswagen-huren",
    naam: "Verhuiswagen huren",
    kort: "Zelf verhuizen met een gehuurde bestelwagen, met of zonder laadklep.",
    icoon: "bus",
    metaTitle: "Verhuiswagen huren in Limburg: prijs per dag en rijbewijs",
    metaDescription:
      "Wat kost een verhuiswagen huren per dag, welk volume heb je nodig en mag je ermee rijden met rijbewijs B? Richtprijzen en tips voor wie zelf verhuist.",
    h1: "Verhuiswagen huren in Limburg: prijs, volume en rijbewijs",
    intro: [
      `Zelf verhuizen met een gehuurde bestelwagen is de goedkoopste manier, zolang je genoeg helpende handen hebt. De dagprijs hangt vooral af van het laadvolume.`,
      `Hier lees je wat een verhuiswagen kost, welk formaat je nodig hebt en wanneer een verhuisfirma toch voordeliger uitkomt.`,
    ],
    secties: [
      {
        titel: "Welk formaat heb je nodig?",
        lijst: [
          `3 tot 7 m³: een studentenkamer of enkele losse meubels.`,
          `Ongeveer 12 m³: een studio of klein appartement, in twee ritten een gewoon appartement.`,
          `Ongeveer 20 m³: een appartement in één rit, een eengezinswoning in twee tot drie ritten.`,
        ],
      },
      {
        titel: "Rijbewijs en regels",
        alineas: [
          `Met rijbewijs B mag je rijden met een wagen tot 3,5 ton maximaal toegelaten massa. Daarboven heb je rijbewijs C1 of C nodig. Let op het laadvermogen: een volle wagen van 20 m³ zit sneller aan zijn gewicht dan je denkt.`,
          `Verhuurders stellen vaak een minimumleeftijd. Eén verhuurder vraagt bijvoorbeeld 23 jaar voor een wagen van 20 m³ met laadklep.`,
        ],
      },
      {
        titel: "Zelf doen of toch een verhuisfirma?",
        alineas: [
          `Tel bij de huurprijs de brandstof, de extra kilometers, verhuisdekens, spanbanden en een steekkar. Heb je een verhuislift nodig, dan komt daar € 50 tot € 90 per uur bij.`,
          `Voor een kleine verhuis op het gelijkvloers blijft zelf verhuizen duidelijk goedkoper. Bij een eengezinswoning met trappen wordt het verschil met een verhuisfirma kleiner, zeker als je vrienden niet de hele dag kunnen.`,
        ],
      },
    ],
    prijzen: [prijsVerhuiswagen],
    faq: [
      {
        vraag: "Wat kost een verhuiswagen huren per dag?",
        antwoord: `Een kleine bestelwagen kost € 40 tot € 80 per dag, een wagen van 12 m³ € 60 tot € 120 en een wagen van 20 m³ € 80 tot € 150, telkens inclusief btw. Meestal zijn 100 tot 200 km inbegrepen.`,
      },
      {
        vraag: "Mag ik met rijbewijs B een verhuiswagen besturen?",
        antwoord: `Ja, tot 3,5 ton maximaal toegelaten massa. De meeste huurbestelwagens tot 20 m³ vallen daaronder.`,
      },
      {
        vraag: "Heb ik een parkeerverbod nodig voor een huurwagen?",
        antwoord: `Als je voor de deur wil laden op een openbare parkeerplaats, vraag je best een parkeerverbod aan bij de gemeente. Zonder borden heb je geen garantie op een vrije plaats.`,
      },
    ],
  },
  {
    slug: "opslagruimte",
    naam: "Opslag en meubelbewaring",
    kort: "Tijdelijke opslag tussen twee woningen, in een box of bij een verhuisfirma.",
    icoon: "box",
    metaTitle: "Opslagruimte en meubelbewaring in Limburg: prijzen per maand",
    metaDescription:
      "Zit er tijd tussen je oude en nieuwe woning? Vergelijk self storage en meubelbewaring in Limburg, met prijzen per maand voor 5, 10 en 20 m².",
    h1: "Opslagruimte en meubelbewaring in Limburg",
    intro: [
      `Sluiten je oude en nieuwe woning niet op elkaar aan, dan zet je je inboedel tijdelijk in opslag. In Limburg kies je tussen een eigen box in een self storage en meubelbewaring bij een verhuisfirma.`,
    ],
    secties: [
      {
        titel: "Self storage of meubelbewaring?",
        alineas: [
          `Bij self storage huur je een afgesloten box per vierkante meter en kom je zelf langs wanneer je wil. Je brengt en haalt alles zelf, of je laat dat door een verhuizer doen.`,
          `Bij meubelbewaring haalt de verhuisfirma je inboedel op, slaat hem op in houten kisten of containers en levert hem later op het nieuwe adres. Je betaalt per kubieke meter en je kan er tussendoor meestal niet zomaar bij.`,
        ],
      },
      {
        titel: "Hoeveel ruimte heb je nodig?",
        lijst: [
          `5 m²: de inhoud van een studentenkamer of een dertigtal dozen met enkele meubels.`,
          `10 m²: de inboedel van een klein appartement.`,
          `20 m²: de inboedel van een eengezinswoning, goed gestapeld.`,
        ],
      },
      {
        titel: "Waar let je op?",
        lijst: [
          `De opzegtermijn en of je per maand of per week betaalt.`,
          `Of je inboedel verzekerd is, en tot welk bedrag.`,
          `De toegangsuren, en of je met een bestelwagen tot aan de box kan rijden.`,
          `Of de ruimte droog en verwarmd is, belangrijk voor hout, matrassen en elektronica.`,
        ],
      },
    ],
    prijzen: [prijsOpslag],
    faq: [
      {
        vraag: "Wat kost opslagruimte in Limburg per maand?",
        antwoord: `Bij een aanbieder met vestigingen in Genk, Maasmechelen, Lanklaar en Lanaken kost een box van 5 m² € 84 per maand, 10 m² € 159 en 20 m² € 265, inclusief btw. Meubelbewaring bij een verhuisfirma kost ongeveer € 40 tot € 80 per maand voor 10 m³.`,
      },
      {
        vraag: "Kan een verhuisfirma mijn spullen ophalen en opslaan?",
        antwoord: `Ja, dat heet meubelbewaring. De firma haalt op, slaat op en levert later op je nieuwe adres. Vermeld in je offerteaanvraag hoe lang je de opslag nodig hebt.`,
      },
    ],
  },
  {
    slug: "piano-verhuizen",
    naam: "Piano verhuizen",
    kort: "Een buffetpiano of vleugel veilig verplaatst, met het juiste materiaal.",
    icoon: "piano",
    metaTitle: "Piano verhuizen in Limburg: prijs en werkwijze",
    metaDescription:
      "Wat kost een piano verhuizen, wanneer is een lift of kraan nodig en waarom laat je de piano daarna stemmen? Richtprijzen voor buffetpiano en vleugel.",
    h1: "Piano verhuizen in Limburg: zo gebeurt het veilig",
    intro: [
      `Een buffetpiano weegt al snel 200 kg of meer en heeft een kwetsbaar binnenwerk. Een piano verhuizen is daarom specialistenwerk, met een pianoslede, draagriemen en vaak een lift.`,
    ],
    secties: [
      {
        titel: "Wat bepaalt de prijs?",
        lijst: [
          `Het type: een buffetpiano is eenvoudiger dan een vleugel, die deels gedemonteerd wordt.`,
          `Trappen. Elke verdieping zonder lift maakt het zwaarder en duurder.`,
          `Of er een verhuislift of kraan nodig is. Reken daarvoor op een toeslag.`,
          `De afstand tussen de twee adressen.`,
        ],
      },
      {
        titel: "Na de verhuis",
        alineas: [
          `Laat de piano enkele weken wennen aan de nieuwe ruimte voor je hem laat stemmen. Door de verplaatsing en het verschil in vochtigheid en temperatuur zakt de stemming bijna altijd.`,
        ],
      },
    ],
    prijzen: [prijsPiano],
    faq: [
      {
        vraag: "Wat kost een piano verhuizen?",
        antwoord: `Een buffetpiano van gelijkvloers naar gelijkvloers kost ongeveer € 200 tot € 400. Met een trap of lift loopt dat op tot € 350 tot € 700. Die laatste bedragen komen uit één bron, dus vraag altijd een offerte.`,
      },
      {
        vraag: "Kan een gewone verhuisfirma een piano verhuizen?",
        antwoord: `Sommige wel, andere werken samen met een pianoverhuizer. Vermeld de piano altijd in je aanvraag, met het type en de verdieping, zodat de juiste ploeg en het juiste materiaal komen.`,
      },
    ],
  },
  {
    slug: "bedrijfsverhuizing",
    naam: "Bedrijfsverhuizing",
    kort: "Kantoor, praktijk of winkel verhuisd met zo weinig mogelijk stilstand.",
    icoon: "office",
    metaTitle: "Bedrijfsverhuizing in Limburg: kantoor of praktijk verhuizen",
    metaDescription:
      "Een kantoor, praktijk of winkel verhuizen in Limburg? Zo plan je een bedrijfsverhuizing zonder stilstand, met een checklist voor IT, archief en personeel.",
    h1: "Bedrijfsverhuizing in Limburg: plan het zonder stilstand",
    intro: [
      `Bij een bedrijfsverhuizing telt vooral de stilstand. Elk uur dat je team niet kan werken kost geld, dus de planning is belangrijker dan bij een particuliere verhuis.`,
    ],
    secties: [
      {
        titel: "Zo plan je een bedrijfsverhuizing",
        stappen: [
          `Stel één verantwoordelijke aan die het aanspreekpunt is voor de verhuizer en de collega's.`,
          `Maak een plattegrond van het nieuwe pand met een nummer per werkplek, en label elke doos en elk meubel met dat nummer.`,
          `Verhuis IT apart: servers, netwerk en telefonie eerst, zodat alles werkt als de bureaus aankomen.`,
          `Kies een moment buiten de werkuren. Veel firma's verhuizen kantoren op vrijdagavond of in het weekend.`,
          `Meld je adreswijziging bij de Kruispuntbank van Ondernemingen, je bank, verzekeraar en leveranciers.`,
        ],
      },
      {
        titel: "Wat neem je op in de offerteaanvraag?",
        lijst: [
          `Het aantal werkplekken en het aantal kasten.`,
          `Lopende meters archief.`,
          `Zware stukken zoals een kluis, kopieermachine of serverkast.`,
          `Of de meubels gedemonteerd moeten worden.`,
          `De verdieping en de aanwezigheid van een goederenlift op beide adressen.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Wat kost een bedrijfsverhuizing?",
        antwoord: `Daarvoor bestaan geen betrouwbare richtprijzen: de prijs hangt af van het aantal werkplekken, het archief en het tijdstip. Als houvast: een ploeg van twee verhuizers met vrachtwagen kost € 100 tot € 120 per uur exclusief btw, en avond- en weekendwerk is duurder.`,
      },
      {
        vraag: "Kan een kantoor in één weekend verhuizen?",
        antwoord: `Voor een klein tot middelgroot kantoor is dat de normale werkwijze, op voorwaarde dat alles vooraf gelabeld is en de IT op het nieuwe adres al aangesloten is.`,
      },
    ],
  },
  {
    slug: "seniorenverhuizing",
    naam: "Seniorenverhuizing",
    kort: "Kleiner gaan wonen of verhuizen naar een assistentiewoning, stap voor stap.",
    icoon: "senior",
    metaTitle: "Seniorenverhuizing in Limburg: kleiner gaan wonen",
    metaDescription:
      "Verhuizen naar een appartement, assistentiewoning of woonzorgcentrum in Limburg? Zo pak je een seniorenverhuizing aan, van sorteren tot inrichten.",
    h1: "Seniorenverhuizing in Limburg: rustig kleiner gaan wonen",
    intro: [
      `Verhuizen van een gezinswoning naar een appartement, assistentiewoning of woonzorgcentrum is meer dan dozen verplaatsen. Er moet gekozen worden wat meegaat, en de rest krijgt een andere bestemming.`,
    ],
    secties: [
      {
        titel: "De stappen van een seniorenverhuizing",
        stappen: [
          `Meet de nieuwe woning op en teken in welke meubels er passen.`,
          `Sorteer per kamer in drie groepen: gaat mee, gaat naar familie, gaat weg.`,
          `Regel de bestemming van wat niet meegaat: familie, kringwinkel, verkoop of afvoer.`,
          `Laat inpakken en verhuizen, en laat de nieuwe woning dezelfde dag inrichten zodat de eerste nacht vertrouwd aanvoelt.`,
          `Laat de oude woning leegmaken en opleveren.`,
        ],
      },
      {
        titel: "Praktisch in Limburg",
        alineas: [
          `Herbruikbare spullen breng je eerst naar een kringwinkel. Wat overblijft kan je als grofvuil aan huis laten ophalen via Limburg.net: € 30 tot 2 m³ en € 60 tot 4 m³ per ophaling.`,
          `Vraag aan de verhuisfirma of ze ook inpakken, meubels demonteren en schilderijen en lampen ophangen. Niet elke firma biedt dat aan.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Bestaat er een premie voor een seniorenverhuizing?",
        antwoord: `Dat hebben we niet kunnen bevestigen in een officiële bron. Vraag het na bij je gemeente of je ziekenfonds voor je erop rekent.`,
      },
      {
        vraag: "Kan de verhuisfirma ook de oude woning leegmaken?",
        antwoord: `Sommige firma's doen dat zelf, andere werken samen met een ontruimingsbedrijf. Vermeld het in je aanvraag, dan krijg je één planning voor de verhuis en de ontruiming.`,
      },
    ],
  },
  {
    slug: "verhuizen-naar-nederland",
    naam: "Verhuizen naar Nederland",
    kort: "Van Belgisch naar Nederlands Limburg of omgekeerd: wat er anders is.",
    icoon: "grens",
    metaTitle: "Verhuizen naar Nederland vanuit Limburg: wat regel je?",
    metaDescription:
      "Verhuis je van Belgisch Limburg naar Nederland of omgekeerd? Zo zit het met uitschrijven, je verhuisfirma, je energiecontract en je auto.",
    h1: "Verhuizen van Belgisch Limburg naar Nederland",
    intro: [
      `Voor wie in Lanaken, Maasmechelen, Maaseik, Kinrooi of Pelt woont, ligt Nederland vaak dichter dan Hasselt. Een verhuis over de grens is voor de verhuizer een gewone rit, maar voor jou komt er administratie bij.`,
    ],
    secties: [
      {
        titel: "Wat is anders dan een verhuis binnen België?",
        lijst: [
          `Je meldt je vertrek naar het buitenland bij je Belgische gemeente en schrijft je in bij je nieuwe Nederlandse gemeente.`,
          `Je Belgische energie- en watercontract stopt. Vul het energieovernamedocument in met de meterstanden op de dag van je vertrek.`,
          `Je auto moet in je nieuwe woonland ingeschreven worden.`,
          `Je ziekteverzekering, belastingen en eventuele kinderbijslag veranderen. Laat je daarover informeren voor je verhuist.`,
        ],
      },
      {
        titel: "De verhuis zelf",
        alineas: [
          `Binnen de Europese Unie betaal je geen invoerrechten op je eigen inboedel. Vraag aan de verhuisfirma of ze regelmatig over de grens rijdt en hoe de kilometers en de rijtijd gerekend worden.`,
          `Hou er rekening mee dat het parkeerverbod aan Nederlandse kant bij de Nederlandse gemeente aangevraagd wordt, met andere termijnen dan in België.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Kan een Belgische verhuisfirma naar Nederland verhuizen?",
        antwoord: `Ja. Vraag in je offerte uitdrukkelijk naar de kilometervergoeding en de rijtijd, want die wegen bij een langere rit zwaarder door dan bij een lokale verhuis.`,
      },
      {
        vraag: "Moet ik mijn adreswijziging ook in België melden?",
        antwoord: `Ja. Je meldt je vertrek naar het buitenland bij de gemeente waar je nu ingeschreven bent. De precieze werkwijze vraag je na bij de dienst Burgerzaken van die gemeente.`,
      },
    ],
  },
  {
    slug: "inpakservice",
    naam: "Inpakservice en verhuisdozen",
    kort: "Laten inpakken door de verhuizer, of zelf inpakken met het juiste materiaal.",
    icoon: "doos",
    metaTitle: "Inpakservice en verhuisdozen in Limburg",
    metaDescription:
      "Zelf inpakken of laten inpakken? Zo kies je verhuisdozen, zo pak je breekbare spullen in en zo werkt een inpakservice van een verhuisfirma.",
    h1: "Inpakservice en verhuisdozen: zelf doen of laten doen",
    intro: [
      `Inpakken kost meer tijd dan de verhuis zelf. Je kan het zelf doen met degelijke dozen, of je laat het over aan de verhuisfirma, die dan ook verantwoordelijk is voor hoe het ingepakt werd.`,
    ],
    secties: [
      {
        titel: "Zelf inpakken: zo doe je het goed",
        lijst: [
          `Gebruik stevige verhuisdozen van één formaat. Die stapelen stabiel in de wagen.`,
          `Zware dingen zoals boeken in kleine dozen, lichte dingen zoals beddengoed in grote.`,
          `Schrijf op elke doos de kamer van bestemming en een korte inhoud.`,
          `Borden rechtop, glazen apart ingepakt, en vul lege ruimte op zodat niets schuift.`,
          `Begin met de kamers die je het minst gebruikt.`,
        ],
      },
      {
        titel: "Laten inpakken",
        alineas: [
          `Bij een inpakservice komt de ploeg een dag eerder of op de verhuisdag zelf alles inpakken. Vraag wat inbegrepen is: enkel het breekbare, of de hele inboedel, en of ze op het nieuwe adres ook uitpakken.`,
          `Vraag vooraf hoe de aansprakelijkheid geregeld is voor dozen die je zelf inpakte. Bij twijfel laat je het breekbare en het waardevolle door de verhuizers inpakken.`,
        ],
      },
    ],
    faq: [
      {
        vraag: "Hoeveel verhuisdozen heb ik nodig?",
        antwoord: `Een veelgebruikte vuistregel is 10 tot 15 dozen per kamer, met wat extra voor keuken en berging. Het hangt sterk af van hoeveel boeken en keukengerei je hebt, dus neem een reserve.`,
      },
      {
        vraag: "Kan ik verhuisdozen huren in plaats van kopen?",
        antwoord: `Sommige verhuisfirma's verhuren of lenen dozen uit als je bij hen boekt. Vraag ernaar in je offerte.`,
      },
    ],
  },
];

export function getDienst(slug: string): Dienst | undefined {
  return diensten.find((d) => d.slug === slug);
}
