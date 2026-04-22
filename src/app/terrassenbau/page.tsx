import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Terrassenbau Hamburg | Holzterrasse, Naturstein, WPC | Adler & Sohn',
    description: 'Professioneller Terrassenbau in Hamburg und Umgebung. ✓ Holzterrassen ✓ Naturstein ✓ WPC ✓ Betonplatten. Ihr Outdoor-Wohnzimmer vom Fachbetrieb. Jetzt anfragen!',
    keywords: 'Terrassenbau Hamburg, Terrasse bauen Hamburg, Holzterrasse, WPC-Terrasse, Natursteinterrasse, Terrassenbauer Hamburg',
    openGraph: {
        title: 'Terrassenbau Hamburg | Adler & Sohn',
        description: 'Terrassen aus Holz, Naturstein oder WPC – fachgerecht gebaut für Jahrzehnte.',
        url: 'https://garten-adler.de/terrassenbau',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/terrassenbau',
    },
};

const terrassenarten = [
    {
        name: 'Holzterrasse',
        description: 'Der Klassiker – natürlich warm und barfußfreundlich. Ideal für gemütliche Atmosphäre.',
        features: ['Lärche', 'Douglasie', 'Bangkirai', 'Thermo-Esche', 'Ipe-Hartholz'],
        preis: 'ab 180€/m²',
        icon: '🪵',
        lebensdauer: '15-30 Jahre',
    },
    {
        name: 'WPC-Terrasse',
        description: 'Wood-Plastic-Composite – die pflegeleichte Alternative mit Holzoptik.',
        features: ['Splitterfrei', 'Pflegeleicht', 'Rutschfest', 'Farbecht', 'Recycelbar'],
        preis: 'ab 200€/m²',
        icon: '🔧',
        lebensdauer: '25-30 Jahre',
    },
    {
        name: 'Natursteinterrasse',
        description: 'Edles Naturmaterial – Granit, Sandstein oder Schiefer für zeitlose Eleganz.',
        features: ['Granit', 'Sandstein', 'Schiefer', 'Travertin', 'Quarzit'],
        preis: 'ab 150€/m²',
        icon: '🪨',
        lebensdauer: '50+ Jahre',
    },
    {
        name: 'Betonplatten',
        description: 'Modernes Design mit großen Formaten – zeitgemäß und langlebig.',
        features: ['Großformate', 'Viele Farben', 'Strukturiert', 'Pflegeleicht', 'Frostsicher'],
        preis: 'ab 120€/m²',
        icon: '🧱',
        lebensdauer: '30+ Jahre',
    },
    {
        name: 'Feinsteinzeug',
        description: 'Keramikplatten in Holz- oder Steinoptik – pflegeleicht und elegant.',
        features: ['Holzoptik', 'Steinoptik', 'Fugenarm', 'Fleckenresistent', 'UV-beständig'],
        preis: 'ab 180€/m²',
        icon: '✨',
        lebensdauer: '40+ Jahre',
    },
    {
        name: 'Klinker',
        description: 'Robuster Klassiker mit mediterranem Charme – ideal für traditionelle Gärten.',
        features: ['Frostfest', 'Farbenvielfalt', 'Rutschfest', 'Pflegeleicht', 'Langlebig'],
        preis: 'ab 130€/m²',
        icon: '🏠',
        lebensdauer: '50+ Jahre',
    },
];

const leistungen = [
    {
        title: 'Beratung & Planung',
        description: 'Wir beraten Sie vor Ort zu Material, Größe und Gestaltung Ihrer Traumterrasse.',
        features: ['Vor-Ort-Beratung', 'Materialberatung', 'Maßaufnahme', '3D-Visualisierung'],
        icon: '📐',
    },
    {
        title: 'Unterbau & Drainage',
        description: 'Fachgerechter Unterbau für eine stabile und langlebige Terrasse.',
        features: ['Erdarbeiten', 'Tragschicht', 'Gefälle', 'Drainage', 'Randsteine'],
        icon: '🏗️',
    },
    {
        title: 'Verlegung',
        description: 'Professionelle Verlegung aller Terrassenbeläge – präzise und sauber.',
        features: ['Alle Materialien', 'Unterkonstruktion', 'Fugenarbeit', 'Zuschnitte'],
        icon: '🔨',
    },
    {
        title: 'Extras',
        description: 'Stufen, Beleuchtung, Überdachung – wir bauen Ihre komplette Outdoor-Oase.',
        features: ['Treppen & Stufen', 'LED-Beleuchtung', 'Pergolen', 'Hochbeete'],
        icon: '💡',
    },
];

