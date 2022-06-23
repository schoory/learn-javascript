
// Задание 1. Добавить функциям метод "f.defer(ms)".
Function.prototype.defer = function(delay) {
  setTimeout(this, delay)
}
function f() {
  alert("Hello!");
}
f.defer(1000); // выведет "Hello!" через 1 секунду

// Задание 2. Добавьте функциям декорирующий метод "defer()".
Function.prototype.defer1 = function(delay) {
  const mainThis = this;
  function wrapper(a, b) {
    setTimeout(() => this.call(this, a, b), delay)
  }
  const wrapperBind = wrapper.bind(mainThis)
  return wrapperBind
}

function f1(a, b) {
  alert( a + b );
}
f1.defer1(1000)(2,1) // выведет 3 через 1 секунду.
// f1.defer1(1000)(1, 2); // выведет 3 через 1 секунду.