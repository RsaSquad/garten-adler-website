import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Heckenschnitt Hamburg & Umgebung | Formschnitt, Rückschnitt',
    description: 'Professioneller Heckenschnitt in Hamburg und Umgebung. ✓ Formschnitt ✓ Rückschnitt ✓ Verjüngung ✓ Alle Heckenarten. Saubere Arbeit mit Entsorgung. Jetzt anfragen!',
    keywords: 'Heckenschnitt Hamburg, Hecke schneiden Hamburg, Heckenpflege, Formschnitt Hecke, Thuja schneiden, Liguster Hecke, Buchenhecke schneiden, Kirschlorbeer schneiden',
    openGraph: {
        title: 'Heckenschnitt Hamburg & Umgebung',
        description: 'Professioneller Heckenschnitt vom Fachbetrieb. Formschnitt, Rückschnitt und Pflege aller Heckenarten.',
        url: 'https://garten-adler.de/heckenschnitt',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/heckenschnitt',
    },
};

const heckenarten = [
    {
        name: 'Thuja / Lebensbaum',
        description: 'Die beliebteste immergrüne Hecke. Braucht regelmäßigen Formschnitt für kompakten Wuchs.',
        schnittzeit: 'Juni & September',
        icon: '🌲',
    },
    {
        name: 'Liguster',
        description: 'Schnellwachsend und schnittverträglich. Braucht 2-3 Schnitte pro Jahr.',
        schnittzeit: 'Mai, Juli & September',
        icon: '🌿',
    },
    {
        name: 'Buche / Hainbuche',
        description: 'Klassische Laubhecke mit schöner Herbstfärbung. Behält Laub oft bis Frühjahr.',
        schnittzeit: 'Juni & August',
        icon: '🍂',
    },
    {
        name: 'Kirschlorbeer',
        description: 'Großblättrige immergrüne Hecke. Sollte mit Schere geschnitten werden.',
        schnittzeit: 'Juni & September',
        icon: '🌳',
    },
    {
        name: 'Eibe (Taxus)',
        description: 'Premium-Hecke, sehr schnittverträglich. Wächst langsam, aber dicht.',
        schnittzeit: 'Juni & September',
        icon: '🎄',
    },
    {
        name: 'Buchsbaum',
        description: 'Klassiker für niedrige Einfassungen und Formschnitt. Mehrmals pro Jahr schneiden.',
        schnittzeit: 'Mai, Juli & September',
        icon: '✨',
    },
];

const services = [
    {
        title: 'Formschnitt',
        description: 'Regelmäßiger Schnitt zur Erhaltung der Form. Für gepflegte, dichte Hecken.',
        features: ['Exakte Formgebung', 'Gleichmäßige Höhe', 'Dichte Verzweigung'],
        icon: '✂️',
    },
    {
        title: 'Rückschnitt',
        description: 'Korrekturschnitt bei übergroßen oder ausgewachsenen Hecken.',
        features: ['Höhenreduzierung', 'Breitenkorrektur', 'Verjüngung'],
        icon: '📏',
    },
    {
        title: 'Verjüngungsschnitt',
        description: 'Radikaler Rückschnitt bei verkahlten oder überalterten Hecken.',
        features: ['Neuaufbau', 'Verkahlung beheben', 'Neuer Austrieb'],
        icon: '🔄',
    },
    {
        title: 'Heckenrodung',
        description: 'Komplette Entfernung alter Hecken inklusive Wurzelwerk.',
        features: ['Wurzelentfernung', 'Stubbenfräsen', 'Neuanlage möglich'],
        icon: '🪓',
    },
];

const benefits = [
    {
        title: 'Professionelles Equipment',
        description: 'Hochwertige Heckenscheren und Teleskopgeräte für perfekte Ergebnisse in jeder Höhe.',
        icon: '🔧',
    },
    {
        title: 'Entsorgung inklusive',
        description: 'Wir nehmen das komplette Schnittgut mit und entsorgen es fachgerecht.',
        icon: '♻️',
    },
    {
        title: 'Saubere Arbeit',
        description: 'Nach getaner Arbeit ist Ihr Grundstück sauber – wir hinterlassen keine Spuren.',
        icon: '✨',
    },
    {
        title: 'Alle Höhen',
        description: 'Vom niedrigen Buchsbaum bis zur 4 Meter hohen Thujahecke – wir schaffen das.',
        icon: '📐',
    },
];

