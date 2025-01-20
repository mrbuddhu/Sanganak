const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 192, height: 192, name: 'icon-192x192.png' },
  { width: 512, height: 512, name: 'icon-512x512.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 1200, height: 630, name: 'og-image.jpg' },
  { width: 1200, height: 630, name: 'twitter-image.jpg' },
];

async function generateIcons() {
  const inputSvg = path.join(__dirname, '../public/icon.svg');
  const publicDir = path.join(__dirname, '../public');

  for (const size of sizes) {
    try {
      await sharp(inputSvg).resize(size.width, size.height).toFile(path.join(publicDir, size.name));

      console.log(`Generated ${size.name}`);
    } catch (error) {
      console.error(`Error generating ${size.name}:`, error);
    }
  }
}
