'use client';

import { useState, useEffect } from 'react';

const StickyContactButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close on outside click
    useEffect(() => {
        if (!isExpanded) return;
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('#sticky-contact-widget')) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isExpanded]);

    if (!isVisible) return null;

    return (
        <div
            id="sticky-contact-widget"
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
            style={{ paddingBottom: 'var(--safe-area-bottom, 0px)' }}
        >
            {/* Expanded options */}
            {isExpanded && (
                <div
                    className="flex flex-col gap-2 mb-1"
                    style={{ animation: 'fadeInUp 0.3s ease-out forwards' }}
                >
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/4941313942971?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Gartendienstleistungen.%20K%C3%B6nnten%20Sie%20mir%20ein%20Angebot%20machen%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
                        aria-label="WhatsApp Nachricht senden"
                    >
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                            WhatsApp
                        </span>
                        <span className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </span>
                    </a>

                    {/* Phone Call */}
                    <a
                        href="tel:+4941313942971"
                        className="group flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
                        aria-label="Jetzt anrufen"
                    >
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                            Anrufen
                        </span>
                        <span className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                    </a>
                </div>
            )}

            {/* Main FAB Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isExpanded
                        ? 'bg-gray-800 rotate-45'
                        : 'bg-green-600 hover:bg-green-700 animate-subtle-bounce'
                }`}
                aria-label={isExpanded ? 'Kontaktoptionen schließen' : 'Kontaktoptionen öffnen'}
                aria-expanded={isExpanded}
                id="sticky-contact-fab"
            >
                {isExpanded ? (
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>

            {/* Pulse ring when not expanded */}
            {!isExpanded && (
                <span className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none" />
            )}
        </div>
    );
};

export default StickyContactButton;
