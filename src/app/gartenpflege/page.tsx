import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Gartenpflege Hamburg & Umgebung | Rasenmähen, Heckenschnitt, Unkraut',
    description: 'Professionelle Gartenpflege in Hamburg und Umgebung. ✓ Rasenmähen ✓ Heckenschnitt ✓ Unkrautentfernung ✓ Baumpflege ✓ Beetpflege. Regelmäßig oder einmalig. Erfahrene Gärtner – jetzt anfragen!',
    keywords: 'Gartenpflege Hamburg, Rasenmähen, Heckenschnitt, Unkraut entfernen, Baumpflege, Gartenhilfe, Gartenservice, Rasenpflege, Beetpflege, Gärtner Hamburg, Gartenarbeit, Grünpflege, Objektpflege',
    openGraph: {
        title: 'Gartenpflege Hamburg & Umgebung',
        description: 'Professionelle Gartenpflege für einen gepflegten Garten das ganze Jahr. Regelmäßig oder einmalig.',
        url: 'https://garten-adler.de/gartenpflege',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/gartenpflege',
    },
};

const services = [
    {
        title: 'Rasenpflege',
        icon: '🌿',
        description: 'Ein sattgrüner, dichter Rasen ist das Herzstück jedes Gartens. Unsere professionelle Rasenpflege sorgt für optimales Wachstum und gesundes Grün.',
        features: ['Regelmäßiges Rasenmähen', 'Vertikutieren im Frühjahr', 'Professionelle Düngung', 'Nachsäen bei kahlen Stellen', 'Mähroboter-Installation & Service', 'Rasenreparatur'],
    },
    {
        title: 'Heckenschnitt',
        icon: '✂️',
        description: 'Gepflegte Hecken sind wie ein natürlicher Rahmen für Ihren Garten. Wir schneiden alle Heckenarten fachgerecht und termingenau.',
        features: ['Formschnitt für alle Heckenarten', 'Rückschnitt zur Verjüngung', 'Thuja, Liguster, Kirschlorbeer', 'Buchsbaum-Spezialpflege', 'Fachgerechte Entsorgung', 'Beachtung der Schonzeiten'],
    },
    {
        title: 'Beetpflege',
        icon: '🌸',
        description: 'Blühende Beete sind die Krone jedes Gartens. Wir pflegen Ihre Beete professionell und sorgen für üppige Blütenpracht.',
        features: ['Unkrautentfernung', 'Mulchen für Feuchtigkeitserhalt', 'Stauden-Pflege', 'Saisonale Bepflanzung', 'Düngung nach Bodenanalyse', 'Winterschutz'],
    },
    {
        title: 'Baumpflege',
        icon: '🌳',
        description: 'Bäume sind die Seele des Gartens und brauchen regelmäßige Pflege. Unsere zertifizierten Baumpfleger sorgen für Gesundheit und Sicherheit.',
        features: ['Obstbaumschnitt', 'Kronenpflege', 'Totholzentfernung', 'Sturmschadenbeseitigung', 'Baumfällung', 'Wurzelentfernung'],
    },
    {
        title: 'Saisonale Arbeiten',
        icon: '🍂',
        description: 'Jede Jahreszeit bringt eigene Aufgaben mit sich. Wir übernehmen alle saisonalen Gartenarbeiten termingerecht.',
        features: ['Frühjahrsputz', 'Herbstlaub entfernen', 'Winterfestmachung', 'Bewässerung im Sommer', 'Frostschutz', 'Pflanzungen'],
    },
    {
        title: 'Grünschnitt & Entsorgung',
        icon: '🚛',
        description: 'Wohin mit dem Grünschnitt? Wir entsorgen alle Gartenabfälle fachgerecht und umweltfreundlich.',
        features: ['Rasenschnitt', 'Heckenschnitt', 'Astwerk & Zweige', 'Laub', 'Wurzeln', 'Zertifizierte Entsorgung'],
    },
];

const benefits = [
    {
        title: 'Erfahrene Gärtner',
        icon: '👨‍🌾',
        description: 'Unser Team besteht aus ausgebildeten Gärtnern und Landschaftsgärtnern mit jahrelanger Erfahrung.',
    },
    {
        title: 'Moderne Ausrüstung',
        icon: '🔧',
        description: 'Wir arbeiten mit professionellem Werkzeug und modernen Maschinen für beste Ergebnisse.',
    },
    {
        title: 'Zuverlässig & Pünktlich',
        icon: '⏰',
        description: 'Sie können sich auf uns verlassen. Wir halten Termine ein und arbeiten zuverlässig.',
    },
    {
        title: 'Flexibel kündbar',
        icon: '📋',
        description: 'Keine langen Vertragslaufzeiten. Sie können monatlich kündigen oder pausieren.',
    },
    {
        title: 'Inklusive Entsorgung',
        icon: '♻️',
        description: 'Grünschnitt und Gartenabfälle werden von uns fachgerecht entsorgt – ohne Extrakosten.',
    },
    {
        title: 'Regionaler Anbieter',
        icon: '📍',
        description: 'Als lokaler Betrieb sind wir schnell vor Ort und kennen die Region wie unsere Westentasche.',
    },
];

