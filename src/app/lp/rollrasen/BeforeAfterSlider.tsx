'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'Vorher',
    afterLabel = 'Nachher',
}: BeforeAfterSliderProps) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setPosition(percentage);
    }, []);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        isDragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
    }, [updatePosition]);

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging.current) return;
        updatePosition(e.clientX);
    }, [updatePosition]);

    const handlePointerUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-xl"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            {/* After Image (full background) */}
            <div className="absolute inset-0">
                <Image src={afterImage} alt={afterLabel} fill className="object-cover" quality={85} />
            </div>

            {/* Before Image (clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
            >
                <div className="relative w-full h-full" style={{ width: `${100 / (position / 100)}%` }}>
                    <Image src={beforeImage} alt={beforeLabel} fill className="object-cover" quality={85} />
                </div>
            </div>

            {/* Divider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
                {/* Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    {beforeLabel}
                </span>
            </div>
            <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    {afterLabel}
                </span>
            </div>
        </div>
    );
}
