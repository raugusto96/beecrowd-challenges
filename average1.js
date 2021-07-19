var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const num1 = parseFloat(lines.shift());
const num2 = parseFloat(lines.shift());
const media = parseFloat(((num1*3.5)+(num2*7.5))/11).toFixed(5);

console.log(`MEDIA = ${media}`);