import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { Contact } from '@/components';

export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Stadt nicht gefunden' };
    }

    return {
        title: `Rollrasen verlegen ${city.name} | Fertigrasen vom Profi`,
        description: `Professionelle Rollrasen-Verlegung in ${city.name} und ${city.region}. ✓ Premium-Rollrasen ✓ Fachgerechte Verlegung ✓ Sofort grün ✓ Anwachsgarantie. Jetzt anfragen!`,
        keywords: `Rollrasen ${city.name}, Fertigrasen ${city.name}, Rollrasen verlegen ${city.name}, Rasen verlegen ${city.name}, Rollrasen Kosten ${city.name}, Gärtner ${city.name}`,
        openGraph: {
            title: `Rollrasen verlegen ${city.name}`,
            description: `Premium Rollrasen-Verlegung in ${city.name}. Sofort grüner Traumrasen mit Anwachsgarantie.`,
            url: `https://garten-adler.de/${city.slug}/rollrasen`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/rollrasen`,
        },
    };
}

const rasenTypes = [
    {
        name: 'Sport- & Spielrasen',
        description: 'Robust und strapazierfähig – ideal für Familien mit Kindern und Haustieren.',
        features: ['Belastbar', 'Schnelle Regeneration', 'Dichte Grasnarbe'],
        icon: '⚽',
        popular: true,
    },
    {
        name: 'Zierrasen',
        description: 'Der Premiumrasen für repräsentative Gärten mit besonders feiner Optik.',
        features: ['Feinblättrig', 'Sattgrün', 'Dichter Wuchs'],
        icon: '✨',
    },
    {
        name: 'Schattenrasen',
        description: 'Speziell für schattige Bereiche unter Bäumen und an Nordseiten.',
        features: ['Schattenverträglich', 'Robust', 'Moos-resistent'],
        icon: '🌳',
    },
    {
        name: 'Trockenrasen',
        description: 'Wassersparend und hitzebeständig für sonnige, trockene Standorte.',
        features: ['Trockenresistent', 'Wenig Wasserbedarf', 'Hitzebeständig'],
        icon: '☀️',
    },
];

export default async function CityRollrasenPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);

    const faqs = [
        {
            q: `Was kostet Rollrasen verlegen in ${city.name}?`,
            a: `Die Kosten für Rollrasen in ${city.name} liegen bei 15-25€/m² inklusive Verlegung und Bodenvorbereitung. Der reine Rollrasen kostet ca. 5-8€/m². Wir erstellen Ihnen gerne ein kostenloses Angebot für Ihr Projekt in ${city.name}.`,
        },
        {
            q: `Wie schnell können Sie Rollrasen in ${city.name} verlegen?`,
            a: `Für ${city.name} ($ entfernt) können wir in der Regel innerhalb von 1-2 Wochen starten. Bei dringenden Projekten sind auch kurzfristigere Termine möglich. Die Verlegung selbst dauert bei einem durchschnittlichen Garten nur 1-2 Tage.`,
        },
        {
            q: `Welche Rollrasen-Sorte empfehlen Sie für ${city.name}?`,
            a: `Das hängt von Ihrem Garten ab. Für die meisten Familiengärten in ${city.name} empfehlen wir unseren Sport- & Spielrasen. Bei schattigen Bereichen den Schattenrasen, und für besonders sonnige Lagen in ${city.region} unseren trockenresistenten Rasen.`,
        },
        {
            q: `Bereiten Sie den Boden in ${city.name} auch vor?`,
            a: `Ja, die komplette Bodenvorbereitung ist in unserem Service enthalten: Abtragen von Altgras, Fräsen des Bodens, Einebnen und Aufbringen von Rasenerde. Alles aus einer Hand für ${city.name}.`,
        },
        {
            q: `Geben Sie Garantie auf Rollrasen in ${city.name}?`,
            a: `Ja, wir geben 1 Jahr Anwachsgarantie auf alle Rollrasen-Projekte in ${city.name}. Voraussetzung ist die Einhaltung unserer Pflegeanleitung, besonders die regelmäßige Bewässerung in den ersten Wochen.`,
        },
        {
            q: `Entsorgen Sie den alten Rasen in ${city.name}?`,
            a: `Ja, die fachgerechte Entsorgung von Altgras und Erdaushub ist in unseren Angeboten für ${city.name} enthalten. Sie müssen sich um nichts kümmern.`,
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Rollrasen Verlegung ${city.name}`,
                provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '04131 - 394 2971',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Lüneburg',
                        addressRegion: 'Niedersachsen',
                        addressCountry: 'DE',
                    },
                },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                    containedInPlace: { '@type': 'State', name: city.region },
                },
                description: `Professionelle Rollrasen-Verlegung in ${city.name}. Premium-Qualität, sofort grün, mit Anwachsgarantie.`,
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
                    { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                    { '@type': 'ListItem', position: 3, name: 'Rollrasen', item: `https://garten-adler.de/${city.slug}/rollrasen` },
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
                            <Link href={`/${city.slug}`} className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">{city.name}</Link>
                            <Link href="/rollrasen" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Rollrasen</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
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
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Rollrasen</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌿</span>
                                    <span className="text-white/90 text-sm font-medium">Rollrasen in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Rollrasen verlegen in <span className="text-lime-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Premium Rollrasen für {city.name} und {city.region}: Wir verlegen Ihren Traumrasen
                                    inklusive Bodenvorbereitung – schneller Service garantiert.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Sofort grün', '1 Jahr Garantie', 'Festpreis', `$ Entfernung`].map((item, i) => (
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
                                        <span>Kostenloses Angebot</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">
                                        <span>Jetzt anrufen</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '15-25€', label: 'pro m² inkl. Verlegung', icon: '💰' },
                                    { value: '24h', label: 'Frisch geerntet', icon: '🌱' },
                                    { value: '1 Jahr', label: 'Anwachsgarantie', icon: '✓' },
                                    { value: `$`, label: 'Entfernung', icon: '📍' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl mb-2">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
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
                                Ihr Rollrasen-Spezialist für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Sie wünschen sich einen perfekten Rasen in {city.name}, ohne wochenlang zu warten?
                                    Mit unserem <strong>Premium-Rollrasen</strong> verwandeln wir Ihren Garten innerhalb eines Tages
                                    in eine sattgrüne Wohlfühloase.
                                </p>
                                <p className="mb-6">
                                    Als erfahrener Garten- und Landschaftsbaubetrieb verlegen wir regelmäßig Rollrasen in {city.name}
                                    und der gesamten Region {city.region}. Mit nur <strong> Entfernung</strong> sind
                                    wir schnell bei Ihnen und liefern Ihren neuen Rasen frisch von der Rasenschule.
                                </p>
                                <p>
                                    Unser Rundum-Service für {city.name} umfasst: Beratung, Bodenvorbereitung, Lieferung, Verlegung
                                    und Pflegeeinweisung – alles aus einer Hand und zum garantierten Festpreis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rasen Types */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Rasentypen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Welcher Rasen für {city.name}?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Wir beraten Sie zu allen Optionen und empfehlen den optimalen Rasen für Ihre Nutzung.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {rasenTypes.map((type, index) => (
                                <div key={index} className={`relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 ${type.popular ? 'ring-2 ring-green-500' : ''}`}>
                                    {type.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                            Beliebt in {city.name}
                                        </span>
                                    )}
                                    <div className="text-5xl mb-4">{type.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                                    <ul className="space-y-2">
                                        {type.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/rollrasen-verlegung.jpg"
                        alt={`Rollrasen Verlegung ${city.name} - Schritt für Schritt`}
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
                                Ablauf
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So läuft Ihre Rollrasen-Verlegung in {city.name}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                { step: 1, title: 'Beratung', desc: 'Kostenlose Besichtigung in ' + city.name },
                                { step: 2, title: 'Angebot', desc: 'Festpreis innerhalb 48h' },
                                { step: 3, title: 'Vorbereitung', desc: 'Bodenvorbereitung vor Ort' },
                                { step: 4, title: 'Verlegung', desc: 'Frischer Rollrasen verlegt' },
                                { step: 5, title: 'Fertig', desc: 'Sofort grüner Traumrasen' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                    <section className="section-padding bg-white">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Rollrasen auch in der Nähe von {city.name}
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Wir verlegen Rollrasen auch in diesen Städten nahe {city.name}.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/rollrasen`}
                                        className="group bg-gray-50 rounded-2xl p-6 hover:bg-green-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                Rollrasen {nearbyCity.name}
                                            </h3>
                                            <span className="text-sm text-gray-500"></span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{nearbyCity.region}</p>
                                        <span className="text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Mehr erfahren
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact */}
                <Contact defaultOrt={city.name} />

                {/* FAQ */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zu Rollrasen in {city.name}
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
                        src="/images/rollrasen-cta.png"
                        alt={`Rollrasen verlegen ${city.name} - Jetzt Angebot anfordern`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-lime-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Jetzt Rollrasen in {city.name} anfragen!
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kostenloses Angebot für Ihren neuen Traumrasen in {city.name}.
                            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
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
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={120} height={40} className="h-10 w-auto object-contain brightness-200" />
                        </div>
                        <div className="flex gap-6 text-sm">
                            <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
                            <Link href={`/${city.slug}`} className="hover:text-green-500 transition-colors">{city.name}</Link>
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
