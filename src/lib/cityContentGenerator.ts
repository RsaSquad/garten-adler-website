import { City } from '@/data/cities';

// --- Deterministic hash for consistent content selection ---
function hashSlug(slug: string): number {
    return slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

function pick<T>(arr: T[], slug: string, offset = 0): T {
    return arr[(hashSlug(slug) + offset) % arr.length];
}

// --- Geographic classification based on lat/lng ---
export function getBodenart(city: City): string {
    if (!city.lat || !city.lng) return 'Mischboden';
    // Elbe-Marsch: low elevation near Elbe (lat ~53.3-53.6, lng ~9.3-10.4, close to river)
    if (city.lat > 53.35 && city.lat < 53.6 && city.lng > 9.3 && city.lng < 10.0) return 'Marschboden';
    // Geest: sandy moraine soil (Pinneberg, Norderstedt area)
    if (city.lat > 53.6 && city.lng < 10.0) return 'Geestboden';
    // Heide: sandy heath soil
    if (city.lat < 53.25) return 'Heideboden (Sand)';
    // Lüneburg area: Lehm-Sand mix
    if (city.lng > 10.2 && city.lat < 53.35) return 'Lehm-Sandboden';
    return 'Sandboden';
}

export function getKlimazone(city: City): string {
    if (!city.lat) return 'gemäßigt-maritim';
    if (city.lat > 53.7) return 'maritim-küstennah';
    if (city.lat < 53.15) return 'gemäßigt-kontinental';
    return 'gemäßigt-maritim';
}

export function getTypischeGaerten(city: City): string {
    if (city.population > 100000) return 'Stadtgärten und Dachterrassen';
    if (city.population > 30000) return 'Reihenhausgärten und Vorgärten';
    if (city.population > 10000) return 'Familiengärten und Neubauprojekte';
    return 'großzügige Landhausgärten';
}

export function getKreisName(city: City): string {
    if (city.region === 'Hamburg') return 'Freie und Hansestadt Hamburg';
    if (!city.lat || !city.lng) return city.region;
    // Schleswig-Holstein
    if (city.lng < 9.85 && city.lat > 53.55) return 'Kreis Pinneberg';
    if (city.lat > 53.75 && city.lng > 9.85) return 'Kreis Segeberg';
    if (city.lat > 53.6 && city.lng > 10.15) return 'Kreis Stormarn';
    if (city.lat > 53.4 && city.lng > 10.35 && city.region === 'Schleswig-Holstein') return 'Herzogtum Lauenburg';
    // Niedersachsen
    if (city.lat < 53.25 && city.lng > 10.2) return 'Landkreis Lüneburg';
    if (city.lat > 53.3 && city.lat < 53.5 && city.lng < 9.8) return 'Landkreis Stade';
    if (city.lat < 53.45 && city.lng > 9.8 && city.lng < 10.25) return 'Landkreis Harburg';
    return city.region;
}

// --- Unique intro content per service ---

const galabauIntros = [
    (c: City, b: string, k: string) => `Der ${b} in ${c.name} stellt besondere Anforderungen an die Gartengestaltung. Mit unserer Erfahrung im ${k}en Klima der Region ${getKreisName(c)} wissen wir genau, welche Pflanzen hier gedeihen und welche Materialien den Witterungsbedingungen standhalten. Seit über 15 Jahren realisieren wir Gartenprojekte in ${c.name} – von der ersten Beratung bis zur langfristigen Pflege.`,
    (c: City, b: string, k: string) => `${c.name} mit seinen ${getTypischeGaerten(c)}n bietet vielfältige Möglichkeiten für professionelle Gartengestaltung. Der typische ${b} in der Region erfordert eine durchdachte Bodenvorbereitung – genau das ist unsere Stärke. Als Ihr GaLaBau-Betrieb mit nur ${c.distance}km Anfahrt sind wir regelmäßig vor Ort.`,
    (c: City, b: string, k: string) => `In ${c.name} (${getKreisName(c)}) verbinden wir regionale Expertise mit modernem Garten- und Landschaftsbau. Der ${b} dieser Region verlangt spezielle Drainage-Lösungen und eine gezielte Pflanzenwahl. Ob Neuanlage oder Umgestaltung – wir kennen die lokalen Gegebenheiten und beraten Sie individuell.`,
    (c: City, b: string) => `Als Ihr lokaler GaLaBau-Partner für ${c.name} und den ${getKreisName(c)} wissen wir: Jeder Garten hier ist einzigartig. Der ${b} prägt die Möglichkeiten – und wir nutzen sie optimal. Von ${getTypischeGaerten(c)}n bis zu repräsentativen Außenanlagen decken wir das gesamte Spektrum ab.`,
    (c: City, b: string, k: string) => `Gartengestaltung in ${c.name} bedeutet für uns: Die Besonderheiten der Region verstehen und in ein stimmiges Gesamtkonzept übersetzen. Das ${k}e Klima und der ${b} im ${getKreisName(c)} bieten sowohl Herausforderungen als auch Chancen für eindrucksvolle Gartenanlagen.`,
];

const baumpflegeIntros = [
    (c: City, b: string) => `Die Bäume in ${c.name} sind geprägt vom ${b} der Region ${getKreisName(c)}. Eichen, Buchen und Birken dominieren das Stadtbild. Unsere zertifizierten Baumpfleger kennen die spezifischen Anforderungen dieser Baumarten und pflegen sie fachgerecht nach ZTV-Baumpflege.`,
    (c: City, b: string) => `In ${c.name} stehen wir als Baumpflege-Spezialisten für sichere und fachgerechte Arbeit. Der ${b} beeinflusst die Standfestigkeit – besonders nach Stürmen ist eine professionelle Kontrolle wichtig. Mit Seilklettertechnik erreichen wir jeden Baum schonend.`,
    (c: City) => `Als Grundstückseigentümer in ${c.name} (${getKreisName(c)}) tragen Sie Verkehrssicherungspflicht für Ihre Bäume. Wir helfen Ihnen mit regelmäßiger Kontrolle, fachgerechtem Schnitt und – wenn nötig – sicherer Fällung. Unser Notfall-Service ist auch für ${c.name} innerhalb von 24h verfügbar.`,
    (c: City, b: string) => `Baumpflege in ${c.name} erfordert lokale Expertise. Die typischen Baumbestände auf ${b} brauchen andere Pflege als in anderen Regionen. Ob Obstbaumschnitt im Frühjahr oder Sturmschadenbeseitigung – wir sind Ihr zuverlässiger Partner im ${getKreisName(c)}.`,
];

const pflasterIntros = [
    (c: City, b: string) => `Pflasterarbeiten in ${c.name} erfordern besondere Sorgfalt bei der Unterbaukonstruktion. Der ${b} im ${getKreisName(c)} muss korrekt vorbereitet werden, um Frostschäden und Absenkungen zu vermeiden. Wir verwenden eine mehrlagige Tragschicht, die auf die lokalen Bodenverhältnisse abgestimmt ist.`,
    (c: City, b: string) => `Für ${c.name} mit seinem ${b} empfehlen wir frostbeständige Pflastermaterialien mit mindestens der Frostklasse F2. Ob Naturstein oder Betonstein – jedes Material wird mit fachgerechtem Unterbau verlegt. Die Entwässerung planen wir nach den örtlichen Gegebenheiten im ${getKreisName(c)}.`,
    (c: City, b: string) => `In ${c.name} sind besonders ${c.population > 20000 ? 'Einfahrten und repräsentative Zugangswege' : 'großzügige Hofbefestigungen und Gartenwege'} gefragt. Der ${b} hier erfordert einen soliden Schotterunterbau. Wir realisieren Pflasterprojekte jeder Größe – termingerecht und zum Festpreis.`,
];

const rollrasenIntros = [
    (c: City, b: string) => `Rollrasen-Verlegung in ${c.name}: Der ${b} im ${getKreisName(c)} bietet ${b.includes('Sand') ? 'gute Drainage, benötigt aber gezielte Düngung' : b.includes('Lehm') ? 'hohe Nährstoffversorgung, muss aber aufgelockert werden' : 'solide Grundbedingungen für einen dichten Rasen'}. Wir bereiten den Boden optimal vor und liefern den Rollrasen frisch von der Rasenschule.`,
    (c: City, b: string) => `Für ${c.name} empfehlen wir ${b.includes('Sand') ? 'unseren trockenresistenten Sport- & Spielrasen, der auch auf sandigen Böden gut wurzelt' : 'unseren Premium-Spielrasen, der auf dem nährstoffreichen Boden besonders dicht wächst'}. Innerhalb von 1-2 Tagen verwandeln wir Ihren Garten in eine sattgrüne Fläche.`,
    (c: City, b: string) => `In ${c.name} (${getKreisName(c)}) verlegen wir regelmäßig Rollrasen – von kleinen Vorgärten bis zu großen Spielflächen. Der ${b} wird mit Rasenerde aufgebessert und geebnet. So wächst Ihr neuer Rasen schnell an. Inklusive 1 Jahr Anwachsgarantie.`,
];

const gartenpflegeIntros = [
    (c: City, _b: string, k: string) => `Regelmäßige Gartenpflege in ${c.name} ist durch das ${k}e Klima besonders wichtig. ${k === 'maritim-küstennah' ? 'Wind und Salzluft fordern Pflanzen und Rasen zusätzlich.' : 'Feuchte Winter und trockene Sommer erfordern eine durchdachte Pflegestrategie.'} Wir bieten flexible Pflegeverträge für ${c.name} und den gesamten ${getKreisName(c)}.`,
    (c: City, b: string) => `Ihr Garten in ${c.name} verdient professionelle Pflege, die auf den ${b} abgestimmt ist. ${b.includes('Sand') ? 'Sandige Böden brauchen häufigere Düngung und gezieltes Wässern.' : 'Schwere Böden profitieren von regelmäßiger Belüftung und Vertikutieren.'} Von Rasenmähen bis Heckenschnitt – wir übernehmen alles.`,
    (c: City) => `In ${c.name} betreuen wir zahlreiche Gärten im Rahmen unserer Pflegeverträge. ${c.population > 20000 ? 'Ob Reihenhausgarten oder Gewerbeanlage' : 'Ob Hausgarten oder ländliches Grundstück'} – wir passen die Pflege an Ihre Bedürfnisse an. Monatliche oder saisonale Betreuung möglich.`,
];

const heckenschnittIntros = [
    (c: City, _b: string, k: string) => `In ${c.name} sind Hecken als natürlicher Sichtschutz besonders beliebt. Das ${k}e Klima im ${getKreisName(c)} fördert ein starkes Wachstum – regelmäßiger Formschnitt ist daher Pflicht. Wir schneiden alle gängigen Heckenarten: Thuja, Liguster, Buche, Hainbuche und Kirschlorbeer.`,
    (c: City) => `Professioneller Heckenschnitt für ${c.name}: Vom jährlichen Formschnitt bis zur kompletten Neupflanzung. Wir kennen die Naturschutzfristen (kein radikaler Rückschnitt vom 1. März bis 30. September) und beraten Sie zur optimalen Schnitttechnik für Ihre Heckenart im ${getKreisName(c)}.`,
    (c: City) => `Heckenpflege in ${c.name} erfordert Timing und Fachwissen. ${c.population > 15000 ? 'Besonders in dicht besiedelten Gebieten ist der Sichtschutz durch Hecken unverzichtbar.' : 'In ländlichen Gebieten setzen wir auf natürliche Heckenformen, die zur Umgebung passen.'} Wir sorgen für gepflegte Hecken – das ganze Jahr über.`,
];

const zaunbauIntros = [
    (c: City) => `Zaunbau in ${c.name}: Von Holzzäunen über Doppelstabmatten bis zu Gabionen – wir bauen den passenden Zaun für Ihr Grundstück im ${getKreisName(c)}. ${c.population > 15000 ? 'In städtischen Gebieten sind Sichtschutzzäune besonders gefragt.' : 'Auf ländlichen Grundstücken empfehlen wir robuste Holzzäune oder Wildzäune.'} Alle Zaunarbeiten mit Fundamentierung und Gewährleistung.`,
    (c: City, b: string) => `Für ${c.name} mit seinem ${b} setzen wir Zaunpfosten besonders sorgfältig: ${b.includes('Sand') ? 'In sandigen Böden verwenden wir tiefere Fundamente für maximale Stabilität.' : 'Der feste Boden ermöglicht solide Einbetonierung.'} Ob Sichtschutz, Kindersicherung oder Grundstücksabgrenzung – wir liefern und montieren.`,
    (c: City) => `In ${c.name} (${getKreisName(c)}) realisieren wir Zaunprojekte aller Art. Bitte beachten Sie: Die Grenzbebauung unterliegt lokalen Vorschriften. Wir beraten Sie zu Mindestabständen und genehmigungsfreien Höhen in Ihrer Gemeinde, bevor wir loslegen.`,
];

const terrassenbauIntros = [
    (c: City, b: string, k: string) => `Terrassenbau in ${c.name}: Das ${k}e Klima im ${getKreisName(c)} erfordert witterungsbeständige Materialien. ${k === 'maritim-küstennah' ? 'Wir empfehlen WPC oder Keramikplatten, die Wind und Feuchtigkeit trotzen.' : 'Holzterrassen aus Lärche oder Douglasie sind hier besonders beliebt.'} Der ${b} wird mit einer professionellen Unterkonstruktion ausgeglichen.`,
    (c: City, b: string) => `Für Ihre Terrasse in ${c.name} empfehlen wir ${b.includes('Sand') ? 'ein Schotterfundament auf dem sandigen Untergrund' : 'eine verdichtete Tragschicht auf dem bindigen Boden'}. Ob Holz, WPC, Naturstein oder Keramik – wir beraten Sie zum optimalen Material für Ihren Garten im ${getKreisName(c)}.`,
    (c: City) => `In ${c.name} sind ${c.population > 20000 ? 'platzsparende Terrassenlösungen für Reihenhausgärten' : 'großzügige Terrassenanlagen mit Stufen und Pergola'} besonders gefragt. Wir planen und bauen Ihre Traumterrasse inklusive Drainage, Beleuchtung und Bepflanzung – alles zum Festpreis.`,
];

// --- Public API ---

export function getUniqueIntro(city: City, service: string): string {
    const b = getBodenart(city);
    const k = getKlimazone(city);

    const pools: Record<string, ((c: City, b: string, k: string) => string)[]> = {
        'garten-und-landschaftsbau': galabauIntros,
        'galabau': galabauIntros,
        'baumpflege': baumpflegeIntros,
        'pflasterarbeiten': pflasterIntros,
        'rollrasen': rollrasenIntros,
        'gartenpflege': gartenpflegeIntros,
        'heckenschnitt': heckenschnittIntros,
        'zaunbau': zaunbauIntros,
        'terrassenbau': terrassenbauIntros,
    };

    const pool = pools[service] || galabauIntros;
    const fn = pick(pool, city.slug, service.length);
    return fn(city, b, k);
}

export function getLocalTipp(city: City, service: string): string {
    const b = getBodenart(city);
    const k = getKlimazone(city);

    const tipps: Record<string, string[]> = {
        'garten-und-landschaftsbau': [
            `Tipp für ${city.name}: Bei ${b} empfehlen wir eine Drainage unter gepflasterten Flächen, um Staunässe zu vermeiden.`,
            `Regional-Tipp: Im ${getKreisName(city)} gedeihen Rhododendren, Hortensien und Gräser besonders gut auf dem ${b}.`,
            `Wussten Sie? Das ${k}e Klima in ${city.name} ermöglicht eine Pflanzperiode von März bis November.`,
        ],
        'baumpflege': [
            `Hinweis für ${city.name}: Erkundigen Sie sich bei der Gemeinde nach der lokalen Baumschutzverordnung, bevor Sie Bäume fällen.`,
            `Regional: Auf ${b} in ${city.name} haben Flachwurzler wie Birken besonderen Pflegebedarf.`,
            `Tipp: Im ${getKreisName(city)} empfehlen wir den Obstbaumschnitt zwischen Januar und März für optimale Ergebnisse.`,
        ],
        'pflasterarbeiten': [
            `Für ${city.name}: Auf ${b} empfehlen wir mindestens 25cm Schottertragschicht für befahrbare Flächen.`,
            `Tipp: Versickerungsfähiges Pflaster kann in ${city.name} die Abwassergebühren senken – fragen Sie bei Ihrer Gemeinde nach.`,
            `Regional: Im ${getKreisName(city)} ist eine Frosttiefe von ca. 80cm zu berücksichtigen.`,
        ],
        'rollrasen': [
            `Für ${city.name}: ${b.includes('Sand') ? 'Sandige Böden benötigen häufigere Bewässerung in den ersten 3 Wochen.' : 'Auf lehmigem Boden sollte vor der Verlegung gelüftet werden.'}`,
            `Tipp: Im ${k}en Klima von ${city.name} ist die beste Verlegezeit März bis Oktober.`,
            `Regional: Für ${getKreisName(city)} empfehlen wir unseren robusten Sport- & Spielrasen.`,
        ],
    };

    const pool = tipps[service] || tipps['garten-und-landschaftsbau']!;
    return pick(pool, city.slug, service.length + 7);
}

// --- Diversified FAQ selection ---
export function selectFAQs<T>(items: T[], slug: string, count: number): T[] {
    const h = hashSlug(slug);
    const result: T[] = [];
    const indices = new Set<number>();
    for (let i = 0; result.length < Math.min(count, items.length); i++) {
        const idx = (h + i * 7 + i * i) % items.length;
        if (!indices.has(idx)) {
            indices.add(idx);
            result.push(items[idx]);
        }
    }
    return result;
}