const faqs = [
    {
        q: 'Was kostet Heckenschnitt pro Meter?',
        a: 'Der Preis hängt von Höhe, Tiefe und Heckenart ab. Richtwert: 5-15€ pro laufendem Meter bei normaler Höhe (bis 2m). Höhere Hecken und Verjüngungsschnitte kosten mehr. Fordern Sie ein kostenloses Angebot an!',
    },
    {
        q: 'Wann ist die beste Zeit für Heckenschnitt?',
        a: 'Die meisten Hecken werden 2x pro Jahr geschnitten: Einmal im Juni (nach dem Hauptaustrieb) und einmal im September (vor dem Winter). Zwischen März und Oktober ist wegen der Brutzeit nur Formschnitt erlaubt, kein radikaler Rückschnitt.',
    },
    {
        q: 'Darf ich meine Hecke jederzeit schneiden?',
        a: 'Formschnitte sind ganzjährig erlaubt. Radikale Rückschnitte und Rodungen sind laut Bundesnaturschutzgesetz nur von Oktober bis Februar erlaubt (Vogelschutz). Wir beraten Sie zu den aktuellen Regelungen.',
    },
    {
        q: 'Wie oft sollte eine Hecke geschnitten werden?',
        a: 'Die meisten Hecken brauchen 2 Schnitte pro Jahr. Stark wachsende Arten wie Liguster oder Feldahorn können 3 Schnitte benötigen. Langsam wachsende Eiben kommen oft mit 1 Schnitt aus.',
    },
    {
        q: 'Können Sie auch sehr hohe Hecken schneiden?',
        a: 'Ja, mit Teleskopgeräten und bei Bedarf Hebebühnen schneiden wir Hecken bis 4-5 Meter Höhe. Bei extremen Höhen beraten wir zur Höhenreduzierung.',
    },
    {
        q: 'Was passiert mit dem Schnittgut?',
        a: 'Wir sammeln das komplette Schnittgut ein und entsorgen es fachgerecht. Die Entsorgung ist in unseren Angeboten enthalten. Auf Wunsch häckseln wir das Material vor Ort zu Mulch.',
    },
    {
        q: 'Meine Hecke ist von innen kahl – was tun?',
        a: 'Bei verkahlten Hecken hilft oft ein Verjüngungsschnitt. Dabei wird die Hecke stark zurückgeschnitten, sodass sie von innen neu austreibt. Nicht alle Arten vertragen das – wir beraten Sie individuell.',
    },
    {
        q: 'Schneiden Sie auch die Hecke meines Nachbarn mit?',
        a: 'Wenn die Hecke auf der Grundstücksgrenze steht, brauchen wir das Einverständnis des Nachbarn. Bei Hecken auf Ihrem Grundstück schneiden wir natürlich auch die Rückseite.',
    },
];

