import { getCityBySlug } from '@/data/cities';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CityGartenpflegePage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) notFound();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Gartenpflege in {city.name}</h1>
            <p>Test page - minimal version</p>
            <p>Region: {city.region}</p>
            <p>Distance: {city.distance}km</p>
        </div>
    );
}
