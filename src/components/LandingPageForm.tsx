'use client';

import { useState } from 'react';

interface LandingPageFormProps {
    service: string;
    headline?: string;
}

export default function LandingPageForm({ service, headline = 'Kostenloses Angebot anfordern' }: LandingPageFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        ort: '',
        message: '',
        service,
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    ort: formData.ort,
                    message: formData.message,
                    service: formData.service,
                    email: '',
                    plz: '',
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', phone: '', ort: '', message: '', service });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Anfrage erhalten!</h4>
                <p className="text-green-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" id="lp-form">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{headline}</h3>
            <p className="text-gray-500 text-sm mb-4">Nur 4 Felder — wir melden uns noch heute.</p>

            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name *"
                    className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Telefonnummer *"
                    className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <input
                    type="text"
                    name="ort"
                    value={formData.ort}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Ort *"
                    className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 focus:outline-none transition-colors"
                />
            </div>

            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Was können wir für Sie tun? (z.B. Rasenfläche ca. 200m²)"
                    className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 focus:outline-none transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/50 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Wird gesendet...
                    </>
                ) : (
                    <>
                        Kostenloses Angebot anfordern
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </>
                )}
            </button>

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                    <p className="text-red-600 text-sm">Fehler beim Senden. Bitte rufen Sie uns an: 04131 – 394 2971</p>
                </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="flex flex-col items-center text-center gap-1 p-2.5 rounded-xl bg-green-50">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-green-700 leading-tight">Kostenlos</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1 p-2.5 rounded-xl bg-green-50">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-green-700 leading-tight">Datenschutz</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1 p-2.5 rounded-xl bg-green-50">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[10px] font-semibold text-green-700 leading-tight">Antwort 24h</span>
                </div>
            </div>
        </form>
    );
}
