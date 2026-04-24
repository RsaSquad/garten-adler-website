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
    if (!article) return { title: 'Nicht gefunden' };

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
        },
        alternates: { canonical: `https://garten-adler.de/blog/${article.slug}` },
    };
}

const serviceLabels: Record<string, string> = {
    rollrasen: 'Rollrasen verlegen',
    gartenpflege: 'Gartenpflege',
    'garten-und-landschaftsbau': 'Garten- & Landschaftsbau',
    pflasterarbeiten: 'Pflasterarbeiten',
    terrassenbau: 'Terrassenbau',
    baumpflege: 'Baumpflege',
    heckenschnitt: 'Heckenschnitt',
    zaunbau: 'Zaunbau',
    galabau: 'GaLaBau',
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getBlogArticleBySlug(slug);
    if (!article) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                headline: article.title,
                description: article.metaDescription,
                datePublished: article.publishDate,
                dateModified: article.updatedDate || article.publishDate,
                author: { '@type': 'Organization', name: 'Adler & Sohn', url: 'https://garten-adler.de' },
                publisher: { '@type': 'Organization', name: 'Adler & Sohn', url: 'https://garten-adler.de' },
                mainEntityOfPage: { '@type': 'WebPage', '@id': `https://garten-adler.de/blog/${article.slug}` },
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
                    { '@type': 'ListItem', position: 3, name: article.title },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <Image src="/images/logo.png" alt="Adler & Sohn" width={130} height={44} className="h-9 w-auto" />
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/#leistungen" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Leistungen</Link>
                            <Link href="/blog" className="text-gray-900 font-medium text-sm">Blog</Link>
                            <Link href="/standorte" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Standorte</Link>
                        </div>
                        <Link href="/#kontakt" className="px-5 py-2.5 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                            Kontakt
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="bg-white">
                {/* Article Header — Editorial Style */}
                <section className="pt-28 pb-8 md:pt-32 md:pb-12">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <ol className="flex items-center gap-1.5 text-sm text-gray-400">
                                <li><Link href="/" className="hover:text-gray-600 transition-colors">Home</Link></li>
                                <li className="text-gray-300">/</li>
                                <li><Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link></li>
                                <li className="text-gray-300">/</li>
                                <li className="text-gray-500 truncate max-w-[200px]">{article.title}</li>
                            </ol>
                        </nav>

                        {/* Category + Meta */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                                {article.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-gray-400 text-sm">
                                {article.readingTime} Min. Lesezeit
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-500 leading-relaxed mb-8 font-light">
                            {article.excerpt}
                        </p>

                        {/* Author + Date */}
                        <div className="flex items-center justify-between pb-8 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-green-700 flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">A&S</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 text-sm font-medium">Adler & Sohn</p>
                                    <p className="text-gray-400 text-xs">
                                        {new Date(article.publishDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Image — Full Width */}
                <section className="mb-12 md:mb-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                            <Image
                                src={article.heroImage || '/images/blog-rollrasen-vergleich.png'}
                                alt={article.title}
                                fill
                                priority
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 1024px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Content Area */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-[1fr_280px] gap-16">
                            {/* Article Body */}
                            <article className="max-w-3xl">
                                {/* Table of Contents */}
                                <div className="mb-14 p-6 bg-gray-50 rounded-xl">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Inhalt</p>
                                    <ol className="space-y-2.5">
                                        {article.tableOfContents.map((item, i) => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className="flex items-baseline gap-3 text-gray-600 hover:text-green-700 transition-colors group"
                                                >
                                                    <span className="text-xs text-gray-400 font-mono w-5 text-right flex-shrink-0">
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="text-[15px] group-hover:translate-x-0.5 transition-transform">{item.title}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Content Sections */}
                                {article.content.map((section) => (
                                    <div key={section.id} id={section.id} className="mb-16 scroll-mt-24">
                                        <h2 className="text-2xl sm:text-[1.75rem] font-bold text-gray-900 mb-6 leading-tight">
                                            {section.heading}
                                        </h2>
                                        <div
                                            className="
                                                text-gray-600 text-[16.5px] leading-[1.8]
                                                [&_p]:mb-5
                                                [&_strong]:text-gray-800 [&_strong]:font-semibold
                                                [&_a]:text-green-700 [&_a]:underline [&_a]:underline-offset-2
                                                [&_ul]:my-6 [&_ul]:space-y-3 [&_ol]:my-6 [&_ol]:space-y-3
                                                [&_li]:pl-1
                                                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-10 [&_h3]:mb-4

                                                [&_table]:w-full [&_table]:my-8 [&_table]:text-sm [&_table]:border [&_table]:border-gray-200 [&_table]:rounded-lg [&_table]:overflow-hidden
                                                [&_thead]:bg-gray-900 [&_thead]:text-white
                                                [&_th]:px-5 [&_th]:py-3.5 [&_th]:text-left [&_th]:font-medium [&_th]:text-sm
                                                [&_td]:px-5 [&_td]:py-3.5 [&_td]:border-b [&_td]:border-gray-100
                                                [&_tr:last-child_td]:border-b-0
                                                [&_tbody_tr:nth-child(even)]:bg-gray-50

                                                [&_.comparison-box]:grid [&_.comparison-box]:sm:grid-cols-2 [&_.comparison-box]:gap-4 [&_.comparison-box]:my-8
                                                [&_.comparison-item]:p-5 [&_.comparison-item]:border [&_.comparison-item]:border-gray-200 [&_.comparison-item]:rounded-xl
                                                [&_.comparison-item_h4]:font-bold [&_.comparison-item_h4]:text-gray-900 [&_.comparison-item_h4]:mb-2 [&_.comparison-item_h4]:text-base
                                                [&_.comparison-item_p]:text-sm [&_.comparison-item_p]:text-gray-500 [&_.comparison-item_p]:leading-relaxed [&_.comparison-item_p]:mb-0

                                                [&_.fazit-box]:my-10 [&_.fazit-box]:py-8 [&_.fazit-box]:px-8 [&_.fazit-box]:bg-green-50 [&_.fazit-box]:border-l-[3px] [&_.fazit-box]:border-green-600 [&_.fazit-box]:rounded-r-lg
                                                [&_.fazit-box_p]:text-gray-700 [&_.fazit-box_p]:mb-3 [&_.fazit-box_p:last-child]:mb-0
                                            "
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                ))}

                                {/* Separator */}
                                <div className="flex items-center gap-4 my-16">
                                    <div className="flex-1 h-px bg-gray-200" />
                                    <div className="flex gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    </div>
                                    <div className="flex-1 h-px bg-gray-200" />
                                </div>

                                {/* CTA — Minimal, clean */}
                                <div className="my-12 p-8 sm:p-10 bg-gray-900 rounded-2xl">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">Professionelle Verlegung</p>
                                    <h3 className="text-2xl font-bold text-white mb-3">Rollrasen vom Fachbetrieb verlegen lassen</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        Wir verlegen Rollrasen in Lüneburg und über 200 Städten in Norddeutschland — inklusive 
                                        Bodenvorbereitung, Lieferung und Festpreisgarantie.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link href="/#kontakt" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm">
                                            Kostenloses Angebot anfordern
                                        </Link>
                                        <a href="tel:+4941313942971" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors text-sm">
                                            04131 – 394 2971
                                        </a>
                                    </div>
                                </div>

                                {/* Related Links */}
                                <div className="my-12">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">Weiterführende Seiten</p>
                                    <div className="space-y-3">
                                        {article.relatedServices.map((slug) => (
                                            <Link
                                                key={slug}
                                                href={`/${slug}`}
                                                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50/30 transition-all group"
                                            >
                                                <span className="text-gray-900 font-medium text-sm group-hover:text-green-700 transition-colors">
                                                    {serviceLabels[slug]}
                                                </span>
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* City Tags */}
                                    <div className="mt-8">
                                        <p className="text-xs text-gray-400 mb-3">Verfügbar in:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Hamburg', 'Lüneburg', 'Stade', 'Lübeck', 'Bremen', 'Buxtehude', 'Winsen', 'Buchholz'].map((city) => (
                                                <Link
                                                    key={city}
                                                    href={`/${city.toLowerCase().replace(/ü/g, 'ue').replace(/\s/g, '-')}/rollrasen`}
                                                    className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-md hover:text-green-700 hover:border-green-300 transition-colors"
                                                >
                                                    {city}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ */}
                                <div className="my-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Häufig gestellte Fragen</h2>
                                    <div className="divide-y divide-gray-200">
                                        {article.faqs.map((faq, i) => (
                                            <details key={i} className="group py-5 first:pt-0">
                                                <summary className="flex items-center justify-between cursor-pointer list-none text-gray-900 font-medium text-[15px] leading-snug">
                                                    {faq.q}
                                                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </summary>
                                                <p className="mt-3 text-gray-500 text-sm leading-relaxed pr-10">{faq.a}</p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-24 space-y-8">
                                    {/* TOC */}
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">In diesem Artikel</p>
                                        <ul className="space-y-2.5 border-l border-gray-200 pl-4">
                                            {article.tableOfContents.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`#${item.id}`} className="text-gray-500 text-[13px] hover:text-green-700 transition-colors leading-snug block">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Sidebar */}
                                    <div className="p-5 bg-gray-50 rounded-xl">
                                        <p className="font-semibold text-gray-900 text-sm mb-2">Kostenlose Beratung</p>
                                        <p className="text-gray-500 text-xs leading-relaxed mb-4">Wir beraten Sie unverbindlich zu Ihrem Rasen-Projekt.</p>
                                        <Link href="/#kontakt" className="flex items-center justify-center w-full px-4 py-2.5 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                                            Angebot anfordern
                                        </Link>
                                        <a href="tel:+4941313942971" className="flex items-center justify-center w-full mt-2 px-4 py-2.5 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                                            04131 – 394 2971
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <Image src="/images/logo.png" alt="Adler & Sohn" width={100} height={34} className="h-8 w-auto" />
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
                            <Link href="/standorte" className="hover:text-gray-900 transition-colors">Standorte</Link>
                            <Link href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link>
                            <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link>
                        </div>
                        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Adler & Sohn</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
