'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 5 && !dismissed) {
            setShow(true);
        }
    }, [dismissed]);

    useEffect(() => {
        // Don't show if already dismissed in this session
        if (typeof window !== 'undefined' && sessionStorage.getItem('exit-popup-dismissed')) {
            setDismissed(true);
            return;
        }

        // Wait 10 seconds before enabling
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 10000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    const dismiss = () => {
        setShow(false);
        setDismissed(true);
        sessionStorage.setItem('exit-popup-dismissed', '1');
        document.removeEventListener('mouseleave', handleMouseLeave);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Could send to API here
        setTimeout(dismiss, 3000);
    };

    if (!show) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-fadeIn"
                onClick={dismiss}
            />

            {/* Popup */}
            <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 animate-slideUp">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative">
                    {/* Close Button */}
                    <button
                        onClick={dismiss}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
                        aria-label="Schließen"
                    >
                        ✕
                    </button>

                    {/* Green Header */}
                    <div className="bg-gradient-to-br from-green-600 to-green-800 px-6 py-8 text-white text-center">
                        <div className="text-4xl mb-3">🌿</div>
                        <h2 className="text-2xl font-bold mb-2">Warten Sie!</h2>
                        <p className="text-green-100 text-sm">
                            Sichern Sie sich Ihre <strong className="text-white">kostenlose Gartenberatung</strong> bevor Sie gehen.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6">
                        {!submitted ? (
                            <>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                                        <span>Kostenlose Beratung vor Ort</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                                        <span>Unverbindliches Angebot in 24h</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
                                        <span>Über 3.500 zufriedene Kunden</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <a
                                        href="tel:+4941313942971"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-700 text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
                                    >
                                        📞 Jetzt anrufen: 04131 - 394 2971
                                    </a>
                                    <a
                                        href="https://wa.me/4941313942971?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Gartenberatung."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
                                    >
                                        💬 WhatsApp schreiben
                                    </a>
                                    <Link
                                        href="/#kontakt"
                                        onClick={dismiss}
                                        className="flex items-center justify-center gap-2 w-full py-3 border-2 border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors text-sm"
                                    >
                                        📋 Kontaktformular ausfüllen
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-4">
                                <div className="text-5xl mb-3">🎉</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
                                <p className="text-gray-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-3 bg-gray-50 text-center">
                        <button onClick={dismiss} className="text-xs text-gray-400 hover:text-gray-600">
                            Nein danke, ich möchte die Seite verlassen
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
                .animate-slideUp { animation: slideUp 0.4s ease-out; }
            `}</style>
        </>
    );
}
