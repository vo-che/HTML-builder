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
    stdout.write('\nGoodbye!\n Check your message in the text.txt file');
    rl.close();
    return;
  }
  readStream.write(input + '\n');
});

rl.on('SIGINT', () => {
  stdout.write('\nGoodbye!\n Check your message in the text.txt file');
  rl.close();
});
