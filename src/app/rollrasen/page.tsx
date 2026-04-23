import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Contact } from '@/components';

export const metadata: Metadata = {
    title: 'Rollrasen verlegen Hamburg & Umgebung | Fertigrasen vom Profi | Adler & Sohn',
    description: 'Professionelle Rollrasen-Verlegung in Hamburg und Umgebung. ✓ Premium-Rollrasen ✓ Fachgerechte Verlegung ✓ Sofort grün ✓ Anwachsgarantie. Jetzt beraten lassen!',
    keywords: 'Rollrasen verlegen Hamburg, Fertigrasen Hamburg, Rollrasen kaufen, Rollrasen Kosten, Rasen verlegen lassen, Rollrasen Verlegung, Fertigrasen Verlegung, Rollrasen Preis pro m2',
    openGraph: {
        title: 'Rollrasen verlegen Hamburg & Umgebung | Adler & Sohn',
        description: 'Professionelle Rollrasen-Verlegung für einen sofort grünen Traumrasen. Premium-Qualität mit Anwachsgarantie.',
        url: 'https://garten-adler.de/rollrasen',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/rollrasen',
    },
};

const rasenTypes = [
    {
        name: 'Sport- & Spielrasen',
        description: 'Robust und strapazierfähig – ideal für Familien mit Kindern und Haustieren.',
        features: ['Belastbar', 'Schnelle Regeneration', 'Dichte Grasnarbe', 'Für intensive Nutzung'],
        icon: '⚽',
        popular: true,
    },
    {
        name: 'Zierrasen',
        description: 'Der Premiumrasen für repräsentative Gärten mit besonders feiner Optik.',
        features: ['Feinblättrig', 'Sattgrün', 'Dichter Wuchs', 'Repräsentativ'],
        icon: '✨',
        popular: false,
    },
    {
        name: 'Schattenrasen',
        description: 'Speziell für schattige Bereiche unter Bäumen und an Nordseiten.',
        features: ['Schattenverträglich', 'Robust', 'Moos-resistent', 'Pflegeleicht'],
        icon: '🌳',
        popular: false,
    },
    {
        name: 'Trockenrasen',
        description: 'Wassersparend und hitzebeständig für sonnige, trockene Standorte.',
        features: ['Trockenresistent', 'Wenig Wasserbedarf', 'Hitzebeständig', 'Nachhaltig'],
        icon: '☀️',
        popular: false,
    },
];

const benefits = [
    {
        title: 'Sofort grün',
        description: 'Kein wochenlanges Warten – Ihr Rasen ist direkt nach der Verlegung nutzbar.',
        icon: '🌿',
    },
    {
        title: 'Unkrautfrei',
        description: 'Rollrasen ist unkrautfrei und dicht, sodass Unkraut kaum Chancen hat.',
        icon: '🚫',
    },
    {
        title: 'Ganzjährig',
        description: 'Rollrasen kann fast das ganze Jahr verlegt werden (außer bei Frost).',
        icon: '📅',
    },
    {
        title: 'Gleichmäßig',
        description: 'Perfekt gleichmäßige, dichte Grasnarbe ohne kahle Stellen.',
        icon: '✓',
    },
    {
        title: 'Erosionsschutz',
        description: 'Sofortiger Schutz vor Bodenerosion bei Hanglagen und Neubauten.',
        icon: '🛡️',
    },
    {
        title: 'Anwachsgarantie',
        description: 'Wir garantieren das Anwachsen bei fachgerechter Bewässerung.',
        icon: '💯',
    },
];

const process = [
    {
        step: 1,
        title: 'Beratung & Aufmaß',
        description: 'Wir besichtigen Ihre Fläche, beraten zu Rasentypen und erstellen ein Angebot.',
    },
    {
        step: 2,
        title: 'Bodenvorbereitung',
        description: 'Abtragen von Altgras, Fräsen, Einebnen und Aufbringen von Rasenerde.',
    },
    {
        step: 3,
        title: 'Rollrasen-Lieferung',
        description: 'Frisch geernteter Rollrasen wird am Verlegetag direkt angeliefert.',
    },
    {
        step: 4,
        title: 'Fachgerechte Verlegung',
        description: 'Lückenlose Verlegung, Anwalzen und sofortige Bewässerung.',
    },
    {
        step: 5,
        title: 'Pflegeeinweisung',
        description: 'Sie erhalten eine Anleitung für die optimale Pflege in den ersten Wochen.',
    },
];

