// Задание 1. Перепишите функцию, используя оператор '?' или '||'.
function checkAge(age) {
  return +age > 18 ? true : confirm('Родители разрешили?')
}
function checkAge2(age) {
  return +age > 18 || confirm('Родители разрешили?')
}
const age = prompt('Ваш возраст?')
checkAge(age)
// checkAge2(age)

// Задание 2. Функция min(a, b)
function min(a, b) {
  return a < b ? a : b
  // return Math.min(a, b)
}
alert(min(2, 5))
alert(min(3, -1))
alert(min(1, 1))

// Задание 3. Функция pow(x, n)
function isArgumentValid(a) {
  if (isNaN(+a) || !Number.isInteger(+a) || +a < 1) { // проверка на натуральное число
    return false
  }
  return true
}
function pow(x, n) {
  if (isArgumentValid(x) && isArgumentValid(n)) {
    return x ** n
  }
}
const someNumber = prompt('Введите число', '')
const someDegree = prompt('Введите степень числа', '')
alert(pow(someNumber, someDegree) ?? 'Поддерживаются только натуральные числа')