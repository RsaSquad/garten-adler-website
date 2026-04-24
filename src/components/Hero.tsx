import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 hero-pattern opacity-30" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="blob w-96 h-96 bg-green-400 top-20 -right-20 animate-float" />
                <div className="blob w-80 h-80 bg-lime-400 bottom-20 -left-20 animate-float delay-300" />
                <div className="blob w-64 h-64 bg-emerald-500 top-1/2 left-1/3 animate-pulse-slow" />
            </div>

            {/* Decorative Leaves */}
            <div className="absolute top-32 right-10 md:right-32 opacity-20">
                <svg className="w-32 h-32 md:w-48 md:h-48 text-white animate-float" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 5 C 20 35, 10 70, 50 95 C 90 70, 80 35, 50 5" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 md:left-20 opacity-15">
                <svg className="w-24 h-24 md:w-36 md:h-36 text-white animate-float delay-500" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 5 C 20 35, 10 70, 50 95 C 90 70, 80 35, 50 5" />
                </svg>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fadeInUp">
                        <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">Ihr Partner für grüne Oasen</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 animate-fadeInUp delay-100">
                        Wir gestalten Ihren{' '}
                        <span className="relative inline-block">
                            <span className="text-lime-300">Traumgarten</span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                <path d="M2 8 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-lime-400/50" />
                            </svg>
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8 md:mb-10 max-w-2xl animate-fadeInUp delay-200">
                        Professioneller Garten- und Landschaftsbau mit Leidenschaft.
                        Von der ersten Idee bis zur fertigen Grünanlage – wir machen Ihren Garten zum Erlebnis.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
                        <Link href="#kontakt" className="btn-white inline-flex items-center justify-center gap-3">
                            <span>Kostenlose Beratung</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link href="#leistungen" className="btn-outline border-white/30 text-white hover:bg-white hover:text-green-700 inline-flex items-center justify-center gap-3">
                            <span>Unsere Leistungen</span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/20 max-w-xl animate-fadeInUp delay-400">
                        <div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">15+</div>
                            <div className="text-white/60 text-xs sm:text-sm mt-1">Jahre Erfahrung</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">500+</div>
                            <div className="text-white/60 text-xs sm:text-sm mt-1">Projekte</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">100%</div>
                            <div className="text-white/60 text-xs sm:text-sm mt-1">Zufriedenheit</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Link href="#leistungen" className="block p-2">
                    <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
