const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/site/legacy-pages.generated.ts');

if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf8');
  // We can parse the routes using regex on keys
  const keys = [];
  const regex = /"(\/[^"]+)"\s*:\s*\{/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  fs.writeFileSync('routes_list.txt', keys.join('\n'), 'utf8');
  console.log('Routes list written!');
} else {
  console.log('File does not exist!');
}
