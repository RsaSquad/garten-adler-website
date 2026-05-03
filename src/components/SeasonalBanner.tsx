'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Seasonal offers config - update these for each season
const SEASONAL_OFFERS = [
    {
        id: 'fruehling-2026',
        title: '🌱 Frühlings-Aktion',
        subtitle: 'Rollrasen zum Sonderpreis',
        description: 'Jetzt Rollrasen verlegen lassen und von unserer Frühlings-Aktion profitieren. Inklusive Bodenvorbereitung!',
        cta: 'Jetzt Angebot sichern',
        badge: '-15% auf Rollrasen',
        endDate: '2026-05-31',
        bgGradient: 'from-green-600 to-emerald-700',
        services: ['rollrasen', 'gartenpflege'],
    },
    {
        id: 'sommer-2026',
        title: '☀️ Sommer-Special',
        subtitle: 'Terrasse & Pflaster',
        description: 'Die perfekte Zeit für Ihre Traumterrasse. Kostenlose Beratung und Planung inklusive!',
        cta: 'Traumterrasse planen',
        badge: 'Kostenlose Planung',
        endDate: '2026-08-31',
        bgGradient: 'from-amber-500 to-orange-600',
        services: ['terrassenbau', 'pflasterarbeiten'],
    },
];

function getActiveOffer() {
    const now = new Date();
    return SEASONAL_OFFERS.find(o => new Date(o.endDate) >= now) || SEASONAL_OFFERS[0];
}

function useCountdown(endDate: string) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const end = new Date(endDate).getTime();
            const diff = end - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return timeLeft;
}

export default function SeasonalBanner() {
    const offer = getActiveOffer();
    const timeLeft = useCountdown(offer.endDate);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && sessionStorage.getItem(`seasonal-${offer.id}-dismissed`)) {
            setDismissed(true);
        }
    }, [offer.id]);

    const dismiss = () => {
        setDismissed(true);
        sessionStorage.setItem(`seasonal-${offer.id}-dismissed`, '1');
    };

    if (dismissed) return null;

    return (
        <div className={`relative bg-gradient-to-r ${offer.bgGradient} text-white overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white" />
            </div>

            <div className="container-custom relative py-3 px-4">
                <button
                    onClick={dismiss}
                    className="absolute top-2 right-2 text-white/60 hover:text-white text-lg leading-none"
                    aria-label="Banner schließen"
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    {/* Left: Offer Info */}
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <span className="font-bold text-sm md:text-base">{offer.title}</span>
                                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                                    {offer.badge}
                                </span>
                            </div>
                            <p className="text-white/80 text-xs mt-0.5">{offer.description}</p>
                        </div>
                    </div>

                    {/* Center: Countdown */}
                    <div className="flex items-center gap-2">
                        {[
                            { label: 'Tage', value: timeLeft.days },
                            { label: 'Std', value: timeLeft.hours },
                            { label: 'Min', value: timeLeft.minutes },
                            { label: 'Sek', value: timeLeft.seconds },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1 min-w-[40px] text-center">
                                    <span className="text-lg font-bold font-mono">{String(item.value).padStart(2, '0')}</span>
                                </div>
                                <span className="text-[10px] text-white/70 mt-0.5">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: CTA */}
                    <Link
                        href="/#kontakt"
                        className="bg-white text-green-700 font-bold text-sm px-5 py-2 rounded-full hover:bg-green-50 transition-colors shadow-lg whitespace-nowrap"
                    >
                        {offer.cta} →
                    </Link>
                </div>
            </div>
        </div>
    );
}
