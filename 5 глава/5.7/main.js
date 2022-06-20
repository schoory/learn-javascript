// Задание 1. Фильтрация уникальных элементов массива.
const unique = (arr) => {
  const newValue = new Set(arr);
  return Array.from(newValue)
}
alert(unique([
  "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"
]))

// Задание 2. Отфильтруйте анаграммы.
const aclean = (arr) => {
  const result = new Map()
  for (const item of arr) {
    const newItem = item.toLowerCase().split('').sort()
    result.set(newItem.join(''), item)
  }
  return Array.from(result.values())
}
alert(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))

// Задание 3. Перебираемые ключи.
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys)