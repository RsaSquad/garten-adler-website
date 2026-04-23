import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getNearbyCities, getAllCitySlugs } from '@/data/cities';
import { FAQ, Contact } from '@/components';
import { generateCityFAQs } from '@/lib/faqData';

// Generiere alle Städte-Seiten statisch
export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({
        city: slug,
    }));
}

// Dynamische Metadata für jede Stadt
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return {
            title: 'Stadt nicht gefunden | Adler & Sohn',
        };
    }

    const title = `Garten- & Landschaftsbau ${city.name} | Adler & Sohn`;
    const description = `Professioneller Garten- und Landschaftsbau in ${city.name} (${city.region}). ✓ Gartengestaltung ✓ Terrassenbau ✓ Rollrasen ✓ Pflasterarbeiten. Jetzt kostenlose Beratung!`;

    return {
        title,
        description,
        keywords: `Garten Landschaftsbau ${city.name}, Gartengestaltung ${city.name}, Gartenbau ${city.name}, Terrassenbau ${city.name}, Rollrasen ${city.name}, Pflasterarbeiten ${city.name}, Zaunbau ${city.name}, Gartenpflege ${city.name}, Adler & Sohn ${city.name}`,
        openGraph: {
            title,
            description,
            url: `https://garten-adler.de/${city.slug}`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: `https://garten-adler.de/${city.slug}`,
        },
    };
}

