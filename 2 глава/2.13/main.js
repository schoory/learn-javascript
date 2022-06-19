// Задание 1. Выведите чётные числа.
for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  alert(i)
}

// Задание 2. Замените for на while
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Задание 3. Повторять цикл, пока ввод неверен.
while (true) {
  const userAnswer = prompt('Введите число, большее 100', '')
  if (!userAnswer) {
    alert('Отменено')
    break;
  }
  if (+userAnswer > 100) {
    alert(`Ваше число ${userAnswer}`)
    break;
  }
}

// Задание 4. Вывести простые числа.
const returnSimpleNumbers = (someNumber) => {
  if (!Number.isInteger(someNumber)) return `Error: ${someNumber} - дробное число`

  const result = []; // массив с простыми числами

  mark: for (let i = 2; i < someNumber; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue mark; // если число составное - переход на следующую итерацию
    }
    result.push(i)
  }

  return result
}

alert(returnSimpleNumbers(10))