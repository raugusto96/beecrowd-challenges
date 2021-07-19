var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const time = parseInt(lines.shift());
const speed = parseInt(lines.shift());

const consumption = (time * speed) / 12;

console.log(`${consumption.toFixed(3)}`);