const seasons = [
    {
        name: 'Frühjahr',
        icon: '🌱',
        months: 'März - Mai',
        tasks: ['Rasen vertikutieren & düngen', 'Beete vorbereiten', 'Frühjahrsputz', 'Erste Hecken-Schnitte', 'Stauden teilen', 'Mulchen'],
        description: 'Der Frühjahrsputz legt den Grundstein für ein erfolgreiches Gartenjahr. Jetzt werden die Weichen gestellt.',
    },
    {
        name: 'Sommer',
        icon: '☀️',
        months: 'Juni - August',
        tasks: ['Wöchentliches Rasenmähen', 'Bewässerung', 'Formschnitt Hecken', 'Sommerblumen pflegen', 'Unkraut bekämpfen', 'Rosen schneiden'],
        description: 'Im Sommer ist regelmäßige Pflege besonders wichtig. Hitze und Trockenheit fordern den Garten.',
    },
    {
        name: 'Herbst',
        icon: '🍂',
        months: 'September - November',
        tasks: ['Laub entfernen', 'Herbstdüngung', 'Winterfestmachung', 'Letzte Pflanzungen', 'Teich reinigen', 'Gräser schneiden'],
        description: 'Der Herbst bereitet den Garten auf den Winter vor. Jetzt werden die Grundlagen für das nächste Jahr gelegt.',
    },
    {
        name: 'Winter',
        icon: '❄️',
        months: 'Dezember - Februar',
        tasks: ['Gehölzschnitt', 'Frostschutz prüfen', 'Planung Frühjahr', 'Werkzeugpflege', 'Winterdienst', 'Immergrüne wässern'],
        description: 'Auch im Winter braucht der Garten Aufmerksamkeit. Die ruhige Zeit eignet sich für Gehölzschnitt und Planung.',
    },
];

const process = [
    {
        step: 1,
        title: 'Kostenlose Erstberatung',
        description: 'Wir besichtigen Ihren Garten, besprechen Ihre Wünsche und erstellen einen individuellen Pflegeplan.',
    },
    {
        step: 2,
        title: 'Angebot erhalten',
        description: 'Sie erhalten ein transparentes Angebot ohne versteckte Kosten. Wir beraten zu sinnvollen Pflegemaßnahmen.',
    },
    {
        step: 3,
        title: 'Regelmäßige Pflege',
        description: 'Wir pflegen Ihren Garten nach Plan – wöchentlich, zweiwöchentlich oder nach Bedarf. Sie entspannen.',
    },
    {
        step: 4,
        title: 'Dokumentation',
        description: 'Nach jedem Einsatz erhalten Sie Fotos und einen kurzen Bericht. So bleiben Sie immer informiert.',
    },
];

