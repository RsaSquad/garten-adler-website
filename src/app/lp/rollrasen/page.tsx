import { Metadata } from 'next';
import Image from 'next/image';
import LandingPageForm from '@/components/LandingPageForm';
import BeforeAfterSlider from './BeforeAfterSlider';

export const metadata: Metadata = {
    title: 'Rollrasen verlegen lassen — Festpreis in 24h',
    description: 'Professionelle Rollrasen-Verlegung ab 12€/m². ✓ Festpreisgarantie ✓ In 48h fertig ✓ 5 Jahre Anwachsgarantie ✓ Kostenloser Vor-Ort-Termin. Jetzt Angebot anfordern!',
    robots: { index: false, follow: false },
    openGraph: {
        title: 'Rollrasen verlegen lassen — Festpreis in 24h',
        description: 'Professionelle Rollrasen-Verlegung mit Festpreisgarantie. Kostenlos anfragen.',
        url: 'https://garten-adler.de/lp/rollrasen',
        siteName: 'Adler & Sohn',
        locale: 'de_DE',
        type: 'website',
    },
};

const socialProof = [
    { stat: '500+', label: 'Zufriedene Kunden' },
    { stat: '15+', label: 'Jahre Erfahrung' },
    { stat: '4.9★', label: 'Google Bewertung' },
    { stat: '48h', label: 'Fertig verlegt' },
];

const processSteps = [
    {
        num: '01',
        title: 'Alten Rasen entfernen',
        desc: 'Wir entfernen den alten Rasen, Unkraut und Steine. Der Boden wird 15-20cm tief gefräst und aufgelockert.',
        image: '/images/lp-rollrasen-step1.png',
    },
    {
        num: '02',
        title: 'Boden vorbereiten & planieren',
        desc: 'Professionelle Bodenvorbereitung: Feinplanum, Startdüngung und perfekte Ebenheit — die Basis für einen gesunden Rasen.',
        image: '/images/lp-rollrasen-process-2.png',
    },
    {
        num: '03',
        title: 'Rollrasen verlegen & wässern',
        desc: 'Frischer Premium-Rollrasen wird fugenlos verlegt, angewalzt und sofort gewässert. Am selben Tag grün!',
        image: '/images/lp-rollrasen-process-3.png',
    },
];

const rasenTypes = [
    { name: 'Sport- & Spielrasen', desc: 'Robust, strapazierfähig, ideal für Kinder & Hunde. Unser Bestseller.', tag: 'Beliebteste Wahl', price: 'ab 12€/m²' },
    { name: 'Zierrasen Premium', desc: 'Feinblättrig, sattgrün, für repräsentative Gärten mit geringer Nutzung.', tag: 'Premium', price: 'ab 16€/m²' },
    { name: 'Schattenrasen', desc: 'Speziell für schattige Bereiche unter Bäumen und an Nordseiten.', tag: 'Spezialist', price: 'ab 14€/m²' },
    { name: 'Trockenrasen', desc: 'Wassersparend und hitzebeständig — perfekt für sonnige, trockene Standorte.', tag: 'Nachhaltig', price: 'ab 15€/m²' },
];

const benefits = [
    { icon: '⚡', title: 'Sofort grün', desc: 'Kein wochenlanges Warten auf Keimung. Ihr Rasen ist am selben Tag fertig und begehbar.' },
    { icon: '🛡️', title: '5 Jahre Garantie', desc: 'Schriftliche Anwachsgarantie. Sollte etwas nicht anwachsen, ersetzen wir es kostenlos.' },
    { icon: '📋', title: 'Festpreisgarantie', desc: 'Der Preis im Angebot ist der Preis den Sie zahlen. Keine Nachforderungen, keine Überraschungen.' },
    { icon: '🚛', title: 'Alles inklusive', desc: 'Bodenvorbereitung, Lieferung, Verlegung, Erstdüngung und Anwalzen — ein Preis, alles drin.' },
    { icon: '🌱', title: 'Premium-Qualität', desc: 'Nur Rollrasen von zertifizierten deutschen Rasenfeldern. Keine Billigimporte.' },
    { icon: '📍', title: 'Regionaler Betrieb', desc: 'Wir sind vor Ort in Lüneburg — schnelle Termine, persönliche Betreuung, faire Preise.' },
];

