// Städte im Umkreis von 100km um Hamburg mit über 3.000 Einwohnern
// Sortiert nach Einwohnerzahl für Priorisierung

export interface City {
    slug: string;
    name: string;
    population: number;
    region: string;
    distance: number; // km von Hamburg
    description: string;
    plz?: string;
    districts?: string[];
    lat?: number;
    lng?: number;
}

export const cities: City[] = [
    // Großstädte
    {
        slug: "hamburg",
        lat: 53.5511,
        lng: 9.9937,
        name: "Hamburg",
        population: 1900000,
        region: "Hamburg",
        distance: 0,
        description: "Als Hansestadt und zweitgrößte Stadt Deutschlands bietet Hamburg unzählige Gärten und Grünflächen. Von Blankenese bis Bergedorf – wir gestalten Ihren Traumgarten.",
        districts: ["Blankenese", "Bergedorf", "Harburg", "Altona", "Wandsbek", "Eimsbüttel", "Nord", "Mitte"]
    },
    {
        slug: "luebeck",
        lat: 53.8655,
        lng: 10.6866,
        name: "Lübeck",
        population: 217000,
        region: "Schleswig-Holstein",
        distance: 65,
        description: "Die historische Hansestadt Lübeck verdient Gärten, die ihrer Schönheit gerecht werden. Wir bringen Grün in die Weltkulturerbe-Stadt.",
        districts: ["Travemünde", "St. Jürgen", "Moisling", "Buntekuh"]
    },
    {
        slug: "neumunster",
        lat: 54.074,
        lng: 9.9838,
        name: "Neumünster",
        population: 80000,
        region: "Schleswig-Holstein",
        distance: 88,
        description: "Im Herzen Schleswig-Holsteins gelegen, gestalten wir für Neumünster individuelle Gartenoasen mit norddeutschem Charakter."
    },
    {
        slug: "norderstedt",
        lat: 53.706,
        lng: 9.9937,
        name: "Norderstedt",
        population: 80000,
        region: "Schleswig-Holstein",
        distance: 15,
        description: "Direkt vor den Toren Hamburgs bieten wir in Norderstedt professionellen Garten- und Landschaftsbau für anspruchsvolle Kunden."
    },
    {
        slug: "luneburg",
        lat: 53.2464,
        lng: 10.4115,
        name: "Lüneburg",
        population: 77000,
        region: "Niedersachsen",
        distance: 50,
        description: "Die Salzstadt Lüneburg mit ihrer mittelalterlichen Altstadt verdient gepflegte Gärten. Wir sind Ihr lokaler Partner für Gartengestaltung."
    },
    {
        slug: "elmshorn",
        lat: 53.7542,
        lng: 9.6562,
        name: "Elmshorn",
        population: 52000,
        region: "Schleswig-Holstein",
        distance: 35,
        description: "Als größte Stadt im Kreis Pinneberg ist Elmshorn ein Zentrum für qualitativ hochwertige Gartengestaltung in der Metropolregion."
    },
    {
        slug: "stade",
        lat: 53.5977,
        lng: 9.476,
        name: "Stade",
        population: 48000,
        region: "Niedersachsen",
        distance: 55,
        description: "Die Hansestadt Stade verbindet Tradition mit Moderne. Unsere Gartengestaltung fügt sich perfekt in das historische Stadtbild ein."
    },
    {
        slug: "cuxhaven",
        lat: 53.86,
        lng: 8.694,
        name: "Cuxhaven",
        population: 48000,
        region: "Niedersachsen",
        distance: 100,
        description: "An der Nordseeküste gelegen, gestalten wir in Cuxhaven wind- und wetterfeste Gärten mit maritimem Flair."
    },
    {
        slug: "pinneberg",
        lat: 53.6552,
        lng: 9.7994,
        name: "Pinneberg",
        population: 45000,
        region: "Schleswig-Holstein",
        distance: 20,
        description: "Als Baumschulstadt ist Pinneberg das Herz des deutschen Gartenbaus. Hier verwirklichen wir Ihre grünen Träume."
    },
    {
        slug: "buchholz",
        lat: 53.32,
        lng: 9.868,
        name: "Buchholz in der Nordheide",
        population: 42000,
        region: "Niedersachsen",
        distance: 35,
        description: "Am Rande der Lüneburger Heide gelegen, gestalten wir naturnahe Gärten, die die Schönheit der Heide in Ihren Garten bringen."
    },
    {
        slug: "seevetal",
        lat: 53.399,
        lng: 9.963,
        name: "Seevetal",
        population: 42000,
        region: "Niedersachsen",
        distance: 20,
        description: "In der Gemeinde Seevetal südlich von Hamburg realisieren wir Gartenträume für Familien und Unternehmen."
    },
    {
        slug: "buxtehude",
        lat: 53.4747,
        lng: 9.6872,
        name: "Buxtehude",
        population: 41000,
        region: "Niedersachsen",
        distance: 35,
        description: "Die Märchenstadt Buxtehude verdient zauberhafte Gärten. Wir gestalten grüne Oasen zwischen Altem Land und Geest."
    },
    {
        slug: "winsen-luhe",
        lat: 53.3573,
        lng: 10.2089,
        name: "Winsen (Luhe)",
        population: 35000,
        region: "Niedersachsen",
        distance: 30,
        description: "An der Luhe gelegen, verbinden wir in Winsen moderne Gartengestaltung mit der naturnahen Umgebung."
    },
    {
        slug: "ahrensburg",
        lat: 53.6753,
        lng: 10.2414,
        name: "Ahrensburg",
        population: 34000,
        region: "Schleswig-Holstein",
        distance: 25,
        description: "Die Schlossstadt Ahrensburg ist bekannt für ihre gepflegten Grünanlagen. Wir setzen diese Tradition in Ihrem Garten fort."
    },
    {
        slug: "wedel",
        lat: 53.5833,
        lng: 9.7167,
        name: "Wedel",
        population: 33000,
        region: "Schleswig-Holstein",
        distance: 20,
        description: "An der Elbe gelegen, gestalten wir in Wedel Gärten mit besonderem Charme – von modern bis klassisch."
    },
    {
        slug: "geesthacht",
        lat: 53.4372,
        lng: 10.3708,
        name: "Geesthacht",
        population: 31000,
        region: "Schleswig-Holstein",
        distance: 35,
        description: "An der Elbe bei den Elbschleusen gelegen, kreieren wir in Geesthacht Gärten, die zum Verweilen einladen."
    },
    {
        slug: "itzehoe",
        lat: 53.9247,
        lng: 9.5127,
        name: "Itzehoe",
        population: 31000,
        region: "Schleswig-Holstein",
        distance: 60,
        description: "Als Kreisstadt von Steinburg bieten wir in Itzehoe professionellen Gartenbau für Stadt und Land."
    },
    {
        slug: "henstedt-ulzburg",
        lat: 53.7942,
        lng: 9.9827,
        name: "Henstedt-Ulzburg",
        population: 30000,
        region: "Schleswig-Holstein",
        distance: 30,
        description: "In der wachsenden Gemeinde Henstedt-Ulzburg gestalten wir moderne Familiengärten und repräsentative Außenanlagen."
    },
    {
        slug: "reinbek",
        lat: 53.5097,
        lng: 10.2472,
        name: "Reinbek",
        population: 28000,
        region: "Schleswig-Holstein",
        distance: 20,
        description: "Im grünen Sachsenwald gelegen, schaffen wir in Reinbek naturnahe Gartenlandschaften für anspruchsvolle Kunden."
    },
    {
        slug: "bad-oldesloe",
        lat: 53.8111,
        lng: 10.3739,
        name: "Bad Oldesloe",
        population: 25000,
        region: "Schleswig-Holstein",
        distance: 40,
        description: "Die Kreisstadt Bad Oldesloe bietet mit ihrer Lage an der Trave ideale Bedingungen für schöne Gärten."
    },
    {
        slug: "kaltenkirchen",
        lat: 53.8342,
        lng: 9.9611,
        name: "Kaltenkirchen",
        population: 22000,
        region: "Schleswig-Holstein",
        distance: 40,
        description: "Im Kreis Segeberg gelegen, gestalten wir in Kaltenkirchen Gärten für Neubaugebiete und Bestandsimmobilien."
    },
    {
        slug: "quickborn",
        lat: 53.7333,
        lng: 9.9,
        name: "Quickborn",
        population: 22000,
        region: "Schleswig-Holstein",
        distance: 25,
        description: "Am Rande des Himmelmoors bieten wir in Quickborn Gartengestaltung, die die natürliche Umgebung respektiert."
    },
    {
        slug: "neu-wulmstorf",
        lat: 53.4667,
        lng: 9.7833,
        name: "Neu Wulmstorf",
        population: 22000,
        region: "Niedersachsen",
        distance: 20,
        description: "Südwestlich von Hamburg gelegen, gestalten wir in Neu Wulmstorf moderne Gärten für junge Familien."
    },
    {
        slug: "schenefeld",
        lat: 53.5833,
        lng: 9.8167,
        name: "Schenefeld",
        population: 20000,
        region: "Schleswig-Holstein",
        distance: 12,
        description: "Direkt an der Hamburger Stadtgrenze bieten wir in Schenefeld schnellen Service und professionelle Gartengestaltung."
    },
    {
        slug: "glinde",
        lat: 53.5439,
        lng: 10.2053,
        name: "Glinde",
        population: 19000,
        region: "Schleswig-Holstein",
        distance: 18,
        description: "Im Kreis Stormarn gelegen, verwandeln wir in Glinde Gärten in gepflegte Wohlfühloasen."
    },
    {
        slug: "halstenbek",
        lat: 53.6333,
        lng: 9.8333,
        name: "Halstenbek",
        population: 18000,
        region: "Schleswig-Holstein",
        distance: 15,
        description: "In der Baumschulgemeinde Halstenbek verbinden wir lokale Gartenbau-Tradition mit modernem Design."
    },
    {
        slug: "bad-segeberg",
        lat: 53.9361,
        lng: 10.3089,
        name: "Bad Segeberg",
        population: 17000,
        region: "Schleswig-Holstein",
        distance: 55,
        description: "Die Karl-May-Stadt Bad Segeberg verdient Gärten mit Charakter. Wir gestalten grüne Refugien nahe dem Kalkberg."
    },
    {
        slug: "schwarzenbek",
        lat: 53.5033,
        lng: 10.4786,
        name: "Schwarzenbek",
        population: 17000,
        region: "Schleswig-Holstein",
        distance: 35,
        description: "Im Herzen des Herzogtum Lauenburg kreieren wir in Schwarzenbek stilvolle Gartenanlagen."
    },
    {
        slug: "bargteheide",
        lat: 53.7283,
        lng: 10.2583,
        name: "Bargteheide",
        population: 16000,
        region: "Schleswig-Holstein",
        distance: 30,
        description: "Die familienfreundliche Stadt Bargteheide verdient Gärten, in denen Kinder spielen und Erwachsene entspannen können."
    },
    {
        slug: "uetersen",
        lat: 53.6833,
        lng: 9.6667,
        name: "Uetersen",
        population: 15000,
        region: "Schleswig-Holstein",
        distance: 30,
        description: "Die Rosenstadt Uetersen ist prädestiniert für blühende Gärten. Wir bringen die Tradition der Rosenschule in Ihren Garten."
    },
    {
        slug: "tornesch",
        lat: 53.7,
        lng: 9.7167,
        name: "Tornesch",
        population: 15000,
        region: "Schleswig-Holstein",
        distance: 25,
        description: "Im Kreis Pinneberg gelegen, bieten wir in Tornesch professionelle Gartengestaltung zum fairen Preis."
    },
    {
        slug: "rosengarten",
        lat: 53.4,
        lng: 9.9333,
        name: "Rosengarten",
        population: 14000,
        region: "Niedersachsen",
        distance: 18,
        description: "Die Gemeinde Rosengarten trägt ihren Namen nicht umsonst. Wir gestalten Gärten, die dem Namen alle Ehre machen."
    },
    {
        slug: "tostedt",
        lat: 53.2833,
        lng: 9.7167,
        name: "Tostedt",
        population: 13000,
        region: "Niedersachsen",
        distance: 40,
        description: "Am Rande der Lüneburger Heide gelegen, verbinden wir in Tostedt Heidecharakter mit moderner Gartengestaltung."
    },
    {
        slug: "trittau",
        lat: 53.6111,
        lng: 10.405,
        name: "Trittau",
        population: 12000,
        region: "Schleswig-Holstein",
        distance: 30,
        description: "In der Gemeinde Trittau gestalten wir naturnahe Gärten, die zur ländlichen Umgebung passen."
    },
    {
        slug: "rellingen",
        lat: 53.65,
        lng: 9.8167,
        name: "Rellingen",
        population: 12000,
        region: "Schleswig-Holstein",
        distance: 15,
        description: "Zwischen Hamburg und Pinneberg gelegen, bieten wir in Rellingen schnellen Service und hochwertige Gartengestaltung."
    },
    {
        slug: "wentorf",
        lat: 53.4917,
        lng: 10.25,
        name: "Wentorf bei Hamburg",
        population: 12000,
        region: "Schleswig-Holstein",
        distance: 15,
        description: "Direkt an der Hamburger Stadtgrenze bieten wir in Wentorf maßgeschneiderte Gartenlösungen."
    },
    {
        slug: "barsbuettel",
        name: "Barsbüttel",
        population: 12000,
        region: "Schleswig-Holstein",
        distance: 12,
        description: "Östlich von Hamburg gelegen, gestalten wir in Barsbüttel Gärten für das moderne Wohnen."
    },
    {
        slug: "oststeinbek",
        lat: 53.5333,
        lng: 10.15,
        name: "Oststeinbek",
        population: 10000,
        region: "Schleswig-Holstein",
        distance: 12,
        description: "In Oststeinbek verbinden wir Nähe zu Hamburg mit ruhigem Wohnen und schönen Gärten."
    },
    {
        slug: "stelle",
        lat: 53.3833,
        lng: 10.0833,
        name: "Stelle",
        population: 10000,
        region: "Niedersachsen",
        distance: 20,
        description: "Die Gemeinde Stelle südöstlich von Hamburg bietet ideale Bedingungen für gepflegte Familiengärten."
    },
    {
        slug: "appen",
        name: "Appen",
        population: 9000,
        region: "Schleswig-Holstein",
        distance: 22,
        description: "Im Kreis Pinneberg gelegen, gestalten wir in Appen naturnahe Gärten mit ländlichem Charme."
    },
    {
        slug: "jork",
        lat: 53.5333,
        lng: 9.6833,
        name: "Jork",
        population: 9000,
        region: "Niedersachsen",
        distance: 35,
        description: "Im Herzen des Alten Landes kreieren wir in Jork Gärten, die die Obstbau-Tradition der Region widerspiegeln."
    },
    {
        slug: "bendestorf",
        name: "Bendestorf",
        population: 8000,
        region: "Niedersachsen",
        distance: 25,
        description: "In der Gemeinde Bendestorf gestalten wir Gärten, die zur naturnahen Umgebung der Nordheide passen."
    },
    {
        slug: "grosshansdorf",
        lat: 53.6667,
        lng: 10.2667,
        name: "Großhansdorf",
        population: 8000,
        region: "Schleswig-Holstein",
        distance: 25,
        description: "Die Walddorfgemeinde Großhansdorf verdient Gärten, die sich harmonisch in die grüne Umgebung einfügen."
    },
    {
        slug: "ammersbek",
        lat: 53.6833,
        lng: 10.1833,
        name: "Ammersbek",
        population: 8000,
        region: "Schleswig-Holstein",
        distance: 20,
        description: "In der Gemeinde Ammersbek nördlich von Hamburg gestalten wir gepflegte Gärten für anspruchsvolle Kunden."
    },
    {
        slug: "bad-bramstedt",
        lat: 53.9167,
        lng: 9.8833,
        name: "Bad Bramstedt",
        population: 15000,
        region: "Schleswig-Holstein",
        distance: 50,
        description: "Die Kurstadt Bad Bramstedt verdient Gärten, die Erholung und Entspannung bieten – genau wie wir sie gestalten."
    },
    {
        slug: "barmstedt",
        lat: 53.7833,
        lng: 9.7667,
        name: "Barmstedt",
        population: 10000,
        region: "Schleswig-Holstein",
        distance: 35,
        description: "Die Schusterstadt Barmstedt bietet mit ihrer historischen Schlossinsel Inspiration für stilvolle Gartengestaltung."
    },
    {
        slug: "norderstedt-garstedt",
        name: "Garstedt",
        population: 25000,
        region: "Schleswig-Holstein",
        distance: 15,
        description: "Im Stadtteil Garstedt bieten wir hochwertige Gartengestaltung für die wachsende Gemeinde am Hamburger Rand."
    },
    {
        slug: "maschen",
        name: "Maschen",
        population: 8000,
        region: "Niedersachsen",
        distance: 18,
        description: "In Maschen, bekannt für seinen großen Rangierbahnhof, gestalten wir ruhige Gartenoasen als Ausgleich zum Alltag."
    },
    {
        slug: "hittfeld",
        name: "Hittfeld",
        population: 10000,
        region: "Niedersachsen",
        distance: 18,
        description: "Im Herzen von Seevetal gelegen, bieten wir in Hittfeld professionelle Gartengestaltung und Pflege."
    },
    {
        slug: "meckelfeld",
        name: "Meckelfeld",
        population: 8000,
        region: "Niedersachsen",
        distance: 15,
        description: "In Meckelfeld direkt südlich der Elbe gestalten wir moderne Gärten für Familien und Unternehmen."
    },
    {
        slug: "harsefeld",
        lat: 53.45,
        lng: 9.5167,
        name: "Harsefeld",
        population: 13000,
        region: "Niedersachsen",
        distance: 45,
        description: "Die Klostergemeinde Harsefeld bietet mit ihrer historischen Atmosphäre ideale Voraussetzungen für stilvolle Gärten."
    },
    {
        slug: "horneburg",
        lat: 53.5083,
        lng: 9.575,
        name: "Horneburg",
        population: 6000,
        region: "Niedersachsen",
        distance: 40,
        description: "Im Alten Land gelegen, gestalten wir in Horneburg Gärten, die die Tradition der Obstbauregion ehren."
    },
    {
        slug: "hollenstedt",
        lat: 53.3667,
        lng: 9.7167,
        name: "Hollenstedt",
        population: 5000,
        region: "Niedersachsen",
        distance: 35,
        description: "In der Samtgemeinde Hollenstedt bieten wir ländliche Gartengestaltung mit Liebe zum Detail."
    },
    {
        slug: "salzhausen",
        lat: 53.2333,
        lng: 10.1833,
        name: "Salzhausen",
        population: 6000,
        region: "Niedersachsen",
        distance: 40,
        description: "Am Rand der Lüneburger Heide gelegen, gestalten wir in Salzhausen naturnahe Heidelandschaften im Kleinformat."
    },
    {
        slug: "dollern",
        lat: 53.5333,
        lng: 9.55,
        name: "Dollern",
        population: 3500,
        region: "Niedersachsen",
        distance: 50,
        description: "In Dollern im Alten Land verbinden wir traditionellen Obstbau-Charme mit moderner Gartengestaltung."
    },
    {
        slug: "steinkirchen",
        name: "Steinkirchen",
        population: 5000,
        region: "Niedersachsen",
        distance: 40,
        description: "Im malerischen Steinkirchen im Alten Land gestalten wir Gärten, die zur blühenden Obstlandschaft passen."
    },
    {
        slug: "drochtersen",
        lat: 53.7167,
        lng: 9.3833,
        name: "Drochtersen",
        population: 11000,
        region: "Niedersachsen",
        distance: 55,
        description: "An der Elbe gelegen, kreieren wir in Drochtersen Gärten mit maritimem Flair und norddeutschem Charakter."
    },
    {
        slug: "fredenbeck",
        lat: 53.5333,
        lng: 9.4333,
        name: "Fredenbeck",
        population: 5000,
        region: "Niedersachsen",
        distance: 50,
        description: "In der Gemeinde Fredenbeck bieten wir professionelle Gartengestaltung für die ländliche Region."
    },
    {
        slug: "oldendorf-elbe",
        name: "Oldendorf (Luhe)",
        population: 3500,
        region: "Niedersachsen",
        distance: 45,
        description: "An der Luhe gelegen, gestalten wir in Oldendorf Gärten, die die naturnahe Umgebung widerspiegeln."
    },
    {
        slug: "reppenstedt",
        lat: 53.2667,
        lng: 10.35,
        name: "Reppenstedt",
        population: 6000,
        region: "Niedersachsen",
        distance: 55,
        description: "Nahe Lüneburg gelegen, bieten wir in Reppenstedt hochwertige Gartengestaltung für anspruchsvolle Kunden."
    },
    {
        slug: "adendorf",
        lat: 53.2667,
        lng: 10.45,
        name: "Adendorf",
        population: 11000,
        region: "Niedersachsen",
        distance: 52,
        description: "Direkt bei Lüneburg gelegen, gestalten wir in Adendorf moderne Familiengärten und grüne Oasen."
    },
    {
        slug: "bardowick",
        lat: 53.2833,
        lng: 10.3833,
        name: "Bardowick",
        population: 7000,
        region: "Niedersachsen",
        distance: 55,
        description: "Die historische Gemeinde Bardowick mit ihrem Dom verdient Gärten von besonderer Qualität."
    },
    {
        slug: "handorf",
        name: "Handorf",
        population: 4000,
        region: "Niedersachsen",
        distance: 45,
        description: "In der ländlichen Gemeinde Handorf gestalten wir naturnahe Gärten mit Liebe zum Detail."
    },
    {
        slug: "brietlingen",
        name: "Brietlingen",
        population: 4500,
        region: "Niedersachsen",
        distance: 50,
        description: "An der Elbe gelegen, bieten wir in Brietlingen Gartengestaltung, die zur Flusslandschaft passt."
    },
    {
        slug: "barendorf",
        lat: 53.25,
        lng: 10.4833,
        name: "Barendorf",
        population: 3000,
        region: "Niedersachsen",
        distance: 58,
        description: "In der Gemeinde Barendorf bei Lüneburg gestalten wir ländliche Gärten mit norddeutschem Charme."
    },
    {
        slug: "tespe",
        name: "Tespe",
        population: 4500,
        region: "Niedersachsen",
        distance: 35,
        description: "An der Elbe in der Elbmarsch gelegen, gestalten wir in Tespe Gärten mit Blick auf den Strom."
    },
    {
        slug: "marschacht",
        name: "Marschacht",
        population: 4000,
        region: "Niedersachsen",
        distance: 38,
        description: "In der Elbmarsch bei Marschacht kreieren wir Gärten, die die einzigartige Landschaft ergänzen."
    },
    {
        slug: "drage",
        name: "Drage",
        population: 3500,
        region: "Niedersachsen",
        distance: 40,
        description: "In der Gemeinde Drage an der Elbe bieten wir professionelle Gartengestaltung für die Region."
    },
    {
        slug: "hoopte",
        name: "Hoopte",
        population: 3000,
        region: "Niedersachsen",
        distance: 30,
        description: "An der Elbe gelegen, gestalten wir in Hoopte Gärten mit maritimem Charakter."
    },
    {
        slug: "over",
        name: "Over",
        population: 3000,
        region: "Niedersachsen",
        distance: 32,
        description: "In der Elbmarsch bei Over kreieren wir naturnahe Gärten, die zur Flusslandschaft passen."
    },
    // Lüneburger Heide Region
    {
        slug: "soltau",
        lat: 52.9833,
        lng: 9.8333,
        name: "Soltau",
        population: 22000,
        region: "Niedersachsen",
        distance: 70,
        description: "Die Heidestadt Soltau, bekannt durch den Heide Park, verdient Gärten mit echtem Heidecharakter. Wir gestalten naturnahe Gartenoasen."
    },
    {
        slug: "munster",
        lat: 52.9833,
        lng: 10.0833,
        name: "Munster",
        population: 15000,
        region: "Niedersachsen",
        distance: 75,
        description: "Die Heidestadt Munster verbindet militärische Tradition mit Naturschönheit. Wir gestalten Gärten, die zur Heidelandschaft passen."
    },
    {
        slug: "schneverdingen",
        lat: 53.1167,
        lng: 9.7833,
        name: "Schneverdingen",
        population: 19000,
        region: "Niedersachsen",
        distance: 65,
        description: "Im Herzen der Lüneburger Heide gelegen, kreieren wir in Schneverdingen Gärten mit authentischem Heidecharakter."
    },
    {
        slug: "bispingen",
        lat: 53.0833,
        lng: 9.9833,
        name: "Bispingen",
        population: 6000,
        region: "Niedersachsen",
        distance: 60,
        description: "Die Tourismusgemeinde Bispingen mit Snow Dome und Heide Park verdient Gärten, die Gäste und Einheimische begeistern."
    },
    {
        slug: "amelinghausen",
        lat: 53.1167,
        lng: 10.2167,
        name: "Amelinghausen",
        population: 4000,
        region: "Niedersachsen",
        distance: 55,
        description: "Das Heidedorf Amelinghausen, bekannt für das Heideblütenfest, verdient Gärten mit blühender Heide und regionalen Pflanzen."
    },
    {
        slug: "egestorf",
        lat: 53.1833,
        lng: 9.8667,
        name: "Egestorf",
        population: 5500,
        region: "Niedersachsen",
        distance: 50,
        description: "Am Rand der Lüneburger Heide in Egestorf gestalten wir Gärten, die Natur und Erholung perfekt verbinden."
    },
    {
        slug: "hanstedt",
        lat: 53.2667,
        lng: 9.9167,
        name: "Hanstedt",
        population: 5000,
        region: "Niedersachsen",
        distance: 45,
        description: "Die Heidegemeinde Hanstedt mit dem Wildpark Lüneburger Heide inspiriert zu naturnahen Gartengestaltungen."
    },
    {
        slug: "undeloh",
        lat: 53.2,
        lng: 9.95,
        name: "Undeloh",
        population: 1000,
        region: "Niedersachsen",
        distance: 48,
        description: "Das malerische Heidedorf Undeloh am Wilseder Berg verdient Gärten, die die einzigartige Heidelandschaft widerspiegeln."
    },
    {
        slug: "jesteburg",
        lat: 53.3,
        lng: 9.9667,
        name: "Jesteburg",
        population: 8000,
        region: "Niedersachsen",
        distance: 35,
        description: "Am Nordrand der Heide gelegen, verbinden wir in Jesteburg moderne Gartengestaltung mit Heidecharakter."
    },
    {
        slug: "marxen",
        lat: 53.3167,
        lng: 10.0667,
        name: "Marxen",
        population: 2500,
        region: "Niedersachsen",
        distance: 40,
        description: "In der Gemeinde Marxen gestalten wir ländliche Gärten mit dem Charme der Nordheide."
    },
    {
        slug: "asendorf",
        name: "Asendorf",
        population: 3500,
        region: "Niedersachsen",
        distance: 42,
        description: "In Asendorf am Rand der Nordheide kreieren wir natürliche Gärten für ruhiges Landwohnen."
    },
    {
        slug: "garlstorf",
        name: "Garlstorf",
        population: 1500,
        region: "Niedersachsen",
        distance: 38,
        description: "Im beschaulichen Garlstorf gestalten wir Gärten, die zur ländlichen Idylle passen."
    },
    {
        slug: "soderstorf",
        name: "Soderstorf",
        population: 3000,
        region: "Niedersachsen",
        distance: 50,
        description: "In der Heidegemeinde Soderstorf bieten wir Gartengestaltung mit regionaler Verbundenheit."
    },
    {
        slug: "rehlingen",
        lat: 53,
        lng: 10.3,
        name: "Rehlingen",
        population: 2000,
        region: "Niedersachsen",
        distance: 55,
        description: "Im Heideort Rehlingen gestalten wir Gärten, die die Schönheit der Lüneburger Heide einfangen."
    },
    {
        slug: "betzendorf",
        name: "Betzendorf",
        population: 2500,
        region: "Niedersachsen",
        distance: 52,
        description: "In Betzendorf nahe Amelinghausen kreieren wir naturnahe Heidegärten mit Charakter."
    },
    {
        slug: "deutsch-evern",
        lat: 53.2167,
        lng: 10.4333,
        name: "Deutsch Evern",
        population: 4000,
        region: "Niedersachsen",
        distance: 55,
        description: "Nahe Lüneburg gelegen, bieten wir in Deutsch Evern hochwertige Gartengestaltung für anspruchsvolle Kunden."
    },
    {
        slug: "melbeck",
        lat: 53.1833,
        lng: 10.3833,
        name: "Melbeck",
        population: 4500,
        region: "Niedersachsen",
        distance: 58,
        description: "In der Gemeinde Melbeck bei Lüneburg gestalten wir gepflegte Gärten mit norddeutschem Flair."
    },
    {
        slug: "embsen",
        lat: 53.1667,
        lng: 10.35,
        name: "Embsen",
        population: 2500,
        region: "Niedersachsen",
        distance: 60,
        description: "Im ländlichen Embsen kreieren wir Gärten, die Ruhe und Naturverbundenheit ausstrahlen."
    },
    {
        slug: "kirchgellersen",
        name: "Kirchgellersen",
        population: 3500,
        region: "Niedersachsen",
        distance: 52,
        description: "In Kirchgellersen bei Lüneburg bieten wir individuelle Gartengestaltung für jedes Budget."
    },
    {
        slug: "westergellersen",
        name: "Westergellersen",
        population: 2500,
        region: "Niedersachsen",
        distance: 50,
        description: "In Westergellersen gestalten wir ländliche Gärten mit Blick auf die Nordheide."
    },
    {
        slug: "vögelsen",
        lat: 53.2833,
        lng: 10.4,
        name: "Vögelsen",
        population: 3000,
        region: "Niedersachsen",
        distance: 54,
        description: "Nahe Lüneburg in Vögelsen bieten wir professionelle Gartengestaltung und regelmäßige Pflege."
    },
    {
        slug: "radbruch",
        name: "Radbruch",
        population: 2500,
        region: "Niedersachsen",
        distance: 48,
        description: "In Radbruch zwischen Lüneburg und Winsen gestalten wir Gärten für modernes Landleben."
    },
    {
        slug: "barum",
        lat: 53.2333,
        lng: 10.4833,
        name: "Barum",
        population: 3500,
        region: "Niedersachsen",
        distance: 56,
        description: "In der Gemeinde Barum östlich von Lüneburg kreieren wir gepflegte Familiengärten."
    },
    {
        slug: "wulfsen",
        lat: 53.3333,
        lng: 10.15,
        name: "Wulfsen",
        population: 2000,
        region: "Niedersachsen",
        distance: 35,
        description: "Im ländlichen Wulfsen gestalten wir naturnahe Gärten mit Charakter."
    },
    {
        slug: "rottorf",
        name: "Rottorf",
        population: 1500,
        region: "Niedersachsen",
        distance: 40,
        description: "In Rottorf bieten wir Gartengestaltung, die zur dörflichen Atmosphäre passt."
    },
    {
        slug: "pattensen",
        name: "Pattensen (Winsen)",
        population: 3000,
        region: "Niedersachsen",
        distance: 35,
        description: "In Pattensen bei Winsen gestalten wir Gärten für Familien und Naturliebhaber."
    },
    {
        slug: "luhdorf",
        name: "Luhdorf",
        population: 3500,
        region: "Niedersachsen",
        distance: 32,
        description: "In Luhdorf nahe Winsen bieten wir schnellen Service und professionelle Gartengestaltung."
    },
    {
        slug: "toppenstedt",
        lat: 53.3167,
        lng: 10.1167,
        name: "Toppenstedt",
        population: 3000,
        region: "Niedersachsen",
        distance: 40,
        description: "In Toppenstedt am Rand der Nordheide gestalten wir naturverbundene Gärten."
    },
    {
        slug: "sprötze",
        name: "Sprötze",
        population: 4000,
        region: "Niedersachsen",
        distance: 38,
        description: "In Sprötze bei Buchholz bieten wir hochwertige Gartengestaltung für die wachsende Gemeinde."
    },
    {
        slug: "holm-seppensen",
        name: "Holm-Seppensen",
        population: 5000,
        region: "Niedersachsen",
        distance: 36,
        description: "Im beliebten Holm-Seppensen gestalten wir Gärten für gehobene Ansprüche."
    },
    {
        slug: "dibbersen",
        name: "Dibbersen",
        population: 2000,
        region: "Niedersachsen",
        distance: 33,
        description: "In Dibbersen bei Buchholz kreieren wir Gärten, die zum entspannten Landleben passen."
    },
    {
        slug: "trelde",
        name: "Trelde",
        population: 1500,
        region: "Niedersachsen",
        distance: 34,
        description: "Im beschaulichen Trelde gestalten wir individuelle Gärten mit Liebe zum Detail."
    },
    {
        slug: "kakenstorf",
        name: "Kakenstorf",
        population: 2500,
        region: "Niedersachsen",
        distance: 42,
        description: "In Kakenstorf bieten wir Gartengestaltung, die die Nordheide-Tradition respektiert."
    },
    {
        slug: "welle",
        name: "Welle",
        population: 2000,
        region: "Niedersachsen",
        distance: 38,
        description: "Im ländlichen Welle gestalten wir naturnahe Gärten für entspanntes Wohnen."
    },
    {
        slug: "wistedt",
        name: "Wistedt",
        population: 3000,
        region: "Niedersachsen",
        distance: 45,
        description: "In Wistedt in der Nordheide kreieren wir Gärten mit regionaltypischem Charakter."
    },
    {
        slug: "handeloh",
        name: "Handeloh",
        population: 2500,
        region: "Niedersachsen",
        distance: 48,
        description: "Am Rand der Lüneburger Heide in Handeloh gestalten wir Gärten zwischen Wald und Heide."
    },
    {
        slug: "wörme",
        name: "Wörme",
        population: 1000,
        region: "Niedersachsen",
        distance: 45,
        description: "Im idyllischen Wörme gestalten wir Gärten, die zur unberührten Heidelandschaft passen."
    },
    {
        slug: "inzmühlen",
        name: "Inzmühlen",
        population: 800,
        region: "Niedersachsen",
        distance: 50,
        description: "Im romantischen Inzmühlen kreieren wir Gärten mit echtem Heide-Charme."
    },
    {
        slug: "wintermoor",
        name: "Wintermoor",
        population: 2000,
        region: "Niedersachsen",
        distance: 52,
        description: "In Wintermoor an der Heide gestalten wir Gärten, die die Moorlandschaft integrieren."
    },
    {
        slug: "neuenkirchen-heide",
        name: "Neuenkirchen (Heide)",
        population: 5500,
        region: "Niedersachsen",
        distance: 68,
        description: "Im Heideort Neuenkirchen bieten wir professionelle Gartengestaltung mit Heidecharakter."
    },
    {
        slug: "wietzendorf",
        lat: 52.9167,
        lng: 10.1,
        name: "Wietzendorf",
        population: 4000,
        region: "Niedersachsen",
        distance: 72,
        description: "In Wietzendorf in der Südheide gestalten wir Gärten, die zur weiten Heidelandschaft passen."
    },
    {
        slug: "hermannsburg",
        lat: 52.8333,
        lng: 10.0833,
        name: "Hermannsburg",
        population: 8500,
        region: "Niedersachsen",
        distance: 85,
        description: "Die Missionsgemeinde Hermannsburg verdient Gärten, die Tradition und Moderne verbinden."
    },
    {
        slug: "müden-örtze",
        name: "Müden (Örtze)",
        population: 5000,
        region: "Niedersachsen",
        distance: 80,
        description: "Am Ufer der Örtze in Müden gestalten wir Gärten mit Flusslandschafts-Charakter."
    },
    {
        slug: "faßberg",
        lat: 52.9,
        lng: 10.1667,
        name: "Faßberg",
        population: 6000,
        region: "Niedersachsen",
        distance: 82,
        description: "In Faßberg am Rand der Südheide bieten wir Gartengestaltung für die Region."
    },
    {
        slug: "unterlüß",
        name: "Unterlüß",
        population: 4000,
        region: "Niedersachsen",
        distance: 90,
        description: "Im Heideort Unterlüß gestalten wir naturnahe Gärten inmitten großer Waldgebiete."
    },
    {
        slug: "eimke",
        name: "Eimke",
        population: 2000,
        region: "Niedersachsen",
        distance: 75,
        description: "In Eimke in der Heide kreieren wir Gärten mit dörflichem Charme."
    },
    {
        slug: "wrestedt",
        lat: 52.9333,
        lng: 10.6167,
        name: "Wrestedt",
        population: 4500,
        region: "Niedersachsen",
        distance: 88,
        description: "In Wrestedt bei Uelzen bieten wir professionelle Gartengestaltung für die Südheide."
    },
    {
        slug: "uelzen",
        lat: 52.9667,
        lng: 10.5667,
        name: "Uelzen",
        population: 34000,
        region: "Niedersachsen",
        distance: 92,
        description: "Die Hansestadt Uelzen mit dem berühmten Hundertwasser-Bahnhof verdient Gärten mit kreativem Charakter."
    },
    {
        slug: "bad-bevensen",
        lat: 53.0833,
        lng: 10.5833,
        name: "Bad Bevensen",
        population: 9500,
        region: "Niedersachsen",
        distance: 85,
        description: "Die Kurstadt Bad Bevensen verdient Gärten, die Erholung und Wellness perfekt ergänzen."
    },
    {
        slug: "ebstorf",
        lat: 53.0167,
        lng: 10.4167,
        name: "Ebstorf",
        population: 5500,
        region: "Niedersachsen",
        distance: 78,
        description: "Das Klosterdorf Ebstorf mit seiner historischen Weltkarte inspiriert zu besonderen Gartengestaltungen."
    },
    {
        slug: "bienenbüttel",
        lat: 53.1333,
        lng: 10.4833,
        name: "Bienenbüttel",
        population: 6500,
        region: "Niedersachsen",
        distance: 65,
        description: "An der Ilmenau in Bienenbüttel gestalten wir Gärten, die Fluss und Heide verbinden."
    },
    {
        slug: "evendorf",
        name: "Evendorf",
        population: 1500,
        region: "Niedersachsen",
        distance: 58,
        description: "Im ländlichen Evendorf kreieren wir naturnahe Gärten mit Heide-Charakter."
    },
    {
        slug: "thomasburg",
        lat: 53.2333,
        lng: 10.65,
        name: "Thomasburg",
        population: 1000,
        region: "Niedersachsen",
        distance: 60,
        description: "Im beschaulichen Thomasburg gestalten wir Gärten, die zur dörf lichen Atmosphäre passen."
    },
    {
        slug: "neetze",
        lat: 53.2667,
        lng: 10.5833,
        name: "Neetze",
        population: 3500,
        region: "Niedersachsen",
        distance: 54,
        description: "An der Neetze gelegen, bieten wir in der gleichnamigen Gemeinde naturnahe Gartengestaltung."
    },
    {
        slug: "bleckede",
        lat: 53.2917,
        lng: 10.7333,
        name: "Bleckede",
        population: 9500,
        region: "Niedersachsen",
        distance: 60,
        description: "Die Elbstadt Bleckede mit dem Biosphaerium verdient Gärten, die die Elbaue widerspiegeln."
    },
    {
        slug: "dahlenburg",
        lat: 53.1833,
        lng: 10.7333,
        name: "Dahlenburg",
        population: 3500,
        region: "Niedersachsen",
        distance: 62,
        description: "Im Flecken Dahlenburg gestalten wir ländliche Gärten mit Charakter."
    },
    {
        slug: "nahrendorf",
        lat: 53.2333,
        lng: 10.8167,
        name: "Nahrendorf",
        population: 2000,
        region: "Niedersachsen",
        distance: 65,
        description: "In Nahrendorf im Amt Neuhaus bieten wir Gartengestaltung für die Elbregion."
    },
    {
        slug: "hitzacker",
        lat: 53.15,
        lng: 11.05,
        name: "Hitzacker",
        population: 5000,
        region: "Niedersachsen",
        distance: 70,
        description: "Die Fachwerkstadt Hitzacker an der Elbe verdient Gärten, die zur historischen Kulisse passen."
    },
    {
        slug: "dannenberg",
        lat: 53.0833,
        lng: 11.0833,
        name: "Dannenberg",
        population: 8500,
        region: "Niedersachsen",
        distance: 75,
        description: "Die Kreisstadt Dannenberg im Wendland verdient kreative Gärten mit regionalem Charakter."
    },
    {
        slug: "lüchow",
        name: "Lüchow",
        population: 9500,
        region: "Niedersachsen",
        distance: 95,
        description: "Die Kreisstadt Lüchow im Wendland bietet ideale Bedingungen für naturnahe Gartengestaltung."
    },
    // Hamburg - Bremen Korridor & Bremen Region
    {
        slug: "bremen",
        name: "Bremen",
        population: 570000,
        region: "Bremen",
        distance: 120,
        description: "Die Hansestadt Bremen mit ihren berühmten Stadtmusikanten verdient Gärten von Weltklasse. Wir gestalten grüne Oasen an der Weser.",
        districts: ["Schwachhausen", "Horn-Lehe", "Oberneuland", "Borgfeld", "Vegesack", "Blumenthal", "Burglesum"]
    },
    {
        slug: "bremerhaven",
        name: "Bremerhaven",
        population: 114000,
        region: "Bremen",
        distance: 140,
        description: "Die Seestadt Bremerhaven an der Wesermündung verdient Gärten, die Wind und Wetter trotzen."
    },
    {
        slug: "delmenhorst",
        lat: 53.05,
        lng: 8.6333,
        name: "Delmenhorst",
        population: 77000,
        region: "Niedersachsen",
        distance: 115,
        description: "Die Industriestadt Delmenhorst westlich von Bremen bietet ideale Bedingungen für moderne Gartengestaltung."
    },
    {
        slug: "oldenburg",
        lat: 53.1439,
        lng: 8.2146,
        name: "Oldenburg",
        population: 170000,
        region: "Niedersachsen",
        distance: 145,
        description: "Die Universitätsstadt Oldenburg verdient innovative Gärten, die Tradition und Moderne verbinden."
    },
    {
        slug: "rotenburg-wuemme",
        name: "Rotenburg (Wümme)",
        population: 22000,
        region: "Niedersachsen",
        distance: 75,
        description: "Die Kreisstadt Rotenburg an der Wümme bietet mit ihrer Flusslandschaft perfekte Bedingungen für naturnahe Gärten."
    },
    {
        slug: "verden",
        name: "Verden (Aller)",
        population: 28000,
        region: "Niedersachsen",
        distance: 100,
        description: "Die Reiterstadt Verden an der Aller verdient Gärten, die zur pferdefreundlichen Tradition passen."
    },
    {
        slug: "achim",
        name: "Achim",
        population: 32000,
        region: "Niedersachsen",
        distance: 110,
        description: "Die Stadt Achim östlich von Bremen bietet ideale Voraussetzungen für Familiengärten."
    },
    {
        slug: "oyten",
        name: "Oyten",
        population: 16000,
        region: "Niedersachsen",
        distance: 105,
        description: "In der Gemeinde Oyten bei Bremen gestalten wir moderne Gärten für wachsende Familien."
    },
    {
        slug: "ottersberg",
        name: "Ottersberg",
        population: 13000,
        region: "Niedersachsen",
        distance: 95,
        description: "Der Flecken Ottersberg mit seiner Kunsthochschule inspiriert zu kreativen Gartengestaltungen."
    },
    {
        slug: "lilienthal",
        name: "Lilienthal",
        population: 19000,
        region: "Niedersachsen",
        distance: 115,
        description: "Die Gemeinde Lilienthal nördlich von Bremen bietet ideale Bedingungen für gepflegte Gärten."
    },
    {
        slug: "worpswede",
        name: "Worpswede",
        population: 9500,
        region: "Niedersachsen",
        distance: 120,
        description: "Das Künstlerdorf Worpswede verdient Gärten, die ebenso künstlerisch und einzigartig sind wie der Ort selbst."
    },
    {
        slug: "osterholz-scharmbeck",
        name: "Osterholz-Scharmbeck",
        population: 31000,
        region: "Niedersachsen",
        distance: 125,
        description: "Die Kreisstadt Osterholz-Scharmbeck am Rand des Teufelsmoores bietet einzigartige Gartenlandschaften."
    },
    {
        slug: "ritterhude",
        name: "Ritterhude",
        population: 15000,
        region: "Niedersachsen",
        distance: 118,
        description: "In Ritterhude nördlich von Bremen gestalten wir Gärten mit Blick auf die Hamme."
    },
    {
        slug: "schwanewede",
        name: "Schwanewede",
        population: 20000,
        region: "Niedersachsen",
        distance: 130,
        description: "Die Gemeinde Schwanewede zwischen Bremen und Bremerhaven bietet Raum für großzügige Gartenanlagen."
    },
    {
        slug: "stuhr",
        name: "Stuhr",
        population: 33000,
        region: "Niedersachsen",
        distance: 118,
        description: "Die Gemeinde Stuhr südwestlich von Bremen bietet ideale Gartenbedingungen für Familien."
    },
    {
        slug: "weyhe",
        name: "Weyhe",
        population: 31000,
        region: "Niedersachsen",
        distance: 115,
        description: "In der Gemeinde Weyhe südlich von Bremen gestalten wir moderne Familiengärten."
    },
    {
        slug: "syke",
        name: "Syke",
        population: 25000,
        region: "Niedersachsen",
        distance: 125,
        description: "Die Kreisstadt Syke südlich von Bremen bietet vielfältige Möglichkeiten für Gartengestaltung."
    },
    {
        slug: "bassum",
        name: "Bassum",
        population: 16000,
        region: "Niedersachsen",
        distance: 135,
        description: "Die Stadt Bassum mit ihrem historischen Stift verdient Gärten von besonderer Qualität."
    },
    {
        slug: "twistringen",
        name: "Twistringen",
        population: 13000,
        region: "Niedersachsen",
        distance: 140,
        description: "In Twistringen im Landkreis Diepholz gestalten wir ländliche Gärten mit Charakter."
    },
    {
        slug: "diepholz",
        name: "Diepholz",
        population: 17000,
        region: "Niedersachsen",
        distance: 150,
        description: "Die Kreisstadt Diepholz bietet mit ihrer Lage zwischen Moor und Geest einzigartige Gartenmöglichkeiten."
    },
    {
        slug: "sulingen",
        name: "Sulingen",
        population: 13000,
        region: "Niedersachsen",
        distance: 145,
        description: "Die Samtgemeinde Sulingen bietet ideale Bedingungen für naturnahe Gartengestaltung."
    },
    {
        slug: "zeven",
        name: "Zeven",
        population: 14000,
        region: "Niedersachsen",
        distance: 70,
        description: "Die Stadt Zeven zwischen Hamburg und Bremen bietet vielfältige Gartenmöglichkeiten."
    },
    {
        slug: "sittensen",
        name: "Sittensen",
        population: 5500,
        region: "Niedersachsen",
        distance: 55,
        description: "Die Samtgemeinde Sittensen an der A1 bietet schnellen Service und professionelle Gartengestaltung."
    },
    {
        slug: "tarmstedt",
        name: "Tarmstedt",
        population: 4000,
        region: "Niedersachsen",
        distance: 80,
        description: "In der Samtgemeinde Tarmstedt gestalten wir ländliche Gärten mit norddeutschem Charme."
    },
    {
        slug: "sottrum",
        name: "Sottrum",
        population: 6500,
        region: "Niedersachsen",
        distance: 70,
        description: "In der Samtgemeinde Sottrum bei Rotenburg kreieren wir naturnahe Familiengärten."
    },
    {
        slug: "scheessel",
        name: "Scheeßel",
        population: 13000,
        region: "Niedersachsen",
        distance: 72,
        description: "Die Gemeinde Scheeßel, bekannt durch das Hurricane Festival, verdient Gärten mit Charakter."
    },
    {
        slug: "fintel",
        name: "Fintel",
        population: 3000,
        region: "Niedersachsen",
        distance: 68,
        description: "In Fintel in der Nordheide gestalten wir naturverbundene Gärten."
    },
    {
        slug: "lauenbrück",
        name: "Lauenbrück",
        population: 3500,
        region: "Niedersachsen",
        distance: 65,
        description: "In Lauenbrück an der Wümme bieten wir Gartengestaltung mit Flusslandschafts-Charakter."
    },
    {
        slug: "gyhum",
        name: "Gyhum",
        population: 2500,
        region: "Niedersachsen",
        distance: 73,
        description: "In der Gemeinde Gyhum gestalten wir ländliche Gärten mit Liebe zum Detail."
    },
    {
        slug: "visselhövede",
        name: "Visselhövede",
        population: 10000,
        region: "Niedersachsen",
        distance: 78,
        description: "Die Stadt Visselhövede am Rand der Lüneburger Heide bietet naturnahe Gartenmöglichkeiten."
    },
    {
        slug: "bothel",
        name: "Bothel",
        population: 4500,
        region: "Niedersachsen",
        distance: 75,
        description: "In der Samtgemeinde Bothel gestalten wir Gärten für das ländliche Wohnen."
    },
    {
        slug: "brockel",
        name: "Brockel",
        population: 2000,
        region: "Niedersachsen",
        distance: 77,
        description: "Im beschaulichen Brockel kreieren wir naturnahe Gärten mit Charakter."
    },
    {
        slug: "hemsbünde",
        name: "Hemsbünde",
        population: 1500,
        region: "Niedersachsen",
        distance: 73,
        description: "In Hemsbünde bei Rotenburg gestalten wir individuelle Gärten."
    },
    {
        slug: "kirchwalsede",
        name: "Kirchwalsede",
        population: 3000,
        region: "Niedersachsen",
        distance: 85,
        description: "In der Samtgemeinde Kirchwalsede bieten wir ländliche Gartengestaltung."
    },
    {
        slug: "thedinghausen",
        name: "Thedinghausen",
        population: 8000,
        region: "Niedersachsen",
        distance: 105,
        description: "Der Flecken Thedinghausen an der Weser bietet ideale Gartenbedingungen."
    },
    {
        slug: "dörverden",
        name: "Dörverden",
        population: 9500,
        region: "Niedersachsen",
        distance: 98,
        description: "Die Gemeinde Dörverden an der Aller bietet naturnahe Gartenmöglichkeiten."
    },
    {
        slug: "kirchlinteln",
        name: "Kirchlinteln",
        population: 10000,
        region: "Niedersachsen",
        distance: 95,
        description: "Die Gemeinde Kirchlinteln zwischen Verden und Rotenburg bietet ländliches Gartenglück."
    },
    {
        slug: "langwedel",
        name: "Langwedel",
        population: 15000,
        region: "Niedersachsen",
        distance: 102,
        description: "Der Flecken Langwedel an der Weser bietet ideale Bedingungen für Familiengärten."
    },
    {
        slug: "blender",
        name: "Blender",
        population: 5000,
        region: "Niedersachsen",
        distance: 100,
        description: "In der Gemeinde Blender gestalten wir Gärten mit Weserblick."
    },
    {
        slug: "emtinghausen",
        name: "Emtinghausen",
        population: 2000,
        region: "Niedersachsen",
        distance: 108,
        description: "In Emtinghausen bei Thedinghausen bieten wir individuelle Gartengestaltung."
    },
    {
        slug: "grasberg",
        name: "Grasberg",
        population: 8000,
        region: "Niedersachsen",
        distance: 112,
        description: "Die Gemeinde Grasberg nordöstlich von Bremen bietet Raum für großzügige Gärten."
    },
    {
        slug: "hambergen",
        name: "Hambergen",
        population: 5500,
        region: "Niedersachsen",
        distance: 120,
        description: "In der Samtgemeinde Hambergen gestalten wir Gärten zwischen Moor und Geest."
    },
    {
        slug: "gnarrenburg",
        name: "Gnarrenburg",
        population: 9000,
        region: "Niedersachsen",
        distance: 118,
        description: "Die Gemeinde Gnarrenburg am Rand des Teufelsmoores bietet einzigartige Gartenmöglichkeiten."
    },
    {
        slug: "bremervörde",
        name: "Bremervörde",
        population: 19000,
        region: "Niedersachsen",
        distance: 85,
        description: "Die Kreisstadt Bremervörde an der Oste bietet vielfältige Möglichkeiten für Gartengestaltung."
    },
    {
        slug: "beverstedt",
        name: "Beverstedt",
        population: 14000,
        region: "Niedersachsen",
        distance: 110,
        description: "Die Gemeinde Beverstedt zwischen Bremen und Bremerhaven bietet ländliche Gartenidylle."
    },
    {
        slug: "loxstedt",
        name: "Loxstedt",
        population: 16500,
        region: "Niedersachsen",
        distance: 125,
        description: "Die Gemeinde Loxstedt südlich von Bremerhaven bietet Raum für individuelle Gärten."
    },
    {
        slug: "schiffdorf",
        name: "Schiffdorf",
        population: 14500,
        region: "Niedersachsen",
        distance: 135,
        description: "Die Gemeinde Schiffdorf bei Bremerhaven bietet ideale Gartenbedingungen."
    },
    {
        slug: "hagen-im-bremischen",
        name: "Hagen im Bremischen",
        population: 11500,
        region: "Niedersachsen",
        distance: 130,
        description: "Die Gemeinde Hagen zwischen Bremen und Bremerhaven bietet ländliche Gartenmöglichkeiten."
    },
    {
        slug: "ganderkesee",
        name: "Ganderkesee",
        population: 32000,
        region: "Niedersachsen",
        distance: 125,
        description: "Die Gemeinde Ganderkesee westlich von Bremen bietet vielfältige Gartenlösungen."
    },
    {
        slug: "hude",
        name: "Hude",
        population: 16000,
        region: "Niedersachsen",
        distance: 130,
        description: "Die Gemeinde Hude mit ihrer historischen Klosterruine inspiriert zu besonderen Gärten."
    },
    {
        slug: "wildeshausen",
        name: "Wildeshausen",
        population: 20000,
        region: "Niedersachsen",
        distance: 140,
        description: "Die Kreisstadt Wildeshausen an der Hunte bietet mit der Wildeshauser Geest einzigartige Gartenmöglichkeiten."
    },
    {
        slug: "dötlingen",
        name: "Dötlingen",
        population: 6500,
        region: "Niedersachsen",
        distance: 135,
        description: "Das Künstlerdorf Dötlingen verdient Gärten mit künstlerischem Charakter."
    },
    {
        slug: "wardenburg",
        name: "Wardenburg",
        population: 16000,
        region: "Niedersachsen",
        distance: 150,
        description: "Die Gemeinde Wardenburg bei Oldenburg bietet Raum für großzügige Gartenanlagen."
    },
    {
        slug: "hatten",
        name: "Hatten",
        population: 14000,
        region: "Niedersachsen",
        distance: 148,
        description: "Die Gemeinde Hatten bei Oldenburg bietet ideale Bedingungen für moderne Gärten."
    },
    {
        slug: "großenkneten",
        name: "Großenkneten",
        population: 14500,
        region: "Niedersachsen",
        distance: 145,
        description: "Die Gemeinde Großenkneten mit dem Museumsdorf Cloppenburg bietet kulturelle Gartengestaltung."
    },
    {
        slug: "bad-zwischenahn",
        name: "Bad Zwischenahn",
        population: 29000,
        region: "Niedersachsen",
        distance: 155,
        description: "Die Kurstadt Bad Zwischenahn am Zwischenahner Meer verdient Gärten von höchster Qualität."
    },
    {
        slug: "wiefelstede",
        name: "Wiefelstede",
        population: 16000,
        region: "Niedersachsen",
        distance: 155,
        description: "Die Gemeinde Wiefelstede nördlich von Oldenburg bietet Raum für individuelle Gärten."
    },
    {
        slug: "rastede",
        name: "Rastede",
        population: 22000,
        region: "Niedersachsen",
        distance: 158,
        description: "Die Gemeinde Rastede mit dem Schlosspark bietet Inspiration für klassische Gartengestaltung."
    },
    {
        slug: "westerstede",
        name: "Westerstede",
        population: 23000,
        region: "Niedersachsen",
        distance: 165,
        description: "Die Rhododendronstadt Westerstede verdient Gärten mit blühender Pracht."
    },
    {
        slug: "edewecht",
        name: "Edewecht",
        population: 22000,
        region: "Niedersachsen",
        distance: 160,
        description: "Die Gemeinde Edewecht im Ammerland bietet grüne Gärten in grüner Landschaft."
    },
    {
        slug: "apen",
        name: "Apen",
        population: 11500,
        region: "Niedersachsen",
        distance: 163,
        description: "Die Gemeinde Apen im Ammerland bietet ideale Bedingungen für Rhododendrengärten."
    },
    {
        slug: "barssel",
        name: "Barßel",
        population: 12500,
        region: "Niedersachsen",
        distance: 170,
        description: "Die Gemeinde Barßel am Elisabethfehnkanal bietet Gärten mit Wasserbezug."
    },
    {
        slug: "nordenham",
        lat: 53.4833,
        lng: 8.4833,
        name: "Nordenham",
        population: 26000,
        region: "Niedersachsen",
        distance: 155,
        description: "Die Stadt Nordenham an der Wesermündung bietet Gärten mit maritimem Charakter."
    },
    {
        slug: "brake",
        lat: 53.3333,
        lng: 8.4833,
        name: "Brake (Unterweser)",
        population: 15000,
        region: "Niedersachsen",
        distance: 145,
        description: "Die Kreisstadt Brake an der Unterweser bietet Gärten zwischen Land und Fluss."
    },
    {
        slug: "elsfleth",
        name: "Elsfleth",
        population: 9500,
        region: "Niedersachsen",
        distance: 138,
        description: "Die Seefahrtstadt Elsfleth verdient Gärten mit maritimer Tradition."
    },
    {
        slug: "lemwerder",
        name: "Lemwerder",
        population: 7500,
        region: "Niedersachsen",
        distance: 132,
        description: "Die Gemeinde Lemwerder gegenüber von Bremen-Vegesack bietet Gärten mit Weserblick."
    },
    {
        slug: "berne",
        name: "Berne",
        population: 7000,
        region: "Niedersachsen",
        distance: 135,
        description: "Die Gemeinde Berne an der Hunte bietet naturnahe Gartenmöglichkeiten."
    },
    {
        slug: "stadland",
        name: "Stadland",
        population: 8000,
        region: "Niedersachsen",
        distance: 148,
        description: "Die Gemeinde Stadland an der Weser bietet Gärten in der Wesermarsch."
    },
    {
        slug: "butjadingen",
        name: "Butjadingen",
        population: 6500,
        region: "Niedersachsen",
        distance: 160,
        description: "Die Halbinsel Butjadingen verdient windresistente Gärten mit Nordseecharakter."
    },
    {
        slug: "jade",
        name: "Jade",
        population: 6000,
        region: "Niedersachsen",
        distance: 165,
        description: "Die Gemeinde Jade am Jadebusen bietet Gärten zwischen Marsch und Meer."
    }
];

// Funktion um Stadt nach Slug zu finden
export function getCityBySlug(slug: string): City | undefined {
    return cities.find(city => city.slug === slug);
}

// Alle Slugs für Static Generation
export function getAllCitySlugs(): string[] {
    return cities.map(city => city.slug);
}

// Städte nach Region gruppieren
export function getCitiesByRegion(): Record<string, City[]> {
    return cities.reduce((acc, city) => {
        if (!acc[city.region]) {
            acc[city.region] = [];
        }
        acc[city.region].push(city);
        return acc;
    }, {} as Record<string, City[]>);
}

// Nahe Städte finden (für interne Verlinkung)
export function getNearbyCities(slug: string, limit: number = 6): City[] {
    const currentCity = getCityBySlug(slug);
    if (!currentCity) return [];

    return cities
        .filter(city => city.slug !== slug)
        .sort((a, b) => {
            // Sortiere nach Distanz zum aktuellen Ort
            const distA = Math.abs(a.distance - currentCity.distance);
            const distB = Math.abs(b.distance - currentCity.distance);
            return distA - distB;
        })
        .slice(0, limit);
}
