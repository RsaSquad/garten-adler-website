'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Moderner Garten Villa Lüneburg',
        category: 'Gartengestaltung',
        description: 'Komplette Neugestaltung eines 800m² großen Privatgartens mit Pool-Landschaft',
        image: '/images/projects/modern-garden.png',
    },
    {
        id: 2,
        title: 'Terrasse mit Naturstein',
        category: 'Terrassenbau',
        description: 'Elegante Natursteinterrasse mit integrierter Outdoor-Küche',
        image: '/images/projects/terrace.png',
    },
    {
        id: 3,
        title: 'Firmengelände Grünanlage',
        category: 'Gewerbeprojekt',
        description: 'Professionelle Begrünung eines 2000m² Firmengeländes',
        image: '/images/projects/commercial.png',
    },
    {
        id: 4,
        title: 'Japanischer Zen-Garten',
        category: 'Gartengestaltung',
        description: 'Authentischer Zen-Garten mit Wasserelementen und Steinarrangements',
        image: '/images/projects/zen-garden.png',
    },
    {
        id: 5,
        title: 'Einfahrt & Pflasterung',
        category: 'Pflasterarbeiten',
        description: 'Großflächige Einfahrt mit hochwertigen Verbundsteinen',
        image: '/images/projects/driveway.png',
    },
    {
        id: 6,
        title: 'Hochbeet-Anlage',
        category: 'Hochbeete',
        description: 'Kräutergarten mit drei individuellen Cortenstahl-Hochbeeten',
        image: '/images/projects/raised-beds.png',
    },
];

const categories = ['Alle', 'Gartengestaltung', 'Terrassenbau', 'Pflasterarbeiten', 'Gewerbeprojekt', 'Hochbeete'];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('Alle');

    const filteredProjects = activeCategory === 'Alle'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projekte" className="section-padding bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4 border border-green-500/20">
                        Unsere Projekte
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Einblicke in unsere{' '}
                        <span className="text-green-400">Arbeit</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Projekte
                        in Lüneburg und Umgebung.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Arrow */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a href="#kontakt" className="btn-outline border-green-500 text-green-400 hover:bg-green-500 hover:text-white inline-flex items-center gap-3">
                        <span>Ihr Projekt besprechen</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