const reviews = [
    {
        name: 'Familie Richter',
        location: 'Lüneburg',
        text: 'Unser Garten war eine Katastrophe — kahle Stellen, Moos überall. Nach 2 Tagen hatten wir einen Traumrasen! Die Kinder spielen seitdem jeden Tag draußen.',
        project: '180m² Sport- & Spielrasen',
        rating: 5,
    },
    {
        name: 'Thomas H.',
        location: 'Hamburg-Harburg',
        text: 'Von der Anfrage bis zum fertigen Rasen hat alles reibungslos funktioniert. Professionelles Team, pünktlich und sauber. Der Rasen sieht nach 6 Monaten immer noch perfekt aus.',
        project: '120m² Zierrasen',
        rating: 5,
    },
    {
        name: 'Kerstin & Jörg W.',
        location: 'Winsen/Luhe',
        text: 'Wir haben 3 Angebote eingeholt — Adler & Sohn war nicht der billigste, aber das Preis-Leistungs-Verhältnis stimmt einfach. Und die 5 Jahre Garantie hat uns überzeugt.',
        project: '250m² Schattenrasen',
        rating: 5,
    },
    {
        name: 'Petra S.',
        location: 'Stade',
        text: 'Neubau-Garten, nur Lehmboden. Die haben den ganzen Boden ausgetauscht und den Rasen verlegt. Endlich kein Matsch mehr wenn es regnet!',
        project: '300m² Spielrasen + Boden',
        rating: 5,
    },
];

const faqs = [
    { q: 'Was kostet Rollrasen verlegen pro m²?', a: 'Inklusive Material, Bodenvorbereitung, Lieferung und Verlegung liegen die Kosten zwischen 12-22€/m² — abhängig von Fläche, Rasentyp und Bodenbeschaffenheit. Ab 100m² wird es günstiger pro m². Wir erstellen Ihnen ein individuelles Festpreis-Angebot nach dem kostenlosen Vor-Ort-Termin.' },
    { q: 'Wie lange dauert die Verlegung?', a: 'Eine durchschnittliche Gartenfläche (150-300m²) ist in 1-2 Arbeitstagen komplett fertig — inklusive Bodenvorbereitung. Größere Flächen (500m²+) dauern 2-3 Tage.' },
    { q: 'Wann kann ich den Rasen betreten?', a: 'Vorsichtiges Betreten ist sofort möglich. Nach ca. 2-3 Wochen ist der Rollrasen vollständig angewachsen und voll belastbar für Kinder, Hunde und Gartenpartys.' },
    { q: 'Kann Rollrasen ganzjährig verlegt werden?', a: 'Ja, Rollrasen kann fast das ganze Jahr verlegt werden — außer bei Bodenfrost oder extremer Hitze (>35°C). Die besten Zeiten sind Frühling (März-Mai) und Herbst (September-Oktober).' },
    { q: 'Muss ich den alten Rasen vorher entfernen?', a: 'Ja — und wir übernehmen das komplett. Alter Rasen wird abgeschält, der Boden gefräst, planiert und mit Startdünger versorgt. Das ist alles im Festpreis enthalten.' },
    { q: 'Was passiert wenn der Rasen nicht anwächst?', a: 'Dafür gibt es unsere 5 Jahre Anwachsgarantie. Sollten Bahnen nicht anwachsen (was bei professioneller Verlegung extrem selten ist), ersetzen wir sie kostenlos.' },
    { q: 'Rollrasen oder Rasen säen — was ist besser?', a: 'Rollrasen kostet mehr, aber: Er ist sofort grün, unkrautfrei und nutzbar. Gesäter Rasen braucht 8-12 Wochen und ist anfälliger für Unkraut, Vögel und ungleichmäßigen Wuchs. Langfristig spart Rollrasen Zeit und Nerven.' },
];

