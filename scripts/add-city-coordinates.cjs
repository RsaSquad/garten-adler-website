// Script to add lat/lng coordinates to all cities
// Uses a mapping of known coordinates for cities in the Hamburg region

const fs = require('fs');
const path = require('path');

// Known coordinates for cities (lat, lng) - sourced from geographic data
const cityCoords = {
  "hamburg": [53.5511, 9.9937],
  "luebeck": [53.8655, 10.6866],
  "neumunster": [54.0740, 9.9838],
  "norderstedt": [53.7060, 9.9937],
  "luneburg": [53.2464, 10.4115],
  "elmshorn": [53.7542, 9.6562],
  "stade": [53.5977, 9.4760],
  "cuxhaven": [53.8600, 8.6940],
  "pinneberg": [53.6552, 9.7994],
  "buchholz": [53.3200, 9.8680],
  "seevetal": [53.3990, 9.9630],
  "buxtehude": [53.4747, 9.6872],
  "winsen-luhe": [53.3573, 10.2089],
  "ahrensburg": [53.6753, 10.2414],
  "wedel": [53.5833, 9.7167],
  "geesthacht": [53.4372, 10.3708],
  "itzehoe": [53.9247, 9.5127],
  "henstedt-ulzburg": [53.7942, 9.9827],
  "reinbek": [53.5097, 10.2472],
  "bad-oldesloe": [53.8111, 10.3739],
  "tornesch": [53.7000, 9.7167],
  "uetersen": [53.6833, 9.6667],
  "quickborn": [53.7333, 9.9000],
  "schenefeld": [53.5833, 9.8167],
  "glinde": [53.5439, 10.2053],
  "barsbüttel": [53.5667, 10.1833],
  "schwarzenbek": [53.5033, 10.4786],
  "lauenburg": [53.3722, 10.5556],
  "bad-segeberg": [53.9361, 10.3089],
  "kaltenkirchen": [53.8342, 9.9611],
  "halstenbek": [53.6333, 9.8333],
  "rellingen": [53.6500, 9.8167],
  "barmstedt": [53.7833, 9.7667],
  "bargteheide": [53.7283, 10.2583],
  "ammersbek": [53.6833, 10.1833],
  "trittau": [53.6111, 10.4050],
  "wentorf": [53.4917, 10.2500],
  "oststeinbek": [53.5333, 10.1500],
  "grosshansdorf": [53.6667, 10.2667],
  "stelle": [53.3833, 10.0833],
  "rosengarten": [53.4000, 9.9333],
  "neu-wulmstorf": [53.4667, 9.7833],
  "tostedt": [53.2833, 9.7167],
  "hollenstedt": [53.3667, 9.7167],
  "jesteburg": [53.3000, 9.9667],
  "hanstedt": [53.2667, 9.9167],
  "salzhausen": [53.2333, 10.1833],
  "reppenstedt": [53.2667, 10.3500],
  "bardowick": [53.2833, 10.3833],
  "adendorf": [53.2667, 10.4500],
  "scharnebeck": [53.2667, 10.4833],
  "amelinghausen": [53.1167, 10.2167],
  "melbeck": [53.1833, 10.3833],
  "embsen": [53.1667, 10.3500],
  "deutsch-evern": [53.2167, 10.4333],
  "wendisch-evern": [53.2167, 10.4167],
  "barendorf": [53.2500, 10.4833],
  "vögelsen": [53.2833, 10.4000],
  "mechtersen": [53.3000, 10.3500],
  "oldendorf-luhe": [53.3167, 10.0333],
  "toppenstedt": [53.3167, 10.1167],
  "garstedt": [53.3000, 10.1667],
  "wulfsen": [53.3333, 10.1500],
  "marxen": [53.3167, 10.0667],
  "undeloh": [53.2000, 9.9500],
  "egestorf": [53.1833, 9.8667],
  "bispingen": [53.0833, 9.9833],
  "soltau": [52.9833, 9.8333],
  "munster": [52.9833, 10.0833],
  "schneverdingen": [53.1167, 9.7833],
  "neuenkirchen": [53.1000, 9.7167],
  "wietzendorf": [52.9167, 10.1000],
  "hermannsburg": [52.8333, 10.0833],
  "faßberg": [52.9000, 10.1667],
  "bad-bevensen": [53.0833, 10.5833],
  "uelzen": [52.9667, 10.5667],
  "medingen": [53.1167, 10.5000],
  "bienenbüttel": [53.1333, 10.4833],
  "bad-bodenteich": [52.8167, 10.7167],
  "wrestedt": [52.9333, 10.6167],
  "suderburg": [52.8833, 10.4500],
  "ebstorf": [53.0167, 10.4167],
  "rosche": [52.9833, 10.7500],
  "dannenberg": [53.0833, 11.0833],
  "luchow": [52.9667, 11.1500],
  "hitzacker": [53.1500, 11.0500],
  "gartow": [53.0167, 11.4667],
  "clenze": [52.9333, 10.9500],
  "bergen": [52.8100, 9.9650],
  "celle": [52.6225, 10.0806],
  "gifhorn": [52.4819, 10.5472],
  "wolfsburg": [52.4227, 10.7865],
  "braunschweig": [52.2689, 10.5268],
  "peine": [52.3203, 10.2342],
  "hildesheim": [52.1500, 9.9508],
  "salzgitter": [52.1544, 10.3342],
  "goslar": [51.9060, 10.4298],
  "langenhagen": [52.4486, 9.7497],
  "garbsen": [52.4172, 9.5972],
  "laatzen": [52.3167, 9.8000],
  "springe": [52.2167, 9.5500],
  "barsinghausen": [52.3000, 9.4667],
  "wunstorf": [52.4333, 9.4333],
  "neustadt-am-rubenberge": [52.5000, 9.4667],
  "nienburg": [52.6333, 9.2167],
  "stadthagen": [52.3167, 9.2000],
  "rinteln": [52.1833, 9.0833],
  "hameln": [52.1000, 9.3500],
  "holzminden": [51.8333, 9.4500],
  "bad-pyrmont": [51.9833, 9.2500],
  "nordenham": [53.4833, 8.4833],
  "brake": [53.3333, 8.4833],
  "delmenhorst": [53.0500, 8.6333],
  "oldenburg": [53.1439, 8.2146],
  "wilhelmshaven": [53.5167, 8.1167],
  "emden": [53.3667, 7.2000],
  "aurich": [53.4700, 7.4828],
  "leer": [53.2333, 7.4500],
  "papenburg": [53.0667, 7.4000],
  "meppen": [52.6833, 7.2833],
  "lingen": [52.5167, 7.3167],
  "nordhorn": [52.4333, 7.0667],
  "osnabrück": [52.2799, 8.0472],
  "minden": [52.2833, 8.9167],
  "herford": [52.1167, 8.6667],
  "bielefeld": [52.0302, 8.5325],
  "rendsburg": [54.3064, 9.6645],
  "husum": [54.4856, 9.0581],
  "schleswig": [54.5142, 9.5619],
  "flensburg": [54.7937, 9.4469],
  "kiel": [54.3233, 10.1228],
  "eckernförde": [54.4747, 9.8372],
  "plön": [54.1583, 10.4222],
  "eutin": [54.1378, 10.6189],
  "bad-schwartau": [53.9178, 10.6939],
  "neustadt-in-holstein": [54.1069, 10.8122],
  "heiligenhafen": [54.3697, 10.9786],
  "fehmarn": [54.4444, 11.1944],
  "timmendorfer-strand": [53.9978, 10.7789],
  "scharbeutz": [54.0267, 10.7500],
  "stockelsdorf": [53.8833, 10.6500],
  "ratekau": [53.9333, 10.7167],
  "bad-bramstedt": [53.9167, 9.8833],
  "wahlstedt": [53.9500, 10.2167],
  "trappenkamp": [54.1000, 10.1333],
  "boostedt": [54.0167, 10.0167],
  "rickling": [54.0000, 9.9833],
  "kellinghusen": [53.9500, 9.7167],
  "krempe": [53.8333, 9.4833],
  "gluckstadt": [53.7833, 9.4167],
  "wilster": [53.9167, 9.3667],
  "brunsbüttel": [53.8833, 9.1167],
  "heide": [54.1956, 9.0939],
  "meldorf": [54.0833, 9.0667],
  "büsum": [54.1333, 8.8583],
  "wesselburen": [54.1667, 9.0333],
  "lütjenburg": [54.2833, 10.5833],
  "preetz": [54.2333, 10.2833],
  "molfsee": [54.2667, 10.0667],
  "kronshagen": [54.3333, 10.0833],
  "altenholz": [54.3667, 10.1333],
  "laboe": [54.4000, 10.2333],
  "schönkirchen": [54.3500, 10.2000],
  "raisdorf": [54.2833, 10.2333],
  "schwentinental": [54.2667, 10.2333],
  "lensahn": [54.2167, 10.8833],
  "oldenburg-in-holstein": [54.2978, 10.8889],
  "grömitz": [54.1500, 10.9500],
  "kellenhusen": [54.1833, 11.0667],
  "dahme": [54.2167, 11.0833],
  "wyk-auf-föhr": [54.6917, 8.5667],
  "niebüll": [54.7858, 8.8289],
  "leck": [54.7667, 9.0000],
  "bredstedt": [54.6167, 8.9667],
  "tönning": [54.3167, 8.9500],
  "friedrichstadt": [54.3750, 9.0917],
  "st-peter-ording": [54.3000, 8.6333],
  "burg-auf-fehmarn": [54.4333, 11.2000],
  "harsefeld": [53.4500, 9.5167],
  "horneburg": [53.5083, 9.5750],
  "jork": [53.5333, 9.6833],
  "drochtersen": [53.7167, 9.3833],
  "himmelpforten": [53.6167, 9.3000],
  "oldendorf-stade": [53.5667, 9.3667],
  "fredenbeck": [53.5333, 9.4333],
  "apensen": [53.4667, 9.5833],
  "nottensdorf": [53.5000, 9.6333],
  "dollern": [53.5333, 9.5500],
  "rehlingen": [53.0000, 10.3000],
  "barum": [53.2333, 10.4833],
  "vastorf": [53.2000, 10.5333],
  "neetze": [53.2667, 10.5833],
  "bleckede": [53.2917, 10.7333],
  "dahlenburg": [53.1833, 10.7333],
  "thomasburg": [53.2333, 10.6500],
  "nahrendorf": [53.2333, 10.8167],
};