const vorteile = [
    {
        title: 'Festpreisgarantie',
        description: 'Transparente Angebote ohne versteckte Kosten. Was wir anbieten, halten wir ein.',
        icon: '💰',
    },
    {
        title: 'Komplettservice',
        description: 'Von der Beratung über die Materiallieferung bis zur fertigen Terrasse – alles aus einer Hand.',
        icon: '🤝',
    },
    {
        title: 'Qualitätsmaterialien',
        description: 'Wir verbauen nur hochwertige Materialien namhafter Hersteller.',
        icon: '✨',
    },
    {
        title: '15+ Jahre Erfahrung',
        description: 'Hunderte Terrassen gebaut – wir kennen jede Herausforderung.',
        icon: '⏱️',
    },
    {
        title: 'Saubere Arbeit',
        description: 'Wir hinterlassen die Baustelle besenrein und räumen alles auf.',
        icon: '🧹',
    },
    {
        title: 'Garantie',
        description: 'Gewährleistung auf Material und Handwerk. Bei Problemen sind wir für Sie da.',
        icon: '🛡️',
    },
];

const ablauf = [
    { schritt: 1, titel: 'Erstkontakt', beschreibung: 'Sie schildern uns Ihre Wünsche – telefonisch, per Mail oder Formular.', icon: '📞' },
    { schritt: 2, titel: 'Vor-Ort-Termin', beschreibung: 'Wir besichtigen Ihr Grundstück und besprechen die Möglichkeiten.', icon: '🏡' },
    { schritt: 3, titel: 'Angebot', beschreibung: 'Sie erhalten ein transparentes Festpreisangebot mit allen Details.', icon: '📋' },
    { schritt: 4, titel: 'Materialwahl', beschreibung: 'Gemeinsame Auswahl des Materials – auf Wunsch mit Musterstücken.', icon: '🪵' },
    { schritt: 5, titel: 'Umsetzung', beschreibung: 'Wir bauen Ihre Terrasse termingerecht und sauber.', icon: '🔨' },
    { schritt: 6, titel: 'Abnahme', beschreibung: 'Gemeinsame Abnahme und Übergabe – inklusive Pflegetipps.', icon: '✅' },
];

const faqs = [
    {
        q: 'Was kostet eine neue Terrasse?',
        a: 'Die Kosten hängen von Material, Größe und Unterbau ab. Richtwerte: Betonplatten ab 120€/m², Naturstein ab 150€/m², Holz ab 180€/m², WPC ab 200€/m². Eine typische 30m² Terrasse kostet inklusive Unterbau und Montage zwischen 4.500€ und 8.000€. Wir erstellen Ihnen ein individuelles Festpreisangebot.',
    },
    {
        q: 'Wie lange dauert der Terrassenbau?',
        a: 'Das hängt von Größe und Material ab. Eine typische Terrasse (20-40m²) ist in 3-5 Arbeitstagen fertig. Größere Projekte oder aufwändige Unterbauten können 1-2 Wochen dauern. Wir nennen Ihnen im Angebot den genauen Zeitrahmen.',
    },
    {
        q: 'Welches Material ist das beste?',
        a: 'Das hängt von Ihren Prioritäten ab: Für Barfußgefühl und Wärme ist Holz ideal. Für minimale Pflege empfehlen wir WPC. Für maximale Langlebigkeit und Eleganz eignet sich Naturstein. Betonplatten bieten das beste Preis-Leistungs-Verhältnis. Wir beraten Sie gerne!',
    },
    {
        q: 'Brauche ich eine Genehmigung?',
        a: 'In den meisten Fällen sind Terrassen genehmigungsfrei. Bei Überdachungen oder erhöhten Terrassen kann eine Genehmigung nötig sein. Wir informieren Sie über die Vorschriften in Ihrer Gemeinde.',
    },
    {
        q: 'Kann ich die Terrasse an mein Haus anbauen?',
        a: 'Ja, wir bauen Terrassen direkt am Haus oder freistehend im Garten. Bei hausnahen Terrassen achten wir besonders auf den Anschluss zur Hauswand und das richtige Gefälle.',
    },
    {
        q: 'Wie pflege ich meine neue Terrasse?',
        a: 'Die Pflege hängt vom Material ab: Holz sollte 1-2x jährlich geölt werden. WPC braucht nur Wasser und Bürste. Naturstein und Beton werden bei Bedarf mit pH-neutralem Reiniger gesäubert. Wir geben Ihnen bei der Übergabe alle Pflegetipps.',
    },
    {
        q: 'Können Sie auch Stufen und Treppen bauen?',
        a: 'Ja, wir bauen Terrassenstufen und Gartentreppen passend zu Ihrer Terrasse – aus dem gleichen Material oder als bewussten Kontrast.',
    },
    {
        q: 'Was passiert mit der alten Terrasse?',
        a: 'Wir entfernen auf Wunsch Ihre alte Terrasse inklusive Unterbau und entsorgen das Material fachgerecht. Die Kosten nennen wir Ihnen im Angebot.',
    },
];