export default function LPRollrasen() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: 'Rollrasen verlegen',
                provider: {
                    '@type': 'HomeAndConstructionBusiness',
                    name: 'Adler & Sohn',
                    url: 'https://garten-adler.de',
                    telephone: '+4941313942971',
                    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.2464, longitude: 10.4115 }, geoRadius: '100000' },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5' },
                },
                description: 'Professionelle Rollrasen-Verlegung mit Festpreisgarantie.',
            },
            {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    <Image src="/images/logo.png" alt="Adler & Sohn" width={130} height={44} className="h-9 w-auto" />
                    <div className="flex items-center gap-3">
                        <span className="hidden sm:block text-sm text-gray-500">Beratung:</span>
                        <a
                            href="tel:+4941313942971"
                            className="flex items-center gap-2 px-5 py-2.5 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            04131 – 394 2971
                        </a>
                    </div>
                </div>
            </header>

            <main>
                {/* ═══════════════════════════════════════════════════════
                    HERO — Full-width image background with form overlay
                ═══════════════════════════════════════════════════════ */}
                <section className="relative pt-20 bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/lp-rollrasen-hero-premium.png"
                            alt="Perfekter Rollrasen in einem Traumgarten"
                            fill
                            priority
                            quality={90}
                            className="object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
                        <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center">
                            {/* Left — Copy */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-green-300 text-sm font-medium">Noch freie Termine verfügbar</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
                                    Vom Problemrasen <br className="hidden sm:block" />
                                    zum <span className="text-green-400">Traumrasen</span> <br className="hidden sm:block" />
                                    in 48 Stunden
                                </h1>

                                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                                    Professionelle Rollrasen-Verlegung mit Festpreisgarantie — 
                                    inklusive Bodenvorbereitung, Lieferung und 5 Jahre Anwachsgarantie.
                                </p>

                                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                                    {['Festpreisgarantie', 'In 48h fertig', '5 Jahre Garantie', 'Kostenlose Beratung'].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-white/80">
                                            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Strip */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                    {socialProof.map((item) => (
                                        <div key={item.label}>
                                            <div className="text-2xl sm:text-3xl font-extrabold text-white">{item.stat}</div>
                                            <div className="text-xs text-gray-400 mt-0.5">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — Form Card */}
                            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-2xl shadow-black/50 ring-1 ring-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex -space-x-2">
                                        {['bg-green-600', 'bg-emerald-500', 'bg-lime-500'].map((bg, i) => (
                                            <div key={i} className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold ring-2 ring-white`}>
                                                {['M', 'K', 'T'][i]}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">12 Anfragen diese Woche</span>
                                </div>
                                <LandingPageForm service="Rollrasen verlegen" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="py-5 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">4.9/5 bei Google</span>
                            </div>
                            <span className="hidden sm:block text-gray-200">|</span>
                            <span className="text-sm text-gray-500">✓ Meisterbetrieb</span>
                            <span className="hidden sm:block text-gray-200">|</span>
                            <span className="text-sm text-gray-500">✓ Versichert & Zertifiziert</span>
                            <span className="hidden sm:block text-gray-200">|</span>
                            <span className="text-sm text-gray-500">✓ 200+ Städte in Norddeutschland</span>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    BEFORE / AFTER GALLERY
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Ergebnisse</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Vorher → Nachher</h2>
                            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Echte Projekte unserer Kunden — sehen Sie selbst den Unterschied.</p>
                        </div>

                        {/* Interactive Before/After Slider */}
                        <div className="mb-12">
                            <BeforeAfterSlider
                                beforeImage="/images/lp-rollrasen-before-1.png"
                                afterImage="/images/lp-rollrasen-after-1.png"
                                beforeLabel="Vorher"
                                afterLabel="Nachher"
                            />
                            <p className="text-center text-sm text-gray-400 mt-4">↔ Schieben Sie den Regler um den Unterschied zu sehen</p>
                        </div>

                        {/* Second Before/After — Side by Side */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="relative rounded-2xl overflow-hidden group">
                                <div className="aspect-[4/3]">
                                    <Image src="/images/lp-rollrasen-before-2.png" alt="Rasen vorher — kahle Stellen und Moos" fill className="object-cover" />
                                </div>
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                    Vorher
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">Kahle Stellen, Moos & Unkraut</p>
                                </div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden group">
                                <div className="aspect-[4/3]">
                                    <Image src="/images/lp-rollrasen-after-2.png" alt="Rasen nachher — perfekter Rollrasen" fill className="object-cover" />
                                </div>
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                    Nachher
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">Perfekt dichter Premium-Rollrasen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    PROCESS — Visual Steps with Images
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Unser Ablauf</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">So entsteht Ihr neuer Rasen</h2>
                            <p className="text-gray-500 mt-3">Von der kahlen Fläche zum Traumrasen — professionell und termingerecht.</p>
                        </div>

                        <div className="space-y-16">
                            {processSteps.map((step, i) => (
                                <div key={step.num} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                                    <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div className="aspect-[16/10]">
                                                <Image src={step.image} alt={step.title} fill className="object-cover" />
                                            </div>
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                                                <span className="text-white font-extrabold text-lg">{step.num}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <div className="text-green-600 font-bold text-sm uppercase tracking-wider mb-2">Schritt {step.num}</div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    RASEN TYPES — Which lawn is right for you?
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Rasentypen</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Welcher Rasen passt zu Ihnen?</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {rasenTypes.map((type) => (
                                <div key={type.name} className={`bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${type.tag === 'Beliebteste Wahl' ? 'border-green-400 ring-2 ring-green-100' : 'border-gray-100 hover:border-green-200'}`}>
                                    {type.tag === 'Beliebteste Wahl' && (
                                        <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">{type.tag}</span>
                                    )}
                                    {type.tag !== 'Beliebteste Wahl' && (
                                        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full mb-3">{type.tag}</span>
                                    )}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{type.desc}</p>
                                    <p className="text-green-600 font-bold text-lg">{type.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-sm text-gray-400">Preise inkl. Material, Verlegung & Bodenvorbereitung. Individuelles Angebot nach Vor-Ort-Termin.</p>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    BENEFITS — Why choose us
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Ihre Vorteile</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Warum Adler & Sohn?</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((b) => (
                                <div key={b.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all group">
                                    <span className="text-3xl mb-4 block">{b.icon}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{b.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    MID-PAGE CTA — Full-width green
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-500/20 blur-3xl" />
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            Bereit für Ihren Traumrasen?
                        </h2>
                        <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                            Holen Sie sich jetzt Ihr kostenloses Festpreis-Angebot — wir melden uns noch heute bei Ihnen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#lp-form" className="px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-lg hover:bg-green-50 transition-colors shadow-xl shadow-green-800/30">
                                Kostenloses Angebot anfordern →
                            </a>
                            <a href="tel:+4941313942971" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg hover:bg-white/10 transition-colors">
                                📞 04131 – 394 2971
                            </a>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    TESTIMONIALS — Real customer reviews
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-16">
                            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Kundenstimmen</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">Das sagen unsere Kunden</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {reviews.map((review) => (
                                <div key={review.name} className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{review.name}</p>
                                            <p className="text-xs text-gray-400">{review.location}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">{review.project}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    FAQ — Comprehensive
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900">Häufig gestellte Fragen</h2>
                            <p className="text-gray-500 mt-3">Alles was Sie über Rollrasen wissen müssen.</p>
                        </div>

                        <div className="divide-y divide-gray-200">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group py-6">
                                    <summary className="flex items-center justify-between cursor-pointer list-none text-gray-900 font-semibold text-[15px] leading-snug">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-gray-500 text-[15px] leading-relaxed pr-8">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    FINAL CTA + FORM
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <Image src="/images/lp-rollrasen-hero-premium.png" alt="" fill className="object-cover" />
                    </div>
                    <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Jetzt Angebot anfordern</h2>
                            <p className="text-gray-400 text-lg">Unverbindlich und kostenlos — Festpreis innerhalb von 24h.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-2xl">
                            <LandingPageForm service="Rollrasen verlegen" headline="Ihre Daten" />
                        </div>
                        <p className="text-center text-gray-500 text-sm mt-6">
                            Oder rufen Sie uns direkt an: <a href="tel:+4941313942971" className="text-green-400 font-semibold hover:underline">04131 – 394 2971</a>
                        </p>
                    </div>
                </section>
            </main>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 p-3 flex gap-2">
                <a href="#lp-form" className="flex-1 py-3.5 bg-green-600 text-white font-bold text-center rounded-xl text-sm shadow-lg shadow-green-600/30">
                    Kostenloses Angebot
                </a>
                <a href="tel:+4941313942971" className="py-3.5 px-5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Anrufen
                </a>
            </div>

            {/* Footer */}
            <footer className="bg-gray-950 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Adler & Sohn GaLaBau — Lüneburg & Umgebung</p>
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
