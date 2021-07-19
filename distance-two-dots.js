var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const line1 = lines.shift().split(' ');
const x1 = parseFloat(line1[0])
const y1 = parseFloat(line1[1])

const line2 = lines.shift().split(' ');
const x2 = parseFloat(line2[0])
const y2 = parseFloat(line2[1])

const axis = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log(axis.toFixed(4));