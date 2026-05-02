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
    return [];
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return { title: 'Stadt nicht gefunden' };
    }

    return {
        title: `Terrassenbau ${city.name} | Holzterrasse, Naturstein, WPC`,
        description: `Professioneller Terrassenbau in ${city.name}. ✓ Holzterrassen ✓ Naturstein ✓ WPC ✓ Betonplatten. Ihr Outdoor-Wohnzimmer vom Fachbetrieb. Jetzt anfragen!`,
        keywords: `Terrassenbau ${city.name}, Terrasse bauen ${city.name}, Holzterrasse ${city.name}, WPC-Terrasse ${city.name}`,
        openGraph: {
            title: `Terrassenbau ${city.name}`,
            description: `Terrassen aus Holz, Naturstein oder WPC in ${city.name} – fachgerecht gebaut.`,
            url: `https://garten-adler.de/${city.slug}/terrassenbau`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}/terrassenbau`,
        },
    };
}

const terrassenarten = [
    { name: 'Holzterrasse', preis: 'ab 180€/m²', icon: '🪵' },
    { name: 'WPC-Terrasse', preis: 'ab 200€/m²', icon: '🔧' },
    { name: 'Naturstein', preis: 'ab 150€/m²', icon: '🪨' },
    { name: 'Betonplatten', preis: 'ab 120€/m²', icon: '🧱' },
    { name: 'Feinsteinzeug', preis: 'ab 180€/m²', icon: '✨' },
    { name: 'Klinker', preis: 'ab 130€/m²', icon: '🏠' },
];

export default async function CityTerrassenbauPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);
    const uniqueIntro = getUniqueIntro(city, 'terrassenbau');
    const localTipp = getLocalTipp(city, 'terrassenbau');

    const allFaqs = [
        {
            q: `Was kostet eine Terrasse in ${city.name}?`,
            a: `Die Kosten für Terrassenbau in ${city.name} hängen von Material und Größe ab: Betonplatten ab 120€/m², Naturstein ab 150€/m², Holz ab 180€/m², WPC ab 200€/m². Eine typische 30m² Terrasse kostet 4.500€-8.000€ inklusive Unterbau und Montage.`,
        },
        {
            q: `Wie schnell können Sie in ${city.name} starten?`,
            a: `Für Terrassenbau-Projekte in ${city.name} (${city.distance}km entfernt) können wir nach Auftragserteilung in der Regel innerhalb von 1-2 Wochen starten. Eine typische Terrasse ist in 3-5 Tagen fertig.`,
        },
        {
            q: `Welches Terrassenmaterial ist in ${city.name} am beliebtesten?`,
            a: `In ${city.name} sind WPC und Holzterrassen sehr beliebt wegen ihres warmen Barfußgefühls. Für maximale Langlebigkeit werden oft Naturstein oder Feinsteinzeug gewählt.`,
        },
        {
            q: `Entfernen Sie auch alte Terrassen in ${city.name}?`,
            a: `Ja, wir entfernen alte Terrassen in ${city.name} inklusive Unterbau und entsorgen das Material fachgerecht. Die Kosten nennen wir Ihnen im Angebot.`,
        },
        {
            q: `Brauche ich in ${city.name} eine Genehmigung?`,
            a: `Für normale Terrassen in ${city.name} ist meist keine Genehmigung nötig. Bei Überdachungen oder erhöhten Terrassen kann eine Genehmigung erforderlich sein.`,
        },
        {
            q: `Bauen Sie auch Terrassenstufen in ${city.name}?`,
            a: `Ja, wir bauen Terrassenstufen und Gartentreppen in ${city.name} passend zu Ihrer Terrasse – aus dem gleichen Material oder als bewussten Kontrast.`,
        },
    ];
    const faqs = selectFAQs(allFaqs, citySlug, 5);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: `Terrassenbau ${city.name}`,
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
                description: `Professioneller Terrassenbau in ${city.name}. Holzterrassen, Naturstein, WPC und Betonplatten – Beratung und Montage vom Fachbetrieb.`,
                serviceType: 'Terrassenbau',
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
                    { '@type': 'ListItem', position: 3, name: 'Terrassenbau', item: `https://garten-adler.de/${city.slug}/terrassenbau` },
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
                            <Link href="/terrassenbau" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Terrassenbau</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Hero Background Image */}
                    <Image
                        src={`/images/terrassenbau-hero-${city.slug}.png`}
                        alt={`Terrassenbau in ${city.name} – moderne Holzterrasse im Garten`}
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-800/70 to-amber-900/50" />
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-stone-400/10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Terrassenbau</span></li>
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                    <span className="text-2xl">🏡</span>
                                    <span className="text-white/90 text-sm font-medium">Terrassenbau in {city.name}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                    Terrassenbau in <span className="text-amber-300">{city.name}</span>
                                </h1>

                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    Professioneller Terrassenbau für {getCityAndRegion(city)}:
                                    Holz, Naturstein oder WPC – wir bauen Ihre Traumterrasse.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-10">
                                    {['Alle Materialien', 'Festpreisgarantie', 'Inkl. Unterbau', `${city.distance}km entfernt`].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-white/90">
                                            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-700 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                        <span>Kostenloses Angebot</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-stone-700 transition-colors">
                                        <span>Jetzt anrufen</span>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: 'ab 120€', label: 'pro m²', icon: '💰' },
                                    { value: '3-5', label: 'Tage Bauzeit', icon: '⚡' },
                                    { value: '50+', label: 'Jahre Lebensdauer', icon: '⏱️' },
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
                                Ihr Terrassenbau-Partner für {city.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="lead text-xl mb-6">
                                    Sie suchen einen zuverlässigen Partner für <strong>Terrassenbau in {city.name}</strong>?
                                    Wir planen und bauen Terrassen aus allen Materialien – für Jahrzehnte Genuss im Freien.
                                </p>
                                <p className="mb-6">
                                    {uniqueIntro}
                                </p>
                                <div className="bg-stone-50 rounded-xl p-5 border-l-4 border-stone-500 my-6">
                                    <p className="text-stone-800 font-medium text-sm">💡 {localTipp}</p>
                                </div>
                                <p>
                                    Von der ersten Beratung über die Materialauswahl bis zur fertigen Terrasse
                                    erhalten Sie bei uns alles aus einer Hand – mit <strong>Festpreisgarantie</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terrassenarten */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                Materialien
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Terrassenmaterialien für {city.name}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {terrassenarten.map((terrasse, i) => (
                                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="text-4xl mb-3">{terrasse.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{terrasse.name}</h3>
                                    <span className="text-amber-600 text-xs font-bold">{terrasse.preis}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preise */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Terrassenbau-Preise für {city.name}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-3 bg-stone-700 text-white font-bold text-sm">
                                    <div className="p-4">Material</div>
                                    <div className="p-4">Preis/m²</div>
                                    <div className="p-4">30m² Terrasse</div>
                                </div>
                                {[
                                    { mat: 'Betonplatten', preis: '120-160€', gesamt: '3.600-4.800€' },
                                    { mat: 'Naturstein', preis: '150-250€', gesamt: '4.500-7.500€' },
                                    { mat: 'Holz', preis: '180-280€', gesamt: '5.400-8.400€' },
                                    { mat: 'WPC', preis: '200-280€', gesamt: '6.000-8.400€' },
                                    { mat: 'Feinsteinzeug', preis: '180-260€', gesamt: '5.400-7.800€' },
                                ].map((row, i) => (
                                    <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="p-4 font-semibold text-gray-900">{row.mat}</div>
                                        <div className="p-4 text-gray-700">{row.preis}</div>
                                        <div className="p-4 text-amber-600 font-semibold">{row.gesamt}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                * Inklusive Unterbau, Tragschicht, Material und Montage in {city.name}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section-padding bg-stone-700 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Warum Adler & Sohn für Terrassenbau in {city.name}?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🤝', title: 'Komplettservice', desc: 'Beratung bis Montage – alles aus einer Hand' },
                                { icon: '💰', title: 'Festpreisgarantie', desc: 'Transparente Preise ohne Nachforderungen' },
                                { icon: '⚡', title: 'Schnelle Bauzeit', desc: 'Die meisten Terrassen in 3-5 Tagen fertig' },
                                { icon: '🛡️', title: 'Garantie', desc: 'Gewährleistung auf Material und Montage' },
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-stone-300 text-sm">{benefit.desc}</p>
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
                                { title: 'Galabau', icon: '🏡', link: `/${city.slug}/galabau` },
                                { title: 'Zaunbau', icon: '🏗️', link: `/${city.slug}/zaunbau` },
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group bg-gray-50 rounded-xl p-5 text-center hover:bg-stone-50 hover:shadow-lg transition-all">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-stone-600 transition-colors">{item.title}</h3>
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
                                    Terrassenbau auch in der Nähe von {city.name}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/${nearbyCity.slug}/terrassenbau`}
                                        className="group bg-white rounded-2xl p-6 hover:bg-stone-50 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-stone-600 transition-colors">
                                                Terrassenbau {nearbyCity.name}
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
                            <span className="inline-block px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold mb-4">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Häufige Fragen zum Terrassenbau in {city.name}
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
                        src={`/images/terrassenbau-cta-${city.slug}.png`}
                        alt={`Terrassenbau in ${city.name} – jetzt Angebot anfordern`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-amber-900/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Terrassenbau in {city.name} anfragen
                        </h2>
                        <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
                            Kostenloses Angebot für Ihre neue Terrasse in {city.name}.
                            Wir beraten Sie gerne vor Ort.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-700 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                <span>Jetzt Angebot anfordern</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-stone-700 transition-colors">
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
