import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getNearbyCities } from '@/data/cities';
import { Contact } from '@/components';
import { getCityAndRegion, getRegionLabel } from '@/utils/cityHelpers';
import { getUniqueIntro, getLocalTipp, selectFAQs } from '@/lib/cityContentGenerator';




// ISR: Seite wird beim ersten Aufruf gerendert, dann 24h gecached
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);
    if (!city) return { title: 'Nicht gefunden' };
    const title = `Zaunbau ${city.name} `;
    const description = `Zaunbau in ${city.name}. ✓ Sichtschutz ✓ Metallzäune ✓ Holzzäune ✓ Tore. Beratung & Montage!`;
    return {
        title, description,
        openGraph: { title, description, url: `https://garten-adler.de/${city.slug}/zaunbau` },
        alternates: { canonical: `https://garten-adler.de/${city.slug}/zaunbau` },
    };
}

const services = [{"title":"Sichtschutz","icon":"🔒","features":["Holz","WPC","Gabionen"]},{"title":"Metallzäune","icon":"🔩","features":["Doppelstab","Schmiedeeisen","Aluminium"]},{"title":"Holzzäune","icon":"🪵","features":["Jägerzaun","Lattenzaun","Lamellenzaun"]},{"title":"Tore & Eingänge","icon":"🚪","features":["Gartentore","Einfahrtstore","Automatik"]}];

export default async function CityZaunbauPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);
    if (!city) notFound();

    const nearbyCities = getNearbyCities(citySlug, 4);
    const uniqueIntro = getUniqueIntro(city, 'zaunbau');
    const localTipp = getLocalTipp(city, 'zaunbau');

    const faqs = selectFAQs([
        { q: `Was kostet Zaunbau in ${city.name}?`, a: `Die Kosten richten sich nach Umfang und Material. Kontaktieren Sie uns für ein kostenloses Angebot in ${city.name}.` },
        { q: `Wie schnell sind Sie in ${city.name}?`, a: `Mit nur ${city.distance}km Anfahrt können wir meist innerhalb von 1-2 Wochen starten.` },
        { q: `Bieten Sie Zaunbau in ganz ${city.name} an?`, a: `Ja, wir sind in ganz ${city.name} und Umgebung tätig.` },
        { q: `Gibt es eine Garantie?`, a: `Ja, auf alle Arbeiten geben wir eine umfangreiche Gewährleistung.` },
        { q: `Entsorgen Sie Grünschnitt?`, a: `Ja, die komplette Entsorgung ist bei uns inklusive.` },
    ], citySlug, 4);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'Service', name: `Zaunbau ${city.name}`, provider: { '@type': 'HomeAndConstructionBusiness', name: 'Adler & Sohn', telephone: '04131 - 394 2971' }, areaServed: { '@type': 'City', name: city.name } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://garten-adler.de' },
                { '@type': 'ListItem', position: 2, name: city.name, item: `https://garten-adler.de/${city.slug}` },
                { '@type': 'ListItem', position: 3, name: 'Zaunbau', item: `https://garten-adler.de/${city.slug}/zaunbau` },
            ]},
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <header className="fixed top-0 left-0 right-0 z-50 bg-green-800/95 backdrop-blur-xl shadow-lg">
                <div className="container-custom py-1.5">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/images/logo.png" alt="Adler & Sohn" className="h-10 w-auto object-contain" />
                        </Link>
                        <div className="hidden md:flex items-center gap-6">
                            <Link href={`/${city.slug}`} className="text-white/80 hover:text-white px-4 py-2 rounded-full transition-all">{city.name}</Link>
                            <Link href="/zaunbau" className="text-white/80 hover:text-white px-4 py-2 rounded-full transition-all">Zaunbau</Link>
                            <Link href="/#kontakt" className="text-white/80 hover:text-white px-4 py-2 rounded-full transition-all">Kontakt</Link>
                        </div>
                        <Link href="/#kontakt" className="px-6 py-3 rounded-full font-semibold text-sm bg-white text-green-800 hover:bg-green-50 shadow-lg transition-all">Jetzt anfragen</Link>
                    </nav>
                </div>
            </header>

            <main>
                <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
                    <div className="container-custom relative z-10">
                        <nav className="mb-8" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-white/60">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><Link href={`/${city.slug}`} className="hover:text-white">{city.name}</Link></li>
                                <li><span className="mx-2">/</span></li>
                                <li><span className="text-white">Zaunbau</span></li>
                            </ol>
                        </nav>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                                <span className="text-2xl">🏡</span>
                                <span className="text-white/90 text-sm font-medium">Zaunbau in {city.name}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Zaunbau in <span className="text-lime-300">{city.name}</span>
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">Zaunbau und Sichtschutz – für mehr Privatsphäre in Ihrem Garten.</p>
                            <div className="flex flex-wrap gap-4 mb-10">
                                {["Alle Materialien","Montage inklusive","Beratung vor Ort"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white/90">
                                        <svg className="w-5 h-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/#kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">Kostenlos anfragen</Link>
                                <a href="tel:+4941313942971" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors">04131 - 394 2971</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zaunbau-Leistungen in {city.name}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((s, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                                    <div className="text-4xl mb-4">{s.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {s.features.map((f, j) => (
                                            <span key={j} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Warum Adler & Sohn für Zaunbau in {city.name}?</h2>
                            <p className="text-lg text-gray-600 mb-6">{uniqueIntro}</p>
                            <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 mb-6">
                                <p className="text-green-800 font-medium text-sm">💡 {localTipp}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact defaultOrt={city.name} />

                
                <section className="section-padding bg-green-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Ratgeber-Artikel</h2>
                            <div className="space-y-3">
                            <Link href="/blog/zaun-materialien-vergleich" className="group flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-gray-100">
                                <span className="text-2xl">📖</span>
                                <span className="text-gray-700 group-hover:text-green-600 font-medium transition-colors">Zaun-Materialien im Vergleich</span>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-green-500 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQ – Zaunbau in {city.name}</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="bg-gray-50 rounded-xl p-6 group">
                                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </summary>
                                    <p className="mt-4 text-gray-600">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-gray-900 text-white">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold mb-8 text-center">Zaunbau in der Region</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {nearbyCities.map((nc) => (
                                <Link key={nc.slug} href={`/${nc.slug}/zaunbau`} className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                                    <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors mb-2">{nc.name}</h3>
                                    <span className="text-green-400 text-sm">Mehr erfahren →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-gradient-to-r from-green-800 to-green-700">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Zaunbau in {city.name} anfragen</h2>
                        <p className="text-xl text-green-100 mb-8">Kontaktieren Sie uns für eine kostenlose Beratung!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#kontakt" className="px-8 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-green-50 shadow-lg transition-colors">Jetzt anfragen</Link>
                            <a href="tel:+4941313942971" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors">04131 - 394 2971</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <img src="/images/logo.png" alt="Adler & Sohn" className="h-10 w-auto brightness-200" />
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
