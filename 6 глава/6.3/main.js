// Задание 1. Сумма с помощью замыканий.
function sum(a) {
  return function(b) {
    return a + b
  }
} 
alert(sum(1)(2))

// Задание 2. Фильтрация с помощью функции.
function inBetween(a, b) {
  return function(item) {
    return item >= a && item <= b
  }
}
function inArray(arr) {
  return function(item) {
    return arr.includes(item)
  }
}
alert([1, 2, 3, 4, 5, 6, 7].filter(inBetween(3, 6)))
alert([1, 2, 3, 4, 5, 6, 7].filter(inArray([1, 2, 10])))

// Задание 3. Сортировать по полю.
function byField(fieldName) {
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}
const user = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
]
user.sort(byField('name'))
alert(JSON.stringify(user))

// Задание 4. Армия функций.
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    const a = i
    let shooter = function() { // функция shooter
      alert( a ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10