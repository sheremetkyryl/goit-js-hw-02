let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  // Якщо користувач натиснув "Cancel", виходимо з циклу
  if (input === null) {
    break;
  }

  // Перетворюємо введене значення на число
  const number = Number(input);

  // Перевіряємо, чи це дійсне число
  if (isNaN(number)) {
    alert('Було введено не число, спробуйте ще раз');
  } else {
    numbers.push(number);
  }
}

// Якщо масив не порожній, рахуємо суму всіх чисел
if (numbers.length > 0) {
  // Підраховуємо суму всіх чисел у масиві
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Жодного числа не було введено.');
}