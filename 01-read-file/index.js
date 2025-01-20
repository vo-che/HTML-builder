const fs = require('fs');
const path = require('path');

const directories = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(directories);

let data = '';

readStream.on('data', (chunk) => {
  data += chunk;
});

readStream.on('end', () => {
  process.stdout.write(data);
});

readStream.on('error', (error) => {
  process.stdout.write(error.message);
});
