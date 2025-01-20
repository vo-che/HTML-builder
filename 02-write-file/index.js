const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdout } = process;

const directories = path.join(__dirname, 'text.txt');
const readStream = fs.createWriteStream(directories);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

stdout.write('Hello! Leave me a message! (to exit press "exit" or ctrl+c):\n');

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  }
  readStream.write(input + '\n');
});

rl.on('SIGINT', () => {
  console.log('\nGoodbye!\n Check your message in the text.txt file');
  rl.close();
});
