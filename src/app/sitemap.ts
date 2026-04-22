import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

// Festes Datum für konsistentes Caching – bei Content-Updates aktualisieren
const LAST_UPDATED = '2026-04-21';

const services = [
    'pflasterarbeiten',
    'gartenpflege',
    'rollrasen',
    'baumpflege',
    'heckenschnitt',
    'galabau',
    'zaunbau',
    'garten-und-landschaftsbau',
    'terrassenbau',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://garten-adler.de';

    // Haupt-Seiten
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: LAST_UPDATED,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/standorte`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/garten-und-landschaftsbau`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Service-Hauptseiten
        ...services.filter(s => s !== 'garten-und-landschaftsbau').map((service) => ({
            url: `${baseUrl}/${service}`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        })),
        {
            url: `${baseUrl}/impressum`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Städte-Seiten (Hauptseite pro Stadt)
    const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
        url: `${baseUrl}/${city.slug}`,
        lastModified: LAST_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: city.population > 50000 ? 0.8 : city.population > 20000 ? 0.7 : 0.6,
    }));

    // Städte × Services (alle Kombinationen)
    const cityServicePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
        services.map((service) => ({
            url: `${baseUrl}/${city.slug}/${service}`,
            lastModified: LAST_UPDATED,
            changeFrequency: 'monthly' as const,
            priority: city.population > 50000 ? 0.75 : city.population > 20000 ? 0.65 : 0.55,
        }))
    );

    return [...mainPages, ...cityPages, ...cityServicePages];
}
