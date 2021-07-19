var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pi = 3.14159;
const line1 = lines.shift().split(' ');
const A = parseFloat(line1[0]);
const B = parseFloat(line1[1]);
const C = parseFloat(line1[2]);

const areaTriagleRectangle = (A * C) / 2;
const areaCircle = (pi * (C * C));
const areaTrapeze = ((A + B) * C) / 2
const areaSquare = B * B;
const areaRectangle = A * B;

console.log(`TRIANGULO: ${areaTriagleRectangle.toFixed(3)}`);
console.log(`CIRCULO: ${areaCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapeze.toFixed(3)}`);
console.log(`QUADRADO: ${areaSquare.toFixed(3)}`);
console.log(`RETANGULO: ${areaRectangle.toFixed(3)}`);
