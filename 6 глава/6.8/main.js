// Задание 1. Вывод каждую секунду.
const printNumbers = (from, to) => {
  let current = from - 1
  const int = setInterval(() => {
    console.log(++current);
    if (current === to) clearInterval(int)
  }, 1000)
}
const printNumbers2 = (from, to) => {
  let current = from - 1
  let timeout = setTimeout(function tick() {
    console.log('Второй вариант :>>', ++current);
    if (current !== to) {
      timeout = setTimeout(tick, 1000)
    }
  }, 1000)
}
printNumbers(1, 6)
printNumbers2(1, 6)