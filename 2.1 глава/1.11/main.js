// Задание 1. Найдите координаты точек относительно окна браузера
const field = document.querySelector('#field')
const fieldBounds = field.getBoundingClientRect()
console.log('Outer top left :>>', `${fieldBounds.x}:${fieldBounds.y}`);
console.log('Inner top left :>>', `${fieldBounds.x + field.clientLeft}:${fieldBounds.y + field.clientTop}`);
console.log('Outer bottom right :>>', `${fieldBounds.right}:${fieldBounds.bottom}`);
console.log('Outer bottom right :>>', `${fieldBounds.x + field.clientLeft + field.clientWidth}:${fieldBounds.y + field.clientTop + field.clientHeight}`);

// Задание 2 | Задание 3 | Задание 4. Покажите заметку рядом с элементом.
/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect()
  elem.style.position = 'absolute';
  switch (position) {
    case 'top-out':
      elem.style.left = anchorCoords.x + 'px'
      elem.style.top = anchor.offsetTop - elem.clientHeight + 'px'
      break;
    case 'right-out': 
      elem.style.left = anchorCoords.right + 'px'
      elem.style.top = anchor.offsetTop + 'px'
      break;
    case 'bottom-out':
      elem.style.left = anchorCoords.x + 'px'
      elem.style.top = anchor.offsetTop + anchor.clientHeight + 'px'
      break;
    case 'top-in':
      elem.style.left = anchorCoords.x + 'px'
      elem.style.top = anchor.offsetTop + 'px'
      break;
    case 'right-in': 
      elem.style.left = anchorCoords.right - elem.clientWidth + 'px'
      elem.style.top = anchor.offsetTop + 'px'
      break;
    case 'bottom-in':
      elem.style.left = anchorCoords.x + 'px'
      elem.style.top = anchor.offsetTop + anchor.clientHeight - elem.clientHeight + 'px'
      break;
  
    default:
      break;
  }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
  let note = document.createElement('div');
  if (position.includes('out')) {
    note.className = "note";
  } else {
    note.className = "note note-in"
  }
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');
showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");
