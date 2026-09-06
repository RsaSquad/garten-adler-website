'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Position = 
  | 'Landschaftsgärtner/in (m/w/d)'
  | 'Vorarbeiter/in GaLaBau (m/w/d)'
  | 'Baumpfleger/in (m/w/d)'
  | 'Helfer/in im GaLaBau (m/w/d)'
  | 'Auszubildende/r (m/w/d)';

type FormData = {
  position: Position | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  experience: string;
  licenses: string[];
  startDate: string;
  message: string;
};

const initialFormData: FormData = {
  position: null,
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  experience: '',
  licenses: [],
  startDate: '',
  message: '',
};

const positions = [
  {
    title: 'Landschaftsgärtner/in (m/w/d)',
    desc: 'Gestalte grüne Oasen und setze kreative Gartenprojekte um',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19h14M12 19v-4M7 15h10l-1.5-6h-7L7 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V5M9 5h6" />
      </svg>
    ),
  },
  {
    title: 'Vorarbeiter/in GaLaBau (m/w/d)',
    desc: 'Leite Teams und koordiniere anspruchsvolle Projekte',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Baumpfleger/in (m/w/d)',
    desc: 'Pflege und Erhaltung von Bäumen mit Klettertechnik',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v6m0 0l-3-3m3 3l3-3m-3 8a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l-2 8M14 14l2 8" />
      </svg>
    ),
  },
  {
    title: 'Helfer/in im GaLaBau (m/w/d)',
    desc: 'Unterstütze unser Team bei vielfältigen Gartenprojekten',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: 'Auszubildende/r (m/w/d)',
    desc: 'Starte deine Karriere im Garten- & Landschaftsbau',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
];

