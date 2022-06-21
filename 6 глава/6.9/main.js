// Задание 1. Декоратор-шпион.
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func.call(this, ...args)
  }
  wrapper.calls = []
  return wrapper
}
work = spy(work)
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// Задание 2. Задерживающий декоратор.
function f(x) {
  alert(x);
}
function delay(func, delay) {
  function wrapper(...args) {
    setTimeout(() => {
      return func.call(this, ...args)
    }, delay)
  }
  return wrapper
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// Задание 3. Декоратор debounce.
function debounce(func, delay) {
  let isOnCooldown = false
  function wrapper(...args) {
    if (isOnCooldown) return
    func.call(this, ...args)
    isOnCooldown = true
    setTimeout(() => { isOnCooldown = false }, delay)
  }
  return wrapper
}
let f1 = debounce(() => alert('here'), 1000);

f1(1); // выполняется немедленно
f1(2); // проигнорирован

setTimeout( () => f1(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f1(4), 1100); // выполняется
setTimeout( () => f1(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// Задание 4. Тормозящий (throttling) декоратор.
function f2(a) {
  console.log(a)
}
function throttle(func, threshhold) {
  let isOnCooldown = false;
  let throttleArgs, throttleThis;
  function wrapper(...args) {
    if (isOnCooldown) {
      throttleArgs = args,
      throttleThis = this
      return
    }
    func.call(this, ...args)
    isOnCooldown = true
    setTimeout(() => { 
      isOnCooldown = false 
      wrapper.call(throttleThis, ...throttleArgs)
      throttleThis = throttleArgs = null
    }, threshhold)
  }
  return wrapper
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f3 = throttle(f, 1000);

f3(1); // показывает 1
f3(2); // (ограничение, 1000 мс ещё нет)
f3(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано