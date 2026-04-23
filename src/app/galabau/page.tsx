import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Galabau Hamburg & Umgebung | Garten- und Landschaftsbau | Adler & Sohn',
    description: 'Professioneller Galabau in Hamburg und Umgebung. ✓ Gartengestaltung ✓ Terrassenbau ✓ Pflasterarbeiten ✓ Bepflanzung ✓ Komplette Gartenplanung. Jetzt anfragen!',
    keywords: 'Galabau Hamburg, Garten- und Landschaftsbau Hamburg, Gartengestaltung, Terrassenbau, Gartenplanung, Außenanlagen, Gartenbau Hamburg',
    openGraph: {
        title: 'Galabau Hamburg & Umgebung | Adler & Sohn',
        description: 'Garten- und Landschaftsbau vom Profi. Komplette Gartengestaltung aus einer Hand.',
        url: 'https://garten-adler.de/galabau',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: 'https://garten-adler.de/images/galabau-garten-landschaftsbau-gartenweg-naturstein.jpg',
                width: 1200,
                height: 630,
                alt: 'Professioneller Garten- und Landschaftsbau – geschwungener Naturstein-Gartenweg mit gepflegtem Rasen und Bepflanzung',
            },
        ],
    },
    alternates: {
        canonical: 'https://garten-adler.de/galabau',
    },
};

const services = [
    {
        title: 'Gartenplanung',
        description: 'Professionelle Planung Ihres Traumgartens – von der ersten Idee bis zum fertigen Konzept.',
        features: ['3D-Visualisierung', 'Pflanzpläne', 'Kostenvoranschlag', 'Beratung vor Ort'],
        icon: '📐',
        link: '/gartenpflege',
    },
    {
        title: 'Terrassenbau',
        description: 'Hochwertige Terrassen aus Naturstein, Beton oder Holz – Ihr Outdoor-Wohnzimmer.',
        features: ['Naturstein', 'Betonplatten', 'Holzterrassen', 'WPC-Dielen'],
        icon: '🏡',
        link: '/pflasterarbeiten',
    },
    {
        title: 'Pflasterarbeiten',
        description: 'Einfahrten, Wege und Plätze – fachmännisch gepflastert für Jahrzehnte.',
        features: ['Einfahrten', 'Gartenwege', 'Sitzplätze', 'Hofbefestigung'],
        icon: '🧱',
        link: '/pflasterarbeiten',
    },
    {
        title: 'Bepflanzung',
        description: 'Von der Einzelpflanze bis zum kompletten Pflanzkonzept – wir begrünen Ihren Garten.',
        features: ['Staudenbeete', 'Gehölzpflanzung', 'Hecken', 'Bodendecker'],
        icon: '🌷',
        link: '/gartenpflege',
    },
    {
        title: 'Rasenflächen',
        description: 'Rollrasen oder Ansaat – wir schaffen perfekte Grünflächen.',
        features: ['Rollrasen', 'Rasenansaat', 'Bodenaufbereitung', 'Rasenpflege'],
        icon: '🌱',
        link: '/rollrasen',
    },
    {
        title: 'Baumpflege',
        description: 'Fachgerechte Pflege, Schnitt und Fällung von Bäumen aller Größen.',
        features: ['Kronenpflege', 'Baumfällung', 'Obstbaumschnitt', 'Stubbenfräsen'],
        icon: '🌳',
        link: '/baumpflege',
    },
    {
        title: 'Zaunbau',
        description: 'Hochwertige Zäune und Sichtschutz für Ihr Grundstück.',
        features: ['Holzzäune', 'Metallzäune', 'Gabionen', 'Sichtschutz'],
        icon: '🏗️',
        link: '/galabau',
    },
    {
        title: 'Wasseranlagen',
        description: 'Teiche, Brunnen und Bewässerungssysteme für Ihren Garten.',
        features: ['Gartenteiche', 'Brunnen', 'Bewässerung', 'Bachläufe'],
        icon: '💧',
        link: '/galabau',
    },
];

const projects = [
    {
        title: 'Komplette Gartengestaltung',
        description: 'Neuanlage eines 800m² Gartens mit Terrasse, Rasen und Staudenbeeten',
        features: ['80m² Natursteinterrasse', 'Rollrasen', 'Pflanzkonzept', 'Gartenwege'],
        duration: '3 Wochen',
        icon: '🏡',
    },
    {
        title: 'Einfahrt & Carport',
        description: 'Pflasterung einer Einfahrt mit Naturstein und Carport-Fundament',
        features: ['120m² Naturstein', 'Entwässerung', 'Fundament', 'Beleuchtung'],
        duration: '2 Wochen',
        icon: '🚗',
    },
    {
        title: 'Poollandschaft',
        description: 'Gestaltung des Poolbereichs mit Terrasse und mediterraner Bepflanzung',
        features: ['Poolumrandung', 'Holzterrasse', 'Bepflanzung', 'Außendusche'],
        duration: '2 Wochen',
        icon: '🏊',
    },
];

