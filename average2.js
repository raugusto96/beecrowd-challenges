var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const num1 = parseFloat(lines.shift());
const num2 = parseFloat(lines.shift());
const num3 = parseFloat(lines.shift());
const media = parseFloat(((num1*2)+(num2*3)+(num3*5))/10).toFixed(1);

console.log(`MEDIA = ${media}`);