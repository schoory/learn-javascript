// Задание 1. Считаем потомков.
const parseList = (elementsList) => {
  const childrens = Array.from(elementsList.children)
  for (const childrenElement of childrens) {
    const childrenName = childrenElement.childNodes[0].textContent.trim()
    const childrensCount = childrenElement.querySelectorAll("li").length
    console.log(`${childrenName} - ${childrensCount}`);
    if (childrensCount !== 0) {
      parseList(childrenElement.children[0])
    }
  }
}
const listElement = document.querySelector('#task1-list')
parseList(listElement)