const faqs = [
    {
        q: 'Wie oft sollte der Garten gepflegt werden?',
        a: 'Das hängt von Ihrem Garten und Ihren Ansprüchen ab. Der Rasen sollte in der Hauptsaison (April-Oktober) wöchentlich gemäht werden. Hecken benötigen 2-4 Schnitte pro Jahr. Beete sollten mindestens monatlich von Unkraut befreit werden. Wir erstellen Ihnen einen individuellen Pflegeplan.',
    },
    {
        q: 'Bieten Sie auch einmalige Gartenpflege an?',
        a: 'Ja! Neben regelmäßigen Pflegeverträgen bieten wir auch Einzelleistungen an. Ideal für Frühjahrsputz, Herbstarbeiten, Urlaubsvertretung oder wenn Sie mal Unterstützung brauchen. Rufen Sie uns einfach an.',
    },
    {
        q: 'Wann ist die beste Zeit für Heckenschnitt?',
        a: 'Der erste Heckenschnitt erfolgt idealerweise Ende Juni nach dem Johannistrieb. Ein zweiter Schnitt im August/September sorgt für eine gepflegte Optik bis zum Frühjahr. Starke Rückschnitte sind nur von Oktober bis Ende Februar erlaubt (Vogelschutz).',
    },
    {
        q: 'Entsorgen Sie auch den Grünschnitt?',
        a: 'Ja, die Entsorgung von Rasenschnitt, Heckenschnitt, Laub und anderen Gartenabfällen ist bei uns standardmäßig inklusive. Wir arbeiten mit zertifizierten Entsorgungsbetrieben zusammen und achten auf umweltgerechte Verwertung.',
    },
    {
        q: 'Pflegen Sie auch Gewerbe- und Mietergärten?',
        a: 'Ja, wir übernehmen die Grünpflege für Hausverwaltungen, Vermieter, Wohnungsbaugesellschaften und Gewerbeobjekte. Von der Einzelimmobilie bis zum Wohnungsportfolio – wir haben Erfahrung mit Objektpflege.',
    },
    {
        q: 'Muss ich bei der Gartenpflege anwesend sein?',
        a: 'Nein, nach der ersten Begehung und Auftragserteilung können wir selbstständig arbeiten. Sie brauchen uns nur Zugang zum Garten zu gewähren. Nach jedem Einsatz dokumentieren wir unsere Arbeit mit Fotos.',
    },
    {
        q: 'Arbeiten Sie auch bei schlechtem Wetter?',
        a: 'Leichte Arbeiten wie Unkrautjäten sind auch bei Nieselregen möglich. Bei starkem Regen, Sturm oder Frost verschieben wir Termine jedoch, um Qualität zu gewährleisten und Ihren Rasen nicht zu beschädigen.',
    },
    {
        q: 'Wie weit reicht Ihr Einzugsgebiet für Gartenpflege?',
        a: 'Wir bieten Gartenpflege in Hamburg und im Umkreis von etwa 150 km an. Dazu gehören Schleswig-Holstein bis Kiel/Lübeck, Niedersachsen bis Bremen/Oldenburg und die gesamte Lüneburger Heide.',
    },
    {
        q: 'Kann ich die Gartenpflege im Winter pausieren?',
        a: 'Ja, flexible Pausierung ist möglich. Im Winter (Dezember-Februar) können Sie die regelmäßige Pflege pausieren. Allerdings empfehlen wir auch im Winter gelegentliche Pflegeeinsätze, z.B. für Gehölzschnitt.',
    },
    {
        q: 'Welche Pflanzen kennen sich Ihre Gärtner aus?',
        a: 'Unsere Gärtner sind ausgebildete Fachkräfte und kennen alle gängigen Gartenpflanzen der Region. Von Rosen über Rhododendren bis zu Obstbäumen – wir wissen, was jede Pflanze braucht.',
    },
];

const gardenTypes = [
    {
        title: 'Privatgärten',
        icon: '🏡',
        description: 'Vom kleinen Reihenhausgarten bis zum großen Villenpark – wir pflegen Privatgärten jeder Größe mit der gleichen Sorgfalt.',
    },
    {
        title: 'Mietergärten',
        icon: '🏢',
        description: 'Für Hausverwaltungen und Vermieter übernehmen wir die komplette Grünflächenpflege rund um Mehrfamilienhäuser.',
    },
    {
        title: 'Gewerbegrün',
        icon: '🏪',
        description: 'Ein gepflegtes Firmengelände macht Eindruck. Wir pflegen Außenanlagen von Büros, Praxen und Geschäften.',
    },
    {
        title: 'Seniorengärten',
        icon: '👴',
        description: 'Wenn die Gartenarbeit zu anstrengend wird, sind wir zur Stelle. Sensible Pflege mit Rücksicht auf Ihre Wünsche.',
    },
];

