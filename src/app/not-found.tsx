import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Seite nicht gefunden',
    description: 'Die angeforderte Seite wurde nicht gefunden. Finden Sie unsere Leistungen und Standorte.',
    robots: { index: false, follow: true },
};

const popularCities = [
    { name: 'Hamburg', slug: 'hamburg' },
    { name: 'Lüneburg', slug: 'luneburg' },
    { name: 'Norderstedt', slug: 'norderstedt' },
    { name: 'Lübeck', slug: 'luebeck' },
    { name: 'Stade', slug: 'stade' },
    { name: 'Buxtehude', slug: 'buxtehude' },
];

const services = [
    { name: 'Gartenpflege', slug: 'gartenpflege', icon: '🌿' },
    { name: 'Rollrasen', slug: 'rollrasen', icon: '🟢' },
    { name: 'Terrassenbau', slug: 'terrassenbau', icon: '☀️' },
    { name: 'Baumpflege', slug: 'baumpflege', icon: '🌳' },
    { name: 'Heckenschnitt', slug: 'heckenschnitt', icon: '✂️' },
    { name: 'Pflasterarbeiten', slug: 'pflasterarbeiten', icon: '🧱' },
];

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-green-800 py-4">
                <div className="container-custom">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Adler & Sohn" className="h-10 w-auto object-contain" />
                    </Link>
                </div>
            </header>

            <div className="container-custom py-16">
                <div className="max-w-4xl mx-auto">
                    {/* 404 Hero */}
                    <div className="text-center mb-16">
                        <div className="text-8xl font-bold text-green-600/20 mb-4">404</div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Seite nicht gefunden
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                            Die angeforderte Seite existiert nicht. Aber wir können Ihnen trotzdem helfen!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg">
                                🏠 Zur Startseite
                            </Link>
                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-700 text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors">
                                📞 04131 - 394 2971
                            </a>
                        </div>
                    </div>

                    {/* Popular Cities */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">📍 Beliebte Standorte</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {popularCities.map((city) => (
                                <Link key={city.slug} href={`/${city.slug}`} className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-gray-100">
                                    <span className="text-green-600 font-bold group-hover:text-green-500 transition-colors">{city.name}</span>
                                    <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <Link href="/standorte" className="text-green-600 hover:text-green-500 font-medium text-sm">
                                Alle 200+ Standorte ansehen →
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Unsere Leistungen</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {services.map((s) => (
                                <Link key={s.slug} href={`/${s.slug}`} className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-gray-100">
                                    <span className="text-2xl">{s.icon}</span>
                                    <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">{s.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
                <div className="container-custom text-center text-sm">
                    <p>© {new Date().getFullYear()} Adler &amp; Sohn | <Link href="/impressum" className="hover:text-green-500">Impressum</Link> | <Link href="/datenschutz" className="hover:text-green-500">Datenschutz</Link></p>
                </div>
            </footer>
        </main>
    );
}
