var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let time = parseInt(lines.shift());

const year = parseInt(time / 365);
time -= year * 365;

const month = parseInt(time / 30);
time -= month * 30;

const days = time;

console.log(`${year} ano(s)`);
console.log(`${month} mes(es)`);
console.log(`${days} dia(s)`);
