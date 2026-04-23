import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Garten- und Landschaftsbau Hamburg | Gartengestaltung vom Profi | Adler & Sohn',
    description: 'Professioneller Garten- und Landschaftsbau in Hamburg und Umgebung. ✓ Gartengestaltung ✓ Terrassenbau ✓ Pflasterarbeiten ✓ Bepflanzung ✓ Über 15 Jahre Erfahrung. Jetzt anfragen!',
    keywords: 'Garten- und Landschaftsbau Hamburg, GaLaBau Hamburg, Gartengestaltung, Landschaftsbau, Gartenbau Hamburg, Gartenplaner, Außenanlagen Hamburg',
    openGraph: {
        title: 'Garten- und Landschaftsbau Hamburg | Adler & Sohn',
        description: 'Ihr Traumgarten wird Realität. Komplette Gartengestaltung und Landschaftsbau aus einer Hand.',
        url: 'https://garten-adler.de/garten-und-landschaftsbau',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/garten-und-landschaftsbau',
    },
};

const leistungen = [
    {
        title: 'Gartenplanung & Design',
        description: 'Professionelle Planung Ihres Traumgartens – von der ersten Skizze bis zur 3D-Visualisierung.',
        features: ['Beratung vor Ort', 'Konzeptentwicklung', '3D-Visualisierung', 'Pflanzpläne', 'Beleuchtungskonzepte'],
        icon: '📐',
    },
    {
        title: 'Terrassenbau',
        description: 'Ihr Outdoor-Wohnzimmer: Terrassen aus Naturstein, Beton, Holz oder WPC.',
        features: ['Natursteinterrassen', 'Betonplatten', 'Holzterrassen', 'WPC-Dielen', 'Poolumrandungen'],
        icon: '🏡',
    },
    {
        title: 'Pflaster- & Wegebau',
        description: 'Einfahrten, Gartenwege und Plätze – fachmännisch gepflastert für Jahrzehnte.',
        features: ['Einfahrten', 'Gartenwege', 'Sitzplätze', 'Hofbefestigung', 'Entwässerung'],
        icon: '🧱',
    },
    {
        title: 'Bepflanzung',
        description: 'Von der Einzelpflanze bis zum kompletten Pflanzkonzept – wir begrünen Ihren Garten.',
        features: ['Staudenbeete', 'Gehölzpflanzung', 'Hecken', 'Bodendecker', 'Solitärpflanzen'],
        icon: '🌷',
    },
    {
        title: 'Rasen & Grünflächen',
        description: 'Rollrasen für sofortiges Grün oder Ansaat – wir schaffen perfekte Rasenflächen.',
        features: ['Rollrasen', 'Rasenansaat', 'Bodenaufbereitung', 'Mähkantensteine', 'Mähroboter-Installation'],
        icon: '🌱',
    },
    {
        title: 'Baum- & Gehölzpflege',
        description: 'Fachgerechte Pflege, Schnitt und Fällung von Bäumen und Gehölzen.',
        features: ['Kronenpflege', 'Baumfällung', 'Obstbaumschnitt', 'Stubbenfräsen', 'Sturmschadenbeseitigung'],
        icon: '🌳',
    },
    {
        title: 'Zäune & Sichtschutz',
        description: 'Grundstücksabgrenzung mit Stil – Holzzäune, Metallzäune und Gabionen.',
        features: ['Holzzäune', 'Metallzäune', 'Gabionen', 'Sichtschutzelemente', 'Toranlagen'],
        icon: '🏗️',
    },
    {
        title: 'Wasser im Garten',
        description: 'Teiche, Brunnen, Bachläufe und Bewässerungssysteme für lebendige Gärten.',
        features: ['Gartenteiche', 'Schwimmteiche', 'Brunnen', 'Bachläufe', 'Bewässerungsanlagen'],
        icon: '💧',
    },
    {
        title: 'Mauerbau',
        description: 'Stützmauern, Hochbeete und Trockenmauern – funktional und ästhetisch.',
        features: ['Stützmauern', 'Hochbeete', 'Trockenmauern', 'Natursteinmauern', 'Hangbefestigung'],
        icon: '🪨',
    },
    {
        title: 'Außenbeleuchtung',
        description: 'Lichtkonzepte für stimmungsvolle Gartenabende und mehr Sicherheit.',
        features: ['Wegebeleuchtung', 'Akzentlicht', 'LED-Systeme', 'Solarleuchten', 'Smarte Steuerung'],
        icon: '💡',
    },
    {
        title: 'Gartenpflege',
        description: 'Regelmäßige Pflege für dauerhaft schöne Gärten – flexibel buchbar.',
        features: ['Rasenmähen', 'Heckenschnitt', 'Unkrautbekämpfung', 'Düngung', 'Winterservice'],
        icon: '🌿',
    },
    {
        title: 'Winterdienst',
        description: 'Professioneller Winterdienst für Privatgrundstücke und Firmengelände.',
        features: ['Räumdienst', 'Streudienst', 'Rufbereitschaft', 'Dokumentation', 'Haftungsübernahme'],
        icon: '❄️',
    },
];

const projekte = [
    {
        title: 'Komplette Neugestaltung',
        beschreibung: 'Verwandlung eines verwilderten 1.200m² Grundstücks in einen modernen Familiengarten mit Pool.',
        leistungen: ['100m² Natursteinterrasse', '80m² Pool & Technik', '400m² Rollrasen', 'Komplette Bepflanzung', 'LED-Beleuchtung'],
        dauer: '6 Wochen',
        icon: '🏊',
    },
    {
        title: 'Vorgarten & Einfahrt',
        beschreibung: 'Repräsentativer Eingangsbereich mit gepflasterter Einfahrt und pflegeleichtem Vorgarten.',
        leistungen: ['120m² Natursteinpflaster', 'Carport-Fundament', 'Bepflanzung', 'Gabionen-Mauer', 'Außenbeleuchtung'],
        dauer: '3 Wochen',
        icon: '🚗',
    },
    {
        title: 'Seniorengarten',
        beschreibung: 'Barrierefreier, pflegeleichter Garten mit erhöhten Beeten und breiten Wegen.',
        leistungen: ['Barrierefrei geplant', 'Hochbeete', 'Breite Wege', 'Automatische Bewässerung', 'Pflegeleichte Bepflanzung'],
        dauer: '2 Wochen',
        icon: '👵',
    },
];

const vorteile = [
    {
        title: 'Alles aus einer Hand',
        beschreibung: 'Von der Beratung über die Planung bis zur kompletten Umsetzung – ein Ansprechpartner für Ihr gesamtes Projekt.',
        icon: '🤝',
    },
    {
        title: 'Über 15 Jahre Erfahrung',
        beschreibung: 'Hunderte erfolgreiche Projekte in Hamburg und Umgebung. Wir kennen jeden Boden und jede Herausforderung.',
        icon: '⏱️',
    },
    {
        title: 'Eigenes Fachpersonal',
        beschreibung: 'Keine Subunternehmer – alle Arbeiten werden von unseren ausgebildeten Gärtnern und Landschaftsbauern ausgeführt.',
        icon: '👷',
    },
    {
        title: 'Festpreisgarantie',
        beschreibung: 'Transparente Angebote ohne versteckte Kosten. Was wir anbieten, das halten wir – ohne Nachforderungen.',
        icon: '💰',
    },
    {
        title: 'Regionales Unternehmen',
        beschreibung: 'Als Betrieb aus Lüneburg sind wir eng mit der Region verbunden und kennen Klima, Böden und Pflanzen bestens.',
        icon: '📍',
    },
    {
        title: 'Nachhaltige Lösungen',
        beschreibung: 'Wir setzen auf nachhaltige Konzepte: heimische Pflanzen, Regenwassernutzung und bienenfreundliche Gestaltung.',
        icon: '🌍',
    },
];

const ablauf = [
    { schritt: 1, titel: 'Erstkontakt', beschreibung: 'Sie schildern uns Ihre Wünsche und Vorstellungen – telefonisch, per Mail oder Formular.', icon: '📞' },
    { schritt: 2, titel: 'Vor-Ort-Termin', beschreibung: 'Wir besichtigen Ihr Grundstück, vermessen und besprechen die Möglichkeiten.', icon: '🏡' },
    { schritt: 3, titel: 'Konzept & Angebot', beschreibung: 'Sie erhalten ein individuelles Konzept mit 3D-Visualisierung und transparentem Festpreisangebot.', icon: '📋' },
    { schritt: 4, titel: 'Umsetzung', beschreibung: 'Nach Ihrer Freigabe setzen wir das Projekt termingerecht und sauber um.', icon: '🔨' },
    { schritt: 5, titel: 'Abnahme', beschreibung: 'Gemeinsame Abnahme und Übergabe – inklusive Pflegetipps für Ihren neuen Garten.', icon: '✅' },
    { schritt: 6, titel: 'Nachbetreuung', beschreibung: 'Auch nach Projektabschluss sind wir für Sie da – für Gartenpflege und Fragen.', icon: '🌱' },
];

