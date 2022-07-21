var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numbers = lines[0].split(' ');
const examNote = parseFloat(lines[1]);
let finalAverage = 0;

numbers = numbers.map((number) => parseFloat(number));
const heights = [2, 3, 4, 1];

const average = numbers
  .reduce((average, number, index) => average + number * heights[index], 0)
  / 10;

if (average >= 5 && average < 7) {
  console.log(`Media: ${average.toFixed(1)}`);
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${examNote}`);
  finalAverage = (average + examNote) / 2;
  console.log(finalAverage >= 5
  ? "Aluno aprovado."
  : "Aluno reprovado.");
  console.log(`Media final: ${finalAverage.toFixed(1)}`);
} else if (average >= 7) {
  console.log(`Media: ${average.toFixed(1)}`);
  console.log("Aluno aprovado.");
} else {
  console.log(`Media: ${average.toFixed(1)}`);
  console.log("Aluno reprovado.");
}