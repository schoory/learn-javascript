// Задание 1. Переведите текст вида border-left-width в borderLeftWidth.
const camelize = (str) => {
  const arrayFromStr = str.split('-')
  for (let i = 1; i < arrayFromStr.length; i++) {
    arrayFromStr[i] = arrayFromStr[i][0].toUpperCase() + arrayFromStr[i].slice(1)
  }
  return arrayFromStr.join('')
}

alert(camelize('"list-style-image"'))
alert(camelize('-webkit-transition'))

// Задание 2. Фильтрация по диапазону.
const filterRange = (arr, a, b) => {
  return arr.filter(item => item >= a && item <= b)
}
alert(filterRange([5, 3, 8, 1], 1, 4))

// Задание 3. Фильтрация по диапазону "на месте".
const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length;) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      continue;
    }
    i++;
  }
}
const arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
alert(arr)

// Задание 4. Сортировать в порядке по убыванию.
alert([5, 2, 1, -10, 8].sort((a, b) => b - a))

// Задание 5. Скопировать и отсортировать массив.
const copySorted = (arr) => {
  return arr.slice().sort()
}
alert(copySorted(['HTML', 'JavaScript', 'CSS']))

// Задание 6. Создать расширяемый калькулятор.
function Calculator() {
  this.calcSum = (a, b) => a + b
  this.calcDif = (a, b) => a - b
  this.methods = [
    { operator: '+', callback: this.calcSum },
    { operator: '-', callback: this.calcDif }
  ]
  this.addMethod = function(operator, callback) {
    this.methods.push({ operator, callback })
  }
  this.calculate = function(str) {
    const method = this.methods.find(item => str.includes(` ${item.operator} `))
    if (!method) return alert(`Ни один из известных операторов не подходит к выражению '${str}'`)
    
    const [a, b] = str.split(` ${method.operator} `)
    if (!a || !b) {
      return alert(`Отсутствует один из аргументов '${str}'`)
    }
    if (isNaN(+a) || isNaN(+b)) {
      return alert(`Один из аргументов '${str}' не является числом`)
    }
    return method.callback(+a, +b)
  }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
alert(`
  2 + 3 = ${powerCalc.calculate("2 + 3")}
  2 - 3 = ${powerCalc.calculate("2 - 3")}
  2 * 3 = ${powerCalc.calculate("2 * 3")}
  6 / 3 = ${powerCalc.calculate("6 / 3")}
  2 ** 3 = ${powerCalc.calculate("2 ** 3")}
`)

// Задание 7. Трансформировать в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name)
alert( names ); 

// Задание 8. Трансформировать в массив имён.
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];
let usersMapped = users1.map(item => { return {id: item.id, fullName: `${item.name} ${item.surname}`} })
alert( `${usersMapped[0].id} - ${usersMapped[0].fullName}` ) // Вася Пупкин

// Задание 9. Отсортировать пользователей по возрасту.
const sortByAge = (arr) => {
  arr.sort((a, b) => b.age - a.age)
  return arr
}
const arr1 = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 30 },
  { name: "Маша", age: 28 }
]
sortByAge(arr1)
alert(JSON.stringify(arr1))

// Задание 10. Перемешайте массив.
const shuffle = (arr) => {
  arr.sort(() => (Math.random() > 0.5) ? 1 : -1)
  return arr
}
alert(shuffle([1, 2, 3]))

// Задание 11. Получить средний возраст.
const getAverageAge = (users) => {
  const sumAge = users.reduce((prev, item) => prev + item.age, 0)
  return Math.round(sumAge / users.length)
}
alert(getAverageAge(arr1))

// Задание 12. Оставить уникальные элементы массива.
const unique = (arr) => {
  const result = []
  for (const item of arr) {
    if (!result.includes(item)) result.push(item)
  }
  return result
}
alert(unique([
  "кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"
]))