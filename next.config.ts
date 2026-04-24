import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        // ══════════════════════════════════════════════════
        // City-specific image SEO rewrites
        // Google sees: /images/baumpflege-hero-hamburg.png
        // Server serves: /images/baumpflege-hero.png
        // ══════════════════════════════════════════════════

        // Baumpflege
        { source: '/images/baumpflege-hero-:city.png', destination: '/images/baumpflege-hero.png' },
        { source: '/images/baumpflege-faq-:city.jpg', destination: '/images/baumpflege-faq.jpg' },
        { source: '/images/baumpflege-cta-:city.png', destination: '/images/baumpflege-cta.png' },

        // Galabau
        { source: '/images/galabau-hero-:city.png', destination: '/images/galabau-hero.png' },
        { source: '/images/galabau-erdarbeiten-:city.jpg', destination: '/images/galabau-erdarbeiten.jpg' },
        { source: '/images/galabau-cta-:city.png', destination: '/images/galabau-cta.png' },

        // Garten- und Landschaftsbau
        { source: '/images/garten-und-landschaftsbau-hero-:city.png', destination: '/images/garten-und-landschaftsbau-hero.png' },
        { source: '/images/galabau-ablauf-:city.jpg', destination: '/images/galabau-ablauf.jpg' },
        { source: '/images/garten-und-landschaftsbau-cta-:city.png', destination: '/images/garten-und-landschaftsbau-cta.png' },

        // Gartenpflege
        { source: '/images/gartenpflege-hero-:city.png', destination: '/images/gartenpflege-hero.png' },
        { source: '/images/gartenpflege-kalender-:city.jpg', destination: '/images/gartenpflege-kalender.jpg' },
        { source: '/images/gartenpflege-cta-:city.png', destination: '/images/gartenpflege-cta.png' },

        // Heckenschnitt
        { source: '/images/heckenschnitt-hero-:city.png', destination: '/images/heckenschnitt-hero.png' },
        { source: '/images/heckenschnitt-cta-:city.png', destination: '/images/heckenschnitt-cta.png' },

        // Pflasterarbeiten
        { source: '/images/pflasterarbeiten-hero-:city.png', destination: '/images/pflasterarbeiten-hero.png' },
        { source: '/images/pflasterarbeiten-qualitaet-:city.jpg', destination: '/images/pflasterarbeiten-qualitaet.jpg' },
        { source: '/images/pflasterarbeiten-cta-:city.png', destination: '/images/pflasterarbeiten-cta.png' },

        // Rollrasen
        { source: '/images/rollrasen-hero-:city.png', destination: '/images/rollrasen-hero.png' },
        { source: '/images/rollrasen-verlegung-:city.jpg', destination: '/images/rollrasen-verlegung.jpg' },
        { source: '/images/rollrasen-cta-:city.png', destination: '/images/rollrasen-cta.png' },

        // Terrassenbau
        { source: '/images/terrassenbau-hero-:city.png', destination: '/images/terrassenbau-hero.png' },
        { source: '/images/terrassenbau-cta-:city.png', destination: '/images/terrassenbau-cta.png' },

        // Zaunbau
        { source: '/images/zaunbau-hero-:city.png', destination: '/images/zaunbau-hero.png' },
        { source: '/images/zaunbau-cta-:city.png', destination: '/images/zaunbau-cta.png' },

        // City main page (rotating hero/cta images)
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-1.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-1.png' },
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-2.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-2.png' },
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-3.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-3.png' },
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-4.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-4.png' },
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-5.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-5.png' },
        { source: '/images/garten-landschaftsbau-gartengestaltung-projekt-:city-6.png', destination: '/images/garten-landschaftsbau-gartengestaltung-projekt-6.png' },
        { source: '/images/garten-landschaftsbau-traumgarten-beratung-:city-1.png', destination: '/images/garten-landschaftsbau-traumgarten-beratung-1.png' },
        { source: '/images/garten-landschaftsbau-traumgarten-beratung-:city-2.png', destination: '/images/garten-landschaftsbau-traumgarten-beratung-2.png' },
        { source: '/images/garten-landschaftsbau-traumgarten-beratung-:city-3.png', destination: '/images/garten-landschaftsbau-traumgarten-beratung-3.png' },
      ],
    };
  },
};

export default nextConfig;
