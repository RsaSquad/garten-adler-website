import type { Metadata } from 'next';
import BewerbungsFunnel from '@/components/BewerbungsFunnel';

export const metadata: Metadata = {
  title: 'Karriere – Werde Teil unseres Teams',
  description:
    'Bewirb dich jetzt bei Adler & Sohn Galabau! Offene Stellen im Garten- und Landschaftsbau in Lüneburg und Umgebung. Einfach, schnell und unkompliziert.',
  alternates: {
    canonical: 'https://garten-adler.de/karriere',
  },
  openGraph: {
    title: 'Karriere – Werde Teil unseres Teams',
    description:
      'Bewirb dich jetzt bei Adler & Sohn Galabau! Offene Stellen im Garten- und Landschaftsbau in Lüneburg und Umgebung.',
    url: 'https://garten-adler.de/karriere',
  },
};

// JSON-LD Structured Data für die Karriere-Seite
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'JobPosting',
      title: 'Garten- und Landschaftsbauer (m/w/d)',
      description:
        'Wir suchen motivierte Mitarbeiter für unser Garten- und Landschaftsbau-Team in Lüneburg und Umgebung. Bewirb dich jetzt – einfach, schnell und unkompliziert.',
      datePosted: '2025-01-01',
      validThrough: '2026-12-31',
      employmentType: 'FULL_TIME',
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lüneburg',
          addressRegion: 'Niedersachsen',
          addressCountry: 'DE',
        },
      },
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Adler & Sohn',
        sameAs: 'https://garten-adler.de',
        logo: 'https://garten-adler.de/images/logo.png',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://garten-adler.de/karriere',
      url: 'https://garten-adler.de/karriere',
      name: 'Karriere – Werde Teil unseres Teams',
      description:
        'Bewirb dich jetzt bei Adler & Sohn Galabau! Offene Stellen im Garten- und Landschaftsbau in Lüneburg und Umgebung.',
      isPartOf: { '@id': 'https://garten-adler.de/#website' },
    },
  ],
};

export default function KarrierePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <BewerbungsFunnel />
      </main>
    </>
  );
}

