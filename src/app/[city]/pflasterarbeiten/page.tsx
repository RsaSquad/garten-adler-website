import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { Contact } from '@/components';

// Generiere alle Städte-Pflasterarbeiten-Seiten statisch
export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({
        city: slug,
    }));
}

// Dynamische Metadata
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Nicht gefunden | Adler & Sohn' };
    }

    const title = `Pflasterarbeiten ${city.name} | Einfahrten & Terrassen | Adler & Sohn`;
    const description = `Professionelle Pflasterarbeiten in ${city.name} (${city.region}). ✓ Einfahrten ✓ Terrassen ✓ Gartenwege ✓ Hofbefestigungen. Festpreisgarantie & 5 Jahre Gewährleistung!`;

    return {
        title,
        description,
        keywords: `Pflasterarbeiten ${city.name}, Pflastersteine ${city.name}, Einfahrt pflastern ${city.name}, Terrasse pflastern ${city.name}, Pflasterbau ${city.region}`,
        openGraph: {
            title,
            description,
            url: `https://garten-adler.de/${city.slug}/pflasterarbeiten`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/pflasterarbeiten`,
        },
    };
}

const pflasterTypes = [
    { name: 'Natursteinpflaster', icon: '🪨', desc: 'Granit, Basalt, Porphyr' },
    { name: 'Betonsteinpflaster', icon: '🧱', desc: 'Vielseitig & preiswert' },
    { name: 'Klinker & Ziegel', icon: '🏠', desc: 'Klassisch norddeutsch' },
    { name: 'Großformatplatten', icon: '⬜', desc: 'Modern & elegant' },
];

const services = [
    { title: 'Einfahrten', icon: '🚗', features: ['PKW-befahrbar', 'Entwässerung', 'Beleuchtung'] },
    { title: 'Terrassen', icon: '☀️', features: ['Terrassenplatten', 'Stufen', 'Barrierefrei'] },
    { title: 'Gartenwege', icon: '🚶', features: ['Geschwungen', 'Trittplatten', 'Beleuchtung'] },
    { title: 'Hofbefestigung', icon: '🏡', features: ['Großflächig', 'Belastbar', 'Drainage'] },
    { title: 'Parkplätze', icon: '🅿️', features: ['Schwerlast', 'Markierung', 'Rasengitter'] },
    { title: 'Poolumrandung', icon: '🏊', features: ['Rutschfest', 'Elegant', 'Pflegeleicht'] },
];

export default async function CityPflasterarbeitenPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 4);

    // FAQ für Pflasterarbeiten in dieser Stadt
    const faqs = [
        {
            q: `Was kosten Pflasterarbeiten in ${city.name}?`,
            a: `Die Kosten für Pflasterarbeiten in ${city.name} variieren je nach Material und Fläche. Betonsteinpflaster beginnt bei ca. 60-80€/m², Naturstein ab 100-150€/m². Wir erstellen Ihnen ein kostenloses Angebot für Ihr Projekt in ${city.name}.`,
        },
        {
            q: `Wie lange dauern Pflasterarbeiten in ${city.name}?`,
            a: `Eine typische Einfahrt (30-50m²) in ${city.name} ist in 3-5 Arbeitstagen fertig. Größere Projekte planen wir individuell. Durch unsere Nähe (nur $) sind wir flexibel und schnell vor Ort.`,
        },
        {
            q: `Welches Pflaster ist für ${city.name} am besten geeignet?`,
            a: `Für ${city.name} in ${city.region} empfehlen wir frostbeständige Materialien. Besonders beliebt sind hier Betonsteine mit Natursteinoptik oder klassisches Granitpflaster. Wir beraten Sie vor Ort zu den besten Optionen.`,
        },
        {
            q: `Bieten Sie Pflasterarbeiten in ganz ${city.name} an?`,
            a: `Ja, wir führen Pflasterarbeiten in ganz ${city.name} und Umgebung durch. ${city.districts ? `Ob in ${city.districts.slice(0, 3).join(', ')} oder anderen Stadtteilen – wir kommen zu Ihnen!` : `In allen Ortsteilen sind wir für Sie da.`}`,
        },
        {
            q: `Gibt es eine Gewährleistung auf Pflasterarbeiten in ${city.name}?`,
            a: `Ja, auf alle Pflasterarbeiten in ${city.name} geben wir 5 Jahre Gewährleistung. Das ist länger als gesetzlich vorgeschrieben und zeigt unser Vertrauen in die Qualität unserer Arbeit.`,
        },
    ];

    // JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Pflasterarbeiten in ${city.name}`,
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Adler & Sohn',
                    telephone: '04131 - 394 2971',
                },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                },
                description: `Professionelle Pflasterarbeiten in ${city.name}. Einfahrten, Terrassen, Gartenwege und Hofbefestigungen.`,
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
                    { '@type': 'ListItem', position: 3, name: 'Pflasterarbeiten', item: `https://garten-adler.de/${city.slug}/pflasterarbeiten` },
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
                            <Link href="/pflasterarbeiten" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Pflasterarbeiten</Link>
                            <Link href="/#kontakt" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Kontakt</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/images/pflasterarbeiten-hero.png"
                        alt="Professionelle Pflasterarbeiten"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        {/* Breadcrumb */}
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Pflasterarbeiten</span></li>
                            </ol>
                        </nav>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                                <span className="text-2xl">🧱</span>
                                <span className="text-amber-400 text-sm font-medium">Pflasterarbeiten in {city.name}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Pflasterarbeiten in <span className="text-amber-400">{city.name}</span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                Professionelle Pflasterarbeiten für Einfahrten, Terrassen und Gartenwege in {city.name}.
                                Mit nur  Anfahrt sind wir schnell bei Ihnen – für dauerhafte Qualität.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                {['Festpreisgarantie', '5 Jahre Gewährleistung', `Nur $ Anfahrt`].map((item, i) => (
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
                                    <span>04131 - 394 2971</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Materials */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Pflastermaterialien für {city.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                Wir verarbeiten alle gängigen Pflastermaterialien – passend für Klima und Boden in {city.region}.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pflasterTypes.map((type, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="text-5xl mb-4">{type.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                                    <p className="text-gray-600 text-sm">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Unsere Pflasterarbeiten in {city.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von der Einfahrt bis zur Poolumrandung – wir pflastern alle Bereiche in {city.name}.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title} in {city.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((f, j) => (
                                            <span key={j} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Warum Adler & Sohn für Pflasterarbeiten in {city.name}?
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { t: 'Lokale Expertise', d: `Wir kennen Boden und Klima in ${city.name} und ${city.region}` },
                                        { t: 'Kurze Anfahrt', d: `Mit nur $ Entfernung sind wir schnell vor Ort` },
                                        { t: 'Festpreisgarantie', d: 'Keine versteckten Kosten – der Preis steht vorab fest' },
                                        { t: '5 Jahre Gewährleistung', d: 'Überdurchschnittlich lange Garantie auf alle Arbeiten' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.t}</h4>
                                                <p className="text-sm text-gray-600">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/pflasterarbeiten-qualitaet.jpg"
                                        alt="Hochwertige Pflasterarbeiten von Adler & Sohn"
                                        fill
                                        quality={80}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <Contact defaultOrt={city.name} />

                {/* FAQ */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                FAQ – Pflasterarbeiten in {city.name}
                            </h2>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="bg-white rounded-xl p-6 group">
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

                {/* Nearby Cities */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">Pflasterarbeiten in der Region</h2>
                            <p className="text-gray-400">Auch in den Nachbarstädten sind wir für Sie da.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {nearbyCities.map((nc) => (
                                <Link key={nc.slug} href={`/${nc.slug}/pflasterarbeiten`} className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">{nc.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3">Pflasterarbeiten</p>
                                    <span className="text-amber-400 text-sm font-medium">Mehr erfahren →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative section-padding overflow-hidden">
                    <Image
                        src="/images/pflasterarbeiten-cta.png"
                        alt="Pflasterarbeiten - jetzt Angebot anfordern"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Pflasterarbeiten in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für ein kostenloses Angebot. Wir freuen uns auf Ihr Pflasterprojekt in {city.name}!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
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
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={120} height={40} className="h-10 w-auto object-contain brightness-200" />
                        </Link>
                        <div className="flex gap-6 text-sm">
                            <Link href="/" className="hover:text-green-500">Home</Link>
                            <Link href={`/${city.slug}`} className="hover:text-green-500">{city.name}</Link>
                            <Link href="/impressum" className="hover:text-green-500">Impressum</Link>
                            <Link href="/datenschutz" className="hover:text-green-500">Datenschutz</Link>
                        </div>
                        <p className="text-sm">© {new Date().getFullYear()} Adler & Sohn</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
