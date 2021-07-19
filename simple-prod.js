var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let num1 = parseInt(lines.shift());
let num2 = parseInt(lines.shift());
console.log('PROD = ' + num1 * num2);

console.log(sum(3, 9));
console.log(sum(-30, 10));
console.log(sum(0, 9));