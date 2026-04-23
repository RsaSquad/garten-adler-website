import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Baumpflege Hamburg & Umgebung | Baumschnitt, Fällung, Kronenpflege | Adler & Sohn',
    description: 'Professionelle Baumpflege in Hamburg und Umgebung. ✓ Baumschnitt ✓ Kronenpflege ✓ Baumfällung ✓ Stubbenfräsen ✓ Baumgutachten. Zertifizierte Baumpfleger mit Seilklettertechnik.',
    keywords: 'Baumpflege Hamburg, Baumschnitt Hamburg, Baumfällung Hamburg, Kronenpflege, Obstbaumschnitt, Baumpfleger, Seilklettertechnik, Stubbenfräsen, Baumgutachten',
    openGraph: {
        title: 'Baumpflege Hamburg & Umgebung | Adler & Sohn',
        description: 'Professionelle Baumpflege vom zertifizierten Fachbetrieb. Baumschnitt, Kronenpflege, Fällung und mehr.',
        url: 'https://garten-adler.de/baumpflege',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/baumpflege',
    },
};

const services = [
    {
        title: 'Kronenpflege & Kroneneinkürzung',
        description: 'Fachgerechter Schnitt zur Erhaltung der Baumgesundheit und -form. Entfernung von Totholz, sich kreuzenden Ästen und Wassertrieben.',
        features: ['Totholzentfernung', 'Lichtraumprofil herstellen', 'Kronenauslichtung', 'Formschnitt'],
        icon: '🌳',
    },
    {
        title: 'Baumfällung & Abtragung',
        description: 'Sichere Fällung oder stückweise Abtragung auch unter beengten Verhältnissen. Mit moderner Seilklettertechnik.',
        features: ['Seilklettertechnik', 'Stückweise Abtragung', 'Beengte Räume', 'Kranfällung möglich'],
        icon: '🪓',
    },
    {
        title: 'Obstbaumschnitt',
        description: 'Professioneller Schnitt Ihrer Obstbäume für reiche Ernte und gesundes Wachstum.',
        features: ['Erziehungsschnitt', 'Erhaltungsschnitt', 'Verjüngungsschnitt', 'Sommerschnitt'],
        icon: '🍎',
    },
    {
        title: 'Stubbenfräsen',
        description: 'Baumstümpfe werden bis unter die Grasnarbe gefräst. Die Fläche ist sofort wieder nutzbar.',
        features: ['Bis 60cm Tiefe', 'Alle Durchmesser', 'Sofort bepflanzbar', 'Saubere Arbeit'],
        icon: '⚙️',
    },
    {
        title: 'Heckenschnitt',
        description: 'Regelmäßiger Formschnitt Ihrer Hecken für ein gepflegtes Erscheinungsbild.',
        features: ['Formschnitt', 'Verjüngungsschnitt', 'Alle Heckenarten', 'Entsorgung inklusive'],
        icon: '✂️',
    },
    {
        title: 'Baumgutachten & Beratung',
        description: 'Professionelle Einschätzung zur Baumgesundheit, Standsicherheit und Verkehrssicherungspflicht.',
        features: ['Gesundheitscheck', 'Standsicherheit', 'Verkehrssicherung', 'Schriftliches Gutachten'],
        icon: '📋',
    },
];

const reasons = [
    {
        title: 'Zertifizierte Baumpfleger',
        description: 'Unsere Mitarbeiter sind ausgebildete Baumpfleger mit Zertifizierung nach ZTV-Baumpflege.',
        icon: '🎓',
    },
    {
        title: 'Moderne Seilklettertechnik',
        description: 'Schonende Arbeit ohne schweres Gerät. Wir erreichen jeden Ast – ohne Ihren Garten zu beschädigen.',
        icon: '🧗',
    },
    {
        title: 'Vollständige Entsorgung',
        description: 'Schnittgut und Stammholz werden fachgerecht entsorgt oder auf Wunsch als Brennholz aufbereitet.',
        icon: '♻️',
    },
    {
        title: 'Versichert & gesetzeskonform',
        description: 'Vollversichert für alle Arbeiten. Wir beraten Sie auch zu Baumschutzverordnungen.',
        icon: '🛡️',
    },
];

