const fs = require('fs');
const path = require('path');

const files = [
    'src/app/[city]/baumpflege/page.tsx',
    'src/app/[city]/galabau/page.tsx',
    'src/app/[city]/garten-und-landschaftsbau/page.tsx',
    'src/app/[city]/heckenschnitt/page.tsx',
    'src/app/[city]/pflasterarbeiten/page.tsx',
    'src/app/[city]/rollrasen/page.tsx',
    'src/app/[city]/terrassenbau/page.tsx',
    'src/app/[city]/zaunbau/page.tsx',
    'src/app/[city]/page.tsx',
];

let total = 0;

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    
    let lines = fs.readFileSync(file, 'utf-8').split('\n');
    let modified = false;
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i].trim();
        
        // Find <img tags that span multiple lines and have 'fill' prop
        if (line.startsWith('<img') && !line.includes('fill="none"')) {
            // Look ahead to see if this img has a 'fill' prop (next/image leftover)
            let endIdx = i;
            let hasNextImageProps = false;
            
            for (let j = i; j < Math.min(i + 10, lines.length); j++) {
                const l = lines[j].trim();
                if (l === 'fill' || l === 'priority' || l.startsWith('quality=') || l.startsWith('sizes=')) {
                    hasNextImageProps = true;
                }
                if (l.endsWith('/>')) {
                    endIdx = j;
                    break;
                }
            }
            
            if (hasNextImageProps) {
                // Remove the entire <img ... /> block
                console.log(`  Removing img block at line ${i+1}-${endIdx+1} in ${file}`);
                lines.splice(i, endIdx - i + 1);
                modified = true;
                continue; // Don't increment i since we removed lines
            }
        }
        
        i++;
    }
    
    if (modified) {
        fs.writeFileSync(file, lines.join('\n'));
        total++;
        console.log('FIXED: ' + file);
    } else {
        console.log('NO CHANGE: ' + file);
    }
}

console.log('\nTotal: ' + total + ' files modified');
