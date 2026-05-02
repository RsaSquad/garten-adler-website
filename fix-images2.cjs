const fs = require('fs');
const path = require('path');

const dirs = [
    'src/app/[city]/baumpflege',
    'src/app/[city]/galabau',
    'src/app/[city]/garten-und-landschaftsbau',
    'src/app/[city]/heckenschnitt',
    'src/app/[city]/pflasterarbeiten',
    'src/app/[city]/rollrasen',
    'src/app/[city]/terrassenbau',
    'src/app/[city]/zaunbau',
    'src/app/[city]',
];

let total = 0;

for (const dir of dirs) {
    const file = path.join(dir, 'page.tsx');
    if (!fs.existsSync(file)) continue;
    
    let c = fs.readFileSync(file, 'utf-8');
    const original = c;
    
    // Remove entire <img ... fill ... /> blocks (these are former next/image background images)
    // They span multiple lines and have fill, priority, quality, sizes props
    c = c.replace(/<img\s*\r?\n\s+src=\{[^}]+\}\s*\r?\n\s+alt=\{[^}]+\}\s*\r?\n\s+fill\s*\r?\n\s+(?:priority\s*\r?\n\s+)?(?:quality=\{\d+\}\s*\r?\n\s+)?(?:sizes="[^"]+"\s*\r?\n\s+)?className="[^"]+"\s*\r?\n?\s*\/>/g, '');
    
    // Also remove any remaining multi-line <img with fill and className="object-cover"
    c = c.replace(/<img\s*\r?\n\s+src=\{[^}]+\}\s*\r?\n\s+alt=\{[^}]+\}\s*\r?\n\s+fill\s*\r?\n\s+className="[^"]+"\s*\r?\n?\s+quality=\{\d+\}\s*\r?\n?\s*\/>/g, '');
    
    if (c !== original) {
        fs.writeFileSync(file, c);
        total++;
        console.log('FIXED: ' + file);
    } else {
        console.log('NO CHANGE: ' + file);
    }
}

console.log('\nTotal: ' + total + ' files modified');
