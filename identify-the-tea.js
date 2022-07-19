var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');

const tea = Number(lines[0]);
const competitors = lines[1].split(' ');

// Solução 1
// Mais performatica
let correctAnswer = 0;
for (let index = 0; index < competitors.length; index += 1) {
  if (tea === Number(competitors[index])) {
    correctAnswer += 1;
  }
}

console.log(correctAnswer);

// Solução 2
// Menos performatica

const correctAlternativeAsnwer = competitors
  .reduce((acc, curr) => Number(curr) === tea ? acc + 1 : acc, 0);

console.log(correctAlternativeAsnwer);