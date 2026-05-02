import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities } from '@/data/cities';
import { Contact } from '@/components';
import { getCityAndRegion, getRegionLabel } from '@/utils/cityHelpers';
import { getUniqueIntro, getLocalTipp, selectFAQs } from '@/lib/cityContentGenerator';

export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24h
export async function generateStaticParams() {
    return [];
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Nicht gefunden' };
    }

    const title = `Gartenpflege ${city.name} | Rasenmähen, Heckenschnitt`;
    const description = `Professionelle Gartenpflege in ${getCityAndRegion(city)}. ✓ Rasenmähen ✓ Heckenschnitt ✓ Beetpflege ✓ Baumpflege. Erfahrene Gärtner, faire Konditionen!`;

    return {
        title,
        description,
        keywords: `Gartenpflege ${city.name}, Rasenmähen ${city.name}, Heckenschnitt ${city.name}, Gärtner ${city.name}, Gartenservice ${getRegionLabel(city)}`,
        openGraph: { title, description, url: `https://garten-adler.de/${city.slug}/gartenpflege` },
        alternates: { canonical: `https://garten-adler.de/${city.slug}/gartenpflege` },
    };
}

const services = [
    { title: 'Rasenpflege', icon: '🌿', features: ['Rasenmähen', 'Vertikutieren', 'Düngen', 'Nachsäen'] },
    { title: 'Heckenschnitt', icon: '✂️', features: ['Formschnitt', 'Rückschnitt', 'Entsorgung'] },
    { title: 'Beetpflege', icon: '🌸', features: ['Unkraut', 'Mulchen', 'Bepflanzung'] },
    { title: 'Baumpflege', icon: '🌳', features: ['Obstbaumschnitt', 'Kronenpflege', 'Totholz'] },
    { title: 'Saisonarbeiten', icon: '🍂', features: ['Frühjahrsputz', 'Laubentfernung', 'Winterschutz'] },
    { title: 'Entsorgung', icon: '🚛', features: ['Grünschnitt', 'Astwerk', 'Laub'] },
];