const faqs = [
    {
        q: 'Was ist der Unterschied zwischen Galabau und Gartenbau?',
        a: 'Galabau (Garten- und Landschaftsbau) umfasst alle baulichen und gestalterischen Arbeiten an Außenanlagen – von Terrassen über Wege bis zu Mauern. Der klassische Gartenbau konzentriert sich auf Pflanzenproduktion und -pflege. Wir bieten beides aus einer Hand.',
    },
    {
        q: 'Was kostet eine komplette Gartengestaltung?',
        a: 'Die Kosten variieren stark je nach Größe und Umfang. Einfache Umgestaltungen starten ab ca. 10.000€, komplette Neuanlagen eines mittleren Gartens liegen bei 30.000-60.000€. Luxusprojekte mit Pool können auch 100.000€+ kosten. Wir erstellen Ihnen ein individuelles Angebot.',
    },
    {
        q: 'Wie lange dauert eine Gartengestaltung?',
        a: 'Das hängt vom Umfang ab. Eine einzelne Terrasse ist in 1-2 Wochen fertig, eine komplette Gartenumgestaltung dauert 4-8 Wochen. Bei sehr großen Projekten planen wir auch gerne mehrere Bauphasen.',
    },
    {
        q: 'Wann ist die beste Zeit für Gartenprojekte?',
        a: 'Pflaster- und Erdarbeiten sind ganzjährig möglich (außer bei Frost). Pflanzungen gelingen am besten im Frühjahr (März-Mai) und Herbst (September-November). Rollrasen kann von März bis Oktober verlegt werden.',
    },
    {
        q: 'Übernehmen Sie auch kleinere Projekte?',
        a: 'Ja, wir führen Projekte jeder Größe aus – von der Einzelbaum-Pflanzung bis zur kompletten Gartenanlage. Jedes Projekt wird mit der gleichen Sorgfalt umgesetzt.',
    },
    {
        q: 'Brauche ich eine Baugenehmigung für meinen Garten?',
        a: 'Für die meisten Gartenarbeiten brauchen Sie keine Genehmigung. Bei Mauern über einer bestimmten Höhe, größeren Wasserstellen oder Carports kann eine Genehmigung erforderlich sein. Wir beraten Sie und unterstützen beim Antrag.',
    },
    {
        q: 'Wie weit fahren Sie?',
        a: 'Unser Einzugsgebiet umfasst Hamburg und einen Radius von ca. 100-150km – also Lüneburg, Bremen, Kiel, Lübeck und das gesamte Umland. Für größere Projekte fahren wir auch weiter.',
    },
    {
        q: 'Bieten Sie auch Wartungsverträge an?',
        a: 'Ja, wir bieten flexible Gartenpflege-Verträge an – von monatlicher Komplettbetreuung bis zu saisonalen Einzelleistungen. So bleibt Ihr Garten dauerhaft schön.',
    },
];

export default function GartenUndLandschaftsbauPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': 'https://garten-adler.de/#organization',
                name: 'Adler & Sohn Garten- und Landschaftsbau',
                url: 'https://garten-adler.de',
                telephone: '04131 - 394 2971',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Musterstraße 1',
                    addressLocality: 'Lüneburg',
                    addressRegion: 'Niedersachsen',
                    postalCode: '21335',
                    addressCountry: 'DE',
                },
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.5511, longitude: 9.9937 },
                    geoRadius: '150000',
                },
                priceRange: '€€-€€€',
                openingHours: 'Mo-Fr 07:00-18:00',
            },
            {
                '@type': 'Service',
                name: 'Garten- und Landschaftsbau',
                provider: { '@id': 'https://garten-adler.de/#organization' },
                description: 'Professioneller Garten- und Landschaftsbau in Hamburg und Umgebung. Gartengestaltung, Terrassenbau, Pflasterarbeiten, Bepflanzung und Gartenpflege aus einer Hand.',
                serviceType: 'Garten- und Landschaftsbau',
            },
            {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://garten-adler.de' },
                    { '@type': 'ListItem', position: 2, name: 'Garten- und Landschaftsbau', item: 'https://garten-adler.de/garten-und-landschaftsbau' },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="container-custom py-4">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={140} height={47} className="h-10 w-auto object-contain" />
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/#leistungen" className="text-gray-600 hover:text-green-600 transition-colors">Leistungen</Link>
                            <Link href="/#ueber-uns" className="text-gray-600 hover:text-green-600 transition-colors">Über uns</Link>
                            <Link href="/standorte" className="text-gray-600 hover:text-green-600 transition-colors">Standorte</Link>
                            <Link href="/#kontakt" className="text-gray-600 hover:text-green-600 transition-colors">Kontakt</Link>
                        </div>
                        <Link href="/#kontakt" className="btn-primary text-sm py-2.5 px-5">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/garten-und-landschaftsbau-hero.png"
                        alt="Professioneller Garten- und Landschaftsbau"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 60% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-800/60 via-emerald-700/60 to-teal-600/60 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal-400/20 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl z-[1]" />
                    <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-green-400/10 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Garten- und Landschaftsbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌳</span>
                                    <span className="text-white/90 text-sm font-medium">Ihr Traumgarten wird Realität</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Garten- und<br />
                                    <span className="text-teal-300">Landschaftsbau</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Von der ersten Idee bis zum fertigen Traumgarten: Wir planen, gestalten und pflegen
                                    Außenanlagen in Hamburg und der gesamten Region. Professionell, termingerecht und
                                    mit Leidenschaft für grüne Räume.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Komplette Gartengestaltung', 'Festpreisgarantie', '15+ Jahre Erfahrung', 'Eigenes Fachpersonal'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                        <span>Kostenlose Beratung</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">
                                        <span>04131 - 394 2971</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '500+', label: 'Projekte realisiert', icon: '🏡' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '12', label: 'Leistungsbereiche', icon: '🛠️' },
                                    { value: '150km', label: 'Einzugsgebiet', icon: '📍' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl mb-2">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-white/60 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro Text */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Was ist Garten- und Landschaftsbau?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    <strong>Garten- und Landschaftsbau (GaLaBau)</strong> umfasst alle Arbeiten rund um die Gestaltung,
                                    Anlage und Pflege von Außenanlagen. Von der repräsentativen Einfahrt über die gemütliche
                                    Terrasse bis zum durchdachten Pflanzkonzept – wir verwandeln Grundstücke in Lebensräume.
                                </p>
                                <p className="mb-6">
                                    Als Fachbetrieb für Garten- und Landschaftsbau aus Lüneburg sind wir in Hamburg und der
                                    gesamten Metropolregion tätig. Unser Team aus <strong>ausgebildeten Landschaftsgärtnern</strong>
                                    verbindet handwerkliches Können mit kreativem Gespür. Jedes Projekt wird individuell
                                    geplant und mit Leidenschaft umgesetzt.
                                </p>
                                <p>
                                    Ob Sie einen <strong>Neubau-Garten</strong> anlegen, Ihre bestehenden Außenanlagen
                                    umgestalten oder einfach regelmäßige Pflege benötigen – wir sind Ihr verlässlicher Partner
                                    für alle Arbeiten rund um Garten und Landschaft.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leistungen */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Das volle Spektrum des GaLaBau
                            </h2>
                            <p className="text-lg text-gray-600">
                                12 Leistungsbereiche für Ihren perfekten Garten – alles aus einer Hand.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {leistungen.map((leistung, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-4">{leistung.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{leistung.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{leistung.description}</p>
                                    <ul className="space-y-1">
                                        {leistung.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ablauf */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/galabau-ablauf.jpg"
                        alt="Gartengestaltung Ablauf"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 70% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/70 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Unser Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Von der Idee zum Traumgarten
                            </h2>
                            <p className="text-gray-400">
                                Ein strukturierter Prozess für stressfreie Projekte und zufriedene Kunden.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            {ablauf.map((schritt, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {schritt.icon}
                                    </div>
                                    <div className="text-green-400 text-sm font-bold mb-1">Schritt {schritt.schritt}</div>
                                    <h4 className="text-lg font-bold mb-2">{schritt.titel}</h4>
                                    <p className="text-gray-400 text-sm">{schritt.beschreibung}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projekte */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Projektbeispiele
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Was wir umsetzen
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projekte.map((projekt, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                                    <div className="text-5xl mb-4">{projekt.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{projekt.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{projekt.beschreibung}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projekt.leistungen.map((leistung, i) => (
                                            <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                {leistung}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Dauer: {projekt.dauer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vorteile */}
                <section className="section-padding bg-green-600 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn?
                            </h2>
                            <p className="text-green-100">
                                Was uns von anderen Galabau-Betrieben unterscheidet.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vorteile.map((vorteil, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-3">{vorteil.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{vorteil.title}</h3>
                                    <p className="text-green-100 text-sm">{vorteil.beschreibung}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Links */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Detaillierte Informationen
                            </h2>
                            <p className="text-lg text-gray-600">
                                Erfahren Sie mehr über unsere einzelnen Leistungsbereiche.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {[
                                { title: 'Pflasterarbeiten', icon: '🧱', link: '/pflasterarbeiten' },
                                { title: 'Gartenpflege', icon: '🌿', link: '/gartenpflege' },
                                { title: 'Rollrasen', icon: '🌱', link: '/rollrasen' },
                                { title: 'Baumpflege', icon: '🌳', link: '/baumpflege' },
                                { title: 'Heckenschnitt', icon: '✂️', link: '/heckenschnitt' },
                                { title: 'Galabau', icon: '🏡', link: '/galabau' },
                                { title: 'Zaunbau', icon: '🏗️', link: '/zaunbau' },
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group bg-white rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-green-600 transition-colors">{item.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <Contact />

                {/* FAQ */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="bg-white rounded-xl p-6 group shadow-sm">
                                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-gray-600">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative section-padding overflow-hidden">
                    <Image
                        src="/images/garten-und-landschaftsbau-cta.png"
                        alt="Garten- und Landschaftsbau – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für Ihren Traumgarten?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam Ihre Außenanlagen planen.
                            Kostenlose Beratung und unverbindliches Angebot.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <span>Kostenlose Beratung anfordern</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors">
                                <span>04131 - 394 2971</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400">
                <div className="container-custom py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div>
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={120} height={40} className="h-10 w-auto object-contain brightness-200 mb-4" />
                            <p className="text-sm leading-relaxed">Ihr Partner für professionellen Garten- und Landschaftsbau in Lüneburg und Umgebung.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Leistungen</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/garten-und-landschaftsbau" className="hover:text-green-500 transition-colors">Gartengestaltung</Link></li>
                                <li><Link href="/terrassenbau" className="hover:text-green-500 transition-colors">Terrassenbau</Link></li>
                                <li><Link href="/pflasterarbeiten" className="hover:text-green-500 transition-colors">Pflasterarbeiten</Link></li>
                                <li><Link href="/rollrasen" className="hover:text-green-500 transition-colors">Rollrasen</Link></li>
                                <li><Link href="/zaunbau" className="hover:text-green-500 transition-colors">Zaunbau & Sichtschutz</Link></li>
                                <li><Link href="/gartenpflege" className="hover:text-green-500 transition-colors">Gartenpflege</Link></li>
                                <li><Link href="/heckenschnitt" className="hover:text-green-500 transition-colors">Heckenschnitt</Link></li>
                                <li><Link href="/baumpflege" className="hover:text-green-500 transition-colors">Baumpflege</Link></li>
                                <li><Link href="/galabau" className="hover:text-green-500 transition-colors">GaLaBau</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Unternehmen</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="hover:text-green-500 transition-colors">Home</Link></li>
                                <li><Link href="/standorte" className="hover:text-green-500 transition-colors">Standorte</Link></li>
                                <li><Link href="/impressum" className="hover:text-green-500 transition-colors">Impressum</Link></li>
                                <li><Link href="/datenschutz" className="hover:text-green-500 transition-colors">Datenschutz</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Kontakt</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="tel:+4941313942971" className="hover:text-green-500 transition-colors">04131 - 394 2971</a></li>
                                <li><a href="mailto:galabau@sohn-adler.de" className="hover:text-green-500 transition-colors">galabau@sohn-adler.de</a></li>
                                <li className="text-gray-500">Lüneburg & Umgebung</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800">
                    <div className="container-custom py-6">
                        <p className="text-sm text-center text-gray-500">© {new Date().getFullYear()} Adler & Sohn. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
