// Задание 1. Привет, object.
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Задание 2. Проверка на пустоту.
const isEmpty = (obj) => Object.keys(obj).length === 0
const schedule = {}
alert(`Object: ${JSON.stringify(schedule)} is empty? :>> ${isEmpty(schedule)}`)
schedule["8:30"] = "get up";
alert(`Object: ${JSON.stringify(schedule)} is empty? :>> ${isEmpty(schedule)}`)

// Задание 3. Сумма свойств объекта.
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
const calcSummary = (obj) => {
  if (isEmpty(salaries)) return 0
  let sum = 0
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key]
    }
  }
  return sum
}
const sum = calcSummary(salaries)
alert(`sum :>> ${sum}`)

// Задание 4. Умножаем все числовые свойства на 2.
const menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}
const multiplyNumeric = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2
    }
  }
}
alert(`Object before multiplication: ${JSON.stringify(menu)}`)
multiplyNumeric(menu)
alert(`Object after multiplication: ${JSON.stringify(menu)}`)