const faqs = [
    {
        q: 'Was kostet Rollrasen pro m²?',
        a: 'Rollrasen inklusive Verlegung kostet bei uns zwischen 15-25€/m², je nach Rasentyp und Bodenvorbereitung. Material (Rollrasen) allein liegt bei ca. 5-8€/m². Wir erstellen Ihnen ein individuelles Angebot.',
    },
    {
        q: 'Wann ist die beste Zeit für Rollrasen?',
        a: 'Rollrasen kann von März bis November verlegt werden. Ideal sind Frühjahr (April-Mai) und Herbst (September-Oktober), da moderate Temperaturen das Anwachsen fördern. Auch im Sommer ist Verlegung möglich – dann ist intensive Bewässerung wichtig.',
    },
    {
        q: 'Wie lange dauert die Rollrasen-Verlegung?',
        a: 'Ein durchschnittlicher Garten (200-300m²) ist in 1-2 Tagen fertig, inklusive Bodenvorbereitung. Die reine Verlegung geht schnell – unser Team schafft ca. 100m² pro Stunde.',
    },
    {
        q: 'Wie pflege ich neuen Rollrasen?',
        a: 'Die ersten 2 Wochen täglich wässern (morgens und abends je 10-15 Minuten). Nach 2-3 Wochen erstes Mähen auf 5cm. Danach normale Rasenpflege: wöchentliches Mähen, regelmäßiges Düngen.',
    },
    {
        q: 'Kann ich Rollrasen selbst verlegen?',
        a: 'Grundsätzlich ja, aber die Bodenvorbereitung ist entscheidend für das Ergebnis. Ohne fachgerechte Vorbereitung entstehen oft Unebenheiten und der Rasen wächst nicht richtig an. Wir übernehmen alle Arbeiten zum Festpreis.',
    },
    {
        q: 'Wie schnell kann der Rasen betreten werden?',
        a: 'Leichtes Betreten (z.B. zum Bewässern) ist sofort möglich. Volle Belastung erst nach 2-3 Wochen, wenn der Rasen angewachsen ist. Das erkennen Sie daran, dass sich der Rasen nicht mehr anheben lässt.',
    },
    {
        q: 'Muss alter Rasen vorher entfernt werden?',
        a: 'Ja, der alte Rasen muss komplett entfernt werden. Rollrasen auf altem Rasen zu verlegen führt zu schlechtem Anwachsen und Unebenheiten. Wir kümmern uns um die fachgerechte Entsorgung.',
    },
    {
        q: 'Bieten Sie auch nur Rollrasen-Lieferung an?',
        a: 'Ja, wir liefern Rollrasen auch ohne Verlegung. Mindestbestellmenge sind 50m². Die Lieferung erfolgt auf Palette direkt zu Ihnen. Bitte beachten: Rollrasen muss innerhalb von 24 Stunden verlegt werden.',
    },
];

