// Задание 1. Дочерние элементы в DOM.
const containerForTask1 = document.querySelector('#task1')
console.log('Task 1:');
console.log(containerForTask1.firstElementChild)
console.log(containerForTask1.lastElementChild)
console.log(containerForTask1.lastElementChild.lastElementChild);

console.log('Task 2:');
const containerForTask2 = document.querySelector('#task2') 
const rows = Array.from(containerForTask2.rows)
rows.forEach((row, rowIndex) => {
  const cells = Array.from(row.cells)
  cells.forEach((cell, cellIndex) => {
    if (rowIndex === cellIndex) {
      cell.style.background = "red"
      cell.style.color = "white"
    }
  })
})