// Задание 1. Проверка значения из диапазона.
const firstTask = (age) => {
  if (age >= 14 && age<=90) {
    alert(`firstTask :>> true: ${age} входит в диапазон от 14 до 90`)
  } else {
    alert(`firstTask :>> false: ${age} не входит в диапазон от 14 до 90`)
  }
}
firstTask(14) // true
firstTask(69) // true
firstTask(2) // false

// Задание 2. Проверка значения вне диапазона.
const secondTask1 = (age) => {
  if (age < 14 || age > 90) {
    alert(`secondTask :>> true: ${age} не входит в диапазон от 14 до 90`)
  } else {
    alert(`secondTask :>> false: ${age} входит в диапазон от 14 до 90`)
  }
}
const secondTask2 = (age) => {
  if (!(age >= 14 && age <= 90)) {
    alert(`secondTask :>> true: ${age} не входит в диапазон от 14 до 90`)
  } else {
    alert(`secondTask :>> false: ${age} входит в диапазон от 14 до 90`)
  }
}

secondTask1(2) // true
secondTask1(14) // false
secondTask1(45) // false

// Задание 3. Проверка логина.
const authentication = () => {
  const userName = prompt('Кто там?', '')
  if (!userName) {
    alert('Отменено')
  } else if (userName === 'Админ') {
    const userPassword = prompt('Введите пароль', '')
    if (!userPassword) {
      alert('Отменено')
    } else if (userPassword === 'Я Главный') {
      alert('Здравствуйте!')
    } else {
      alert('Неверный пароль')
    }
  } else {
    alert('Я вас не знаю')
  }
}
authentication()