export default function GartenpflegePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Gartenpflege',
                provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '04131 - 394 2971',
                },
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.5511, longitude: 9.9937 },
                    geoRadius: '150000',
                },
                description: 'Professionelle Gartenpflege in Hamburg und Umgebung. Rasenmähen, Heckenschnitt, Beetpflege, Baumpflege und mehr.',
                serviceType: 'Gartenpflege',
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
                    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://garten-adler.de/#leistungen' },
                    { '@type': 'ListItem', position: 3, name: 'Gartenpflege', item: 'https://garten-adler.de/gartenpflege' },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20">
                <div className="container-custom py-1.5">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={140} height={47} className="h-10 w-auto object-contain" />
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/#leistungen" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Leistungen</Link>
                            <Link href="/#ueber-uns" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Über uns</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                            <Link href="/#kontakt" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Kontakt</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/gartenpflege-hero.png"
                        alt="Professionelle Gartenpflege Lüneburg - Rasenmähen und Heckenschnitt"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/80 to-green-700/80 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-lime-400/20 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-green-400/20 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Gartenpflege</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌿</span>
                                    <span className="text-white/90 text-sm font-medium">Professionelle Gartenpflege</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Gartenpflege vom <span className="text-lime-300">Profi</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Lehnen Sie sich zurück und genießen Sie Ihren perfekt gepflegten Garten.
                                    Unsere erfahrenen Gärtner kümmern sich um Rasenmähen, Heckenschnitt, Beetpflege
                                    und alle anderen Gartenarbeiten – regelmäßig oder einmalig.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Erfahrene Gärtner', 'Flexible Termine', 'Faire Konditionen', 'Entsorgung inklusive'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                        <span>Kostenlos beraten lassen</span>
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
                                    { value: '200+', label: 'Zufriedene Pflegekunden', icon: '👨‍🌾' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '100%', label: 'Kundenzufriedenheit', icon: '⭐' },
                                    { value: '150km', label: 'Einzugsgebiet', icon: '📍' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-2">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-white/60 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Gartenpflege - SEO Content */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Was ist professionelle Gartenpflege?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Professionelle Gartenpflege umfasst alle Arbeiten, die notwendig sind, um einen Garten
                                    in optimalem Zustand zu halten. Dazu gehören regelmäßige Tätigkeiten wie <strong>Rasenmähen</strong>,
                                    <strong> Heckenschnitt</strong>, <strong>Unkrautbekämpfung</strong> und <strong>Beetpflege</strong>,
                                    aber auch saisonale Arbeiten wie Laubentfernung im Herbst oder Vertikutieren im Frühjahr.
                                </p>
                                <p className="mb-6">
                                    Ein gepflegter Garten ist mehr als nur schön anzusehen – er steigert den Wert Ihrer Immobilie,
                                    bietet Lebensraum für Insekten und Vögel und schafft eine Oase der Erholung für Sie und Ihre Familie.
                                    Doch nicht jeder hat die Zeit, das Wissen oder die körperliche Möglichkeit, alle notwendigen
                                    Gartenarbeiten selbst durchzuführen.
                                </p>
                                <p>
                                    Hier kommen wir ins Spiel: Als <strong>professioneller Gartenpflegedienst</strong> übernehmen wir
                                    alle anfallenden Arbeiten – regelmäßig nach Plan oder auf Abruf, wenn Sie Unterstützung brauchen.
                                    Unsere ausgebildeten Gärtner wissen genau, was Ihr Garten in jeder Jahreszeit benötigt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Gartenpflege-Leistungen im Überblick
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von Rasenmähen bis Baumpflege – wir kümmern uns kompetent um jeden Bereich Ihres Gartens.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                {/* Garden Types */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Für welche Gärten bieten wir Pflege an?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ob Privatgarten, Mietergarten oder Gewerbegrün – wir pflegen Grünflächen jeder Art und Größe.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {gardenTypes.map((type, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{type.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                                    <p className="text-gray-600 text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-padding bg-green-800 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ihre Vorteile mit Adler & Sohn
                            </h2>
                            <p className="text-green-100 text-lg">
                                Warum Sie Ihre Gartenpflege in unsere Hände legen sollten.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-green-100">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seasonal Calendar */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/gartenpflege-kalender.jpg"
                        alt="Gartenpflege Jahreskalender Lüneburg - Pflege Tipps"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Das ganze Jahr
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Gartenpflege-Kalender
                            </h2>
                            <p className="text-gray-400">
                                Jede Jahreszeit bringt eigene Aufgaben. Wir sorgen dafür, dass Ihr Garten das ganze Jahr über perfekt aussieht.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {seasons.map((season, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="text-4xl mb-3">{season.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-1">{season.name}</h3>
                                    <p className="text-green-400 text-sm mb-3">{season.months}</p>
                                    <p className="text-gray-400 text-sm mb-4">{season.description}</p>
                                    <ul className="space-y-2">
                                        {season.tasks.map((task, j) => (
                                            <li key={j} className="text-gray-300 text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                So funktioniert es
                            </h2>
                            <p className="text-lg text-gray-600">
                                In vier einfachen Schritten zu Ihrem gepflegten Garten.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((item, i) => (
                                <div key={i} className="relative text-center">
                                    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <Contact />

                {/* FAQ */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zur Gartenpflege
                            </h2>
                            <p className="text-lg text-gray-600">
                                Antworten auf die wichtigsten Fragen rund um unsere Gartenpflege-Leistungen.
                            </p>
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
                        src="/images/gartenpflege-cta.png"
                        alt="Gartenpflege Lüneburg - Jetzt Pflegeangebot anfragen"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für einen gepflegten Garten?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für eine kostenlose Beratung vor Ort.
                            Wir besichtigen Ihren Garten und erstellen Ihnen ein individuelles Angebot.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Jetzt kostenlos anfragen</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
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
