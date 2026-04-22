'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Gartengestaltung',
        description: 'Individuelle Gartenplanung und -gestaltung nach Ihren Wünschen. Wir schaffen grüne Oasen zum Wohlfühlen.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Terrassenbau',
        description: 'Moderne Terrassen aus Naturstein, Holz oder WPC. Schaffen Sie Ihren perfekten Outdoor-Wohnbereich.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: 'Pflasterarbeiten',
        description: 'Professionelle Pflasterarbeiten für Einfahrten, Wege und Flächen. Langlebig und ästhetisch.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
        ),
        title: 'Rollrasen',
        description: 'Sofort ein perfekter Rasen. Lieferung und Verlegung von hochwertigem Rollrasen für Ihren Garten.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Zaunbau & Sichtschutz',
        description: 'Hochwertige Zäune und Sichtschutzelemente. Privatsphäre und Sicherheit für Ihr Grundstück.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Gartenpflege',
        description: 'Regelmäßige Pflege und Wartung Ihrer Grünanlagen. Wir halten Ihren Garten das ganze Jahr schön.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Hochbeete',
        description: 'Individuelle Hochbeete für Kräuter, Gemüse oder Blumen. Rückenschonend und dekorativ.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
        ),
        title: 'Wasserspiele',
        description: 'Teiche, Brunnen und Wasserspiele. Bringen Sie Leben und Atmosphäre in Ihren Garten.',
    },
];

const Services = () => {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleCards((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="leistungen" ref={sectionRef} className="section-padding bg-neutral-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                        Unsere Leistungen
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Alles für Ihren{' '}
                        <span className="text-gradient">perfekten Garten</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Von der Planung bis zur Pflege – wir bieten Ihnen das komplette Spektrum
                        des Garten- und Landschaftsbaus aus einer Hand.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`service-card group bg-white rounded-2xl p-6 card-hover cursor-pointer ${visibleCards.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon mb-5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-4 flex items-center text-green-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Mehr erfahren</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a href="#kontakt" className="btn-primary inline-flex items-center gap-3">
                        <span>Alle Leistungen anfragen</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
