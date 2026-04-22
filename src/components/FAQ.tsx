'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    cityName?: string;
}

export default function FAQ({ items, cityName }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding bg-gray-50" id="faq">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
                        Häufige Fragen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {cityName
                            ? `FAQ – Gartenbau in ${cityName}`
                            : 'Häufig gestellte Fragen'}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {cityName
                            ? `Antworten auf die wichtigsten Fragen zu unseren Garten- und Landschaftsbau-Leistungen in ${cityName}.`
                            : 'Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Leistungen.'}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left p-6 rounded-xl transition-all ${openIndex === index
                                    ? 'bg-green-600 text-white shadow-lg'
                                    : 'bg-white text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-bold text-lg pr-8">{item.question}</h3>
                                    <svg
                                        className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="p-6 bg-white border-x border-b rounded-b-xl">
                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Re-export from lib for backwards compatibility
export { generateCityFAQs, homepageFAQs } from '@/lib/faqData';
