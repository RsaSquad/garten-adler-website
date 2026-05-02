import { Metadata } from 'next';
import Image from 'next/image';
import LandingPageForm from '@/components/LandingPageForm';

export const metadata: Metadata = {
    title: 'Gartenpflege vom Profi — Monatlich ab 149€',
    description: 'Professionelle Gartenpflege in Lüneburg & Umgebung. ✓ Rasenmähen ✓ Heckenschnitt ✓ Beetpflege ✓ Monatliche Pauschale ✓ Kostenlose Erstberatung. Jetzt anfragen!',
    robots: { index: false, follow: false },
    openGraph: {
        title: 'Gartenpflege vom Profi — Monatlich ab 149€',
        description: 'Lehnen Sie sich zurück, wir kümmern uns um Ihren Garten. Monatliche Pauschale ohne Überraschungen.',
        url: 'https://garten-adler.de/lp/gartenpflege',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
};

const included = [
    { icon: '🌿', title: 'Rasenmähen & Kantenschnitt', desc: 'Regelmäßiges Mähen, saubere Kanten, professionelle Pflege.' },
    { icon: '✂️', title: 'Heckenschnitt & Formschnitt', desc: 'Akkurate Schnitte für gepflegte Hecken und Sträucher.' },
    { icon: '🌸', title: 'Beetpflege & Unkraut', desc: 'Unkrautentfernung, Mulchen und saisonale Bepflanzung.' },
    { icon: '🍂', title: 'Laub & Grünschnitt', desc: 'Entfernung von Laub, Grünschnitt-Entsorgung inklusive.' },
    { icon: '💧', title: 'Bewässerung & Düngung', desc: 'Bedarfsgerechte Bewässerung und professionelle Düngung.' },
    { icon: '🔧', title: 'Winterdienst', desc: 'Optional: Schneeräumen und Streuen im Winter.' },
];

const packages = [
    {
        name: 'Basis',
        price: '149',
        interval: '/Monat',
        features: ['Rasenmähen (2x monatlich)', 'Kantenschnitt', 'Laubentfernung (Saison)', 'Unkrautkontrolle Beete'],
        popular: false,
    },
    {
        name: 'Komfort',
        price: '249',
        interval: '/Monat',
        features: ['Alles aus Basis +', 'Heckenschnitt (4x jährlich)', 'Beetpflege & Mulchen', 'Düngung (4x jährlich)', 'Bewässerungskontrolle'],
        popular: true,
    },
    {
        name: 'Premium',
        price: '399',
        interval: '/Monat',
        features: ['Alles aus Komfort +', 'Wöchentliches Mähen', 'Saisonale Bepflanzung', 'Baumschnitt (2x jährlich)', 'Winterdienst inklusive'],
        popular: false,
    },
];

const faqs = [
    { q: 'Kann ich das Paket wechseln?', a: 'Ja, Sie können jederzeit upgraden oder anpassen. Die Pakete sind flexibel und ohne Mindestlaufzeit.' },
    { q: 'Wie oft kommen Sie?', a: 'Je nach Paket 2-4x monatlich. In der Hauptsaison (April-Oktober) kommen wir häufiger.' },
    { q: 'Muss ich Geräte/Material stellen?', a: 'Nein, wir bringen alles mit — professionelle Geräte, Dünger, Mulch, alles inklusive.' },
    { q: 'Gibt es eine Mindestlaufzeit?', a: 'Nein, monatlich kündbar. Wir sind überzeugt, dass Sie bei uns bleiben wollen.' },
];

export default function LPGartenpflege() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Professionelle Gartenpflege',
        provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'Adler & Sohn',
            url: 'https://garten-adler.de',
            telephone: '+4941313942971',
        },
        description: 'Monatliche Gartenpflege-Pakete ab 149€. Rasenmähen, Heckenschnitt, Beetpflege und mehr.',
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
                        <Image src="/images/lp-gartenpflege-hero.png" alt="Gartenpflege" fill priority quality={85} className="object-cover opacity-25" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
                        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-green-300 text-sm font-medium">Monatlich kündbar</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                                    Ihr Garten, <br />
                                    <span className="text-green-400">unsere Pflege</span>
                                </h1>

                                <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                                    Lehnen Sie sich zurück — wir kümmern uns um alles. 
                                    Monatliche Pauschale, professionelle Arbeit, keine Überraschungen.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                    {[
                                        { stat: 'Ab 149€', label: 'Pro Monat' },
                                        { stat: '500+', label: 'Kunden' },
                                        { stat: '0€', label: 'Erstberatung' },
                                        { stat: '100%', label: 'Flexibel' },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <div className="text-2xl font-bold text-white">{item.stat}</div>
                                            <div className="text-xs text-gray-400">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/40">
                                <LandingPageForm service="Gartenpflege" headline="Kostenlose Beratung anfordern" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Leistungen</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Was wir für Sie übernehmen</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {included.map((item) => (
                                <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                                    <span className="text-3xl mb-4 block">{item.icon}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Pakete</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Transparent & fair</h2>
                            <p className="text-gray-500 mt-3">Alle Preise sind Richtwerte — Ihr individuelles Angebot basiert auf der Gartengröße.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.name}
                                    className={`rounded-2xl p-8 ${
                                        pkg.popular
                                            ? 'bg-green-700 text-white ring-4 ring-green-300 scale-[1.02]'
                                            : 'bg-white border border-gray-200'
                                    }`}
                                >
                                    {pkg.popular && (
                                        <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                                            Beliebteste Wahl
                                        </span>
                                    )}
                                    <h3 className={`text-xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                                    <div className="mt-4 mb-6 flex items-baseline gap-1">
                                        <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                                            ab {pkg.price}€
                                        </span>
                                        <span className={`text-sm ${pkg.popular ? 'text-green-200' : 'text-gray-400'}`}>
                                            {pkg.interval}
                                        </span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className={`text-sm ${pkg.popular ? 'text-green-50' : 'text-gray-600'}`}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#lp-form"
                                        className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                                            pkg.popular
                                                ? 'bg-white text-green-700 hover:bg-green-50'
                                                : 'bg-green-600 text-white hover:bg-green-700'
                                        }`}
                                    >
                                        Angebot anfordern
                                    </a>
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
                            &ldquo;Endlich kein schlechtes Gewissen mehr, wenn ich den Garten sehe. Die Jungs kommen alle 2 Wochen und mein Garten sieht besser aus als je zuvor.&rdquo;
                        </blockquote>
                        <p className="text-gray-500 font-semibold">Petra S. aus Lüneburg — seit 2 Jahren Kundin</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-gray-50">
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
                            <h2 className="text-3xl font-bold text-white mb-3">Jetzt Beratung anfordern</h2>
                            <p className="text-gray-400">Unverbindlich und kostenlos — monatlich kündbar.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 sm:p-8">
                            <LandingPageForm service="Gartenpflege" headline="Ihre Daten" />
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 p-3 flex gap-2">
                <a href="#lp-form" className="flex-1 py-3.5 bg-green-600 text-white font-bold text-center rounded-xl text-sm">
                    Beratung anfordern
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
