// Задание 1. Создайте калькулятор.
const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt('Введите первое значение', 0)
    this.b = +prompt('Введите второе значение', 0)
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
}

calculator.read()
alert(`sum :>> ${calculator.sum()}`)
alert(`mul :>> ${calculator.mul()}`)

// Задание2. Цепь вызовов.
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
ladder.up().up().down().showStep()