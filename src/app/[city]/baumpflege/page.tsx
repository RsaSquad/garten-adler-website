import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities, getTopCitySlugs } from '@/data/cities';
import { Contact } from '@/components';
import { getCityAndRegion, getRegionLabel } from '@/utils/cityHelpers';
import { getUniqueIntro, getLocalTipp, getBodenart, getKreisName, selectFAQs } from '@/lib/cityContentGenerator';

export const dynamicParams = true;
export async function generateStaticParams() {
    return getTopCitySlugs(30).map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Stadt nicht gefunden' };
    }

    return {
        title: `Baumpflege ${city.name} | Baumschnitt, Fällung, Kronenpflege`,
        description: `Professionelle Baumpflege in ${getCityAndRegion(city)}. ✓ Baumschnitt ✓ Kronenpflege ✓ Baumfällung ✓ Stubbenfräsen. Zertifizierte Baumpfleger. Jetzt anfragen!`,
        keywords: `Baumpflege ${city.name}, Baumschnitt ${city.name}, Baumfällung ${city.name}, Baumpfleger ${city.name}, Kronenpflege ${city.name}, Obstbaumschnitt ${city.name}`,
        openGraph: {
            title: `Baumpflege ${city.name}`,
            description: `Zertifizierte Baumpflege in ${city.name}. Baumschnitt, Kronenpflege, Fällung vom Fachbetrieb.`,
            url: `https://garten-adler.de/${city.slug}/baumpflege`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/baumpflege`,
        },
    };
}

const services = [
    {
        title: 'Kronenpflege',
        description: 'Fachgerechter Schnitt für gesunde Bäume',
        features: ['Totholzentfernung', 'Kronenauslichtung', 'Formschnitt'],
        icon: '🌳',
    },
    {
        title: 'Baumfällung',
        description: 'Sichere Fällung auch unter beengten Verhältnissen',
        features: ['Seilklettertechnik', 'Stückweise Abtragung', 'Kranfällung'],
        icon: '🪓',
    },
    {
        title: 'Obstbaumschnitt',
        description: 'Professioneller Schnitt für reiche Ernte',
        features: ['Erziehungsschnitt', 'Erhaltungsschnitt', 'Verjüngung'],
        icon: '🍎',
    },
    {
        title: 'Stubbenfräsen',
        description: 'Baumstümpfe bis unter die Grasnarbe entfernen',
        features: ['Bis 60cm Tiefe', 'Sofort bepflanzbar', 'Saubere Arbeit'],
        icon: '⚙️',
    },
];

export default async function CityBaumpflegePage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);
    const uniqueIntro = getUniqueIntro(city, 'baumpflege');
    const localTipp = getLocalTipp(city, 'baumpflege');
    const kreisName = getKreisName(city);

    const allFaqs = [
        {
            q: `Was kostet Baumpflege in ${city.name}?`,
            a: `Die Kosten für Baumpflege in ${city.name} hängen von Baumgröße und Maßnahme ab. Einfache Kronenpflege ab ca. 150-300€, Baumfällungen werden individuell kalkuliert. Wir erstellen Ihnen ein kostenloses Angebot nach Besichtigung in ${city.name}.`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} sein?`,
            a: `Für ${city.name} (${city.distance}km entfernt) können wir in der Regel innerhalb von 1-2 Wochen einen Termin anbieten. Bei Sturmschäden oder akuter Gefahr sind wir oft innerhalb von 24-48 Stunden in ${city.name}.`,
        },
        {
            q: `Brauche ich in ${city.name} eine Genehmigung für Baumfällung?`,
            a: `Das hängt von der Baumschutzverordnung in ${city.name} ab. Viele Gemeinden schützen Bäume ab einem bestimmten Stammumfang. Wir prüfen das für Sie und helfen bei der Antragstellung.`,
        },
        {
            q: `Bieten Sie Notfall-Service für ${city.name}?`,
            a: `Ja, bei umgestürzten Bäumen oder akuter Gefahr durch Sturmschäden sind wir schnell in ${city.name}. Rufen Sie uns an – wir helfen zeitnah und unkompliziert.`,
        },
        {
            q: `Entsorgen Sie das Holz in ${city.name}?`,
            a: `Ja, die komplette Entsorgung von Schnittgut und Stammholz in ${city.name} ist in unseren Angeboten enthalten. Auf Wunsch bereiten wir Stammholz auch als Brennholz auf.`,
        },
        {
            q: `Arbeiten Sie mit Seilklettertechnik in ${city.name}?`,
            a: `Ja, unsere zertifizierten Baumpfleger arbeiten mit moderner Seilklettertechnik. Das schont Ihren Garten in ${city.name} – keine schweren Hebebühnen nötig.`,
        },
        {
            q: `Welche Baumarten sind in ${city.name} typisch?`,
            a: `Im ${kreisName} finden wir häufig Eichen, Buchen, Birken und Obstbäume. Jede Art hat eigene Pflegeanforderungen – wir kennen sie alle und beraten Sie individuell.`,
        },
        {
            q: `Wann ist die beste Zeit für Baumpflege in ${city.name}?`,
            a: `Kronenpflege ist ganzjährig möglich. Größere Rückschnitte empfehlen wir für Oktober bis Februar (Vegetationsruhe). Obstbäume werden idealerweise im Winter geschnitten. Notfälle behandeln wir natürlich sofort.`,
        },
    ];
    const faqs = selectFAQs(allFaqs, citySlug, 6);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Baumpflege ${city.name}`,
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
                description: `Professionelle Baumpflege in ${city.name}. Baumschnitt, Kronenpflege, Fällung und Stubbenfräsen vom zertifizierten Fachbetrieb.`,
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
                    { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                    { '@type': 'ListItem', position: 3, name: 'Baumpflege', item: `https://garten-adler.de/${city.slug}/baumpflege` },
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
                            <Link href="/baumpflege" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Baumpflege</Link>
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
                        src={`/images/baumpflege-hero-${city.slug}.png`}
                        alt={`Professionelle Baumpflege ${city.name} - Baumschnitt vom Fachmann`}
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
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Baumpflege</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🌳</span>
                                    <span className="text-white/90 text-sm font-medium">Baumpflege in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Baumpflege in <span className="text-emerald-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Professionelle Baumpflege für {getCityAndRegion(city)}: Von der Kronenpflege bis zur sicheren
                                    Fällung. Wir sind schnell bei Ihnen.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Zertifizierte Baumpfleger', 'Seilklettertechnik', 'Entsorgung inklusive', `${city.distance}km entfernt`].map((item, i) => (
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
                                    { value: '24h', label: 'Notfall-Service', icon: '🚨' },
                                    { value: '15+', label: 'Jahre Erfahrung', icon: '⏱️' },
                                    { value: '100%', label: 'Versichert', icon: '🛡️' },
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
                                Ihr Baumpflege-Spezialist für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Bäume sind wertvolle Lebewesen, die fachgerechte Pflege verdienen. Als zertifizierter
                                    Baumpflegebetrieb sind wir regelmäßig in {city.name} und der Region {getRegionLabel(city)} tätig.
                                </p>
                                <p className="mb-6">
                                    {uniqueIntro}
                                </p>
                                <p className="mb-6">
                                    Mit unserer <strong>Seilklettertechnik</strong> erreichen wir jeden Ast, ohne Ihren Garten
                                    mit schweren Maschinen zu beschädigen. Ob Kronenpflege, Obstbaumschnitt oder Baumfällung –
                                    wir arbeiten sauber, sicher und nach den Richtlinien der ZTV-Baumpflege.
                                </p>
                                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 my-6">
                                    <p className="text-green-800 font-medium text-sm">💡 {localTipp}</p>
                                </div>
                                <p>
                                    Als Grundstückseigentümer in {city.name} tragen Sie die Verkehrssicherungspflicht für Ihre Bäume.
                                    Wir helfen Ihnen, Gefahren zu erkennen und zu beseitigen – von Totholz bis zu instabilen Kronen.
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
                                Baumpflege-Leistungen für {city.name}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
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

                {/* Emergency */}
                <section className="section-padding bg-red-600 text-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🚨</span>
                                    <span className="text-white/90 text-sm font-medium">Notfall in {city.name}?</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Sturmschaden in {city.name}?
                                </h2>
                                <p className="text-xl text-red-100 mb-8">
                                    Bei umgestürzten Bäumen oder akuter Gefahr sind wir schnell in {city.name}.
                                    Rufen Sie uns jetzt an!
                                </p>
                                <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>04131 - 394 2971</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: '🌊', title: 'Sturmschäden' },
                                    { icon: '🌳', title: 'Umgestürzte Bäume' },
                                    { icon: '⚡', title: 'Hängende Äste' },
                                    { icon: '🏠', title: 'Gebäudeschäden' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                        <div className="text-4xl mb-2">{item.icon}</div>
                                        <h4 className="font-bold">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                    <section className="section-padding bg-white">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Baumpflege auch in der Nähe von {city.name}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/baumpflege`}
                                        className="group bg-gray-50 rounded-2xl p-6 hover:bg-green-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                Baumpflege {nearbyCity.name}
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
                <section className="relative section-padding overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={`/images/baumpflege-faq-${city.slug}.jpg`}
                        alt={`Baumpflege ${city.name} - Häufige Fragen`}
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 50% Light Overlay */}
                    <div className="absolute inset-0 bg-white/50 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zur Baumpflege in {city.name}
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
                        src={`/images/baumpflege-cta-${city.slug}.png`}
                        alt={`Baumpflege ${city.name} - Jetzt Angebot anfordern`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Baumpflege in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kostenloses Angebot für Ihre Bäume in {city.name}.
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