const seasons = [
    {
        name: 'Frühjahr',
        months: 'März - Mai',
        tasks: ['Obstbaumschnitt (vor Austrieb)', 'Totholzentfernung', 'Baumkontrolle nach Winter'],
        color: 'green',
    },
    {
        name: 'Sommer',
        months: 'Juni - August',
        tasks: ['Sommerschnitt Obstbäume', 'Wassertriebe entfernen', 'Kronenauslichtung'],
        color: 'yellow',
    },
    {
        name: 'Herbst',
        months: 'September - November',
        tasks: ['Sturmschadenbeseitigung', 'Kronensicherung', 'Vorbereitung auf Winter'],
        color: 'orange',
    },
    {
        name: 'Winter',
        months: 'Dezember - Februar',
        tasks: ['Baumfällungen (Brutzeit beachten)', 'Kronenpflege Laubbäume', 'Große Schnittmaßnahmen'],
        color: 'blue',
    },
];

const faqs = [
    {
        q: 'Was kostet Baumpflege?',
        a: 'Die Kosten hängen von Baumgröße, Standort und gewünschter Arbeit ab. Ein einfacher Kronenschnitt beginnt bei ca. 150-300€, größere Maßnahmen bei 500-1500€. Baumfällungen werden individuell kalkuliert. Wir erstellen Ihnen ein kostenloses Angebot nach Besichtigung.',
    },
    {
        q: 'Wann dürfen Bäume gefällt werden?',
        a: 'Nach dem Bundesnaturschutzgesetz sind Fällungen vom 1. März bis 30. September verboten (Vogelschutz). Ausnahmen gelten für Verkehrssicherungspflicht oder bei Genehmigung. Wir beraten Sie zu den Regelungen in Ihrer Gemeinde.',
    },
    {
        q: 'Brauche ich eine Genehmigung für Baumfällung?',
        a: 'In vielen Gemeinden stehen Bäume ab einem bestimmten Stammumfang unter Schutz (Baumschutzverordnung). Wir prüfen das für Sie und helfen bei der Antragstellung, falls erforderlich.',
    },
    {
        q: 'Wie oft sollten Bäume geschnitten werden?',
        a: 'Obstbäume sollten jährlich geschnitten werden. Zierbäume und Großbäume alle 3-5 Jahre zur Kontrolle und Kronenpflege. Bei verkehrsgefährdenden Bäumen empfehlen wir jährliche Kontrollen.',
    },
    {
        q: 'Was ist Seilklettertechnik?',
        a: 'Unsere Baumpfleger klettern mit spezieller Sicherheitsausrüstung in den Baum. Das schont Ihren Garten (keine schweren Hebebühnen) und ermöglicht präzises Arbeiten auch an schwer zugänglichen Stellen.',
    },
    {
        q: 'Können Sie Bäume in Hanglage oder am Wasser fällen?',
        a: 'Ja, wir sind auf schwierige Standorte spezialisiert. Mit Seilklettertechnik, Seilzugunterstützung und bei Bedarf Kranunterstützung können wir auch an Hängen, Gewässern oder zwischen Gebäuden sicher arbeiten.',
    },
    {
        q: 'Was passiert mit dem Holz und Schnittgut?',
        a: 'Wir entsorgen alles fachgerecht. Auf Wunsch hacken wir das Schnittgut vor Ort zu Mulch oder bereiten Stammholz als Brennholz auf. Die Entsorgung ist im Festpreis enthalten.',
    },
    {
        q: 'Wie schnell können Sie nach einem Sturmschaden kommen?',
        a: 'Bei akuter Gefahr (umgestürzter Baum, hängende Äste) sind wir in der Regel innerhalb von 24-48 Stunden vor Ort. Rufen Sie uns an – wir helfen schnell und unkompliziert.',
    },
];

