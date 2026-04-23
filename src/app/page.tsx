import { Header, Hero, Services, About, Projects, Testimonials, Contact, Footer, FAQ } from '@/components';
import { homepageFAQs } from '@/lib/faqData';

// JSON-LD Structured Data für die Homepage
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://garten-adler.de/#organization',
      name: 'Adler & Sohn',
      url: 'https://garten-adler.de',
      logo: 'https://garten-adler.de/logo.png',
      description: 'Professioneller Garten- und Landschaftsbau in Lüneburg und Umgebung.',
      telephone: '04131 - 394 2971',
      email: 'galabau@sohn-adler.de',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lüneburg',
        addressRegion: 'Niedersachsen',
        addressCountry: 'DE',
      },
      sameAs: [
        'https://www.facebook.com/adler-sohn',
        'https://www.instagram.com/adler-sohn',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://garten-adler.de/#localbusiness',
      name: 'Adler & Sohn - Garten- & Landschaftsbau',
      description: 'Professioneller Garten- und Landschaftsbau in Lüneburg und über 200 Städten in der Region. Gartengestaltung, Terrassenbau, Pflasterarbeiten, Rollrasen und mehr.',
      url: 'https://garten-adler.de',
      telephone: '04131 - 394 2971',
      email: 'galabau@sohn-adler.de',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lüneburg',
        addressRegion: 'Niedersachsen',
        addressCountry: 'DE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.2464,
        longitude: 10.4115,
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Niedersachsen' },
        { '@type': 'AdministrativeArea', name: 'Schleswig-Holstein' },
        { '@type': 'AdministrativeArea', name: 'Hamburg' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Garten- und Landschaftsbau Leistungen',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gartengestaltung' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrassenbau' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pflasterarbeiten' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rollrasen' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zaunbau & Sichtschutz' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gartenpflege' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Baumpflege' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heckenschnitt' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://garten-adler.de/#website',
      url: 'https://garten-adler.de',
      name: 'Adler & Sohn',
      publisher: { '@id': 'https://garten-adler.de/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://garten-adler.de/standorte?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: homepageFAQs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <FAQ items={homepageFAQs} />
      </main>
      <Footer />
    </>
  );
}