export default function RollrasenPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Rollrasen Verlegung',
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
                description: 'Professionelle Rollrasen-Verlegung in Hamburg und Umgebung. Sofort grüner Traumrasen mit Anwachsgarantie.',
                serviceType: 'Rollrasen Verlegung',
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
                    { '@type': 'ListItem', position: 3, name: 'Rollrasen', item: 'https://garten-adler.de/rollrasen' },
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
                        src="/images/rollrasen-hero.png"
                        alt="Rollrasen verlegen – frischer grüner Rasen"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 60% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-800/60 via-green-700/60 to-lime-600/60 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-lime-400/20 blur-3xl z-[1]" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-green-400/20 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Rollrasen</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌿</span>
                                    <span className="text-white/90 text-sm font-medium">Premium Rollrasen</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Rollrasen <span className="text-lime-300">verlegen lassen</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    In wenigen Stunden zum perfekten Rasen: Wir verlegen erstklassigen Rollrasen
                                    inklusive Bodenvorbereitung. Sofort grün, sofort nutzbar, mit Anwachsgarantie.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Sofort grün', 'Premium-Qualität', '1 Jahr Anwachsgarantie', 'Festpreis'].map((item, i) => (
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
                                    { value: '1000+', label: 'm² im Monat', icon: '📏' },
                                    { value: '24h', label: 'Frisch geerntet', icon: '🌱' },
                                    { value: '1 Jahr', label: 'Anwachsgarantie', icon: '✓' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⭐' },
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

                {/* What is Rollrasen */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Was ist Rollrasen?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Rollrasen – auch Fertigrasen genannt – ist ein auf speziellen Feldern gezüchteter Rasen,
                                    der nach 12-18 Monaten Wachstumszeit maschinell in Bahnen geschält und aufgerollt wird.
                                    Der große Vorteil: <strong>Sofort ein perfekter, dichter Rasen</strong> statt wochenlangem
                                    Warten auf Saatgut.
                                </p>
                                <p className="mb-6">
                                    Im Gegensatz zur Aussaat, bei der Sie 6-8 Wochen auf einen nutzbaren Rasen warten müssen,
                                    ist Rollrasen <strong>bereits am Tag der Verlegung nutzbar</strong>. Die dichte Grasnarbe
                                    verhindert Unkrautwachstum und bietet sofortigen Erosionsschutz – ideal für Neubauten und Hanglagen.
                                </p>
                                <p>
                                    Wir arbeiten ausschließlich mit <strong>regionalen Rollrasen-Produzenten</strong> zusammen,
                                    die ihre Rasenflächen nach höchsten Qualitätsstandards pflegen. Der Rasen wird am Verlegetag
                                    frisch geerntet und innerhalb weniger Stunden bei Ihnen verlegt – für optimales Anwachsen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rasen Types */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Rasentypen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Der richtige Rasen für Ihren Garten
                            </h2>
                            <p className="text-lg text-gray-600">
                                Je nach Nutzung und Standort empfehlen wir den passenden Rasentyp für optimale Ergebnisse.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {rasenTypes.map((type, index) => (
                                <div key={index} className={`relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 ${type.popular ? 'ring-2 ring-green-500' : ''}`}>
                                    {type.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                            Beliebt
                                        </span>
                                    )}
                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-4">{type.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                                    <ul className="space-y-2">
                                        {type.features.map((feature, i) => (
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

                {/* Benefits */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/rollrasen-hero.png"
                        alt="Rollrasen Verlegung Hintergrund"
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 70% Green Overlay */}
                    <div className="absolute inset-0 bg-green-800/70 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Vorteile von Rollrasen
                            </h2>
                            <p className="text-green-100 text-lg">
                                Warum Rollrasen die bessere Wahl gegenüber Rasensaat ist.
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

                {/* Process */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/rollrasen-verlegung.jpg"
                        alt="Rollrasen Verlegung"
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
                                So entsteht Ihr neuer Rasen
                            </h2>
                            <p className="text-gray-400">
                                Von der Beratung bis zum fertigen Rasen – ein transparenter Ablauf für beste Ergebnisse.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 transform -translate-y-1/2" />

                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {process.map((item, index) => (
                                    <div key={index} className="relative text-center">
                                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white relative z-10">
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

                {/* Comparison */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Rollrasen vs. Rasensaat
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ein direkter Vergleich zeigt die Vorteile von Rollrasen.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-500">
                                    <div className="text-center mb-6">
                                        <span className="text-4xl">🌿</span>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-2">Rollrasen</h3>
                                        <span className="inline-block mt-2 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">Empfohlen</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            'Sofort grün und nutzbar',
                                            'Kein Unkraut',
                                            'Perfekt gleichmäßig',
                                            'Verlegung ganzjährig möglich',
                                            'Erosionsschutz sofort',
                                            'Nach 2 Wochen voll belastbar',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                    <div className="text-center mb-6">
                                        <span className="text-4xl">🌱</span>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-2">Rasensaat</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            '6-8 Wochen bis zur Nutzung',
                                            'Unkrautbekämpfung nötig',
                                            'Oft ungleichmäßig',
                                            'Nur Frühjahr/Herbst ideal',
                                            'Erosionsgefahr bei Regen',
                                            '3 Monate bis voll belastbar',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-500">
                                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
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
                                Häufige Fragen zu Rollrasen
                            </h2>
                            <p className="text-lg text-gray-600">
                                Antworten auf die wichtigsten Fragen rund um Rollrasen und Verlegung.
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
                        src="/images/rollrasen-cta.png"
                        alt="Rollrasen – jetzt Traumrasen anfragen"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-lime-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für Ihren Traumrasen?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
                            Wir freuen uns auf Ihr Projekt!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Jetzt Angebot anfordern</span>
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
