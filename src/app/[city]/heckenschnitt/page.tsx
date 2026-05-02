import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities, getTopCitySlugs } from '@/data/cities';
import { Contact } from '@/components';
import { getCityAndRegion, getRegionLabel } from '@/utils/cityHelpers';
import { getUniqueIntro, getLocalTipp, selectFAQs } from '@/lib/cityContentGenerator';

export const dynamicParams = true;
export async function generateStaticParams() {
    // Pre-render top 10 cities at build time, rest on-demand (ISR)
    const topCities = ["hamburg", "luebeck", "lueneburg", "norderstedt", "ahrensburg",
        "bad-oldesloe", "elmshorn", "pinneberg", "stade", "buchholz-in-der-nordheide"];
    return topCities.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Stadt nicht gefunden' };
    }

    return {
        title: `Heckenschnitt ${city.name} | Formschnitt, Rückschnitt`,
        description: `Professioneller Heckenschnitt in ${getCityAndRegion(city)}. ✓ Formschnitt ✓ Rückschnitt ✓ Alle Heckenarten ✓ Entsorgung inklusive. Jetzt anfragen!`,
        keywords: `Heckenschnitt ${city.name}, Hecke schneiden ${city.name}, Heckenpflege ${city.name}, Thuja schneiden ${city.name}, Formschnitt Hecke ${city.name}`,
        openGraph: {
            title: `Heckenschnitt ${city.name}`,
            description: `Professioneller Heckenschnitt in ${city.name}. Formschnitt, Rückschnitt und Pflege aller Heckenarten.`,
            url: `https://garten-adler.de/${city.slug}/heckenschnitt`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/heckenschnitt`,
        },
    };
}

const heckenarten = [
    { name: 'Thuja', icon: '🌲', schnittzeit: 'Juni & September' },
    { name: 'Liguster', icon: '🌿', schnittzeit: 'Mai, Juli & Sept.' },
    { name: 'Buche', icon: '🍂', schnittzeit: 'Juni & August' },
    { name: 'Kirschlorbeer', icon: '🌳', schnittzeit: 'Juni & September' },
    { name: 'Eibe', icon: '🎄', schnittzeit: 'Juni & September' },
    { name: 'Buchsbaum', icon: '✨', schnittzeit: 'Mai, Juli & Sept.' },
];

const services = [
    { title: 'Formschnitt', desc: 'Regelmäßiger Schnitt für dichte Hecken', icon: '✂️' },
    { title: 'Rückschnitt', desc: 'Korrektur bei übergroßen Hecken', icon: '📏' },
    { title: 'Verjüngung', desc: 'Radikalschnitt bei verkahlten Hecken', icon: '🔄' },
    { title: 'Rodung', desc: 'Komplette Entfernung inkl. Wurzeln', icon: '🪓' },
];

export default async function CityHeckenschnittPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);
    const uniqueIntro = getUniqueIntro(city, 'heckenschnitt');
    const localTipp = getLocalTipp(city, 'heckenschnitt');

    const allFaqs = [
        {
            q: `Was kostet Heckenschnitt in ${city.name}?`,
            a: `Der Preis für Heckenschnitt in ${city.name} hängt von Höhe und Länge ab. Richtwert: 5-15€ pro laufendem Meter bei normaler Höhe (bis 2m). Höhere Hecken kosten mehr. Fordern Sie ein kostenloses Angebot an!`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} sein?`,
            a: `Für ${city.name} (${city.distance}km entfernt) können wir in der Regel innerhalb von 1-2 Wochen einen Termin anbieten. Bei dringenden Anfragen oft auch schneller.`,
        },
        {
            q: `Entsorgen Sie das Schnittgut in ${city.name}?`,
            a: `Ja, die komplette Entsorgung des Schnittguts in ${city.name} ist in unseren Angeboten enthalten. Wir hinterlassen alles sauber.`,
        },
        {
            q: `Wann ist die beste Zeit für Heckenschnitt in ${city.name}?`,
            a: `Die meisten Hecken in ${city.name} werden 2x pro Jahr geschnitten: Im Juni nach dem Hauptaustrieb und im September vor dem Winter. Formschnitte sind ganzjährig erlaubt.`,
        },
        {
            q: `Schneiden Sie auch hohe Hecken in ${city.name}?`,
            a: `Ja, mit Teleskopgeräten schneiden wir Hecken bis 4-5 Meter Höhe in ${city.name}. Bei extremen Höhen beraten wir zur Höhenreduzierung.`,
        },
        {
            q: `Brauche ich in ${city.name} eine Genehmigung?`,
            a: `Für Formschnitte brauchen Sie in ${city.name} keine Genehmigung. Radikale Rückschnitte und Rodungen sind nur von Oktober bis Februar erlaubt (Vogelschutz §39 BNatSchG).`,
        },
    ];
    const faqs = selectFAQs(allFaqs, citySlug, 5);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Heckenschnitt ${city.name}`,
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
                description: `Professioneller Heckenschnitt in ${city.name}. Formschnitt, Rückschnitt und Pflege aller Heckenarten mit Entsorgung.`,
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
                    { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                    { '@type': 'ListItem', position: 3, name: 'Heckenschnitt', item: `https://garten-adler.de/${city.slug}/heckenschnitt` },
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
                            <Link href="/heckenschnitt" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Heckenschnitt</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <Image
                        src={`/images/heckenschnitt-hero-${city.slug}.png`}
                        alt={`Professioneller Heckenschnitt ${city.name} - Formschnitt vom Profi`}
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-lime-900/60" />

                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-lime-400/20 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-green-400/20 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Heckenschnitt</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">✂️</span>
                                    <span className="text-white/90 text-sm font-medium">Heckenschnitt in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Heckenschnitt in <span className="text-lime-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Professioneller Heckenschnitt für {getCityAndRegion(city)}: Formschnitt, Rückschnitt
                                    und Pflege aller Heckenarten. Wir sind schnell bei Ihnen.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Heckenarten', 'Entsorgung inklusive', 'Bis 4m Höhe', `${city.distance}km entfernt`].map((item, i) => (
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
                                    { value: '5-15€', label: 'pro lfm (bis 2m)', icon: '💰' },
                                    { value: '2x', label: 'Schnitt pro Jahr', icon: '📅' },
                                    { value: '4m', label: 'max. Höhe', icon: '📏' },
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

                {/* Intro Text */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                                Ihr Heckenschnitt-Spezialist für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Eine gepflegte Hecke ist die Visitenkarte Ihres Grundstücks in {city.name}.
                                    Regelmäßiger Heckenschnitt sorgt für <strong>dichtes Wachstum, schöne Optik und gesunde Pflanzen</strong>.
                                </p>
                                <p className="mb-6">
                                    {uniqueIntro}
                                </p>
                                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 my-6">
                                    <p className="text-green-800 font-medium text-sm">💡 {localTipp}</p>
                                </div>
                                <p>
                                    Als Grundstückseigentümer in {city.name} profitieren Sie von unserer Erfahrung:
                                    Wir schneiden Ihre Hecke fachgerecht, entsorgen das komplette Schnittgut
                                    und hinterlassen alles sauber. So einfach kann Heckenpflege sein!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Heckenschnitt-Services für {city.name}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Preisübersicht
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Heckenschnitt-Preise für {city.name}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-3 bg-green-800 text-white font-bold text-sm">
                                    <div className="p-4">Höhe</div>
                                    <div className="p-4">Formschnitt</div>
                                    <div className="p-4">Rückschnitt</div>
                                </div>
                                {[
                                    { hoehe: 'Bis 1,5m', form: '5-8€/lfm', rueck: '10-15€/lfm' },
                                    { hoehe: '1,5-2,5m', form: '8-12€/lfm', rueck: '15-25€/lfm' },
                                    { hoehe: '2,5-3,5m', form: '12-18€/lfm', rueck: '25-40€/lfm' },
                                    { hoehe: 'Über 3,5m', form: 'auf Anfrage', rueck: 'auf Anfrage' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.hoehe}</div>
                                        <div className="p-4 text-gray-700">{row.form}</div>
                                        <div className="p-4 text-gray-700">{row.rueck}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Entsorgung inklusive. Endpreis abhängig von Heckenart und Zugänglichkeit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Heckenarten */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Wir schneiden alle Heckenarten in {city.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {heckenarten.map((hecke, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-3xl mb-2">{hecke.icon}</div>
                                    <h3 className="font-bold text-sm mb-1">{hecke.name}</h3>
                                    <p className="text-xs text-gray-400">{hecke.schnittzeit}</p>
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
                                Warum Adler & Sohn für Heckenschnitt in {city.name}?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🔧', title: 'Profi-Equipment', desc: 'Hochwertige Heckenscheren für perfekte Ergebnisse' },
                                { icon: '♻️', title: 'Entsorgung inkl.', desc: 'Schnittgut wird mitgenommen und entsorgt' },
                                { icon: '✨', title: 'Saubere Arbeit', desc: 'Ihr Grundstück ist nach der Arbeit sauber' },
                                { icon: '📏', title: 'Alle Höhen', desc: 'Bis 4m Höhe schneiden wir problemlos' },
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

                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                    <section className="section-padding bg-gray-50">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Heckenschnitt auch in der Nähe von {city.name}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/heckenschnitt`}
                                        className="group bg-white rounded-2xl p-6 hover:bg-green-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                Heckenschnitt {nearbyCity.name}
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
                                Häufige Fragen zum Heckenschnitt in {city.name}
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
                        src={`/images/heckenschnitt-cta-${city.slug}.png`}
                        alt={`Heckenschnitt ${city.name} - Jetzt Angebot anfordern`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-lime-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Heckenschnitt in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kostenloses Angebot für Ihren Heckenschnitt in {city.name}.
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