export default function HeckenschnittPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Heckenschnitt',
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
                description: 'Professioneller Heckenschnitt in Hamburg und Umgebung. Formschnitt, Rückschnitt und Pflege aller Heckenarten.',
                serviceType: 'Heckenschnitt',
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
                    { '@type': 'ListItem', position: 3, name: 'Heckenschnitt', item: 'https://garten-adler.de/heckenschnitt' },
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
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <Image
                        src="/images/heckenschnitt-hero.png"
                        alt="Professioneller Heckenschnitt Lüneburg - Formschnitt und Rückschnitt"
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-lime-900/60" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-lime-400/10 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-green-400/10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Heckenschnitt</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">✂️</span>
                                    <span className="text-white/90 text-sm font-medium">Professioneller Heckenschnitt</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Heckenschnitt <span className="text-lime-300">vom Profi</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Gepflegte Hecken für Ihr Grundstück: Ob Formschnitt, Rückschnitt oder Verjüngung –
                                    wir bringen Ihre Hecke in Bestform. Sauber, schnell und mit Entsorgung.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Heckenarten', 'Entsorgung inklusive', 'Bis 4m Höhe', 'Saubere Arbeit'].map((item, i) => (
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
                                        <span>Kostenlos anfragen</span>
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
                                    { value: '5-15€', label: 'pro laufendem Meter', icon: '💰' },
                                    { value: '2x', label: 'Schnitt pro Jahr', icon: '📅' },
                                    { value: '4m', label: 'max. Höhe', icon: '📏' },
                                    { value: '100%', label: 'Entsorgung inkl.', icon: '♻️' },
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
                                Warum regelmäßiger Heckenschnitt wichtig ist
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Eine gepflegte Hecke ist mehr als nur ein Sichtschutz – sie ist die Visitenkarte Ihres Grundstücks.
                                    Regelmäßiger Heckenschnitt sorgt für <strong>dichtes Wachstum, schöne Optik und gesunde Pflanzen</strong>.
                                </p>
                                <p className="mb-6">
                                    Ohne regelmäßigen Schnitt verkahlen Hecken von innen, werden oben breit und unten dünn,
                                    und verlieren ihre Funktion als Sichtschutz. Besonders bei immergrünen Hecken wie
                                    <strong> Thuja, Kirschlorbeer oder Eibe</strong> ist fachgerechter Schnitt entscheidend –
                                    einmal zu stark zurückgeschnitten, treiben manche Arten nicht mehr aus.
                                </p>
                                <p className="mb-6">
                                    Als Garten- und Landschaftsbaubetrieb schneiden wir täglich Hecken in Hamburg und Umgebung.
                                    Wir kennen jede Heckenart und wissen genau, wann und wie geschnitten werden muss.
                                    Mit professionellem Equipment arbeiten wir schnell und sauber – Sie genießen das Ergebnis,
                                    wir kümmern uns um die Arbeit und Entsorgung.
                                </p>
                                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500 mt-8">
                                    <p className="font-semibold text-green-800 mb-2">💡 Profi-Tipp</p>
                                    <p className="text-green-700 mb-0">
                                        Der ideale Schnitt erfolgt nicht waagerecht, sondern leicht trapezförmig:
                                        unten etwas breiter als oben. So bekommt die gesamte Hecke genug Licht und
                                        verkahlt nicht von unten.
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
                                Heckenschnitt-Services
                            </h2>
                            <p className="text-lg text-gray-600">
                                Vom regelmäßigen Formschnitt bis zur kompletten Heckenrodung – wir bieten alle Leistungen.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
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

                {/* Process */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Unser Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So läuft Ihr Heckenschnitt ab
                            </h2>
                            <p className="text-gray-400">
                                Von der Anfrage bis zur sauberen Übergabe – ein reibungsloser Ablauf.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                { step: 1, title: 'Anfrage', desc: 'Sie kontaktieren uns mit Fotos oder Beschreibung', icon: '📞' },
                                { step: 2, title: 'Angebot', desc: 'Kostenloses Angebot innerhalb 24h', icon: '📋' },
                                { step: 3, title: 'Termin', desc: 'Wir vereinbaren einen passenden Termin', icon: '📅' },
                                { step: 4, title: 'Schnitt', desc: 'Professioneller Heckenschnitt vor Ort', icon: '✂️' },
                                { step: 5, title: 'Sauber', desc: 'Entsorgung & saubere Übergabe', icon: '✨' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {item.icon}
                                    </div>
                                    <div className="text-green-400 text-sm font-bold mb-1">Schritt {item.step}</div>
                                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Guide */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Preisübersicht
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Was kostet Heckenschnitt?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Transparente Preise – abhängig von Höhe, Länge und Heckenart.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-4 bg-green-800 text-white font-bold text-sm">
                                    <div className="p-4">Höhe</div>
                                    <div className="p-4">Formschnitt</div>
                                    <div className="p-4">Rückschnitt</div>
                                    <div className="p-4">inkl. Entsorgung</div>
                                </div>
                                {[
                                    { hoehe: 'Bis 1,5m', form: '5-8€/lfm', rueck: '10-15€/lfm', entsorg: '✓' },
                                    { hoehe: '1,5-2,5m', form: '8-12€/lfm', rueck: '15-25€/lfm', entsorg: '✓' },
                                    { hoehe: '2,5-3,5m', form: '12-18€/lfm', rueck: '25-40€/lfm', entsorg: '✓' },
                                    { hoehe: 'Über 3,5m', form: 'auf Anfrage', rueck: 'auf Anfrage', entsorg: '✓' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.hoehe}</div>
                                        <div className="p-4 text-gray-700">{row.form}</div>
                                        <div className="p-4 text-gray-700">{row.rueck}</div>
                                        <div className="p-4 text-green-600 font-bold">{row.entsorg}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Richtwerte in € pro laufendem Meter. Endpreis abhängig von Heckenart, Standort und Zugänglichkeit.
                            </p>

                            <div className="mt-8 bg-green-50 rounded-xl p-6 border border-green-200">
                                <h3 className="font-bold text-gray-900 mb-3">Im Preis enthalten:</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: '✂️', text: 'Professioneller Schnitt mit Profi-Equipment' },
                                        { icon: '♻️', text: 'Komplette Entsorgung des Schnittguts' },
                                        { icon: '🧹', text: 'Endreinigung & saubere Übergabe' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="text-sm text-gray-700">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Care Tips */}
                <section className="section-padding bg-gradient-to-br from-green-800 to-green-700 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4 border border-white/20">
                                Pflegetipps
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So bleibt Ihre Hecke gesund
                            </h2>
                            <p className="text-green-100">
                                Nach dem Schnitt: Unsere Tipps für eine langlebige, dichte Hecke.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: '💧',
                                    title: 'Gießen nach Schnitt',
                                    desc: 'Nach starkem Rückschnitt die Hecke gut wässern. Besonders wichtig bei Sommerschnitt und Hitze.',
                                },
                                {
                                    icon: '🌿',
                                    title: 'Düngen im Frühjahr',
                                    desc: 'Im März/April mit Langzeitdünger versorgen. Fördert kräftigen Neuaustrieb und sattgrüne Farbe.',
                                },
                                {
                                    icon: '🍂',
                                    title: 'Laub entfernen',
                                    desc: 'Herabgefallenes Laub regelmäßig entfernen. Verhindert Pilzbefall und fördert Lichteinfall.',
                                },
                                {
                                    icon: '🔍',
                                    title: 'Schädlingskontrolle',
                                    desc: 'Auf Blattläuse, Spinnmilben und den Buchsbaumzünsler achten. Früherkennung ist wichtig.',
                                },
                            ].map((tip, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-4">{tip.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                                    <p className="text-green-100 text-sm">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Heckenarten */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Heckenarten
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Wir schneiden alle Heckenarten
                            </h2>
                            <p className="text-lg text-gray-600">
                                Jede Heckenart hat ihre Besonderheiten – wir kennen sie alle.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {heckenarten.map((hecke, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{hecke.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{hecke.name}</h3>
                                            <p className="text-gray-600 text-sm mb-2">{hecke.description}</p>
                                            <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Schnittzeit: {hecke.schnittzeit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us */}
                <section className="section-padding bg-green-800 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Heckenschnitt?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-green-100 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timing */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                    Wichtig zu wissen
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Wann darf geschnitten werden?
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-500">
                                    <div className="text-center mb-4">
                                        <span className="text-4xl">✅</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-2">Formschnitt ganzjährig</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Leichte Formschnitte sind das ganze Jahr über erlaubt, auch während der Brutzeit.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Ideale Zeit: Juni & September
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Erhält Form und Dichte
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Keine Genehmigung nötig
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-500">
                                    <div className="text-center mb-4">
                                        <span className="text-4xl">⚠️</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-2">Radikaler Rückschnitt</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Starker Rückschnitt und Rodung nur von Oktober bis Februar (Vogelschutz).
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            Nur Okt-Feb erlaubt (§39 BNatSchG)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            Vogelschutz beachten
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            Ausnahmen bei Gefahr möglich
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                                Häufige Fragen zum Heckenschnitt
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
                        src="/images/heckenschnitt-cta.png"
                        alt="Heckenschnitt – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-lime-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Hecke schneiden lassen?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für ein kostenloses Angebot.
                            Wir sind schnell bei Ihnen und hinterlassen alles sauber!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <span>Jetzt Angebot anfordern</span>
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