export default async function CityGartenpflegePage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) notFound();

    const nearbyCities = getNearbyCities(citySlug, 4);
    const uniqueIntro = getUniqueIntro(city, 'gartenpflege');
    const localTipp = getLocalTipp(city, 'gartenpflege');

    const allFaqs = [
        {
            q: `Was kostet Gartenpflege in ${city.name}?`,
            a: `Die Kosten für Gartenpflege in ${city.name} richten sich nach Gartengröße und Leistungsumfang. Wir erstellen Ihnen ein individuelles Angebot nach einer kostenlosen Besichtigung vor Ort.`,
        },
        {
            q: `Wie oft sollte der Garten in ${city.name} gepflegt werden?`,
            a: `In ${city.name} empfehlen wir während der Saison (April-Oktober) wöchentliches Rasenmähen und monatliche Beetpflege. Hecken benötigen 2-4 Schnitte pro Jahr.`,
        },
        {
            q: `Bieten Sie auch einmalige Gartenpflege in ${city.name} an?`,
            a: `Ja! Neben regelmäßiger Pflege bieten wir in ${city.name} auch Einzeleinsätze an – ideal für Frühjahrsputz, Herbstarbeiten oder Urlaubsvertretung.`,
        },
        {
            q: `Entsorgen Sie den Grünschnitt in ${city.name}?`,
            a: `Ja, die Entsorgung von Rasenschnitt, Heckenschnitt und Laub ist bei uns standardmäßig inklusive. Alles wird fachgerecht über zertifizierte Betriebe entsorgt.`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} starten?`,
            a: `In ${city.name} können wir meist innerhalb von 1-2 Wochen mit der regelmäßigen Pflege beginnen. Die Erstberatung ist oft schon in wenigen Tagen möglich.`,
        },
        {
            q: `Berechnen Sie Anfahrtskosten nach ${city.name}?`,
            a: `Nein, die Anfahrt nach ${city.name} ($) ist in unseren Angeboten bereits enthalten. Es entstehen keine zusätzlichen Anfahrtskosten.`,
        },
    ];
    const faqs = selectFAQs(allFaqs, citySlug, 5);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Gartenpflege in ${city.name}`,
                provider: { '@type': 'HomeAndConstructionBusiness', name: 'Adler & Sohn', telephone: '04131 - 394 2971' },
                areaServed: { '@type': 'City', name: city.name },
                description: `Professionelle Gartenpflege in ${city.name}. Rasenmähen, Heckenschnitt, Beetpflege und mehr.`,
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
                    { '@type': 'ListItem', position: 3, name: 'Gartenpflege', item: `https://garten-adler.de/${city.slug}/gartenpflege` },
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
                            <Link href="/gartenpflege" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Gartenpflege</Link>
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
                        src={`/images/gartenpflege-hero-${city.slug}.png`}
                        alt={`Professionelle Gartenpflege ${city.name} - Rasenpflege und mehr`}
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Transparent Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/80 to-green-700/80 z-[1]" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-lime-400/20 blur-3xl z-[1]" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Gartenpflege</span></li>
                            </ol>
                        </nav>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                <span className="text-2xl">🌿</span>
                                <span className="text-white/90 text-sm font-medium">Gartenpflege in {city.name}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Gartenpflege in <span className="text-lime-300">{city.name}</span>
                            </h1>

                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Professionelle Gartenpflege für Ihren Garten in {city.name}. Unsere erfahrenen Gärtner
                                kümmern sich um Rasenmähen, Heckenschnitt, Beetpflege und alle anderen Gartenarbeiten –
                                wir sind schnell bei Ihnen.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                {['Erfahrene Gärtner', 'Flexible Termine', `Nur $ Anfahrt`, 'Entsorgung inklusive'].map((item, i) => (
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
                    </div>
                </section>

                {/* Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Unsere Gartenpflege-Leistungen in {city.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                Kompetente Pflege für jeden Bereich Ihres Gartens in {getCityAndRegion(city)}.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title} in {city.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((f, j) => (
                                            <span key={j} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Warum Adler & Sohn für Gartenpflege in {city.name}?
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    {uniqueIntro}
                                </p>
                                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 mb-8">
                                    <p className="text-green-800 font-medium text-sm">💡 {localTipp}</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { t: 'Lokale Expertise', d: `Wir kennen Boden und Klima in ${city.name}` },
                                        { t: 'Kurze Anfahrt', d: `Mit nur $ sind wir schnell vor Ort` },
                                        { t: 'Erfahrene Gärtner', d: 'Ausgebildete Fachkräfte mit jahrelanger Erfahrung' },
                                        { t: 'Flexibel & Zuverlässig', d: 'Regelmäßige Pflege oder einmalige Einsätze' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white">
                                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
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
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { v: '200+', l: 'Pflegekunden' },
                                    { v: '15+', l: 'Jahre Erfahrung' },
                                    { v: '100%', l: 'Zufriedenheit' },
                                    { v: '52x', l: 'Pflege/Jahr möglich' },
                                ].map((s, i) => (
                                    <div key={i} className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-6 text-center text-white">
                                        <div className="text-3xl font-bold mb-1">{s.v}</div>
                                        <div className="text-green-100 text-sm">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Districts */}
                {city.districts && city.districts.length > 0 && (
                    <section className="section-padding bg-white">
                        <div className="container-custom text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Gartenpflege in allen Stadtteilen von {city.name}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Ob in {city.districts.slice(0, 3).join(', ')} oder anderen Stadtteilen – wir pflegen Ihren Garten überall in {city.name}.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {city.districts.map((district, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-gray-100 rounded-full text-gray-700 font-medium">
                                        {district}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Form */}
                <Contact defaultOrt={city.name} />

                {/* FAQ */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                FAQ – Gartenpflege in {city.name}
                            </h2>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="bg-white rounded-xl p-6 group shadow-sm">
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
                <section className="relative section-padding text-white overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src={`/images/gartenpflege-kalender-${city.slug}.jpg`}
                        alt={`Gartenpflege ${city.name} und Umgebung`}
                        fill
                        quality={75}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    {/* 80% Dark Overlay */}
                    <div className="absolute inset-0 bg-gray-900/80 z-[1]" />

                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold mb-4">Gartenpflege in der Region</h2>
                            <p className="text-gray-400">Auch in den Nachbarstädten sind wir für Sie da.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {nearbyCities.map((nc) => (
                                <Link key={nc.slug} href={`/${nc.slug}/gartenpflege`} className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-2">{nc.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3">Gartenpflege</p>
                                    <span className="text-green-400 text-sm font-medium">Mehr erfahren →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative section-padding overflow-hidden">
                    <Image
                        src={`/images/gartenpflege-cta-${city.slug}.png`}
                        alt={`Gartenpflege ${city.name} - Jetzt Angebot anfordern`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Gartenpflege in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns für eine kostenlose Beratung. Wir freuen uns auf Ihren Garten in {city.name}!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                <span>Jetzt kostenlos anfragen</span>
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
