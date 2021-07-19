var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const id = parseInt(lines.shift());
const hours = parseInt(lines.shift());
const price = parseFloat(lines.shift());

const salary = (hours * price).toFixed(2);

console.log(`NUMBER = ${id}`);
console.log(`SALARY = U$ ${salary}`);