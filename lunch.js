const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const menu = [
  {
    cod: '1',
    name: 'Cachorro Quente',
    price: 4.00,
  },
  {
    cod: '2',
    name: 'X-salada',
    price: 4.50,
  },
  {
    cod: '3',
    name: 'X-bacon',
    price: 5.00,
  },
  {
    cod: '4',
    name: 'Torrada simples',
    price: 2.00,
  },
  {
    cod: '5',
    name: 'Refrigerante',
    price: 1.50,
  },
];

const getTotalPrice = () => {
  let result = 0;
  let item = '';
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index][0] === menu[lines[index][0] - 1].cod) {
      item = menu[lines[index][0] - 1];
      return result = item.price * lines[index][2];
    }
  }
}

console.log(`Total: R$ ${getTotalPrice().toFixed(2)}`);
