var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

function isChar(character) {
  return character.toUpperCase() !== character.toLowerCase();
}

let number = parseInt(lines.shift());

while (number-- > 0) {
  let text = lines.shift().split('');
  text = text.map(letter => {
    if (isChar(letter)) return String.fromCharCode(letter.charCodeAt(0) + 3);
    return letter;
  });
  text = text.reverse();
  text = text.map((letter, index) => {
    if(index + 1 <= text.length / 2) return letter;
    return String.fromCharCode(letter.charCodeAt(0) - 1);
  });

  console.log(text.join(''));
}

