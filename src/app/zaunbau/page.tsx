import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Zaunbau Hamburg & Umgebung | Holzzaun, Metallzaun, Gabionen | Adler & Sohn',
    description: 'Professioneller Zaunbau in Hamburg und Umgebung. ✓ Holzzäune ✓ Metallzäune ✓ Gabionen ✓ Sichtschutz ✓ Doppelstabmatten. Montage vom Fachbetrieb. Jetzt anfragen!',
    keywords: 'Zaunbau Hamburg, Zaun setzen Hamburg, Holzzaun, Metallzaun, Gabionen, Sichtschutz, Doppelstabmattenzaun, Gartenzaun Hamburg',
    openGraph: {
        title: 'Zaunbau Hamburg & Umgebung | Adler & Sohn',
        description: 'Zäune und Sichtschutz vom Profi. Holz, Metall, Gabionen – fachgerechte Montage.',
        url: 'https://garten-adler.de/zaunbau',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/zaunbau',
    },
};

const zaunarten = [
    {
        name: 'Holzzaun',
        description: 'Der Klassiker – natürlich, warm und vielseitig. Von rustikal bis modern.',
        features: ['Lärche', 'Douglasie', 'Kiefer kesseldruckimprägniert', 'Individuell anpassbar'],
        preis: 'ab 80€/lfm',
        icon: '🪵',
    },
    {
        name: 'Doppelstabmattenzaun',
        description: 'Robust, langlebig und pflegeleicht. Der moderne Standard für Grundstücksgrenzen.',
        features: ['Feuerverzinkt', 'Pulverbeschichtet', 'Viele Farben', '25+ Jahre Lebensdauer'],
        preis: 'ab 60€/lfm',
        icon: '🔩',
    },
    {
        name: 'Gabionen',
        description: 'Steinkörbe als Zaun oder Sichtschutz. Modern, massiv und lärmmindernd.',
        features: ['Verschiedene Füllungen', 'Kombinierbar', 'Extrem langlebig', 'Schallschutz'],
        preis: 'ab 150€/lfm',
        icon: '🪨',
    },
    {
        name: 'Sichtschutzzaun',
        description: 'Maximale Privatsphäre. Holz, WPC oder Aluminium – blickdicht und elegant.',
        features: ['Holz-Lamellen', 'WPC-Elemente', 'Aluminium', 'Lärmmindernd'],
        preis: 'ab 120€/lfm',
        icon: '🏠',
    },
    {
        name: 'Maschendrahtzaun',
        description: 'Die wirtschaftliche Lösung für große Flächen und Gartenbegrenzungen.',
        features: ['Günstig', 'Schnelle Montage', 'Rankbar', 'Verschiedene Höhen'],
        preis: 'ab 25€/lfm',
        icon: '🥅',
    },
    {
        name: 'Schmiedeeisen',
        description: 'Exklusiv und repräsentativ. Individuelle Designs für gehobene Ansprüche.',
        features: ['Handgefertigt', 'Individuelle Designs', 'Zeitlos elegant', 'Extrem langlebig'],
        preis: 'ab 200€/lfm',
        icon: '⚜️',
    },
];

const services = [
    {
        title: 'Beratung & Planung',
        description: 'Wir beraten Sie vor Ort und finden die perfekte Zaunlösung für Ihr Grundstück.',
        features: ['Vor-Ort-Beratung', 'Materialberatung', 'Vermessung', 'Kostenvoranschlag'],
        icon: '📐',
    },
    {
        title: 'Fundament & Pfosten',
        description: 'Stabiles Fundament für Jahrzehnte. Betoniert, geschraubt oder gerammt.',
        features: ['Punktfundamente', 'Streifenfundamente', 'Bodenhülsen', 'Rammpfosten'],
        icon: '🧱',
    },
    {
        title: 'Zaunmontage',
        description: 'Fachgerechte Montage aller Zaunarten – sicher, stabil und optisch perfekt.',
        features: ['Alle Zaunarten', 'Hanglagen', 'Ecken & Bögen', 'Toranlagen'],
        icon: '🔨',
    },
    {
        title: 'Tore & Pforten',
        description: 'Passende Eingänge zu Ihrem Zaun – Drehtore, Schiebetore und Pforten.',
        features: ['Gartenpforten', 'Einfahrtstore', 'Schiebetore', 'Elektrische Antriebe'],
        icon: '🚪',
    },
];