// Services für die Stadt
const services = [
    { name: 'Gartengestaltung', image: '/images/services/gartengestaltung.png', description: 'Komplette Neugestaltung und Planung' },
    { name: 'Terrassenbau', image: '/images/services/terrasse.png', description: 'Holz, WPC oder Naturstein' },
    { name: 'Pflasterarbeiten', image: '/images/services/einfahrt.png', description: 'Einfahrten und Gehwege' },
    { name: 'Rollrasen', image: '/images/services/rollrasen.png', description: 'Lieferung und Verlegung' },
    { name: 'Zaunbau', image: '/images/services/zaunbau.png', description: 'Zäune und Sichtschutz' },
    { name: 'Gartenpflege', image: '/images/services/gartenpflege.png', description: 'Regelmäßige Pflege' },
    { name: 'Hochbeete', image: '/images/services/hochbeet.png', description: 'Kräuter und Gemüse' },
    { name: 'Wasserspiele', image: '/images/services/wasserspiel.png', description: 'Teiche und Brunnen' },
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const nearbyCities = getNearbyCities(citySlug, 6);

    // Pick a different image per city based on slug hash
    const slugHash = citySlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const heroIndex = (slugHash % 6) + 1;
    const ctaIndex = (slugHash % 3) + 1;
    const cityFAQs = generateCityFAQs(city.name, city.region);

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': `https://garten-adler.de/${city.slug}#business`,
                name: `Adler & Sohn - Garten- & Landschaftsbau ${city.name}`,
                description: city.description,
                url: `https://garten-adler.de/${city.slug}`,
                telephone: '04131 - 394 2971',
                email: 'galabau@sohn-adler.de',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: city.name,
                    addressRegion: city.region,
                    addressCountry: 'DE',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 53.2464,
                    longitude: 10.4115,
                },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                },
                priceRange: '€€',
                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '08:00',
                    closes: '18:00',
                },
                sameAs: [
                    'https://www.facebook.com/adler-sohn',
                    'https://www.instagram.com/adler-sohn',
                ],
            },
            {
                '@type': 'Service',
                '@id': `https://garten-adler.de/${city.slug}#service`,
                name: `Garten- und Landschaftsbau in ${city.name}`,
                provider: {
                    '@id': `https://garten-adler.de/${city.slug}#business`,
                },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                },
                description: `Professioneller Garten- und Landschaftsbau Service in ${city.name}. Gartengestaltung, Terrassenbau, Pflasterarbeiten und mehr.`,
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://garten-adler.de',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Standorte',
                        item: 'https://garten-adler.de/standorte',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: city.name,
                        item: `https://garten-adler.de/${city.slug}`,
                    },
                ],
            },
            {
                '@type': 'FAQPage',
                mainEntity: cityFAQs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="container-custom py-4">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={140} height={47} className="h-10 w-auto object-contain" />
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/#leistungen" className="text-gray-600 hover:text-green-600 transition-colors">Leistungen</Link>
                            <Link href="/#ueber-uns" className="text-gray-600 hover:text-green-600 transition-colors">Über uns</Link>
                            <Link href="/#kontakt" className="text-gray-600 hover:text-green-600 transition-colors">Kontakt</Link>
                        </div>
                        <Link href="/#kontakt" className="btn-primary text-sm py-2.5 px-5">
                            Jetzt anfragen
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <Image
                        src={`/images/city-hero-${heroIndex}.png`}
                        alt={`Gartengestaltung in ${city.name}`}
                        fill
                        priority
                        quality={85}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/60" />

                    <div className="container-custom relative z-10">
                        {/* Breadcrumb */}
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                </li>
                                <li><span className="mx-2">/</span></li>
                                <li>
                                    <span className="text-white/80">{city.region}</span>
                                </li>
                                <li><span className="mx-2">/</span></li>
                                <li>
                                    <span className="text-white">{city.name}</span>
                                </li>
                            </ol>
                        </nav>

                        <div className="max-w-4xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                                <span className="text-white/90 text-sm">Ihr lokaler Partner in {city.name}</span>
                            </div>

                            {/* H1 - Important for SEO */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Garten- & Landschaftsbau in{' '}
                                <span className="text-lime-300">{city.name}</span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
                                {city.description}
                            </p>

                            {/* Key Benefits */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                <div className="flex items-center gap-2 text-white/90">
                                    <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Kostenlose Beratung</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>15+ Jahre Erfahrung</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/#kontakt" className="btn-white inline-flex items-center justify-center gap-3">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>Kostenlos anfragen</span>
                                </Link>
                                <a href="tel:+4941313942971" className="btn-outline border-white/30 text-white hover:bg-white hover:text-green-700 inline-flex items-center justify-center gap-3">
                                    <span>04131 - 394 2971</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                Unsere Leistungen
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Garten- & Landschaftsbau Leistungen in {city.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                Von der Gartengestaltung bis zur Pflege – wir sind Ihr Komplettanbieter für
                                alle Garten- und Landschaftsbau-Arbeiten in {city.name} und {city.region}.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow card-hover">
                                    <div className="h-36 relative">
                                        <Image src={service.image} alt={service.name} fill className="object-cover" />
                                    </div>
                                    <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {service.name} {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {service.description} in {city.name} und Umgebung.
                                    </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link href="/#kontakt" className="btn-primary inline-flex items-center gap-3">
                                <span>Projekt in {city.name} anfragen</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                                    Warum Adler & Sohn?
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Ihr Vorteil mit Adler & Sohn in {city.name}
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Als regionaler Garten- und Landschaftsbaubetrieb kennen wir {city.name} und die Besonderheiten
                                    der Region {city.region}. Unsere Nähe garantiert schnellen Service und persönliche Betreuung.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Regionale Expertise', desc: `Wir kennen Boden und Klima in ${city.name}` },
                                        { title: 'Persönliche Betreuung', desc: 'Ein Ansprechpartner von Anfang bis Ende' },
                                        { title: 'Faire Preise', desc: 'Transparente Angebote ohne versteckte Kosten' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
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

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: '15+', label: 'Jahre Erfahrung' },
                                    { value: '500+', label: 'Projekte' },
                                    { value: '100%', label: 'Zufriedenheit' },
                                    { value: '24h', label: 'Antwortzeit' },
                                ].map((stat, index) => (
                                    <div key={index} className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-8 text-center text-white">
                                        <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                        <div className="text-green-100">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Districts Section (if available) */}
                {city.districts && city.districts.length > 0 && (
                    <section className="section-padding bg-gray-50">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Wir sind in ganz {city.name} für Sie da
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Ob in {city.districts.slice(0, 3).join(', ')} oder anderen Stadtteilen –
                                    wir kommen zu Ihnen und realisieren Ihren Traumgarten.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                {city.districts.map((district, index) => (
                                    <span key={index} className="px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                                        {district}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Nearby Cities */}
                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                                Auch in Ihrer Nähe
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Gartenbau in der Region
                            </h2>
                            <p className="text-gray-400">
                                Wir sind nicht nur in {city.name} aktiv. Entdecken Sie unsere Leistungen
                                auch in den Nachbarstädten.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nearbyCities.map((nearbyCity) => (
                                <Link
                                    key={nearbyCity.slug}
                                    href={`/${nearbyCity.slug}`}
                                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                            {nearbyCity.name}
                                        </h3>
                                        <span className="text-sm text-gray-500"></span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {nearbyCity.description}
                                    </p>
                                    <div className="flex items-center text-green-400 text-sm font-medium">
                                        <span>Mehr erfahren</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <Contact defaultOrt={city.name} />

                {/* FAQ Section */}
                <FAQ items={cityFAQs} cityName={city.name} />

                {/* CTA Section */}
                <section className="relative section-padding overflow-hidden">
                    <Image
                        src={`/images/city-cta-${ctaIndex}.png`}
                        alt={`Traumgarten in ${city.name}`}
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70" />
                    <div className="container-custom text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Bereit für Ihren Traumgarten in {city.name}?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Kontaktieren Sie uns jetzt für eine kostenlose und unverbindliche Beratung.
                            Wir freuen uns auf Ihr Projekt!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="btn-white inline-flex items-center justify-center gap-3">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Kostenlos anfragen</span>
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Jetzt anrufen</span>
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