const benefits = [
    {
        title: 'Alles aus einer Hand',
        description: 'Von der Planung bis zur Umsetzung – Sie haben nur einen Ansprechpartner.',
        icon: '🤝',
    },
    {
        title: '15+ Jahre Erfahrung',
        description: 'Fundiertes Know-how aus hunderten erfolgreichen Projekten.',
        icon: '⏱️',
    },
    {
        title: 'Regionale Verbundenheit',
        description: 'Wir kennen Böden, Klima und Pflanzen in der Region Hamburg.',
        icon: '📍',
    },
    {
        title: 'Festpreisgarantie',
        description: 'Transparente Angebote ohne versteckte Kosten oder Nachforderungen.',
        icon: '💰',
    },
    {
        title: 'Qualitätsmaterialien',
        description: 'Wir arbeiten nur mit hochwertigen Materialien namhafter Hersteller.',
        icon: '✨',
    },
    {
        title: 'Terminzuverlässigkeit',
        description: 'Pünktlicher Start und Fertigstellung wie vereinbart.',
        icon: '📅',
    },
];

const process = [
    {
        step: 1,
        title: 'Erstkontakt',
        description: 'Sie schildern uns Ihre Wünsche – telefonisch, per Mail oder Formular.',
        icon: '📞',
    },
    {
        step: 2,
        title: 'Vor-Ort-Termin',
        description: 'Wir besichtigen Ihr Grundstück und besprechen die Möglichkeiten.',
        icon: '🏡',
    },
    {
        step: 3,
        title: 'Planung & Angebot',
        description: 'Sie erhalten ein detailliertes Konzept mit transparentem Festpreis.',
        icon: '📋',
    },
    {
        step: 4,
        title: 'Umsetzung',
        description: 'Unser Team setzt das Projekt termingerecht und sauber um.',
        icon: '🔨',
    },
    {
        step: 5,
        title: 'Abnahme & Übergabe',
        description: 'Gemeinsame Abnahme und Übergabe Ihres neuen Gartens.',
        icon: '✅',
    },
];

const faqs = [
    {
        q: 'Was ist Galabau?',
        a: 'Galabau ist die Kurzform für Garten- und Landschaftsbau. Es umfasst alle Arbeiten rund um die Planung, Anlage und Pflege von Außenanlagen – von der Terrasse über Pflasterarbeiten bis zur Bepflanzung.',
    },
    {
        q: 'Was kostet eine Gartengestaltung?',
        a: 'Die Kosten hängen stark vom Umfang ab. Eine einfache Terrassenerstellung beginnt ab ca. 5.000€, komplette Gartenumgestaltungen können 20.000-50.000€ und mehr kosten. Wir erstellen Ihnen ein individuelles Angebot.',
    },
    {
        q: 'Wie lange dauert eine Gartenumgestaltung?',
        a: 'Je nach Umfang zwischen einer Woche und mehreren Wochen. Eine Terrasse ist oft in 1-2 Wochen fertig, eine komplette Gartengestaltung kann 4-6 Wochen dauern.',
    },
    {
        q: 'Bieten Sie auch Kleinprojekte an?',
        a: 'Ja, wir übernehmen Projekte jeder Größe – von der einzelnen Baumpflege bis zur kompletten Gartenanlage. Kein Projekt ist zu klein oder zu groß.',
    },
    {
        q: 'Wann ist die beste Zeit für Gartenprojekte?',
        a: 'Pflasterarbeiten und Erdarbeiten sind ganzjährig möglich (außer bei Frost). Für Pflanzungen ist Frühjahr (März-Mai) und Herbst (Sept-Nov) ideal. Rollrasen kann von März bis Oktober verlegt werden.',
    },
    {
        q: 'Erstellen Sie auch 3D-Planungen?',
        a: 'Ja, für größere Projekte erstellen wir auf Wunsch 3D-Visualisierungen, damit Sie sich Ihren zukünftigen Garten besser vorstellen können.',
    },
    {
        q: 'Arbeiten Sie mit Subunternehmern?',
        a: 'Nein, alle Arbeiten werden von unserem eigenen Fachpersonal ausgeführt. So garantieren wir gleichbleibende Qualität und haben die volle Kontrolle über das Projekt.',
    },
    {
        q: 'Gibt es eine Gewährleistung?',
        a: 'Ja, Sie erhalten auf alle Arbeiten die gesetzliche Gewährleistung. Bei Pflanzungen geben wir eine Anwachsgarantie. Wir stehen zu unserer Arbeit!',
    },
];

