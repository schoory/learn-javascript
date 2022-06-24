// Задание 1. Создайте список.
const fillList = (container) => {
  while(true) {
    const text = prompt('Введите элемент', '')
    console.log('text :>> ', text);
    if (!text) return
    const li = document.createElement('li')
    li.textContent = text
    container.append(li)
  }
}
const list = document.querySelector('#task1')
fillList(list)

// Задание 2. Создайте дерево из объекта.
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
const createTree = (data, container) => {
  const result = []
  for (const item in data) {
    const li = document.createElement('li')
    li.append(item)
    if (Object.keys(data[item]).length !== 0) {
      const ul = document.createElement('ul')
      createTree(data[item], ul)
      li.append(ul)
    }
    result.push(li)
  }
  container.append(...result)
}
const container = document.querySelector('#task2');
createTree(data, container)

// Задание 3. Выведите список потомков в дереве.
const parseList = (elementsList) => {
  const childrens = Array.from(elementsList.children)
  for (const childrenElement of childrens) {
    const childrensCount = childrenElement.querySelectorAll("li").length
    if (childrensCount > 0) {
      childrenElement.childNodes[0].textContent += ` [${childrensCount}]`
      parseList(childrenElement.children[0])
    }
  }
}
const listElement = document.querySelector('#task3')
parseList(listElement)

// Задание 4. Создайте календарь в виде таблицы.
const createCalendar = (element, year, month) => {
  const table = document.createElement('table')
  const date = new Date(year, month, 0)
  function createHeader(name) {
    const header = document.createElement('th')
    header.textContent = name
    return header
  }

  // Создание заголовков
  table.append(...[
    createHeader('Пн'),
    createHeader('Вт'),
    createHeader('Ср'),
    createHeader('Чт'),
    createHeader('Пт'),
    createHeader('Сб'),
    createHeader('Вс'),
  ])

  let row = document.createElement('tr')
  for (let i = 1; i <= date.getDate(); i++) {
    const day = new Date(year, month - 1, i)
    const dayOfWeek = day.getDay()

    // Добавление пустых дней в начале месяца
    if (i === 1) {
      const emptyDays = []
      for (let j = 0; j < dayOfWeek - 1; j++) {
        emptyDays.push(document.createElement('td'))
      }
      row.append(...emptyDays)
    }

    // Добавление текущего дня
    const td = document.createElement('td')
    td.textContent = i
    row.append(td)

    // Если воскресенье добавление строки в таблицу
    if (dayOfWeek === 0) {
      table.append(row)
      row = document.createElement('tr')
    }
  }
  // Добавление последней строки в таблицу
  table.append(row)
  element.append(table)
}
const tableElement = document.querySelector('#task4')
createCalendar(tableElement, 2022, 1)

// Задание 5. Цветные часы с использованием setInterval.
const timerContainer = document.querySelector('#task5')
const currentDate = new Date()
timerContainer.querySelector('.red').textContent = currentDate.getHours().toString().padStart(2, '0')
timerContainer.querySelector('.green').textContent = ':' + currentDate.getMinutes().toString().padStart(2, '0')
timerContainer.querySelector('.blue').textContent = ':' + currentDate.getSeconds().toString().padStart(2, '0')
let timer;
function startTimer() {
  if (timer) {
    clearInterval(timer)
  }
  timer = setInterval(() => {
    const currentDate = new Date()
    timerContainer.querySelector('.red').textContent = currentDate.getHours().toString().padStart(2, '0')
    timerContainer.querySelector('.green').textContent = ':' + currentDate.getMinutes().toString().padStart(2, '0')
    timerContainer.querySelector('.blue').textContent = ':' + currentDate.getSeconds().toString().padStart(2, '0')
  }, 1000)
}
function stopTimer() {
  if (timer) {
    clearInterval(timer)
  }
}
document.querySelector('#start-timer').addEventListener('click', startTimer)
document.querySelector('#stop-timer').addEventListener('click', stopTimer)

// Задание 6. Вставьте HTML в список.
const ulTask6 = document.querySelector('#task6')
const firstEl = ulTask6.querySelector('#one')
firstEl.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Задание 7. Сортировка таблицы.
const tableTask7 = document.querySelector('#task7')
const rows = Array.from(tableTask7.rows).splice(1).sort((a, b) => a.textContent > b.textContent ? 1 : -1)
tableTask7.tBodies[0].append(...rows)