export default function BewerbungsFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-advance helper
  const handlePositionSelect = (posTitle: Position) => {
    setFormData((prev) => ({ ...prev, position: posTitle }));
    setTimeout(() => {
      setDirection('forward');
      setCurrentStep(1);
    }, 400);
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setDirection('forward');
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setDirection('backward');
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const body = new window.FormData();
      body.append('position', formData.position || '');
      body.append('firstName', formData.firstName);
      body.append('lastName', formData.lastName);
      body.append('phone', formData.phone);
      body.append('email', formData.email);
      body.append('experience', formData.experience);
      body.append('licenses', JSON.stringify(formData.licenses));
      body.append('startDate', formData.startDate);
      body.append('message', formData.message);
      files.forEach((file) => {
        body.append('files', file);
      });
      const response = await fetch('/api/bewerbung', {
        method: 'POST',
        body,
      });
      if (!response.ok) {
        throw new Error('Fehler beim Absenden der Bewerbung.');
      }
      setDirection('forward');
      setCurrentStep(3);
      setIsSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = ['Position', 'Über dich', 'Erfahrung', 'Erfolg'];

  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Starkes Team',
      desc: 'Familiäres Arbeitsklima mit echtem Zusammenhalt – hier ist jeder wichtig.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Faire Bezahlung',
      desc: 'Überdurchschnittliches Gehalt, pünktliche Zahlung & attraktive Zusatzleistungen.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Wachstum',
      desc: 'Weiterbildungen, Schulungen & echte Aufstiegschancen für deine Karriere.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Abwechslung',
      desc: 'Kein Tag ist wie der andere – spannende Projekte an der frischen Luft.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-900 via-green-950 to-neutral-900">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-dark)] rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--primary-green)] rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>
      <div className="absolute top-[60%] right-[10%] w-64 h-64 bg-[var(--accent-lime)] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      <div className="absolute inset-0 hero-pattern opacity-10 pointer-events-none"></div>

      {/* ═══════════════════════════════════════════ */}
      {/* ÜBER UNS – Hero Section für Bewerber       */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative z-10 pt-12 pb-16 md:pt-20 md:pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo & Company Name */}
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="Adler & Sohn Galabau" width={160} height={60} className="h-14 w-auto" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Werde Teil unseres{' '}
              <span className="bg-gradient-to-r from-[var(--primary-light)] via-[var(--accent-lime)] to-[var(--accent-emerald)] bg-clip-text text-transparent">
                Teams
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Seit über 15 Jahren gestalten wir Gärten, die begeistern. Wir suchen motivierte Menschen, 
              die mit uns wachsen wollen – ob Profi oder Quereinsteiger.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12 md:mb-16">
            <button
              onClick={() => document.getElementById('bewerbung-funnel')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[var(--primary-green)] text-white text-lg font-bold hover:bg-[var(--primary-light)] hover:scale-105 hover:shadow-[0_0_40px_rgba(22,163,74,0.4)] transition-all duration-300 cursor-pointer"
            >
              JETZT BEWERBEN
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500 hover:translate-y-[-4px]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-green)]/15 text-[var(--primary-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary-green)]/25 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 md:mb-16">
            {[
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '500+', label: 'Projekte realisiert' },
              { value: '100%', label: 'Leidenschaft' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent-lime)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Arrow */}
          <div className="text-center">
            <button
              onClick={() => document.getElementById('bewerbung-funnel')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="text-sm font-medium">Jetzt in 2 Minuten bewerben</span>
              <svg className="w-6 h-6 animate-subtle-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* BEWERBUNGS-FUNNEL                          */}
      {/* ═══════════════════════════════════════════ */}
      <section id="bewerbung-funnel" className="relative z-10 flex items-center justify-center p-4 pb-16 md:pb-24">
      <div className="w-full max-w-2xl relative z-10">

        {/* Progress Bar */}
        {currentStep < 3 && (
          <div className="mb-10">
            <div className="flex justify-between mb-3 text-sm font-medium text-neutral-400 px-1">
              {steps.slice(0, 3).map((step, idx) => (
                <span
                  key={idx}
                  className={`transition-colors duration-300 ${
                    currentStep >= idx ? 'text-white' : 'text-neutral-500'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
            <div className="relative h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ width: `${((currentStep) / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="glass-dark rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative border border-white/10">
          <div className="relative min-h-[400px]">
            {/* STEP 0: Position */}
            <div
              className={`flex flex-col ${
                currentStep === 0
                  ? 'animate-fadeInUp'
                  : 'hidden'
              }`}
            >
              <div className="mb-6 sm:mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Starte deine Karriere bei uns</h2>
                <p className="text-neutral-300 text-base">Für welche Position möchtest du dich bewerben?</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {positions.map((pos) => {
                  const isSelected = formData.position === pos.title;
                  return (
                    <button
                      key={pos.title}
                      type="button"
                      onClick={() => handlePositionSelect(pos.title as Position)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 relative group ${
                        isSelected
                          ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/10 scale-[1.02] shadow-[0_0_24px_rgba(22,163,74,0.25)]'
                          : 'border-white/10 bg-white/[0.04] hover:border-[var(--primary-green)]/50 hover:bg-white/[0.08] hover:scale-[1.01]'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'bg-[var(--primary-green)] text-white' 
                            : 'bg-white/10 text-neutral-300 group-hover:bg-[var(--primary-green)]/20 group-hover:text-[var(--primary-light)]'
                        }`}>
                          {pos.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-[15px] leading-snug mb-1">{pos.title}</h3>
                          <p className="text-neutral-400 text-sm leading-relaxed">{pos.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0 text-[var(--primary-green)] animate-scaleIn">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 1: Über dich */}
            <div
              className={`flex flex-col ${
                currentStep === 1
                  ? 'animate-fadeInUp'
                  : 'hidden'
              }`}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Erzähl uns von dir</h2>
                <p className="text-neutral-300 text-base">Wie können wir dich am besten erreichen?</p>
              </div>

              <form id="step1-form" onSubmit={nextStep} className="flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative group">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors peer"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-2 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary-green)] pointer-events-none">Vorname</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors peer"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-2 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary-green)] pointer-events-none">Nachname</label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors peer"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-2 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary-green)] pointer-events-none">Telefonnummer</label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors peer"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-2 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary-green)] pointer-events-none">E-Mail Adresse</label>
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    Zurück
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 py-3 rounded-xl bg-[var(--primary-green)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors flex justify-center items-center"
                  >
                    Weiter
                  </button>
                </div>
              </form>
            </div>

            {/* STEP 2: Erfahrung */}
            <div
              className={`flex flex-col ${
                currentStep === 2
                  ? 'animate-fadeInUp'
                  : 'hidden'
              }`}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Deine Erfahrung</h2>
                <p className="text-neutral-300 text-base">Lass uns wissen, was du mitbringst.</p>
              </div>

              <form id="step2-form" onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-neutral-300 mb-2 font-medium">Berufserfahrung in diesem Bereich</label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors appearance-none"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                    >
                      <option value="" disabled className="bg-neutral-900">Bitte wählen...</option>
                      <option value="Keine / Quereinsteiger" className="bg-neutral-900">Keine / Quereinsteiger</option>
                      <option value="< 1 Jahr" className="bg-neutral-900">&lt; 1 Jahr</option>
                      <option value="1-3 Jahre" className="bg-neutral-900">1-3 Jahre</option>
                      <option value="3-5 Jahre" className="bg-neutral-900">3-5 Jahre</option>
                      <option value="5+ Jahre" className="bg-neutral-900">5+ Jahre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-300 mb-3 font-medium">Führerschein (Mehrfachauswahl möglich)</label>
                    <div className="flex flex-wrap gap-2">
                      {['B', 'BE', 'C / CE', 'T', 'Keinen'].map((license) => {
                        const isChecked = formData.licenses.includes(license);
                        return (
                          <button
                            key={license}
                            type="button"
                            onClick={() => {
                              if (license === 'Keinen') {
                                setFormData({ ...formData, licenses: isChecked ? [] : ['Keinen'] });
                              } else {
                                const without = formData.licenses.filter(l => l !== 'Keinen');
                                setFormData({
                                  ...formData,
                                  licenses: isChecked
                                    ? without.filter(l => l !== license)
                                    : [...without, license],
                                });
                              }
                            }}
                            className={`px-4 py-2.5 rounded-xl border-2 transition-all font-medium text-sm ${
                              isChecked
                                ? 'border-[var(--primary-green)] bg-[var(--primary-green)]/20 text-white'
                                : 'border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {isChecked && (
                              <span className="mr-1.5">✓</span>
                            )}
                            {license === 'Keinen' ? 'Keinen Führerschein' : `Klasse ${license}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-300 mb-2 font-medium">Frühester Starttermin</label>
                    <select
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors appearance-none"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                    >
                      <option value="" disabled className="bg-neutral-900">Bitte wählen...</option>
                      <option value="Sofort" className="bg-neutral-900">Sofort</option>
                      <option value="In 2 Wochen" className="bg-neutral-900">In 2 Wochen</option>
                      <option value="In 1 Monat" className="bg-neutral-900">In 1 Monat</option>
                      <option value="In 3 Monaten" className="bg-neutral-900">In 3 Monaten</option>
                      <option value="Nach Absprache" className="bg-neutral-900">Nach Absprache</option>
                    </select>
                  </div>

                  {/* Datei-Upload */}
                  <div>
                    <label className="block text-sm text-neutral-300 mb-2 font-medium">Dokumente anhängen (optional)</label>
                    <p className="text-xs text-neutral-500 mb-3">Lebenslauf, Zeugnisse, Zertifikate – PDF, Word oder Bilder</p>
                    <label
                      className="flex flex-col items-center justify-center w-full py-6 px-4 rounded-xl border-2 border-dashed border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 transition-all cursor-pointer group"
                    >
                      <svg className="w-8 h-8 text-neutral-500 group-hover:text-[var(--primary-light)] transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Dateien auswählen oder hierher ziehen</span>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) {
                            setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
                          }
                        }}
                      />
                    </label>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2 min-w-0">
                              <svg className="w-4 h-4 text-[var(--primary-light)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm text-neutral-300 truncate">{file.name}</span>
                              <span className="text-xs text-neutral-500 flex-shrink-0">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFiles(prev => prev.filter((_, i) => i !== idx))}
                              className="text-neutral-500 hover:text-red-400 transition-colors flex-shrink-0 ml-2"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)] transition-colors peer resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-2 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary-green)] pointer-events-none">Möchtest du uns noch etwas mitteilen? (Optional)</label>
                  </div>
                  
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-6 pt-4 border-t border-white/10 sticky bottom-0 bg-transparent">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    Zurück
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 py-3 rounded-xl bg-[var(--primary-green)] text-white font-semibold hover:bg-[var(--primary-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Senden...
                      </span>
                    ) : (
                      'Bewerbung absenden'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* STEP 3: Erfolg */}
            <div
              className={`flex flex-col items-center justify-center text-center py-8 ${
                currentStep === 3
                  ? 'animate-fadeInUp'
                  : 'hidden'
              }`}
            >
              <div className="mb-6 relative">
                <div className="w-24 h-24 rounded-full bg-[var(--primary-green)]/20 flex items-center justify-center mx-auto mb-4 animate-scaleIn">
                  <svg className="w-12 h-12 text-[var(--primary-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                      className="animate-[dash_1s_ease-out_forwards]"
                      strokeDasharray="50"
                      strokeDashoffset="50"
                    />
                  </svg>
                </div>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes dash {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                ` }} />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-3 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-light)] to-white">
                Vielen Dank für deine Bewerbung!
              </h2>
              <p className="text-neutral-400 mb-8 max-w-md">
                Wir haben deine Daten erhalten und melden uns innerhalb von 48 Stunden bei dir.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 w-full max-w-sm text-left">
                <p className="text-sm text-neutral-400 mb-1">Zusammenfassung:</p>
                <p className="text-white font-medium">{formData.firstName} {formData.lastName}</p>
                <p className="text-white text-sm">{formData.position}</p>
                <p className="text-white text-sm">{formData.phone}</p>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Zurück zur Startseite
                </Link>
                <a
                  href="https://wa.me/4941313942971?text=Hallo%20Adler%20%26%20Sohn%20Team!%20Ich%20habe%20mich%20gerade%20auf%20Ihrer%20Website%20beworben%20und%20wollte%20mich%20kurz%20pers%C3%B6nlich%20melden."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Nachricht
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
