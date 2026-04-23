import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cities, getCitiesByRegion } from '@/data/cities';

export const metadata: Metadata = {
    title: 'Garten- & Landschaftsbau in Hamburg und Umgebung',
    description: 'Professioneller Garten- und Landschaftsbau in über 70 Städten rund um Hamburg. Finden Sie Ihren lokalen Partner für Gartengestaltung, Terrassenbau und mehr.',
    keywords: 'Gartenbau Hamburg, Landschaftsbau Schleswig-Holstein, Gartenbau Niedersachsen, Gartengestaltung Metropolregion Hamburg',
    openGraph: {
        title: 'Garten- & Landschaftsbau in Hamburg und Umgebung',
        description: 'Professioneller Garten- und Landschaftsbau in über 70 Städten rund um Hamburg.',
        url: 'https://garten-adler.de/standorte',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/standorte',
    },
};

export default function StandortePage() {
    const citiesByRegion = getCitiesByRegion();
    const regions = Object.keys(citiesByRegion).sort();

    // JSON-LD für Standorte-Übersicht
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Adler & Sohn Standorte',
        description: 'Alle Städte in denen Adler & Sohn Garten- und Landschaftsbau anbietet',
        numberOfItems: cities.length,
        itemListElement: cities.slice(0, 20).map((city, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://garten-adler.de/${city.slug}`,
            name: `Gartenbau ${city.name}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20">
                <div className="container-custom py-1.5">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={140} height={47} className="h-10 w-auto object-contain" />
                        </Link>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">
                            Jetzt anfragen
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="pt-24">
                {/* Hero */}
                <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                                {cities.length}+ Städte im Einzugsgebiet
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Unsere <span className="text-lime-300">Standorte</span>
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Professioneller Garten- und Landschaftsbau in Hamburg und der gesamten Metropolregion.
                                Finden Sie Ihren lokalen Ansprechpartner.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="bg-white py-12 border-b">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-600">{cities.length}+</div>
                                <div className="text-gray-500 text-sm mt-1">Städte & Gemeinden</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-600">3</div>
                                <div className="text-gray-500 text-sm mt-1">Bundesländer</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-600">100 km</div>
                                <div className="text-gray-500 text-sm mt-1">Einzugsgebiet</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-600">500+</div>
                                <div className="text-gray-500 text-sm mt-1">Zufriedene Kunden</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cities by Region */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        {regions.map((region) => (
                            <div key={region} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-4 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{region}</h2>
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                        {citiesByRegion[region].length} Städte
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {citiesByRegion[region]
                                        .sort((a, b) => b.population - a.population)
                                        .map((city) => (
                                            <Link
                                                key={city.slug}
                                                href={`/${city.slug}`}
                                                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                                        {city.name}
                                                    </h3>
                                                    <span className="text-xs text-gray-400"></span>
                                                </div>
                                                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                                    {city.population.toLocaleString('de-DE')} Einwohner
                                                </p>
                                                <div className="flex items-center text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span>Mehr erfahren</span>
                                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* All Cities List */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Alle Städte im Überblick
                            </h2>
                            <p className="text-lg text-gray-600">
                                Klicken Sie auf eine Stadt, um mehr über unsere Leistungen vor Ort zu erfahren.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            {cities
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((city) => (
                                    <Link
                                        key={city.slug}
                                        href={`/${city.slug}`}
                                        className="px-4 py-2 bg-gray-100 hover:bg-green-100 rounded-full text-gray-700 hover:text-green-700 text-sm font-medium transition-colors"
                                    >
                                        {city.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-green-600 to-green-500">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ihre Stadt nicht gefunden?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Wir sind flexibel! Kontaktieren Sie uns und wir prüfen, ob wir auch in Ihrer Stadt aktiv werden können.
                        </p>
                        <Link href="/#kontakt" className="btn-white inline-flex items-center gap-3">
                            <span>Jetzt Kontakt aufnehmen</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
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
