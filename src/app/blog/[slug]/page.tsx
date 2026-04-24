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
    'garten-und-landschaftsbau': 'Garten- & Landschaftsbau',
    'pflasterarbeiten': 'Pflasterarbeiten',
    'terrassenbau': 'Terrassenbau',
    'baumpflege': 'Baumpflege',
    'heckenschnitt': 'Heckenschnitt',
    'zaunbau': 'Zaunbau',
    'galabau': 'GaLaBau',
};

const serviceIcons: Record<string, string> = {
    'rollrasen': '🌿',
    'gartenpflege': '🌻',
    'garten-und-landschaftsbau': '🏡',
    'pflasterarbeiten': '🧱',
    'terrassenbau': '🪵',
    'baumpflege': '🌳',
    'heckenschnitt': '✂️',
    'zaunbau': '🏗️',
    'galabau': '🌱',
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
                            <Link href="/blog" className="text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all font-medium">Blog</Link>
                            <Link href="/standorte" className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10 transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero with Background Image */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <Image
                        src={article.heroImage || '/images/blog-rollrasen-vergleich.png'}
                        alt={article.title}
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/40 z-[1]" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
                    
                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><span className="mx-2">›</span></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><span className="mx-2">›</span></li>
                                <li><span className="text-white/80 line-clamp-1">{article.title}</span></li>
                            </ol>
                        </nav>

                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold backdrop-blur-sm">
                                    {article.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-white/60 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    {article.readingTime} Min. Lesezeit
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                                {article.title}
                            </h1>
                            <p className="text-lg text-white/70 mb-6 max-w-2xl">{article.excerpt}</p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-lg">🌿</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Adler & Sohn</p>
                                        <p className="text-white/50 text-xs">
                                            {new Date(article.publishDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-12 md:py-16 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
                            {/* Main Content */}
                            <article className="max-w-none -mt-16 relative z-10">
                                {/* Table of Contents Card */}
                                <div className="bg-white rounded-3xl p-8 mb-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">Inhaltsverzeichnis</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {article.tableOfContents.map((item, i) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all group"
                                            >
                                                <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 text-xs font-bold group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
                                                    {i + 1}
                                                </span>
                                                <span className="text-sm font-medium">{item.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Article Sections */}
                                {article.content.map((section, sectionIndex) => (
                                    <div key={section.id} id={section.id} className="mb-14 scroll-mt-24">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                                {sectionIndex + 1}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.heading}</h2>
                                        </div>
                                        <div
                                            className="prose prose-lg max-w-none text-gray-600 leading-relaxed
                                                prose-headings:text-gray-900 prose-headings:font-bold
                                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                                                prose-strong:text-gray-800 prose-strong:font-semibold
                                                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                                                prose-p:mb-4
                                                prose-ul:space-y-2 prose-ul:my-6 prose-ol:space-y-2 prose-ol:my-6
                                                prose-li:leading-relaxed
                                                prose-table:my-8 prose-table:border-collapse prose-table:w-full prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
                                                prose-thead:bg-gradient-to-r prose-thead:from-green-600 prose-thead:to-emerald-600
                                                prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:text-left prose-th:text-sm
                                                prose-td:p-4 prose-td:border-b prose-td:border-gray-100 prose-td:text-sm
                                                prose-tr:even:bg-gray-50
                                                [&_.comparison-box]:grid [&_.comparison-box]:md:grid-cols-2 [&_.comparison-box]:gap-6 [&_.comparison-box]:my-8
                                                [&_.comparison-item]:bg-gradient-to-br [&_.comparison-item]:from-gray-50 [&_.comparison-item]:to-white [&_.comparison-item]:rounded-2xl [&_.comparison-item]:p-6 [&_.comparison-item]:border [&_.comparison-item]:border-gray-100 [&_.comparison-item]:shadow-sm
                                                [&_.comparison-item_h4]:text-lg [&_.comparison-item_h4]:font-bold [&_.comparison-item_h4]:text-gray-900 [&_.comparison-item_h4]:mb-3
                                                [&_.fazit-box]:bg-gradient-to-r [&_.fazit-box]:from-green-50 [&_.fazit-box]:to-emerald-50 [&_.fazit-box]:border-l-4 [&_.fazit-box]:border-green-500 [&_.fazit-box]:rounded-r-2xl [&_.fazit-box]:p-8 [&_.fazit-box]:my-10 [&_.fazit-box]:shadow-sm
                                            "
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                ))}

                                {/* CTA Box - Premium */}
                                <div className="relative overflow-hidden rounded-3xl my-14">
                                    <Image
                                        src="/images/blog-rollrasen-vergleich.png"
                                        alt="Rollrasen verlegen lassen - Jetzt anfragen"
                                        fill
                                        className="object-cover"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80" />
                                    <div className="relative z-10 p-8 md:p-12">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                            <span className="text-lg">💡</span>
                                            <span className="text-white/90 text-sm font-medium">Profi-Tipp</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Lieber vom Profi machen lassen?</h3>
                                        <p className="text-green-100 mb-8 text-lg max-w-xl">
                                            Wir verlegen Rollrasen in Lüneburg und über 200 Städten in Norddeutschland.
                                            Kostenlose Beratung und Festpreis innerhalb 48h.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/#kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                                                <span>Kostenloses Angebot</span>
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </Link>
                                            <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">
                                                📞 04131 - 394 2971
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Related Services - Cards */}
                                {article.relatedServices.length > 0 && (
                                    <div className="mb-14">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                            </div>
                                            Passende Leistungen
                                        </h3>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            {article.relatedServices.map((serviceSlug) => (
                                                <Link
                                                    key={serviceSlug}
                                                    href={`/${serviceSlug}`}
                                                    className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-green-200 hover:-translate-y-1 transition-all"
                                                >
                                                    <div className="text-3xl mb-3">{serviceIcons[serviceSlug] || '🌿'}</div>
                                                    <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                                                        {serviceNames[serviceSlug] || serviceSlug}
                                                    </h4>
                                                    <span className="text-green-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Mehr erfahren
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* City Links */}
                                        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                                            <p className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                                                <span>📍</span> Rollrasen in Ihrer Nähe
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    { slug: 'hamburg', name: 'Hamburg' },
                                                    { slug: 'lueneburg', name: 'Lüneburg' },
                                                    { slug: 'stade', name: 'Stade' },
                                                    { slug: 'luebeck', name: 'Lübeck' },
                                                    { slug: 'bremen', name: 'Bremen' },
                                                    { slug: 'buxtehude', name: 'Buxtehude' },
                                                    { slug: 'winsen-luhe', name: 'Winsen' },
                                                    { slug: 'buchholz-in-der-nordheide', name: 'Buchholz' },
                                                ].map((city) => (
                                                    <Link
                                                        key={city.slug}
                                                        href={`/${city.slug}/rollrasen`}
                                                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:text-green-600 hover:border-green-300 hover:shadow-sm transition-all"
                                                    >
                                                        Rollrasen {city.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* FAQ Section */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                            <span className="text-sm">❓</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Häufige Fragen</h2>
                                    </div>
                                    <div className="space-y-3">
                                        {article.faqs.map((faq, index) => (
                                            <details key={index} className="bg-gray-50 rounded-2xl group border border-gray-100 hover:border-green-200 transition-colors overflow-hidden">
                                                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between p-6">
                                                    <span className="flex items-center gap-3">
                                                        <span className="w-7 h-7 rounded-lg bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                                                            {index + 1}
                                                        </span>
                                                        {faq.q}
                                                    </span>
                                                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </summary>
                                                <div className="px-6 pb-6 pt-0">
                                                    <div className="pl-10">
                                                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                                    </div>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-24 space-y-6">
                                    {/* Author Card */}
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                                                <span className="text-2xl">🌿</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">Adler & Sohn</p>
                                                <p className="text-green-600 text-sm font-medium">GaLaBau seit 15+ Jahren</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Praxis-Tipps aus über 15 Jahren Erfahrung im Garten- und Landschaftsbau.
                                        </p>
                                    </div>

                                    {/* Quick CTA Card */}
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700" />
                                        <div className="relative z-10 p-6">
                                            <div className="text-3xl mb-3">📞</div>
                                            <h4 className="font-bold text-white text-lg mb-2">Kostenlose Beratung</h4>
                                            <p className="text-green-100 text-sm mb-5">Wir beraten Sie unverbindlich zu Ihrem Rasen-Projekt.</p>
                                            <Link href="/#kontakt" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-green-700 rounded-xl font-bold hover:bg-green-50 transition-colors text-sm shadow-lg">
                                                Jetzt anfragen →
                                            </Link>
                                            <a href="tel:+4941313942971" className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm">
                                                04131 - 394 2971
                                            </a>
                                        </div>
                                    </div>

                                    {/* TOC Sidebar */}
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>
                                            In diesem Artikel
                                        </h4>
                                        <ul className="space-y-2">
                                            {article.tableOfContents.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`#${item.id}`} className="text-gray-500 text-sm hover:text-green-600 transition-colors flex items-center gap-2 py-1">
                                                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
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
