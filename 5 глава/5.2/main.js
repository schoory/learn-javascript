// Задание 1. Сумма пользовательских чисел.
const calcSum = () => {
  const a = +prompt('Введите первое число', '')
  const b = +prompt('Введите второе число', '')
  return a + b
}
alert(calcSum())

// Задание 2. Ввод числового значения.
const readNumber = () => {
  while(true) {
    const value = prompt('Введите число', '');
    if (!value) {
      return null
    }
    if (!isNaN(+value)) {
      return +value
    }
  }
}
const readNumberValue = readNumber()
alert(`Ввод числового значения: ${readNumberValue === null ? 'Отмена' : readNumberValue}`)

// Задание 3. Случайное число от min до max.
const random = (min, max) => {
  return Math.random() * (max - min) + min
}
alert(random(1, 5))
alert(random(1, 5))
alert(random(1, 5))

// Задание 4. Случайное целое число от min до max.
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}
alert(randomInteger(1, 5))
alert(randomInteger(1, 5))
alert(randomInteger(1, 5))