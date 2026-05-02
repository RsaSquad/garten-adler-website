const fs = require('fs');
const files = [
    'src/app/[city]/baumpflege/page.tsx',
    'src/app/[city]/galabau/page.tsx',
    'src/app/[city]/garten-und-landschaftsbau/page.tsx',
    'src/app/[city]/gartenpflege/page.tsx',
    'src/app/[city]/heckenschnitt/page.tsx',
    'src/app/[city]/pflasterarbeiten/page.tsx',
    'src/app/[city]/rollrasen/page.tsx',
    'src/app/[city]/terrassenbau/page.tsx',
    'src/app/[city]/zaunbau/page.tsx',
    'src/app/[city]/page.tsx',
];

for (const f of files) {
    let c = fs.readFileSync(f, 'utf-8');
    
    // Remove edge runtime, dynamicParams, revalidate - replace with force-dynamic
    c = c.replace(
        /export const runtime = 'edge';\r?\nexport const dynamicParams = true;\r?\nexport const revalidate = \d+;[^\n]*\n/g,
        "export const dynamic = 'force-dynamic';\n"
    );
    
    fs.writeFileSync(f, c);
    console.log('OK: ' + f);
}
console.log('Done!');
