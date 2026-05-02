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
    'src/app/[city]', // main city page
];

let totalChanges = 0;

for (const dir of dirs) {
    const file = path.join(dir, 'page.tsx');
    if (!fs.existsSync(file)) {
        console.log('SKIP (not found): ' + file);
        continue;
    }
    
    let content = fs.readFileSync(file, 'utf-8');
    let changes = 0;
    
    // 1. Replace "import Image from 'next/image';" with nothing (remove the import)
    if (content.includes("import Image from 'next/image';")) {
        content = content.replace("import Image from 'next/image';\r\n", '');
        content = content.replace("import Image from 'next/image';\n", '');
        changes++;
    }
    
    // 2. Replace <Image> components used for hero backgrounds with CSS background-image style
    // Pattern: <Image src={`...`} alt="..." fill priority quality={85} sizes="100vw" className="object-cover z-0" />
    // Replace with nothing (remove the Image tag) and add inline style to parent section
    const imageRegex = /<Image\s+src=\{[^}]+\}\s+alt=\{[^}]+\}\s+fill\s+(?:priority\s+)?(?:quality=\{\d+\}\s+)?(?:sizes="[^"]+"\s+)?className="object-cover[^"]*"\s*\/>/g;
    const matches = content.match(imageRegex);
    if (matches) {
        for (const match of matches) {
            content = content.replace(match, '');
            changes++;
        }
    }
    
    // 3. Replace remaining <Image> with fill prop (background images in CTA/FAQ sections)
    const imageRegex2 = /<Image\s*\n\s+src=\{[^}]+\}\s*\n\s+alt=\{[^}]+\}\s*\n\s+fill\s*\n\s+(?:quality=\{\d+\}\s*\n\s+)?(?:sizes="[^"]+"\s*\n\s+)?className="object-cover[^"]*"\s*\n?\s*\/>/g;
    const matches2 = content.match(imageRegex2);
    if (matches2) {
        for (const match of matches2) {
            content = content.replace(match, '');
            changes++;
        }
    }
    
    // 4. Replace all remaining <Image ... /> with <img ... />
    // Simple Image tags (logo etc)
    content = content.replace(/<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+width=\{(\d+)\}\s+height=\{(\d+)\}\s+className="([^"]+)"\s*\/>/g, 
        '<img src="$1" alt="$2" width={$3} height={$4} className="$5" />');
    
    // Image tags with template literal src
    content = content.replace(/<Image\s+src=\{(`[^`]+`)\}\s+alt=\{(`[^`]+`)\}\s+fill\s+className="([^"]+)"\s+quality=\{(\d+)\}\s*\/>/g, '');
    
    // Any remaining Image tags - just convert to img
    content = content.replace(/<Image\b/g, '<img');
    
    if (changes > 0 || content !== fs.readFileSync(file, 'utf-8')) {
        fs.writeFileSync(file, content);
        totalChanges++;
        console.log('FIXED (' + changes + ' Image removals): ' + file);
    } else {
        console.log('NO CHANGES: ' + file);
    }
}

console.log('\nTotal files modified: ' + totalChanges);
