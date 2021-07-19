var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const cedules = parseInt(lines.shift());
let actual = cedules;

const notes100 = Math.floor(actual / 100);
actual -= notes100 * 100;

const notes50 = Math.floor(actual / 50);
actual -= notes50 * 50;

const notes20 = Math.floor(actual / 20);
actual -= notes20 * 20;

const notes10 = Math.floor(actual / 10);
actual -= notes10 * 10;

const notes5 = Math.floor(actual / 5);
actual -= notes5 * 5;

const notes2 = Math.floor(actual / 2);
actual -= notes2 * 2;

const notes1 = actual;

console.log(cedules);
console.log(`${notes100} nota(s) de R$ 100,00`);
console.log(`${notes50} nota(s) de R$ 50,00`);
console.log(`${notes20} nota(s) de R$ 20,00`);
console.log(`${notes10} nota(s) de R$ 10,00`);
console.log(`${notes5} nota(s) de R$ 5,00`);
console.log(`${notes2} nota(s) de R$ 2,00`);
console.log(`${notes1} nota(s) de R$ 1,00`);