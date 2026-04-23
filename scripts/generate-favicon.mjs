import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '..', 'public', 'images', 'logo.png');

// Generate favicon.ico (32x32)
const favicon32 = await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

// Generate apple-touch-icon (180x180)
const appleIcon = await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(__dirname, '..', 'public', 'apple-touch-icon.png'));

// Generate favicon-16x16
await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(__dirname, '..', 'public', 'favicon-16x16.png'));

// Generate favicon-32x32
await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(__dirname, '..', 'public', 'favicon-32x32.png'));

// Generate android-chrome-192x192
await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(__dirname, '..', 'public', 'android-chrome-192x192.png'));

// Generate android-chrome-512x512
await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(__dirname, '..', 'public', 'android-chrome-512x512.png'));

// For .ico we just use the 32x32 PNG (browsers accept PNG as favicon)
writeFileSync(join(__dirname, '..', 'public', 'favicon.ico'), favicon32);

console.log('✅ All favicons generated!');
