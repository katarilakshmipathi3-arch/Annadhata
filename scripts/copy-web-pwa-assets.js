const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const outputDir = path.join(root, 'mobile', 'dist');

if (!fs.existsSync(outputDir)) {
  throw new Error(`Expo web export not found: ${outputDir}`);
}

fs.copyFileSync(path.join(publicDir, 'sw.js'), path.join(outputDir, 'sw.js'));
fs.cpSync(path.join(publicDir, 'icons'), path.join(outputDir, 'icons'), {
  recursive: true,
  force: true,
});
