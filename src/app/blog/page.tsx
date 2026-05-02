import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedArticles } from '@/data/blog';

export const metadata: Metadata = {
    title: 'Blog — Garten-Ratgeber & Tipps | Adler & Sohn',
    description: 'Praxis-Tipps vom Garten-Profi: Kosten, Anleitungen und ehrliche Vergleiche rund um Gartengestaltung, Rollrasen, Pflasterarbeiten und mehr.',
    keywords: 'Garten Blog, Gartenratgeber, Gartentipps, Rollrasen Ratgeber, Pflasterarbeiten Tipps, Gartengestaltung Ideen',
    openGraph: {
        title: 'Blog — Garten-Ratgeber & Tipps',
        description: 'Praxis-Tipps vom Garten-Profi: Kosten, Anleitungen und ehrliche Vergleiche.',
        url: 'https://garten-adler.de/blog',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
    alternates: {
        canonical: 'https://garten-adler.de/blog',
    },
};

export default function BlogPage() {
    const articles = getPublishedArticles();
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Adler & Sohn Garten-Ratgeber',
        description: 'Praxis-Tipps vom Garten-Profi',
        url: 'https://garten-adler.de/blog',
        publisher: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Adler & Sohn',
            url: 'https://garten-adler.de',
        },
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
                            <Link href="/#leistungen" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Leistungen</Link>
                            <Link href="/#ueber-uns" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Über uns</Link>
                            <Link href="/blog" className="text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all font-medium">Blog</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-800 via-green-700 to-emerald-600">
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-green-400/20 blur-3xl" />
                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Blog</span></li>
                            </ol>
                        </nav>

                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                <span className="text-2xl">📝</span>
                                <span className="text-white/90 text-sm font-medium">Garten-Ratgeber</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Praxis-Tipps vom <span className="text-lime-300">Garten-Profi</span>
                            </h1>
                            <p className="text-xl text-white/80">
                                Ehrliche Ratgeber, Kostenübersichten und Anleitungen aus über 15 Jahren Erfahrung im Garten- und Landschaftsbau.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    {/* Category & Reading Time */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                                                {article.category}
                                            </span>
                                            <span className="text-gray-400 text-sm">{article.readingTime} Min. Lesezeit</span>
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                                            {article.title}
                                        </h2>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">
                                                {new Date(article.publishDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
                                            </span>
                                            <span className="text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Lesen
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {articles.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">Noch keine Artikel vorhanden. Bald kommt frischer Content!</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400">
                <div className="container-custom py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={120} height={40} className="h-10 w-auto object-contain brightness-200" />
                        <div className="flex gap-6 text-sm">
                            <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
                            <Link href="/blog" className="hover:text-green-500 transition-colors">Blog</Link>
                            <Link href="/standorte" className="hover:text-green-500 transition-colors">Standorte</Link>
                            <Link href="/impressum" className="hover:text-green-500 transition-colors">Impressum</Link>
                            <Link href="/datenschutz" className="hover:text-green-500 transition-colors">Datenschutz</Link>
                        </div>
                        <p className="text-sm">© {new Date().getFullYear()} Adler & Sohn</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
