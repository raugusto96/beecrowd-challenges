var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const line1 = lines.shift().split(' ');
const value1 = parseInt(line1[0]);
const value2 = parseInt(line1[1]);
const value3 = parseInt(line1[2]);

if (value1 > value2 && value1 > value3) {
  console.log(`${value1} eh o maior`);
} else if (value2 > value3) {
  console.log(`${value2} eh o maior`);
} else {
  console.log(`${value3} eh o maior`);
}
