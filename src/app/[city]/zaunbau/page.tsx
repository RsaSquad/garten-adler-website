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
        title: `Zaunbau ${city.name} | Holzzaun, Metallzaun, Gabionen`,
        description: `Professioneller Zaunbau in ${city.name} und ${city.region}. ✓ Holzzäune ✓ Metallzäune ✓ Gabionen ✓ Sichtschutz. Montage vom Fachbetrieb. Jetzt anfragen!`,
        keywords: `Zaunbau ${city.name}, Zaun setzen ${city.name}, Holzzaun ${city.name}, Metallzaun ${city.name}, Gabionen ${city.name}, Sichtschutz ${city.name}`,
        openGraph: {
            title: `Zaunbau ${city.name}`,
            description: `Zäune und Sichtschutz in ${city.name}. Holz, Metall, Gabionen – fachgerechte Montage.`,
            url: `https://garten-adler.de/${city.slug}/zaunbau`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/zaunbau`,
        },
    };
}

const zaunarten = [
    { name: 'Holzzaun', preis: 'ab 80€/lfm', icon: '🪵' },
    { name: 'Doppelstabmatten', preis: 'ab 60€/lfm', icon: '🔩' },
    { name: 'Gabionen', preis: 'ab 150€/lfm', icon: '🪨' },
    { name: 'Sichtschutz', preis: 'ab 120€/lfm', icon: '🏠' },
    { name: 'Maschendraht', preis: 'ab 25€/lfm', icon: '🥅' },
    { name: 'Schmiedeeisen', preis: 'ab 200€/lfm', icon: '⚜️' },
];

export default async function CityZaunbauPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);

    const faqs = [
        {
            q: `Was kostet ein Zaun in ${city.name}?`,
            a: `Die Kosten für Zaunbau in ${city.name} hängen von Zaunart und Länge ab: Maschendraht ab 25€/lfm, Doppelstabmatten ab 60€/lfm, Holzzäune ab 80€/lfm, Gabionen ab 150€/lfm – jeweils inklusive Material und Montage.`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} starten?`,
            a: `Für Zaunbau-Projekte in ${city.name} ($ entfernt) können wir nach Auftragserteilung in der Regel innerhalb von 1-2 Wochen starten. Die Montage selbst dauert meist 1-3 Tage.`,
        },
        {
            q: `Welcher Zaun ist in ${city.name} am beliebtesten?`,
            a: `In ${city.name} sind Doppelstabmattenzäune sehr beliebt wegen ihrer Langlebigkeit und Pflegeleichtigkeit. Für mehr Privatsphäre werden Holz-Sichtschutzzäune oder Gabionen gewählt.`,
        },
        {
            q: `Entfernen Sie auch alte Zäune in ${city.name}?`,
            a: `Ja, wir entfernen alte Zäune in ${city.name} inklusive Pfosten und entsorgen das Material fachgerecht. Die Kosten nennen wir Ihnen im Angebot.`,
        },
        {
            q: `Brauche ich in ${city.name} eine Genehmigung?`,
            a: `Das hängt von der Zaunhöhe und der Gemeinde ${city.name} ab. In vielen Fällen sind Zäune bis 1,80m genehmigungsfrei. Wir informieren Sie über die lokalen Vorschriften.`,
        },
        {
            q: `Bauen Sie auch Tore in ${city.name}?`,
            a: `Ja, wir liefern und montieren passende Gartenpforten, Einfahrtstore und Schiebetore in ${city.name}. Auf Wunsch auch mit elektrischem Antrieb.`,
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Zaunbau ${city.name}`,
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
                description: `Professioneller Zaunbau in ${city.name}. Holzzäune, Metallzäune, Gabionen und Sichtschutz – Beratung und Montage vom Fachbetrieb.`,
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
                    { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                    { '@type': 'ListItem', position: 3, name: 'Zaunbau', item: `https://garten-adler.de/${city.slug}/zaunbau` },
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
                            <Link href="/zaunbau" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Zaunbau</Link>
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
                        src="/images/zaunbau-hero.png"
                        alt="Professioneller Zaunbau"
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-yellow-900/60" />

                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-yellow-400/20 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-orange-400/20 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Zaunbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🏗️</span>
                                    <span className="text-white/90 text-sm font-medium">Zaunbau in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Zaunbau in <span className="text-yellow-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Professioneller Zaunbau für {city.name} und {city.region}:
                                    Holz, Metall oder Gabionen – wir liefern und montieren Zäune aller Art.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Zaunarten', 'Festpreisgarantie', 'Inkl. Tore', `$ entfernt`].map((item, i) => (
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
                                        <span>Kostenloses Angebot</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-amber-700 transition-colors">
                                        <span>Jetzt anrufen</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: 'ab 25€', label: 'pro lfm', icon: '💰' },
                                    { value: '1-3', label: 'Tage Montage', icon: '⚡' },
                                    { value: '25+', label: 'Jahre Lebensdauer', icon: '⏱️' },
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
                                Ihr Zaunbau-Partner für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Sie suchen einen zuverlässigen Partner für <strong>Zaunbau in {city.name}</strong>?
                                    Wir liefern und montieren Zäune aller Art – von der schlichten Grundstücksabgrenzung
                                    bis zum repräsentativen Sichtschutz.
                                </p>
                                <p className="mb-6">
                                    Als erfahrener Galabau-Betrieb beraten wir Sie umfassend zu den verschiedenen
                                    Materialien und deren Vor- und Nachteilen. <strong>Holz</strong> für natürliche Wärme,
                                    <strong> Metall</strong> für Langlebigkeit, <strong>Gabionen</strong> für modernes Design –
                                    für jeden Anspruch finden wir die passende Lösung in {city.name}.
                                </p>
                                <p>
                                    Von der Vor-Ort-Beratung über die Fundamentierung bis zur fertigen Montage
                                    erhalten Sie bei uns alles aus einer Hand – mit <strong>Festpreisgarantie</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zaunarten */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                Zaunarten
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Zäune für {city.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {zaunarten.map((zaun, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-3">{zaun.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{zaun.name}</h3>
                                    <span className="text-amber-600 text-xs font-bold">{zaun.preis}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Zaunbau-Preise für {city.name}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-3 bg-amber-600 text-white font-bold text-sm">
                                    <div className="p-4">Zaunart</div>
                                    <div className="p-4">1,60m Höhe</div>
                                    <div className="p-4">2,00m Höhe</div>
                                </div>
                                {[
                                    { art: 'Maschendraht', h160: '30-40€/lfm', h200: '35-50€/lfm' },
                                    { art: 'Doppelstabmatten', h160: '75-95€/lfm', h200: '90-120€/lfm' },
                                    { art: 'Holzzaun', h160: '100-150€/lfm', h200: '130-180€/lfm' },
                                    { art: 'Sichtschutz', h160: '150-200€/lfm', h200: '180-250€/lfm' },
                                    { art: 'Gabionen', h160: '200-280€/lfm', h200: '280-380€/lfm' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.art}</div>
                                        <div className="p-4 text-gray-700">{row.h160}</div>
                                        <div className="p-4 text-gray-700">{row.h200}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Inklusive Material, Pfosten, Fundament und Montage in {city.name}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-padding bg-amber-600 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Zaunbau in {city.name}?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🤝', title: 'Komplettservice', desc: 'Beratung bis Montage – alles aus einer Hand' },
                                { icon: '💰', title: 'Festpreisgarantie', desc: 'Transparente Preise ohne Nachforderungen' },
                                { icon: '⚡', title: 'Schnelle Montage', desc: 'Die meisten Zäune stehen in 1-3 Tagen' },
                                { icon: '🛡️', title: 'Garantie', desc: 'Gewährleistung auf Material und Montage' },
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-amber-100 text-sm">{benefit.desc}</p>
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

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {[
                                { title: 'Pflasterarbeiten', icon: '🧱', link: `/${city.slug}/pflasterarbeiten` },
                                { title: 'Gartenpflege', icon: '🌿', link: `/${city.slug}/gartenpflege` },
                                { title: 'Rollrasen', icon: '🌱', link: `/${city.slug}/rollrasen` },
                                { title: 'Baumpflege', icon: '🌳', link: `/${city.slug}/baumpflege` },
                                { title: 'Galabau', icon: '🏡', link: `/${city.slug}/galabau` },
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-amber-50 hover:shadow-lg transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{city.name}</p>
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
                                    Zaunbau auch in der Nähe von {city.name}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/zaunbau`}
                                        className="group bg-white rounded-2xl p-6 hover:bg-amber-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                                                Zaunbau {nearbyCity.name}
                                            </h3>
                                            <span className="text-sm text-gray-500"></span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{nearbyCity.region}</p>
                                        <span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
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
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zum Zaunbau in {city.name}
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
                        src="/images/zaunbau-cta.png"
                        alt="zaunbau - jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Zaunbau in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                            Kostenloses Angebot für Ihren neuen Zaun in {city.name}.
                            Wir beraten Sie gerne vor Ort.
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
