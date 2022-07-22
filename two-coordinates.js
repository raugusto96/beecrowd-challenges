var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(' ');

const [x, y] = numbers.map((number) => parseFloat(number));

if (x === 0 && y === 0) console.log('Origem')
else if (x === 0) console.log('Eixo Y');
else if (y === 0) console.log('Eixo X');
else if (x > 0 && y > 0) console.log('Q1');
else if (x < 0 && y > 0) console.log('Q2');
else if (x < 0 && y < 0) console.log('Q3');
else console.log('Q4');