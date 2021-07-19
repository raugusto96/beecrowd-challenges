var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const totalDistance = parseInt(lines.shift());
const fuelConsumption = parseFloat(lines.shift());

const averageConsumption = (totalDistance / fuelConsumption);

console.log(`${averageConsumption.toFixed(3)} km/l`);