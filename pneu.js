var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');

// Escreva um programa que, dada a pressão desejada digitada pelo motorista e a pressão do pneu lida pela bomba, indica a diferença entre a pressão desejada e a pressão lida.

const [pressionForMotorist, pressionForBomb] = lines;

console.log(Number(pressionForMotorist) - Number(pressionForBomb));