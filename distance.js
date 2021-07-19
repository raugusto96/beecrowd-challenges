var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const km = parseInt(lines.shift());
const minutes = (60 * km) / 30;

console.log(`${minutes} minutos`);