export default function TerrassenbauPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Terrassenbau',
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '+49 4131 123 456',
                },
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.5511, longitude: 9.9937 },
                    geoRadius: '150000',
                },
                description: 'Professioneller Terrassenbau in Hamburg und Umgebung. Holzterrassen, Naturstein, WPC und Betonsteinplatten – Beratung und Montage vom Fachbetrieb.',
                serviceType: 'Terrassenbau',
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
                    { '@type': 'ListItem', position: 3, name: 'Terrassenbau', item: 'https://garten-adler.de/terrassenbau' },
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
                    {/* Hero Background Image */}
                    <Image
                        src="/images/terrassenbau-hero.png"
                        alt="Professioneller Terrassenbau – moderne Holzterrasse im Garten"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-800/70 to-amber-900/50" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-stone-400/10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Terrassenbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🏡</span>
                                    <span className="text-white/90 text-sm font-medium">Ihr Outdoor-Wohnzimmer</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Terrassenbau <span className="text-amber-300">vom Profi</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Ihre Traumterrasse zum Genießen: Ob Holz, Naturstein oder WPC –
                                    wir planen und bauen Terrassen für Jahrzehnte. Fachgerecht, termingerecht
                                    und mit Festpreisgarantie.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Materialien', 'Festpreisgarantie', 'Inkl. Unterbau', 'Saubere Arbeit'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-700 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                        <span>Kostenlos anfragen</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941311234567" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-stone-700 transition-colors">
                                        <span>+49 4131 123 456</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: 'ab 120€', label: 'pro m²', icon: '💰' },
                                    { value: '3-5', label: 'Tage Bauzeit', icon: '⚡' },
                                    { value: '50+', label: 'Jahre Lebensdauer', icon: '⏱️' },
                                    { value: '100%', label: 'Festpreisgarantie', icon: '✅' },
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

                {/* Intro */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Die Terrasse – Herzstück Ihres Gartens
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Eine gut geplante Terrasse erweitert Ihren Wohnraum nach draußen.
                                    Ob <strong>Holzterrasse</strong> für warme Füße, <strong>Naturstein</strong> für zeitlose Eleganz
                                    oder <strong>WPC</strong> für minimalen Pflegeaufwand – wir finden die perfekte Lösung für Ihren Garten.
                                </p>
                                <p className="mb-6">
                                    Als erfahrener <strong>Terrassenbauer</strong> in Hamburg und Umgebung wissen wir:
                                    Eine gute Terrasse beginnt mit dem richtigen Unterbau. Wir legen großen Wert auf
                                    fachgerechte Drainage, präzises Gefälle und eine stabile Tragschicht –
                                    für eine Terrasse, die Jahrzehnte hält.
                                </p>
                                <p>
                                    Von der ersten Beratung über die Materialauswahl bis zur fertigen Terrasse
                                    erhalten Sie bei uns alles aus einer Hand. Und dank unserer <strong>Festpreisgarantie</strong>
                                    wissen Sie von Anfang an, was Ihre neue Terrasse kostet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terrassenarten */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                Materialien
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Welches Terrassenmaterial passt zu Ihnen?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von klassisch bis modern – wir bauen Terrassen aus allen Materialien.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {terrassenarten.map((terrasse, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-5xl">{terrasse.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{terrasse.name}</h3>
                                            <span className="text-amber-600 font-bold text-sm">{terrasse.preis}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{terrasse.description}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Lebensdauer: {terrasse.lebensdauer}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {terrasse.features.slice(0, 4).map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                {/* Leistungen */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-4 border border-amber-500/20">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Vom Plan bis zur fertigen Terrasse
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {leistungen.map((leistung, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-4">{leistung.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{leistung.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{leistung.description}</p>
                                    <ul className="space-y-1">
                                        {leistung.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                                <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                So entsteht Ihre Traumterrasse
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            {ablauf.map((schritt, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {schritt.icon}
                                    </div>
                                    <div className="text-amber-600 text-sm font-bold mb-1">Schritt {schritt.schritt}</div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{schritt.titel}</h4>
                                    <p className="text-gray-600 text-sm">{schritt.beschreibung}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preistabelle */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                Preisübersicht
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Was kostet eine neue Terrasse?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Richtwerte inklusive Unterbau und Montage.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="grid grid-cols-4 bg-stone-700 text-white font-bold text-sm">
                                    <div className="p-4">Material</div>
                                    <div className="p-4">Preis/m²</div>
                                    <div className="p-4">30m² Terrasse</div>
                                    <div className="p-4">Lebensdauer</div>
                                </div>
                                {[
                                    { mat: 'Betonplatten', preis: '120-160€', gesamt: '3.600-4.800€', dauer: '30+ Jahre' },
                                    { mat: 'Klinker', preis: '130-170€', gesamt: '3.900-5.100€', dauer: '50+ Jahre' },
                                    { mat: 'Naturstein', preis: '150-250€', gesamt: '4.500-7.500€', dauer: '50+ Jahre' },
                                    { mat: 'Holz (Lärche)', preis: '180-220€', gesamt: '5.400-6.600€', dauer: '15-20 Jahre' },
                                    { mat: 'Holz (Hartholz)', preis: '250-350€', gesamt: '7.500-10.500€', dauer: '25-30 Jahre' },
                                    { mat: 'WPC', preis: '200-280€', gesamt: '6.000-8.400€', dauer: '25-30 Jahre' },
                                    { mat: 'Feinsteinzeug', preis: '180-260€', gesamt: '5.400-7.800€', dauer: '40+ Jahre' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.mat}</div>
                                        <div className="p-4 text-gray-700">{row.preis}</div>
                                        <div className="p-4 text-amber-600 font-semibold">{row.gesamt}</div>
                                        <div className="p-4 text-gray-700">{row.dauer}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Richtwerte inkl. Unterbau, Tragschicht, Material und Montage. Endpreis abhängig von Größe und Untergrund.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vorteile */}
                <section className="section-padding bg-stone-700 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Ihren Terrassenbau?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vorteile.map((vorteil, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-3">{vorteil.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{vorteil.title}</h3>
                                    <p className="text-stone-300 text-sm">{vorteil.description}</p>
                                </div>
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
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zum Terrassenbau
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
                        src="/images/terrassenbau-cta.png"
                        alt="Fertige Terrasse im Garten – Terrassenbau vom Profi"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-amber-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Neue Terrasse bauen lassen?
                        </h2>
                        <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für ein kostenloses Angebot.
                            Wir beraten Sie gerne vor Ort – unverbindlich und kostenlos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-700 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                <span>Jetzt Angebot anfordern</span>
                            </Link>
                            <a href="tel:+4941311234567" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-stone-700 transition-colors">
                                <span>+49 4131 123 456</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={120} height={40} className="h-10 w-auto object-contain brightness-200" />
                        </div>
                        <div className="flex gap-6 text-sm">
                            <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
                            <Link href="/standorte" className="hover:text-green-500 transition-colors">Standorte</Link>
                            <Link href="/impressum" className="hover:text-green-500 transition-colors">Impressum</Link>
                            <Link href="/datenschutz" className="hover:text-green-500 transition-colors">Datenschutz</Link>
                        </div>
                        <p className="text-sm">© {new Date().getFullYear()} Adler & Sohn. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
