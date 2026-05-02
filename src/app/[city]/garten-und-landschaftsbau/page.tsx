import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities } from '@/data/cities';
import { Contact } from '@/components';
import { getCityAndRegion, getRegionLabel } from '@/utils/cityHelpers';
import { getUniqueIntro, getLocalTipp, getBodenart, getKreisName, selectFAQs } from '@/lib/cityContentGenerator';

export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24h
export async function generateStaticParams() {
    return [];
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Stadt nicht gefunden' };
    }

    return {
        title: `Garten- und Landschaftsbau ${city.name} | GaLaBau vom Profi`,
        description: `Professioneller Garten- und Landschaftsbau in ${city.name}. ✓ Gartengestaltung ✓ Terrassenbau ✓ Pflasterarbeiten ✓ Bepflanzung. Jetzt anfragen!`,
        keywords: `Garten- und Landschaftsbau ${city.name}, GaLaBau ${city.name}, Gartengestaltung ${city.name}, Landschaftsbau ${city.name}`,
        openGraph: {
            title: `Garten- und Landschaftsbau ${city.name}`,
            description: `Ihr Traumgarten in ${city.name}. Komplette Gartengestaltung und Landschaftsbau aus einer Hand.`,
            url: `https://garten-adler.de/${city.slug}/garten-und-landschaftsbau`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/garten-und-landschaftsbau`,
        },
    };
}

const leistungen = [
    { title: 'Gartenplanung', icon: '📐' },
    { title: 'Terrassenbau', icon: '🏡' },
    { title: 'Pflasterarbeiten', icon: '🧱' },
    { title: 'Bepflanzung', icon: '🌷' },
    { title: 'Rollrasen', icon: '🌱' },
    { title: 'Baumpflege', icon: '🌳' },
    { title: 'Zaunbau', icon: '🏗️' },
    { title: 'Mauerbau', icon: '🪨' },
    { title: 'Beleuchtung', icon: '💡' },
    { title: 'Gartenpflege', icon: '🌿' },
    { title: 'Wasser', icon: '💧' },
    { title: 'Winterdienst', icon: '❄️' },
];

export default async function CityGartenLandschaftsbauPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);
    const uniqueIntro = getUniqueIntro(city, 'garten-und-landschaftsbau');
    const localTipp = getLocalTipp(city, 'garten-und-landschaftsbau');
    const bodenart = getBodenart(city);
    const kreisName = getKreisName(city);

    const allFaqs = [
        {
            q: `Was kostet Gartengestaltung in ${city.name}?`,
            a: `Die Kosten variieren je nach Umfang: Einfache Umgestaltungen ab ca. 10.000€, komplette Neuanlagen ab 30.000-60.000€. Wir erstellen Ihnen ein individuelles Festpreisangebot für Ihr Projekt in ${city.name}.`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} starten?`,
            a: `Für GaLaBau-Projekte in ${city.name} (${city.distance}km entfernt) können wir nach Auftragserteilung meist innerhalb von 2-3 Wochen starten. Die Dauer hängt vom Projektumfang ab.`,
        },
        {
            q: `Welche Leistungen bieten Sie in ${city.name}?`,
            a: `In ${city.name} bieten wir das komplette GaLaBau-Spektrum: Gartenplanung, Terrassenbau, Pflasterarbeiten, Bepflanzung, Rollrasen, Baumpflege, Zaunbau, Mauerbau und regelmäßige Gartenpflege.`,
        },
        {
            q: `Übernehmen Sie auch kleine Projekte in ${city.name}?`,
            a: `Ja, wir führen Projekte jeder Größe in ${city.name} aus – von der Einzelbaum-Pflanzung bis zur kompletten Gartenanlage. Jedes Projekt wird mit der gleichen Sorgfalt umgesetzt.`,
        },
        {
            q: `Wie läuft ein GaLaBau-Projekt in ${city.name} ab?`,
            a: `Der Ablauf: 1. Vor-Ort-Beratung in ${city.name}, 2. Konzept mit 3D-Visualisierung, 3. Festpreisangebot, 4. Termingerechte Umsetzung, 5. Abnahme und Pflegetipps.`,
        },
        {
            q: `Bieten Sie auch Pflege-Verträge für ${city.name} an?`,
            a: `Ja, wir bieten flexible Gartenpflege-Verträge für ${city.name} an – von monatlicher Betreuung bis zu saisonalen Leistungen.`,
        },
        {
            q: `Welche Bodenverhältnisse gibt es in ${city.name}?`,
            a: `In ${city.name} (${kreisName}) finden wir überwiegend ${bodenart}. Wir stimmen unsere Pflanz- und Baukonzepte auf diese Gegebenheiten ab – für langlebige Ergebnisse.`,
        },
        {
            q: `Kennen Sie sich in ${city.name} und Umgebung aus?`,
            a: `Ja, wir sind regelmäßig im ${kreisName} tätig und kennen die lokalen Gegebenheiten genau. Von den Bodenverhältnissen bis zu den Genehmigungsanforderungen – wir beraten Sie umfassend.`,
        },
    ];
    const faqs = selectFAQs(allFaqs, citySlug, 6);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Garten- und Landschaftsbau ${city.name}`,
                provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '04131 - 394 2971',
                },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                    containedInPlace: { '@type': 'State', name: city.region },
                },
                description: `Professioneller Garten- und Landschaftsbau in ${city.name}. Gartengestaltung, Terrassenbau, Pflasterarbeiten und Bepflanzung aus einer Hand.`,
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
                    { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                    { '@type': 'ListItem', position: 3, name: 'Garten- und Landschaftsbau', item: `https://garten-adler.de/${city.slug}/garten-und-landschaftsbau` },
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
                            <Link href="/garten-und-landschaftsbau" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">GaLaBau</Link>
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
                        src={`/images/garten-und-landschaftsbau-hero-${city.slug}.png`}
                        alt={`Garten- und Landschaftsbau ${city.name} - Professionelle Gestaltung`}
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

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Garten- und Landschaftsbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌳</span>
                                    <span className="text-white/90 text-sm font-medium">GaLaBau in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Garten- und Landschaftsbau<br />
                                    <span className="text-teal-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Professioneller Garten- und Landschaftsbau für {getCityAndRegion(city)}.
                                    Von der Planung bis zur Pflege – Ihr Traumgarten aus einer Hand.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Komplettservice', 'Festpreisgarantie', '15+ Jahre Erfahrung', `${city.distance}km entfernt`].map((item, i) => (
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
                                        <span>Jetzt anrufen</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '12', label: 'Leistungsbereiche', icon: '🛠️' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '100%', label: 'Festpreisgarantie', icon: '💰' },
                                    { value: `${city.distance}km`, label: 'Entfernung', icon: '📍' },
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

                {/* Intro */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Ihr GaLaBau-Partner für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Sie suchen einen zuverlässigen Partner für <strong>Garten- und Landschaftsbau in {city.name}</strong>?
                                    Wir planen, gestalten und pflegen Außenanlagen mit Leidenschaft und Fachwissen.
                                </p>
                                <p className="mb-6">
                                    {uniqueIntro}
                                </p>
                                <p className="mb-6">
                                    Als erfahrener Galabau-Betrieb sind wir in {getCityAndRegion(city)} für Sie tätig.
                                    Unser Team aus <strong>ausgebildeten Landschaftsgärtnern</strong> berät Sie individuell
                                    und setzt Ihr Projekt termingerecht um – mit Festpreisgarantie.
                                </p>
                                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 my-6">
                                    <p className="text-green-800 font-medium text-sm">💡 {localTipp}</p>
                                </div>
                                <p>
                                    Von der repräsentativen Einfahrt über die gemütliche Terrasse bis zum durchdachten
                                    Pflanzkonzept – wir verwandeln Ihr Grundstück in {city.name} in einen Lebensraum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leistungen */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                GaLaBau-Leistungen in {city.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {leistungen.map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ablauf */}
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={`/images/galabau-ablauf-${city.slug}.jpg`}
                        alt={`Gartengestaltung Ablauf ${city.name} - Planung bis Umsetzung`}
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 70% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/70 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                So läuft Ihr Projekt in {city.name}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { schritt: 1, titel: 'Kontakt', icon: '📞' },
                                { schritt: 2, titel: 'Vor-Ort-Termin', icon: '🏡' },
                                { schritt: 3, titel: 'Angebot', icon: '📋' },
                                { schritt: 4, titel: 'Umsetzung', icon: '🔨' },
                                { schritt: 5, titel: 'Abnahme', icon: '✅' },
                            ].map((schritt, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                        {schritt.icon}
                                    </div>
                                    <div className="text-green-400 text-sm font-bold mb-1">Schritt {schritt.schritt}</div>
                                    <h4 className="text-lg font-bold">{schritt.titel}</h4>
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
                                Warum Adler & Sohn für GaLaBau in {city.name}?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🤝', title: 'Alles aus einer Hand', desc: 'Planung bis Pflege – ein Ansprechpartner' },
                                { icon: '💰', title: 'Festpreisgarantie', desc: 'Transparente Preise ohne Nachforderungen' },
                                { icon: '👷', title: 'Eigenes Personal', desc: 'Keine Subunternehmer – nur Profis' },
                                { icon: '⏱️', title: '15+ Jahre Erfahrung', desc: 'Hunderte Projekte realisiert' },
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-green-100 text-sm">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Links */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Weitere Leistungen in {city.name}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
                            {[
                                { title: 'Pflasterarbeiten', icon: '🧱', link: `/${city.slug}/pflasterarbeiten` },
                                { title: 'Gartenpflege', icon: '🌿', link: `/${city.slug}/gartenpflege` },
                                { title: 'Rollrasen', icon: '🌱', link: `/${city.slug}/rollrasen` },
                                { title: 'Baumpflege', icon: '🌳', link: `/${city.slug}/baumpflege` },
                                { title: 'Heckenschnitt', icon: '✂️', link: `/${city.slug}/heckenschnitt` },
                                { title: 'Zaunbau', icon: '🏗️', link: `/${city.slug}/zaunbau` },
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group bg-gray-50 rounded-xl p-5 text-center hover:bg-green-50 hover:shadow-lg transition-all">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-green-600 transition-colors">{item.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                    <section className="section-padding bg-gray-50">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    GaLaBau auch in der Nähe von {city.name}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/garten-und-landschaftsbau`}
                                        className="group bg-white rounded-2xl p-6 hover:bg-green-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                GaLaBau {nearbyCity.name}
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
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zu GaLaBau in {city.name}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="bg-gray-50 rounded-xl p-6 group">
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
                        src={`/images/garten-und-landschaftsbau-cta-${city.slug}.png`}
                        alt={`Garten- und Landschaftsbau ${city.name} - Jetzt anfragen`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            GaLaBau in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kostenlose Beratung für Ihr Gartenprojekt in {city.name}.
                            Wir erstellen Ihnen ein unverbindliches Festpreisangebot.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <span>Jetzt Beratung anfordern</span>
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
