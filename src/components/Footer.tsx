import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        leistungen: [
            { label: 'Gartengestaltung', href: '#leistungen' },
            { label: 'Terrassenbau', href: '#leistungen' },
            { label: 'Pflasterarbeiten', href: '#leistungen' },
            { label: 'Rollrasen', href: '#leistungen' },
            { label: 'Zaunbau', href: '#leistungen' },
            { label: 'Gartenpflege', href: '#leistungen' },
        ],
        unternehmen: [
            { label: 'Über uns', href: '#ueber-uns' },
            { label: 'Projekte', href: '#projekte' },
            { label: 'Standorte', href: '/standorte' },
            { label: 'Kontakt', href: '#kontakt' },
        ],
        rechtliches: [
            { label: 'Impressum', href: '/impressum' },
            { label: 'Datenschutz', href: '/datenschutz' },
            { label: 'AGB', href: '/agb' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                <div className="container-custom py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Bereit für Ihren Traumgarten?
                            </h3>
                            <p className="text-green-100">
                                Kontaktieren Sie uns für eine kostenlose Beratung!
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="#kontakt"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Jetzt anfragen
                            </Link>
                            <a
                                href="tel:+4941313942971"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Anrufen
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Adler & Sohn Galabau"
                                width={160}
                                height={54}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                            Ihr Partner für professionellen Garten- und Landschaftsbau in Lüneburg und Umgebung.
                            Wir verwandeln Ihre Außenflächen in grüne Oasen.
                        </p>

                    </div>

                    {/* Leistungen */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Leistungen</h4>
                        <ul className="space-y-3">
                            {footerLinks.leistungen.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-400 hover:text-green-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Unternehmen */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Unternehmen</h4>
                        <ul className="space-y-3">
                            {footerLinks.unternehmen.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-400 hover:text-green-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rechtliches */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Rechtliches</h4>
                        <ul className="space-y-3">
                            {footerLinks.rechtliches.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-400 hover:text-green-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>© {currentYear} Adler & Sohn. Alle Rechte vorbehalten.</p>
                        <p>Mit 💚 gestaltet in Lüneburg</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
