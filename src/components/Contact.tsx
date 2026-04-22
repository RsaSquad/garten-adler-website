'use client';

import { useState } from 'react';

interface ContactProps {
    defaultOrt?: string;
}

const Contact = ({ defaultOrt = '' }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plz: '',
        ort: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Telefon',
            value: '+49 4131 123 456',
            link: 'tel:+49413112345',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'E-Mail',
            value: 'info@garten-adler.de',
            link: 'mailto:info@garten-adler.de',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Adresse',
            value: 'Lüneburg & Umgebung',
            link: null,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Öffnungszeiten',
            value: 'Mo-Fr: 8:00 - 18:00',
            link: null,
        },
    ];

    return (
        <section id="kontakt" className="section-padding bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent -z-10" />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Side - Contact Info */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                            Kontakt
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                            Starten Sie Ihr{' '}
                            <span className="text-gradient">Gartenprojekt</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed">
                            Haben Sie eine Idee für Ihren Garten? Kontaktieren Sie uns für eine
                            kostenlose Beratung. Wir freuen uns auf Ihr Projekt!
                        </p>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="p-5 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        {info.icon}
                                    </div>
                                    <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                                    {info.link ? (
                                        <a href={info.link} className="font-semibold text-gray-900 hover:text-green-600 transition-colors">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <div className="font-semibold text-gray-900">{info.value}</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="hidden lg:flex rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-green-100 to-green-50 items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-200 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-green-700 font-semibold">Lüneburg & Umgebung</p>
                                <p className="text-green-600/70 text-sm">Wir kommen zu Ihnen!</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kostenlose Beratung anfragen</h3>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ihr Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Max Mustermann"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="ihre@email.de"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+49 ..."
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="plz" className="block text-sm font-medium text-gray-700 mb-2">
                                            PLZ *
                                        </label>
                                        <input
                                            type="text"
                                            id="plz"
                                            name="plz"
                                            value={formData.plz}
                                            onChange={handleChange}
                                            required
                                            placeholder="21335"
                                            maxLength={5}
                                            pattern="[0-9]{5}"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="ort" className="block text-sm font-medium text-gray-700 mb-2">
                                            Ort *
                                        </label>
                                        <input
                                            type="text"
                                            id="ort"
                                            name="ort"
                                            value={formData.ort}
                                            onChange={handleChange}
                                            required
                                            placeholder={defaultOrt || 'Lüneburg'}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Gewünschte Leistung
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Bitte auswählen...</option>
                                        <option value="gartengestaltung">Gartengestaltung</option>
                                        <option value="terrassenbau">Terrassenbau</option>
                                        <option value="pflasterarbeiten">Pflasterarbeiten</option>
                                        <option value="rollrasen">Rollrasen</option>
                                        <option value="zaunbau">Zaunbau & Sichtschutz</option>
                                        <option value="gartenpflege">Gartenpflege</option>
                                        <option value="sonstiges">Sonstiges</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ihre Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Wünsche..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                                    <span>Anfrage senden</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
