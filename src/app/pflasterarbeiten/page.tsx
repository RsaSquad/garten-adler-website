import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Pflasterarbeiten Hamburg & Umgebung | Einfahrten, Terrassen, Wege',
    description: 'Professionelle Pflasterarbeiten in Hamburg und Umgebung. ✓ Einfahrten ✓ Terrassen ✓ Gartenwege ✓ Hofbefestigungen. Hochwertige Materialien & faire Preise. Jetzt beraten lassen!',
    keywords: 'Pflasterarbeiten Hamburg, Pflastersteine verlegen, Einfahrt pflastern, Terrasse pflastern, Gartenwege anlegen, Hofbefestigung, Natursteinpflaster, Betonsteinpflaster, Pflasterbau',
    openGraph: {
        title: 'Pflasterarbeiten Hamburg & Umgebung',
        description: 'Professionelle Pflasterarbeiten für Einfahrten, Terrassen und Gartenwege. Qualität aus Meisterhand.',
        url: 'https://garten-adler.de/pflasterarbeiten',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/pflasterarbeiten',
    },
};

const pflasterTypes = [
    {
        name: 'Natursteinpflaster',
        description: 'Edles Natursteinpflaster aus Granit, Basalt oder Porphyr für zeitlose Eleganz.',
        features: ['Extrem langlebig', 'Frostbeständig', 'Individuelle Optik', 'Wertsteigernd'],
        image: '/images/services/pflasterarbeiten-naturstein-terrassenbau-holzterrasse-wpc.png',
    },
    {
        name: 'Betonsteinpflaster',
        description: 'Vielseitige Betonsteine in verschiedenen Formen, Farben und Oberflächenstrukturen.',
        features: ['Preisgünstig', 'Große Auswahl', 'Pflegeleicht', 'Belastbar'],
        image: '/images/services/pflasterarbeiten-betonstein-verlegen.png',
    },
    {
        name: 'Klinker & Ziegel',
        description: 'Traditionelle Klinker für einen klassisch-norddeutschen Charakter.',
        features: ['Zeitlos schön', 'Robust', 'Rutschfest', 'Ökologisch'],
        image: '/images/services/pflasterarbeiten-klinker-verlegen.png',
    },
    {
        name: 'Großformatplatten',
        description: 'Moderne Großformatplatten für eine elegante, minimalistische Optik.',
        features: ['Modern', 'Schnelle Verlegung', 'Wenig Fugen', 'Barrierearm'],
        image: '/images/services/pflasterarbeiten-grossformat-platten.png',
    },
];

const services = [
    {
        title: 'Einfahrten & Zufahrten',
        description: 'Robuste und optisch ansprechende Einfahrten, die höchsten Belastungen standhalten.',
        image: '/images/services/pflasterarbeiten-einfahrt-pflastern.png',
        features: ['PKW- & LKW-befahrbar', 'Entwässerungssysteme', 'Randsteine', 'Beleuchtungsintegration'],
    },
    {
        title: 'Terrassen & Sitzplätze',
        description: 'Gemütliche Terrassen und Sitzplätze als Zentrum Ihres Gartens.',
        image: '/images/services/terrassenbau-holzterrasse-wpc.png',
        features: ['Terrassenplatten', 'Stufenanlagen', 'Barrierefreie Zugänge', 'Drainage'],
    },
    {
        title: 'Gartenwege',
        description: 'Funktionale und ästhetische Wege durch Ihren Garten.',
        image: '/images/services/gartenweg-naturstein-pflasterarbeiten.png',
        features: ['Geschwungene Formen', 'Trittplatten', 'Beleuchtung', 'Einfassungen'],
    },
    {
        title: 'Hofbefestigungen',
        description: 'Professionelle Befestigung von Höfen und Vorplätzen.',
        image: '/images/services/pflasterarbeiten-pflasterarbeiten-hofbefestigung.png',
        features: ['Großflächig', 'Belastbar', 'Entwässerung', 'Stellplätze'],
    },
    {
        title: 'Parkplätze',
        description: 'Private und gewerbliche Parkflächen fachgerecht gepflastert.',
        image: '/images/services/pflasterarbeiten-parkplatz-anlegen.png',
        features: ['Markierungen', 'Schwerlastfähig', 'Rasengitter-Option', 'Bordsteine'],
    },
    {
        title: 'Poolumrandungen',
        description: 'Rutschfeste und elegante Umrandungen für Ihren Pool.',
        image: '/images/services/gartengestaltung-pool-anlage.png',
        features: ['Rutschfest', 'Wärmeleitend', 'Wasserabweisend', 'Barfußfreundlich'],
    },
];

