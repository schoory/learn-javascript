// Задание 1. If (строка с нулем)
if ("0") { // выполнится, т.к. "0" - truthy значение
  alert('Привет');
}

// Функции для области видимости переменных

// Задание 2. Название JavaScript.
const secondTask = () => {
  const userAnswer = prompt('Какое «официальное» название JavaScript?', '');
  if (userAnswer === 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }
}
secondTask();

// Задание 3. Покажите знак числа.
const thirdTask = () => {
  const userAnswer = +prompt('Введите число', '')
  if (isNaN(userAnswer)) {
    return alert('Некорректное число')
  }
  if (userAnswer > 0) {
    alert('1')
  } else if (userAnswer < 0) {
    alert('-1')
  } else {
    alert('0')
  }
}
thirdTask()

// Задание 4. Перепишите 'if' в '?'.
const fourthTask = (a, b) => {
  const result = (a + b < 4) ? 'Мало' : 'Много';
  alert(`fifthTask :>> a: ${a}, b: ${b} - ${result}`)
}
fourthTask(2, 1)
fourthTask(2, 2)

// Задание 5. Перепишите 'if..else' в '?'
const fifthTask = (login) => {
  const message = (login === 'Сотрудник')
    ? 'Привет'
    : (login === 'Директор') 
      ? 'Здравствуйте'
      : (login === '') 
        ? 'Нет логина'
        : '';
  alert(`fifthTask :>> ${login} - ${message}`)
}
fifthTask('Сотрудник')
fifthTask('Директор')
fifthTask('')
fifthTask()