var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = lines[0].split(' ');

numbers = numbers.map((number) => Number(number));

let sortedNumbers = [...numbers];
sortedNumbers = sortedNumbers.sort((a, b) => a - b);

sortedNumbers.forEach((number) => console.log(number));

console.log();

numbers.forEach((number) => console.log(number));
