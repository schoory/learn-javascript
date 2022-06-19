// Функции для области видимости переменных

// Задание 1. Постфиксная и префиксная формы.
const firstTask = () => {
  let a = 1, b = 1;
  let c = ++a; 
  let d = b++; 
  /*
    a = 2
    b = 2
    c = 2
    d = 1
  */
}
firstTask()

// Задание 2. Результат присваивания.
const secondTask = () => {
  let a = 2;
  let x = 1 + (a *= 2);
  /*
    a = 4
    x = 5
  */
}
secondTask()

// Задание 3. Преобразование типов.
const thirdTask = () => {
  "" + 1 + 0    // 1
  "" - 1 + 0    // -1 
  true + false  // 1
  6 / "3"       // 2
  "2" * "3"     // 6
  4 + 5 + "px"  // 9px
  "$" + 4 + 5   // $45
  "4" - 2       // 2
  "4px" - 2     // NaN
  "  -9  " + 5  // '  -9  5'
  "  -9  " - 5  // -14
  null + 1      // 1
  undefined + 1 // NaN
  " \t \n" - 2  // -2
}
thirdTask()

// Задание 4. Исправьте сложение.
const fourthTask = () => {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  alert(+a + +b); // 12
}
fourthTask()