// Задание 1. Две функции - один объект.
const newObject = {}
function A() { return newObject }
function B() { return newObject }
const a = new A();
const b = new B();
alert(`Сравнение объектов a и b: ${a == b}`)

// Задание 2. Создание калькулятора при помощи конструктора.
function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function() {
    this.a = +prompt('Введите первое значение', 0);
    this.b = +prompt('Введите второе значение', 0);
  }
  this.sum = function() {
    return this.a + this.b
  }
  this.mul = function() {
    return this.a * this.b
  }
}
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Задание 3. Создаём Accumulator.
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    const userValue = +prompt('Введите сколько прибавить', 0)
    if (!isNaN(+userValue)) {
      this.value += userValue
    }
  }
}
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет сумму этих значений