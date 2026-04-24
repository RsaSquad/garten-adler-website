import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogArticleBySlug, getAllBlogSlugs } from '@/data/blog';
import { Contact } from '@/components';

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticleBySlug(slug);

    if (!article) {
        return { title: 'Artikel nicht gefunden' };
    }

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        keywords: article.keywords.join(', '),
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            url: `https://garten-adler.de/blog/${article.slug}`,
            siteName: 'Adler & Sohn',
            locale: 'de_DE',
            type: 'article',
            publishedTime: article.publishDate,
            modifiedTime: article.updatedDate || article.publishDate,
            authors: ['Adler & Sohn'],
        },
        alternates: {
            canonical: `https://garten-adler.de/blog/${article.slug}`,
        },
    };
}

const serviceNames: Record<string, string> = {
    'rollrasen': 'Rollrasen',
    'gartenpflege': 'Gartenpflege',
    'garten-und-landschaftsbau': 'Garten- und Landschaftsbau',
    'pflasterarbeiten': 'Pflasterarbeiten',
    'terrassenbau': 'Terrassenbau',
    'baumpflege': 'Baumpflege',
    'heckenschnitt': 'Heckenschnitt',
    'zaunbau': 'Zaunbau',
    'galabau': 'GaLaBau',
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getBlogArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                headline: article.title,
                description: article.metaDescription,
                datePublished: article.publishDate,
                dateModified: article.updatedDate || article.publishDate,
                author: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                },
                publisher: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `https://garten-adler.de/blog/${article.slug}`,
                },
            },
            {
                '@type': 'FAQPage',
                mainEntity: article.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://garten-adler.de' },
                    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://garten-adler.de/blog' },
                    { '@type': 'ListItem', position: 3, name: article.title, item: `https://garten-adler.de/blog/${article.slug}` },
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
                            <Link href="/#leistungen" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Leistungen</Link>
                            <Link href="/blog" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Blog</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Article Hero */}
                <section className="relative pt-32 pb-12 bg-gradient-to-br from-green-800 via-green-700 to-emerald-600">
                    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-green-400/20 blur-3xl" />
                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">{article.title}</span></li>
                            </ol>
                        </nav>

                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm">
                                    {article.category}
                                </span>
                                <span className="text-white/60 text-sm">{article.readingTime} Min. Lesezeit</span>
                                <span className="text-white/60 text-sm">
                                    {new Date(article.publishDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
                            {/* Main Content */}
                            <article className="max-w-none">
                                {/* Table of Contents */}
                                <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                        Inhaltsverzeichnis
                                    </h2>
                                    <ol className="space-y-2">
                                        {article.tableOfContents.map((item, i) => (
                                            <li key={item.id}>
                                                <a href={`#${item.id}`} className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors group">
                                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-sm">{item.title}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Article Sections */}
                                {article.content.map((section) => (
                                    <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
                                        <div
                                            className="prose prose-lg max-w-none text-gray-600 
                                                prose-headings:text-gray-900 prose-headings:font-bold
                                                prose-strong:text-gray-800
                                                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                                                prose-ul:space-y-2 prose-ol:space-y-2
                                                prose-table:border-collapse prose-table:w-full
                                                prose-th:bg-green-50 prose-th:text-green-800 prose-th:font-bold prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-gray-200
                                                prose-td:p-3 prose-td:border prose-td:border-gray-200
                                                [&_.comparison-box]:grid [&_.comparison-box]:md:grid-cols-2 [&_.comparison-box]:gap-6 [&_.comparison-box]:my-8
                                                [&_.comparison-item]:bg-gray-50 [&_.comparison-item]:rounded-xl [&_.comparison-item]:p-6 [&_.comparison-item]:border [&_.comparison-item]:border-gray-100
                                                [&_.comparison-item_h4]:text-lg [&_.comparison-item_h4]:font-bold [&_.comparison-item_h4]:text-gray-900 [&_.comparison-item_h4]:mb-2
                                                [&_.fazit-box]:bg-green-50 [&_.fazit-box]:border-l-4 [&_.fazit-box]:border-green-500 [&_.fazit-box]:rounded-r-xl [&_.fazit-box]:p-6 [&_.fazit-box]:my-8
                                            "
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                ))}

                                {/* CTA Box */}
                                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white my-12">
                                    <h3 className="text-2xl font-bold mb-4">Lieber vom Profi machen lassen?</h3>
                                    <p className="text-green-100 mb-6">
                                        Wir verlegen Rollrasen in Lüneburg und über 200 Städten in Norddeutschland.
                                        Kostenlose Beratung und Festpreis-Angebot innerhalb 48 Stunden.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/#kontakt" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors">
                                            Kostenloses Angebot anfordern
                                        </Link>
                                        <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">
                                            04131 - 394 2971
                                        </a>
                                    </div>
                                </div>

                                {/* Internal Links - Related Services */}
                                {article.relatedServices.length > 0 && (
                                    <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Unsere Leistungen zu diesem Thema</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {article.relatedServices.map((serviceSlug) => (
                                                <Link
                                                    key={serviceSlug}
                                                    href={`/${serviceSlug}`}
                                                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                                        {serviceNames[serviceSlug] || serviceSlug}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* City Links */}
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <p className="text-sm text-gray-600 mb-3">Wir sind auch in Ihrer Nähe aktiv:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['hamburg', 'lueneburg', 'stade', 'luebeck', 'bremen', 'buxtehude', 'winsen-luhe', 'buchholz-in-der-nordheide'].map((citySlug) => (
                                                    <Link
                                                        key={citySlug}
                                                        href={`/${citySlug}/rollrasen`}
                                                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-green-600 hover:border-green-300 transition-colors"
                                                    >
                                                        Rollrasen {citySlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* FAQ Section */}
                                <div className="mb-12">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Häufige Fragen</h2>
                                    <div className="space-y-4">
                                        {article.faqs.map((faq, index) => (
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
                            </article>

                            {/* Sidebar */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-24 space-y-6">
                                    {/* Author Box */}
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                                <span className="text-2xl">🌿</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">Adler & Sohn</p>
                                                <p className="text-gray-500 text-sm">GaLaBau seit 15+ Jahren</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Praxis-Tipps aus über 15 Jahren Erfahrung im Garten- und Landschaftsbau in Norddeutschland.
                                        </p>
                                    </div>

                                    {/* Quick CTA */}
                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                        <h4 className="font-bold text-gray-900 mb-2">Kostenlose Beratung</h4>
                                        <p className="text-gray-600 text-sm mb-4">Wir beraten Sie unverbindlich zu Ihrem Projekt.</p>
                                        <Link href="/#kontakt" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors text-sm">
                                            Jetzt anfragen →
                                        </Link>
                                        <a href="tel:+4941313942971" className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 border border-green-200 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors text-sm">
                                            📞 04131 - 394 2971
                                        </a>
                                    </div>

                                    {/* TOC Sidebar */}
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h4 className="font-bold text-gray-900 mb-3 text-sm">In diesem Artikel</h4>
                                        <ul className="space-y-2">
                                            {article.tableOfContents.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`#${item.id}`} className="text-gray-500 text-sm hover:text-green-600 transition-colors">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <Contact />
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
