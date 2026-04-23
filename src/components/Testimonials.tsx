'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Familie Schmidt',
        location: 'Lüneburg',
        rating: 5,
        text: 'Adler & Sohn hat unseren Garten in eine wahre Oase verwandelt. Die Planung war durchdacht, die Ausführung tadellos. Wir genießen jeden Tag unsere neue Terrasse!',
        project: 'Komplette Gartengestaltung',
    },
    {
        id: 2,
        name: 'Dr. Martin Weber',
        location: 'Bardowick',
        rating: 5,
        text: 'Professionell von Anfang bis Ende. Das Team war pünktlich, sauber und hat unsere Vorstellungen perfekt umgesetzt. Absolute Empfehlung!',
        project: 'Terrassenbau & Pflasterung',
    },
    {
        id: 3,
        name: 'Firma Hansen GmbH',
        location: 'Lüneburg',
        rating: 5,
        text: 'Die Grünanlage unseres Firmengeländes sieht fantastisch aus. Kunden und Mitarbeiter sind begeistert. Die regelmäßige Pflege läuft reibungslos.',
        project: 'Gewerbliche Außenanlage',
    },
    {
        id: 4,
        name: 'Familie Müller-Petersen',
        location: 'Adendorf',
        rating: 5,
        text: 'Endlich haben wir den Rollrasen, den wir uns immer gewünscht haben. Schnelle Lieferung, perfekte Verlegung – der Rasen ist ein Traum!',
        project: 'Rollrasen-Verlegung',
    },
];

const stats = [
    { target: 500, suffix: '+', label: 'Zufriedene Kunden' },
    { target: 15, suffix: '+', label: 'Jahre Erfahrung' },
    { target: 100, suffix: '%', label: 'Weiterempfehlung' },
    { target: 24, suffix: 'h', label: 'Schnelle Antwort' },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, target]);

    return (
        <span>{count}{suffix}</span>
    );
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [statsInView, setStatsInView] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section-padding bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-green-200" />
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border border-green-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-100" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                        Kundenstimmen
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Was unsere{' '}
                        <span className="text-gradient">Kunden sagen</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Die Zufriedenheit unserer Kunden ist unser größter Erfolg.
                        Lesen Sie, was andere über die Zusammenarbeit mit Adler & Sohn berichten.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/30">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="pt-4">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote Text */}
                            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 transition-opacity duration-500">
                                &ldquo;{testimonials[currentIndex].text}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                                        <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
                                    </div>
                                </div>
                                <div className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                                    {testimonials[currentIndex].project}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-green-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Trust Indicators - Animated */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                <AnimatedCounter target={stat.target} suffix={stat.suffix} inView={statsInView} />
                            </div>
                            <div className="text-gray-500 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

