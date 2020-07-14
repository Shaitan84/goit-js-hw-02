'use strict'

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите, пожалуйста, число!");

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else numbers.push(input);

} while (true);

if (numbers.length === 0) {
  alert("Вы ничего не ввели, попробуйте еще раз");
} else {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
console.log(`Общая сумма чисел равна - ${total}`);