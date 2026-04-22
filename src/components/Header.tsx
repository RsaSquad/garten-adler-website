'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#leistungen', label: 'Leistungen' },
        { href: '#ueber-uns', label: 'Über uns' },
        { href: '#projekte', label: 'Projekte' },
        { href: '#kontakt', label: 'Kontakt' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-2 bg-green-800/95 backdrop-blur-xl shadow-lg shadow-green-900/20'
                    : 'py-5 bg-transparent'
                }`}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/images/logo.png"
                            alt="Adler & Sohn Galabau"
                            width={180}
                            height={60}
                            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled
                                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#kontakt"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${isScrolled
                                    ? 'bg-white text-green-800 hover:bg-green-50 shadow-lg shadow-black/10'
                                    : 'bg-white text-green-700 hover:bg-green-50 shadow-lg shadow-black/10'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Jetzt anfragen
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="glass rounded-2xl p-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#kontakt"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block mt-4 px-4 py-3 bg-green-600 text-white text-center rounded-xl font-semibold hover:bg-green-700 transition-colors"
                        >
                            Jetzt anfragen
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