// Read the cities file
const filePath = path.join(__dirname, '..', 'src', 'data', 'cities.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Add lat/lng to interface
content = content.replace(
  `export interface City {
    slug: string;
    name: string;
    population: number;
    region: string;
    distance: number; // km von Hamburg
    description: string;
    plz?: string;
    districts?: string[];
}`,
  `export interface City {
    slug: string;
    name: string;
    population: number;
    region: string;
    distance: number; // km von Hamburg
    description: string;
    plz?: string;
    districts?: string[];
    lat?: number;
    lng?: number;
}`
);

// Add coordinates to each city entry
let added = 0;
let missing = [];
for (const [slug, [lat, lng]] of Object.entries(cityCoords)) {
  // Find the pattern: slug: "cityslug",\n        name: 
  const pattern = `slug: "${slug}",\r\n        name:`;
  const patternLF = `slug: "${slug}",\n        name:`;
  
  if (content.includes(pattern)) {
    content = content.replace(pattern, `slug: "${slug}",\r\n        lat: ${lat},\r\n        lng: ${lng},\r\n        name:`);
    added++;
  } else if (content.includes(patternLF)) {
    content = content.replace(patternLF, `slug: "${slug}",\n        lat: ${lat},\n        lng: ${lng},\n        name:`);
    added++;
  }
}

// Update getNearbyCities to use real geo distance
const oldFunction = `export function getNearbyCities(slug: string, limit: number = 6): City[] {
    const currentCity = getCityBySlug(slug);
    if (!currentCity) return [];

    return cities
        .filter(city => city.slug !== slug)
        .sort((a, b) => {
            // Sortiere nach Distanz zum aktuellen Ort
            const distA = Math.abs(a.distance - currentCity.distance);
            const distB = Math.abs(b.distance - currentCity.distance);
            return distA - distB;
        })
        .slice(0, limit);
}`;

const newFunction = `// Haversine distance in km between two coordinates
function geoDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function getNearbyCities(slug: string, limit: number = 6): City[] {
    const currentCity = getCityBySlug(slug);
    if (!currentCity) return [];

    return cities
        .filter(city => city.slug !== slug)
        .sort((a, b) => {
            // Sortiere nach echter geografischer Nähe
            if (currentCity.lat && currentCity.lng) {
                const distA = (a.lat && a.lng) ? geoDistance(currentCity.lat, currentCity.lng, a.lat, a.lng) : 9999;
                const distB = (b.lat && b.lng) ? geoDistance(currentCity.lat, currentCity.lng, b.lat, b.lng) : 9999;
                return distA - distB;
            }
            // Fallback: Distanz von Hamburg
            const distA = Math.abs(a.distance - currentCity.distance);
            const distB = Math.abs(b.distance - currentCity.distance);
            return distA - distB;
        })
        .slice(0, limit);
}`;

content = content.replace(oldFunction, newFunction);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Added coordinates to ${added} cities`);
console.log(`✅ Updated getNearbyCities with Haversine geo-distance`);
