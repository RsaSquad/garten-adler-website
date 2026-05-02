import { Metadata } from 'next';
import Image from 'next/image';
import LandingPageForm from '@/components/LandingPageForm';

export const metadata: Metadata = {
    title: 'Terrasse bauen lassen — Festpreis-Angebot in 24h',
    description: 'Traumterrasse vom Fachbetrieb. ✓ Holz, WPC oder Naturstein ✓ Festpreisgarantie ✓ Planung & Umsetzung ✓ 15+ Jahre Erfahrung. Jetzt kostenlos anfragen!',
    robots: { index: false, follow: false },
    openGraph: {
        title: 'Terrasse bauen lassen — Festpreis-Angebot in 24h',
        description: 'Ihre Traumterrasse — geplant und gebaut vom Profi. Holz, WPC oder Naturstein.',
        url: 'https://garten-adler.de/lp/terrasse',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
};

const materials = [
    {
        name: 'WPC-Terrasse',
        desc: 'Pflegeleicht, splitterfrei, 25+ Jahre haltbar. In vielen Farben und Oberflächen verfügbar.',
        price: 'Ab 95€/m²',
        features: ['Wartungsfrei', 'Farbbeständig', 'Rutschfest', 'Splitterfrei'],
    },
    {
        name: 'Holz-Terrasse',
        desc: 'Natürliche Optik und angenehme Haptik. Bangkirai, Douglasie oder Thermoesche.',
        price: 'Ab 85€/m²',
        features: ['Natürlich', 'Warme Optik', 'Nachhaltig', 'Hochwertig'],
    },
    {
        name: 'Naturstein-Terrasse',
        desc: 'Edel, zeitlos und extrem langlebig. Granit, Basalt oder Travertin.',
        price: 'Ab 110€/m²',
        features: ['Zeitlos', 'Frostsicher', 'Pflegeleicht', 'Wertsteigernd'],
    },
];

const process = [
    { num: '01', title: 'Beratung & Planung', desc: 'Kostenloser Vor-Ort-Termin: Wir besprechen Ihre Wünsche, vermessen die Fläche und beraten zu Materialien.' },
    { num: '02', title: 'Design & Angebot', desc: 'Sie erhalten eine Gestaltungsidee und ein detailliertes Festpreis-Angebot — innerhalb von 48 Stunden.' },
    { num: '03', title: 'Professioneller Bau', desc: 'Unser Team baut Ihre Terrasse fachgerecht — vom Unterbau über die Entwässerung bis zum letzten Stein.' },
    { num: '04', title: 'Übergabe & Garantie', desc: 'Gemeinsame Abnahme, Pflegehinweise und schriftliche Garantie. Fertig.' },
];

const faqs = [
    { q: 'Was kostet eine Terrasse?', a: 'Die Kosten hängen von Material, Größe und Unterbau ab. Eine WPC-Terrasse (30m²) kostet ca. 2.800-4.200€, eine Naturstein-Terrasse (30m²) ca. 3.300-5.500€. Wir erstellen Ihnen ein individuelles Festpreis-Angebot.' },
    { q: 'Wie lange dauert der Bau?', a: 'Eine Standard-Terrasse (20-40m²) ist in 3-5 Arbeitstagen fertig. Bei komplexeren Projekten mit Stufen oder Entwässerung planen wir 5-8 Tage.' },
    { q: 'Brauche ich eine Baugenehmigung?', a: 'In den meisten Fällen nicht. Ebenerdige Terrassen sind genehmigungsfrei. Bei erhöhten Terrassen oder Überdachungen kann eine Genehmigung erforderlich sein — wir beraten Sie dazu.' },
    { q: 'WPC oder Holz — was ist besser?', a: 'WPC ist pflegeleichter und langlebiger, Holz hat eine natürlichere Optik. Wir beraten Sie ehrlich, welches Material zu Ihrem Garten und Ihrer Nutzung passt.' },
    { q: 'Ist der Unterbau im Preis enthalten?', a: 'Ja, unsere Festpreise beinhalten immer den kompletten Unterbau: Erdarbeiten, Schotterbett, Drainage und Unterkonstruktion.' },
];

export default function LPTerrasse() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Terrassenbau',
        provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Adler & Sohn',
            url: 'https://garten-adler.de',
            telephone: '+4941313942971',
        },
        description: 'Professioneller Terrassenbau: Holz, WPC oder Naturstein — mit Festpreisgarantie.',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    <Image src="/images/logo.png" alt="Adler & Sohn" width={130} height={44} className="h-9 w-auto" />
                    <a
                        href="tel:+4941313942971"
                        className="flex items-center gap-2 px-5 py-2.5 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Jetzt anrufen
                    </a>
                </div>
            </header>

            <main>
                {/* HERO */}
                <section className="relative pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image src="/images/lp-terrasse-hero.png" alt="Terrassenbau" fill priority quality={85} className="object-cover opacity-25" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                    <span className="text-amber-300 text-sm font-medium">Beste Bauzeit: Mai - Oktober</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                                    Traumterrasse <br />
                                    <span className="text-green-400">vom Profi gebaut</span>
                                </h1>

                                <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                                    Von der Planung bis zum letzten Stein — Ihre neue Terrasse in 
                                    Holz, WPC oder Naturstein. Mit Festpreisgarantie.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                    {[
                                        { stat: 'Ab 85€', label: 'Pro m²' },
                                        { stat: '3-5', label: 'Tage Bauzeit' },
                                        { stat: '10+', label: 'Jahre Garantie' },
                                        { stat: '0€', label: 'Beratung' },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <div className="text-2xl font-bold text-white">{item.stat}</div>
                                            <div className="text-xs text-gray-400">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
                                <LandingPageForm service="Terrassenbau" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Material Comparison */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Materialien</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Welches Material passt zu Ihnen?</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {materials.map((mat) => (
                                <div key={mat.name} className="border border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mat.name}</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-4">{mat.price}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{mat.desc}</p>
                                    <ul className="space-y-2">
                                        {mat.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#lp-form" className="block w-full text-center mt-6 py-3 bg-green-600 text-white rounded-xl font-semibold text-sm hover:bg-green-700 transition-colors">
                                        Angebot anfordern
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Ablauf</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Von der Idee zur Terrasse</h2>
                        </div>

                        <div className="space-y-8">
                            {process.map((step, i) => (
                                <div key={step.num} className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg font-bold text-white">{step.num}</span>
                                    </div>
                                    <div className={`flex-1 pb-8 ${i < process.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <div className="flex justify-center gap-0.5 mb-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                            &ldquo;Wir wollten eine große WPC-Terrasse, wussten aber nicht wo wir anfangen sollten. Adler & Sohn hat alles übernommen — Planung, Entwässerung, Unterbau und Verlegung. Top Qualität und im Budget geblieben!&rdquo;
                        </blockquote>
                        <p className="text-gray-500 font-semibold">Markus & Julia K. aus Winsen — 45m² WPC-Terrasse</p>
                    </div>
                </section>

                {/* CTA Bar */}
                <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Bereit für Ihre Traumterrasse?</h2>
                        <p className="text-green-100 text-lg mb-8">Kostenloses Angebot — wir beraten Sie unverbindlich.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#lp-form" className="px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-lg">
                                Kostenloses Angebot →
                            </a>
                            <a href="tel:+4941313942971" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg hover:bg-white/10 transition-colors">
                                📞 04131 – 394 2971
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Häufig gestellte Fragen</h2>
                        <div className="divide-y divide-gray-200">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group py-5">
                                    <summary className="flex items-center justify-between cursor-pointer list-none text-gray-900 font-medium">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </summary>
                                    <p className="mt-3 text-gray-500 text-sm leading-relaxed pr-8">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Form */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white mb-3">Jetzt Angebot anfordern</h2>
                            <p className="text-gray-400">Unverbindlich und kostenlos — Festpreis innerhalb von 48h.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 sm:p-8">
                            <LandingPageForm service="Terrassenbau" headline="Ihre Daten" />
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 p-3 flex gap-2">
                <a href="#lp-form" className="flex-1 py-3.5 bg-green-600 text-white font-bold text-center rounded-xl text-sm">
                    Angebot anfordern
                </a>
                <a href="tel:+4941313942971" className="py-3.5 px-5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl text-sm flex items-center gap-2">
                    📞 Anrufen
                </a>
            </div>

            <footer className="bg-gray-950 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Adler & Sohn GaLaBau</p>
                    <p className="text-gray-600 text-xs mt-2">
                        <a href="/impressum" className="hover:text-gray-400 transition-colors">Impressum</a>
                        {' · '}
                        <a href="/datenschutz" className="hover:text-gray-400 transition-colors">Datenschutz</a>
                    </p>
                </div>
            </footer>
        </>
    );
}
