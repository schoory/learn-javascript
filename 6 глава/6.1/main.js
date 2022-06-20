// Задание 1. Вычислить сумму чисел до данного.
const sumTo = (n) => (n === 1) ? n : n + sumTo(n-1)
alert(sumTo(100));

const sumTo2 = (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i 
  }
  return sum
}

const sumTo3 = (n) => {
  return n * (n + 1) / 2
}

// Задание 2. Вычислить факториал.
const factorial = (n) => (n === 1) ? n : n * factorial(n-1)
alert(factorial(5)); // 120

// Задание 3. Числа Фибоначчи.
const fib = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    const c = a + b
    a = b
    b = c
  }
  return b
}
alert(`
  ${fib(3)}
  ${fib(7)}
  ${fib(77)}
`)

// Задание 4. Вывод односвязного списка.
const printList = (item) => {
  if (item.next !== null) {
    console.log(item.value)
    printList(item.next)
  } else {
    console.log(item.value)
  }
}
const printList2 = (list) => {
  let item = list
  while(item !== null) {
    console.log(item.value)
    item = item.next
  } 
}
printList({
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
})

console.log('reverse')

// Задание 5. Вывод односвязного списка в обратном порядке.
const printListReverse = (obj) => {
  if (obj.next) {
    printListReverse(obj.next)
  }
  console.log(obj.value)
}
const printListReverse2 = (list) => {
  let item = list
  const arr = []
  while(item !== null) {
    arr.push(item.value)
    item = item.next
  } 
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printListReverse({
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
})
