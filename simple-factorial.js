var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');

// Sem recursividade
// const getFatorial = (number) => {
//   let result = number;
//   for (let index = 1; index < number; index += 1) {
//     result *= index;
//   }
//   return result;
// };

// console.log('Saida: ', getFatorial(Number(lines[0])));

// Com recursividade
const calcFatorial = (number) => {
  if (number < 0) {
    throw new Error("Number must not be negative");
  }
  if (number <= 1) {
    return 1;
  }
  return number * calcFatorial(number - 1);
};

console.log(calcFatorial(Number(lines[0])));