export default function GalabauPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Garten- und Landschaftsbau',
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '04131 - 394 2971',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Lüneburg',
                        addressRegion: 'Niedersachsen',
                        postalCode: '21335',
                        addressCountry: 'DE',
                    },
                },
                areaServed: {
                    '@type': 'GeoCircle',
                    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.5511, longitude: 9.9937 },
                    geoRadius: '150000',
                },
                description: 'Professioneller Garten- und Landschaftsbau in Hamburg und Umgebung. Gartengestaltung, Terrassenbau, Pflasterarbeiten und Bepflanzung aus einer Hand.',
                serviceType: 'Garten- und Landschaftsbau',
                image: 'https://garten-adler.de/images/galabau-garten-landschaftsbau-gartenweg-naturstein.jpg',
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
                    { '@type': 'ListItem', position: 3, name: 'Galabau', item: 'https://garten-adler.de/galabau' },
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
                        src="/images/galabau-hero.png"
                        alt="Professioneller Garten- und Landschaftsbau"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/80 via-green-700/80 to-teal-600/80 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal-400/20 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Galabau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🏡</span>
                                    <span className="text-white/90 text-sm font-medium">Garten- und Landschaftsbau</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Galabau <span className="text-teal-300">vom Profi</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Ihr Traumgarten wird Realität: Von der professionellen Planung über Terrassenbau
                                    und Pflasterarbeiten bis zur perfekten Bepflanzung – alles aus einer Hand.
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
                                    { value: '100%', label: 'Festpreisgarantie', icon: '💰' },
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

                {/* Intro Text */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Garten- und Landschaftsbau aus Leidenschaft
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Ihr Garten ist mehr als nur ein Grundstück – er ist Ihre persönliche Oase, Ihr Rückzugsort,
                                    Ihr Outdoor-Wohnzimmer. Als erfahrener <strong>Galabau-Betrieb</strong> aus Lüneburg verwandeln
                                    wir Ihre Vorstellungen in Realität.
                                </p>
                                <p className="mb-6">
                                    Ob Sie eine neue <strong>Terrasse</strong> wünschen, Ihre Einfahrt pflastern lassen möchten,
                                    einen <strong>Traumgarten</strong> planen oder Ihren bestehenden Garten umgestalten wollen –
                                    wir sind Ihr Partner für alle Arbeiten rund um Garten und Außenanlagen.
                                </p>
                                <p className="mb-6">
                                    Bei uns bekommen Sie alles aus einer Hand: Von der ersten Idee und professionellen Planung
                                    über die fachgerechte Ausführung bis zur fertigen Übergabe. Sie haben nur <strong>einen Ansprechpartner</strong>,
                                    der Ihr Projekt von Anfang bis Ende begleitet.
                                </p>
                                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500 mt-8">
                                    <p className="font-semibold text-green-800 mb-2">💡 Unser Versprechen</p>
                                    <p className="text-green-700 mb-0">
                                        Jedes Projekt erhält ein transparentes Festpreisangebot. Keine versteckten Kosten,
                                        keine Überraschungen. Was wir anbieten, halten wir ein – garantiert.
                                    </p>
                                </div>
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
                                Galabau-Leistungen im Überblick
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von der Kleinpflege bis zur kompletten Gartengestaltung – wir bieten das volle Spektrum.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <Link key={index} href={service.link} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/galabau-garten-landschaftsbau-gartenweg-naturstein.jpg"
                        alt="Gartenlandschaft Hintergrund"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Unser Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So entsteht Ihr Traumgarten
                            </h2>
                            <p className="text-gray-400">
                                Ein strukturierter Ablauf für stressfreie Projekte.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            {process.map((item, i) => (
                                <div key={i} className="text-center relative">
                                    {i < process.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
                                    )}
                                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {item.icon}
                                    </div>
                                    <div className="text-green-400 text-sm font-bold mb-1">Schritt {item.step}</div>
                                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Projektbeispiele
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Was wir umsetzen
                            </h2>
                            <p className="text-lg text-gray-600">
                                Einige Beispiele aus unserem Leistungsspektrum.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{project.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.features.map((feature, i) => (
                                            <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Dauer: {project.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/galabau-erdarbeiten.jpg"
                        alt="Galabau Erdarbeiten Hintergrund"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 70% Green Overlay */}
                    <div className="absolute inset-0 bg-green-600/70 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Ihren Galabau?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-green-100 text-sm">{benefit.description}</p>
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
                                Unsere Spezialseiten
                            </h2>
                            <p className="text-lg text-gray-600">
                                Detaillierte Informationen zu unseren Kernleistungen.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { title: 'Pflasterarbeiten', desc: 'Einfahrten, Wege, Terrassen', icon: '🧱', link: '/pflasterarbeiten' },
                                { title: 'Gartenpflege', desc: 'Regelmäßige Gartenpflege', icon: '🌿', link: '/gartenpflege' },
                                { title: 'Rollrasen', desc: 'Sofort grüner Rasen', icon: '🌱', link: '/rollrasen' },
                                { title: 'Baumpflege', desc: 'Baumschnitt & Fällung', icon: '🌳', link: '/baumpflege' },
                                { title: 'Heckenschnitt', desc: 'Formschnitt & Pflege', icon: '✂️', link: '/heckenschnitt' },
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group bg-white rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
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
                                Häufige Fragen zum Galabau
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
                        src="/images/galabau-cta.png"
                        alt="GaLaBau – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für Ihren Traumgarten?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam Ihr Projekt besprechen.
                            Wir beraten Sie kostenlos und unverbindlich vor Ort.
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