export default function BaumpflegePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Baumpflege',
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
                description: 'Professionelle Baumpflege in Hamburg und Umgebung. Baumschnitt, Kronenpflege, Baumfällung und Stubbenfräsen vom zertifizierten Fachbetrieb.',
                serviceType: 'Baumpflege',
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
                    { '@type': 'ListItem', position: 3, name: 'Baumpflege', item: 'https://garten-adler.de/baumpflege' },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20">
                <div className="container-custom py-4">
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
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/baumpflege-hero.png"
                        alt="Professionelle Baumpflege"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/80 to-green-700/80 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-green-400/20 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Baumpflege</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌳</span>
                                    <span className="text-white/90 text-sm font-medium">Zertifizierte Baumpflege</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Professionelle <span className="text-emerald-300">Baumpflege</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Ihre Bäume in besten Händen: Von der Kronenpflege bis zur Fällung –
                                    unsere zertifizierten Baumpfleger arbeiten sicher, sauber und nach neuesten Standards.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Zertifizierte Baumpfleger', 'Seilklettertechnik', 'Vollversichert', 'Entsorgung inklusive'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '500+', label: 'Bäume pro Jahr', icon: '🌳' },
                                    { value: '24h', label: 'Notfall-Service', icon: '🚨' },
                                    { value: '100%', label: 'Sicherheit', icon: '🛡️' },
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

                {/* What is Baumpflege */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Was ist professionelle Baumpflege?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Professionelle Baumpflege umfasst alle Maßnahmen, die der <strong>Gesundheit, Sicherheit und Schönheit</strong>
                                    Ihrer Bäume dienen. Von regelmäßigen Pflegeschnitten über Kronensicherung bis hin zur
                                    fachgerechten Fällung – unsere Arbeit basiert auf den Richtlinien der ZTV-Baumpflege.
                                </p>
                                <p className="mb-6">
                                    Bäume sind Lebewesen, die bei falscher Behandlung dauerhaft geschädigt werden können.
                                    Falscher Schnitt führt zu Fäulnis, Pilzbefall und im schlimmsten Fall zum Absterben des Baumes.
                                    Unsere <strong>ausgebildeten Baumpfleger</strong> wissen genau, wie jeder Baum geschnitten werden muss.
                                </p>
                                <p>
                                    Als Grundstückseigentümer tragen Sie die <strong>Verkehrssicherungspflicht</strong> für Ihre Bäume.
                                    Totholz, morsche Äste oder instabile Kronen können zur Gefahr werden. Wir helfen Ihnen,
                                    Ihre Bäume sicher zu halten und rechtliche Risiken zu minimieren.
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
                                Professionelle Baumpflege-Services
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von der Kronenpflege bis zur Stubbenfräsung – alles aus einer Hand.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
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

                {/* Why Us */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/baumpflege-warum.jpg"
                        alt="Baumpflege Hintergrund"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 60% Green Overlay */}
                    <div className="absolute inset-0 bg-green-600/60 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Baumpflege?
                            </h2>
                            <p className="text-green-100 text-lg">
                                Sicherheit, Kompetenz und Sauberkeit – das zeichnet uns aus.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reasons.map((reason, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{reason.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                    <p className="text-green-100 text-sm">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seasonal Calendar */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Jahreskalender
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Wann welche Baumpflege?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Die beste Zeit für verschiedene Maßnahmen im Überblick.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {seasons.map((season, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 border-t-4 border-green-500">
                                    <div className="text-sm text-gray-500 mb-1">{season.months}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{season.name}</h3>
                                    <ul className="space-y-2">
                                        {season.tasks.map((task, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
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
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Unser Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So läuft Ihre Baumpflege ab
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: 1, title: 'Besichtigung', desc: 'Kostenlose Vor-Ort-Begutachtung Ihrer Bäume' },
                                { step: 2, title: 'Angebot', desc: 'Transparentes Festpreis-Angebot innerhalb 48h' },
                                { step: 3, title: 'Durchführung', desc: 'Fachgerechte Arbeit durch zertifizierte Baumpfleger' },
                                { step: 4, title: 'Aufräumen', desc: 'Vollständige Entsorgung und saubere Übergabe' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Emergency Section */}
                <section className="section-padding bg-red-600 text-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🚨</span>
                                    <span className="text-white/90 text-sm font-medium">Notfall-Service</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Sturmschaden? Wir sind schnell da!
                                </h2>
                                <p className="text-xl text-red-100 mb-8">
                                    Bei Sturmschäden, umgestürzten Bäumen oder akuter Gefahr sind wir
                                    in der Regel innerhalb von 24-48 Stunden bei Ihnen.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>Jetzt anrufen</span>
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: '🌊', title: 'Sturmschäden', desc: 'Schnelle Beseitigung' },
                                    { icon: '🌳', title: 'Umgestürzte Bäume', desc: 'Sichere Räumung' },
                                    { icon: '⚡', title: 'Hängende Äste', desc: 'Gefahrenbeseitigung' },
                                    { icon: '🏠', title: 'Gebäudeschäden', desc: 'Sofortige Hilfe' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-2">{item.icon}</div>
                                        <h4 className="font-bold mb-1">{item.title}</h4>
                                        <p className="text-red-100 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <Contact />

                {/* FAQ */}
                <section className="relative section-padding overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/baumpflege-faq.jpg"
                        alt="Baumpflege FAQ Hintergrund"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* Light Overlay for readability */}
                    <div className="absolute inset-0 bg-white/50 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zur Baumpflege
                            </h2>
                            <p className="text-lg text-gray-600">
                                Antworten auf die wichtigsten Fragen rund um Baumpflege, Baumschnitt und Baumfällung.
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
                        src="/images/baumpflege-cta.png"
                        alt="Baumpflege – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Brauchen Ihre Bäume Pflege?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für eine kostenlose Besichtigung und ein unverbindliches Angebot.
                            Wir beraten Sie gerne!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Jetzt Angebot anfordern</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">
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
