const input = require('fs').readFileSync('test.txt', 'utf8');
const lines = input.split('\n');
let numbers = lines[0].split(' ');

const convertStringToNumber = (numbers) => {
  return numbers.map((number) => Number(number));
};

numbers = convertStringToNumber(numbers);

const [firstValue, secondValue, thirdValue, fourthValue] = numbers;

const isEven = (number) => number % 2 === 0;

const isPositive = (number) => number > -1;

const isMore = (firstNumber, secondNumber) => firstNumber > secondNumber;

const firstCondition = isMore(secondValue, thirdValue);
const secondCondition = isMore(fourthValue, firstValue);
const thirdCondition = isMore((thirdValue + fourthValue), (firstValue + secondValue));
const fourthCondition = isPositive(thirdValue) && isPositive(fourthValue);
const fifthCondition = isEven(firstValue);

if (firstCondition && secondCondition && thirdCondition && fourthCondition && fifthCondition) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
