var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let value = parseFloat(input);
const notes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
notes.forEach(note => {
    console.log(Math.floor(value/note) + ' nota(s) de R$ ' + note + '.00');
    value = value % note;
});

console.log('MOEDAS:');
value = parseInt(value * 100);

coins.forEach(coin => {
    coin *= 100;
    console.log(parseInt(value/coin) + ' moeda(s) de R$ ' + (coin/100).toFixed(2));
    value = value % coin;
});
