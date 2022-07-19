var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');


// João fez uma pesquisa em seu site de busca predileto, e encontrou a resposta que estava procurando no terceiro link listado. Além disso, ele viu, pelo site, que t pessoas já haviam clicado neste link antes. João havia lido anteriormente, também na Internet, que o número de pessoas que clicam no segundo link listado é o dobro de número de pessoas que clicam no terceiro link listado. Nessa leitura, ele também descobriu que o número de pessoas que clicam no segundo link é a metade do número de pessoas que clicam no primeiro link.

// P = Primeira linha - S * 2;
// S = Segunda linha - T * 2;
// T = Terceira linha - T = 2 / Logo T * 4;

const thirdLine = Number(lines[0]);
console.log(`Saida: ${(thirdLine * 4)}`);
