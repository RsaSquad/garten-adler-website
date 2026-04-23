import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Qualität',
            description: 'Höchste Qualitätsstandards bei Material und Ausführung',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Pünktlichkeit',
            description: 'Termintreue Ausführung aller vereinbarten Arbeiten',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Erfahrung',
            description: 'Über 15 Jahre Expertise im Garten- und Landschaftsbau',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Leidenschaft',
            description: 'Wir lieben was wir tun – das sieht man am Ergebnis',
        },
    ];

    return (
        <section id="ueber-uns" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                            Über uns
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Ihr Partner für{' '}
                            <span className="text-gradient">grüne Träume</span>{' '}
                            in Lüneburg
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Adler & Sohn steht für professionellen Garten- und Landschaftsbau mit Herz und Verstand.
                            Seit über 15 Jahren verwandeln wir Gärten in Lüneburg und Umgebung in grüne Oasen –
                            von der ersten Skizze bis zur finalen Bepflanzung.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Unser erfahrenes Team verbindet handwerkliche Präzision mit kreativem Design.
                            Ob kleiner Stadtgarten oder großzügige Parkanlage – wir finden für jedes Projekt die perfekte Lösung.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-800 group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="#kontakt" className="btn-primary inline-flex items-center gap-3">
                            <span>Lernen Sie uns kennen</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Main Image Placeholder */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="/images/about-garden.png"
                                    alt="Professionell gestalteter Garten von Adler & Sohn"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 text-center p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">15+ Jahre</h3>
                                    <p className="text-white/80 text-lg">Erfahrung im Gartenbau</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-gray-500 text-sm">Zufriedene Kunden</div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-green-100 -z-10" />
                        <div className="absolute top-12 -right-12 w-24 h-24 rounded-full bg-lime-200 opacity-60" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