const benefits = [
    {
        title: 'Komplettservice',
        description: 'Von der Beratung über die Materiallieferung bis zur fertigen Montage – alles aus einer Hand.',
        icon: '🤝',
    },
    {
        title: 'Qualitätsmaterialien',
        description: 'Wir verbauen nur hochwertige Materialien namhafter Hersteller mit Garantie.',
        icon: '✨',
    },
    {
        title: 'Festpreisangebot',
        description: 'Transparente Preise ohne versteckte Kosten. Was wir anbieten, halten wir ein.',
        icon: '💰',
    },
    {
        title: 'Erfahrung',
        description: '15+ Jahre Erfahrung im Garten- und Landschaftsbau. Hunderte Zäune montiert.',
        icon: '⏱️',
    },
    {
        title: 'Schnelle Umsetzung',
        description: 'Kurze Wartezeiten und zügige Montage. Die meisten Zäune stehen in 1-3 Tagen.',
        icon: '⚡',
    },
    {
        title: 'Garantie',
        description: 'Gewährleistung auf Material und Montage. Bei Problemen sind wir für Sie da.',
        icon: '🛡️',
    },
];

const faqs = [
    {
        q: 'Was kostet ein neuer Zaun?',
        a: 'Die Kosten hängen von Zaunart, Länge und Höhe ab. Maschendraht ab 25€/lfm, Doppelstabmatten ab 60€/lfm, Holzzäune ab 80€/lfm, Gabionen ab 150€/lfm. Diese Preise verstehen sich inklusive Material und Montage. Fordern Sie ein kostenloses Angebot an!',
    },
    {
        q: 'Wie lange dauert der Zaunbau?',
        a: 'Das hängt von der Länge und Zaunart ab. Ein typischer Gartenzaun (20-30m) steht in 1-2 Tagen. Bei aufwändigen Gabionen oder langen Strecken kann es 3-5 Tage dauern. Wir nennen Ihnen im Angebot den genauen Zeitrahmen.',
    },
    {
        q: 'Welcher Zaun ist der beste?',
        a: 'Das hängt von Ihren Anforderungen ab: Für Sichtschutz empfehlen wir geschlossene Holzzäune, WPC oder Gabionen. Für Langlebigkeit und wenig Pflege sind Doppelstabmatten ideal. Für natürliche Optik ist Holz unschlagbar. Wir beraten Sie gerne!',
    },
    {
        q: 'Brauche ich eine Genehmigung für den Zaun?',
        a: 'Das hängt von der Gemeinde und der Zaunhöhe ab. In vielen Fällen sind Zäune bis 1,80m genehmigungsfrei. Wir informieren Sie über die Vorschriften in Ihrer Gemeinde und unterstützen bei Bedarf beim Bauantrag.',
    },
    {
        q: 'Entfernen Sie auch den alten Zaun?',
        a: 'Ja, wir entfernen alte Zäune inklusive Pfosten und entsorgen das Material fachgerecht. Die Kosten für den Rückbau nennen wir Ihnen im Angebot.',
    },
    {
        q: 'Können Sie auch Hanglagen einzäunen?',
        a: 'Ja, wir haben Erfahrung mit Hanglagen. Je nach Neigung setzen wir den Zaun abgetreppt oder der Hanglinie folgend. Beides ist möglich und sieht professionell aus.',
    },
    {
        q: 'Welches Holz hält am längsten?',
        a: 'Lärche und Douglasie sind die langlebigsten heimischen Hölzer (15-25 Jahre). Kiefer kesseldruckimprägniert hält ähnlich lange. Tropenhölzer halten noch länger, sind aber teurer und ökologisch umstritten.',
    },
    {
        q: 'Bieten Sie auch elektrische Torantriebe an?',
        a: 'Ja, wir liefern und montieren elektrische Antriebe für Dreh- und Schiebetore. Inklusive Fernbedienung und auf Wunsch mit Smart-Home-Anbindung.',
    },
];

