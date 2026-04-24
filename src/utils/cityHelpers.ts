/**
 * Returns "city.name und city.region" unless both are the same (e.g. Hamburg/Hamburg, Bremen/Bremen).
 * In that case, returns just "city.name und Umgebung".
 */
export function getCityAndRegion(city: { name: string; region: string }): string {
    if (city.name === city.region) {
        return `${city.name} und Umgebung`;
    }
    return `${city.name} und ${city.region}`;
}

/**
 * Returns "(city.region)" or "(Umgebung)" if city.name === city.region.
 */
export function getRegionLabel(city: { name: string; region: string }): string {
    if (city.name === city.region) {
        return 'Umgebung';
    }
    return city.region;
}