const process = [
    {
        step: 1,
        title: 'Kostenlose Beratung',
        description: 'Wir besichtigen Ihr Grundstück und besprechen Ihre Wünsche und Möglichkeiten.',
    },
    {
        step: 2,
        title: 'Planung & Angebot',
        description: 'Sie erhalten einen detaillierten Plan mit Materialvorschlägen und ein transparentes Festpreisangebot.',
    },
    {
        step: 3,
        title: 'Vorbereitung',
        description: 'Wir bereiten den Untergrund professionell vor: Aushub, Verdichtung, Tragschicht.',
    },
    {
        step: 4,
        title: 'Verlegung',
        description: 'Unsere Experten verlegen Ihr Pflaster fachgerecht mit perfektem Gefälle.',
    },
    {
        step: 5,
        title: 'Abschluss',
        description: 'Verfugung, Reinigung und finale Abnahme – Ihre neue Fläche ist fertig!',
    },
];

export default function PflasterarbeitenPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Pflasterarbeiten',
        provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Adler & Sohn',
            url: 'https://garten-adler.de',
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 53.5511,
                longitude: 9.9937,
            },
            geoRadius: '150000',
        },
        description: 'Professionelle Pflasterarbeiten für Einfahrten, Terrassen, Gartenwege und Hofbefestigungen in Hamburg und Umgebung.',
        serviceType: 'Pflasterarbeiten',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">
                            Jetzt anfragen
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/pflasterarbeiten-hero.png"
                        alt="Professionelle Pflasterarbeiten Lüneburg - Einfahrt und Terrasse pflastern"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 z-[1]" />

                    {/* Accent Elements */}
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-green-500/10 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        {/* Breadcrumb */}
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Pflasterarbeiten</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                                    <span className="text-2xl">🧱</span>
                                    <span className="text-amber-400 text-sm font-medium">Professionelle Pflasterarbeiten</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Pflasterarbeiten vom <span className="text-amber-400">Profi</span>
                                </h1>

                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    Einfahrten, Terrassen, Gartenwege – wir verwandeln Ihre Flächen in
                                    dauerhafte Kunstwerke. Mit hochwertigen Materialien und handwerklicher
                                    Perfektion für Generationen.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['15+ Jahre Erfahrung', 'Festpreisgarantie', 'Kostenlose Beratung'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-gray-900 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg">
                                        <span>Kostenlos anfragen</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>Anrufen</span>
                                    </a>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '500+', label: 'Gepflasterte Projekte', icon: '✓' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '100%', label: 'Zufriedenheit', icon: '⭐' },
                                    { value: '5 Jahre', label: 'Gewährleistung', icon: '🛡️' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <div className="text-3xl mb-2">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Materials Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                Materialien
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Hochwertige Pflastermaterialien
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von klassischem Naturstein bis zu modernen Betonplatten –
                                wir beraten Sie zu allen Materialoptionen.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pflasterTypes.map((type, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                                    <div className="h-40 relative">
                                        <Image src={type.image} alt={type.name} fill className="object-cover" />
                                    </div>
                                    <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        {type.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                                    <ul className="space-y-2">
                                        {type.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Pflasterarbeiten für jeden Bereich
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ob Einfahrt, Terrasse oder kompletter Hofbereich –
                                wir realisieren Projekte jeder Größe.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                                    <div className="h-48 relative">
                                        <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-4">
                                Unser Prozess
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So entstehen Ihre neuen Pflasterflächen
                            </h2>
                            <p className="text-gray-400">
                                Von der ersten Beratung bis zur fertigen Fläche –
                                ein transparenter Ablauf für beste Ergebnisse.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 transform -translate-y-1/2" />

                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {process.map((item, index) => (
                                    <div key={index} className="relative text-center">
                                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900 relative z-10">
                                            {item.step}
                                        </div>
                                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                    Warum Adler & Sohn?
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Ihr Vorteil bei Pflasterarbeiten mit uns
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Mit über 15 Jahren Erfahrung und hunderten zufriedener Kunden sind wir
                                    Ihr verlässlicher Partner für alle Pflasterarbeiten in der Region.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Festpreisgarantie', desc: 'Sie erhalten einen verbindlichen Festpreis – keine versteckten Kosten.' },
                                        { title: 'Fachgerechte Ausführung', desc: 'Alle Arbeiten nach aktuellen technischen Regeln und Normen.' },
                                        { title: 'Eigene Mitarbeiter', desc: 'Keine Subunternehmer – unsere erfahrenen Teams vor Ort.' },
                                        { title: '5 Jahre Gewährleistung', desc: 'Überdurchschnittlich lange Garantie auf alle Pflasterarbeiten.' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image / Illustration */}
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/pflasterarbeiten-qualitaet.jpg"
                                        alt="Hochwertige Pflasterarbeiten Lüneburg - Naturstein und Betonstein"
                                        fill
                                        quality={80}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">⭐</div>
                                        <div>
                                            <div className="font-bold text-gray-900">4.9 / 5 Sterne</div>
                                            <div className="text-sm text-gray-500">Kundenbewertungen</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <Contact />

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zu Pflasterarbeiten
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    q: 'Was kostet Pflasterarbeiten pro m²?',
                                    a: 'Die Kosten variieren je nach Material, Untergrundvorbereitung und Komplexität. Betonsteinpflaster beginnt bei ca. 60-80€/m², Natursteinpflaster ab ca. 100-150€/m². Wir erstellen Ihnen gerne ein individuelles Angebot.',
                                },
                                {
                                    q: 'Wie lange dauern Pflasterarbeiten?',
                                    a: 'Eine typische Einfahrt (30-50m²) ist in 3-5 Arbeitstagen fertig. Bei größeren Projekten erstellen wir Ihnen einen detaillierten Zeitplan.',
                                },
                                {
                                    q: 'Welches Pflaster ist am besten für Einfahrten?',
                                    a: 'Für Einfahrten empfehlen wir mindestens 8cm dicke Pflastersteine mit hoher Druckfestigkeit. Besonders geeignet sind Betonsteine oder Granitpflaster.',
                                },
                                {
                                    q: 'Brauche ich eine Baugenehmigung?',
                                    a: 'Für reine Pflasterarbeiten auf dem eigenen Grundstück ist in der Regel keine Genehmigung erforderlich. Bei größeren Versiegelungen beraten wir Sie zu lokalen Vorschriften.',
                                },
                                {
                                    q: 'Wie pflege ich mein neues Pflaster?',
                                    a: 'Regelmäßiges Kehren und gelegentliches Reinigen mit Wasser reicht meist aus. Bei Bedarf können wir auch eine professionelle Pflasterreinigung anbieten.',
                                },
                            ].map((faq, index) => (
                                <details key={index} className="bg-white rounded-xl p-6 group">
                                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-gray-600">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative section-padding overflow-hidden">
                    <Image
                        src="/images/pflasterarbeiten-cta.png"
                        alt="Pflasterarbeiten – jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für Ihre neuen Pflasterflächen?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für eine kostenlose Beratung und ein
                            unverbindliches Angebot. Wir freuen uns auf Ihr Projekt!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Jetzt Angebot anfordern</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-amber-600 transition-colors">
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
