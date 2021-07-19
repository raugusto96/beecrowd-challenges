var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const line1 = lines.shift().split(' ');
const cod1 = parseInt(line1[0]);
const quantity1 = parseInt(line1[1]);
const valor1 = parseFloat(line1[2]);

const line2 = lines.shift().split(' ');
const cod2 = parseInt(line2[0]);
const quantity2 = parseInt(line2[1]);
const valor2 = parseFloat(line2[2]);

const totalPrice = (quantity1 * valor1) + (quantity2 * valor2);

console.log(`VALOR A PAGAR: R$ ${totalPrice.toFixed(2)}`);