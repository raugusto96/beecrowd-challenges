var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')[0];

const convertStringToNumber = (numbers) => numbers.map((number) => Number(number));

const numbers = convertStringToNumber(lines.split(' '));

const [a, b, c] = numbers;

const delta = b * b - 4 * a * c;


if (delta < 0 || a === 0) {
  console.log("Impossivel calcular");
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
}
