// Задание 1. Установка и уменьшение значения счётчика.
function makeCounter() {
  let count = 0;

  function increase() {
    return count++
  }
  increase.set = function(value) {
    count = +value
  }
  increase.decrease = function() {
    count--;
  }

  return increase
}

let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
counter.set(10); // установить новое значение счётчика
console.log( counter() ); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log( counter() ); // 10 (вместо 11)

// Задание 2. Сумма с произвольным количеством скобок.
function sum(a) {
  let result = a
  function next(b)  {
    result += b
    return next
  }
  next.toString = function() {
    return result
  }
  return next
}
console.log(`sum(1)(2) :>> ${sum(1)(2)}`);