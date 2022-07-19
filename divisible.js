var input = require('fs').readFileSync('test.txt', 'utf8');
var lines = input.split('\n');


const [maxValue] = lines;
let index = 1;
while(index <= maxValue) {
  if (maxValue % index === 0) {
    console.log(index);
  }
    index += 1;
}