var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const time = parseInt(lines.shift());
let actualTime = time;

const hours = Math.floor(actualTime / 3600);
actualTime -= hours * 3600;

const minutes = Math.floor(actualTime / 60);
actualTime -= minutes * 60;

const seconds = actualTime;

console.log(`${hours}:${minutes}:${seconds}`);