export default function ZaunbauPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Zaunbau',
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '04131 - 394 2971',
                },
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.5511, longitude: 9.9937 },
                    geoRadius: '150000',
                },
                description: 'Professioneller Zaunbau in Hamburg und Umgebung. Holzzäune, Metallzäune, Gabionen und Sichtschutz – Beratung und Montage vom Fachbetrieb.',
                serviceType: 'Zaunbau',
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
                    { '@type': 'ListItem', position: 3, name: 'Zaunbau', item: 'https://garten-adler.de/zaunbau' },
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
                    <Image
                        src="/images/zaunbau-hero.png"
                        alt="Professioneller Zaunbau"
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-yellow-900/60" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-orange-400/10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Zaunbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🏗️</span>
                                    <span className="text-white/90 text-sm font-medium">Zäune & Sichtschutz</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Zaunbau <span className="text-yellow-300">vom Profi</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Der perfekte Zaun für Ihr Grundstück: Ob Holz, Metall oder Gabionen –
                                    wir liefern und montieren Zäune aller Art. Sicher, langlebig und optisch ansprechend.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Zaunarten', 'Festpreisgarantie', 'Schnelle Montage', 'Tore & Antriebe'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-700 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                        <span>Kostenlos anfragen</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-amber-700 transition-colors">
                                        <span>04131 - 394 2971</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: 'ab 25€', label: 'pro laufendem Meter', icon: '💰' },
                                    { value: '1-3', label: 'Tage Montage', icon: '⚡' },
                                    { value: '25+', label: 'Jahre Lebensdauer', icon: '⏱️' },
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

                {/* Intro Text */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Zäune für Sicherheit, Privatsphäre und Optik
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Ein guter Zaun erfüllt viele Funktionen: Er markiert Ihr Grundstück,
                                    schützt vor ungebetenen Blicken und setzt optische Akzente.
                                    Als erfahrener <strong>Galabau-Betrieb</strong> bauen wir Zäune aller Art –
                                    von der schlichten Grundstücksbegrenzung bis zum repräsentativen Sichtschutz.
                                </p>
                                <p className="mb-6">
                                    Wir beraten Sie umfassend zu den verschiedenen Materialien und deren Vor- und Nachteilen.
                                    <strong>Holz</strong> für natürliche Wärme, <strong>Metall</strong> für Langlebigkeit,
                                    <strong>Gabionen</strong> für modernes Design – für jeden Anspruch und jedes Budget
                                    finden wir die passende Lösung.
                                </p>
                                <p>
                                    Von der Vermessung über die Fundamentierung bis zur fertigen Montage erhalten Sie
                                    bei uns alles aus einer Hand. Und dank unserer <strong>Festpreisgarantie</strong>
                                    wissen Sie von Anfang an, was Ihr neuer Zaun kostet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zaunarten */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                Zaunarten
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Welcher Zaun passt zu Ihnen?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von günstig bis exklusiv – wir liefern und montieren alle Zaunarten.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {zaunarten.map((zaun, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-5xl">{zaun.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{zaun.name}</h3>
                                            <span className="text-amber-600 font-bold text-sm">{zaun.preis}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{zaun.description}</p>
                                    <ul className="space-y-1">
                                        {zaun.features.map((feature, i) => (
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

                {/* Services */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-4 border border-amber-500/20">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Vom Plan bis zum fertigen Zaun
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, i) => (
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

                {/* Price Table */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                Preisübersicht
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Was kostet ein neuer Zaun?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Richtwerte inklusive Material und Montage.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-4 bg-amber-600 text-white font-bold text-sm">
                                    <div className="p-4">Zaunart</div>
                                    <div className="p-4">1,20m Höhe</div>
                                    <div className="p-4">1,60m Höhe</div>
                                    <div className="p-4">2,00m Höhe</div>
                                </div>
                                {[
                                    { art: 'Maschendraht', h120: '25-35€/lfm', h160: '30-40€/lfm', h200: '35-50€/lfm' },
                                    { art: 'Doppelstabmatten', h120: '60-80€/lfm', h160: '75-95€/lfm', h200: '90-120€/lfm' },
                                    { art: 'Holzzaun', h120: '80-120€/lfm', h160: '100-150€/lfm', h200: '130-180€/lfm' },
                                    { art: 'Sichtschutz Holz/WPC', h120: '120-160€/lfm', h160: '150-200€/lfm', h200: '180-250€/lfm' },
                                    { art: 'Gabionen', h120: '150-200€/lfm', h160: '200-280€/lfm', h200: '280-380€/lfm' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.art}</div>
                                        <div className="p-4 text-gray-700">{row.h120}</div>
                                        <div className="p-4 text-gray-700">{row.h160}</div>
                                        <div className="p-4 text-gray-700">{row.h200}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Richtwerte inkl. Material, Pfosten, Fundament und Montage. Endpreis abhängig von Strecke und Untergrund.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-padding bg-amber-600 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Ihren Zaunbau?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-amber-100 text-sm">{benefit.description}</p>
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
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zum Zaunbau
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
                        src="/images/zaunbau-cta.png"
                        alt="Zaunbau – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Neuen Zaun setzen lassen?
                        </h2>
                        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für ein kostenloses Angebot.
                            Wir beraten Sie gerne vor Ort – unverbindlich und kostenlos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                <span>Jetzt Angebot anfordern</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-amber-600 transition-colors">
                                <span>04131 - 394 2971</span>
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
