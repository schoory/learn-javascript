// Задание 1. Сумма свойств объекта.
const sumSalaries = (salaries) => {
  if (Object.keys(salaries).length === 0) return 0
  let result = 0
  for (const item of Object.values(salaries)) {
    result += item
  }
  return result
}
alert(sumSalaries({
  "John": 100,
  "Pete": 300,
  "Mary": 250
}));

// Задание 2. Подсчёт количества свойств объекта.
const count = (obj) => Object.keys(obj).length
alert(count({
  name: 'John',
  age: 30
}))