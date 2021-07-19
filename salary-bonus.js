var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const nome = toString(lines.shift());
const baseSalary = parseFloat(lines.shift());
const sales = parseFloat(lines.shift());

const salesPercentage = (sales * 0.15);
const updatedSalary = (baseSalary + salesPercentage).toFixed(2);

console.log(`TOTAL = ${updatedSalary}`);