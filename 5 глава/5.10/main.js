// Задание 1. Деструктурирующее присваивание.
let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
const { name, years: age, isAdmin = false } = user

alert(`
  ${name}
  ${age}
  ${isAdmin}
`);

// Задание 2. Максимальная зарплата.
const topSalary = (salaries) => {
  if (Object.keys(salaries).length === 0) return null
  let salary = 0;
  let person;
  for (const [key, value] of Object.entries(salaries)) {
    if (salary < value) {
      person = key;
      salary = value;
    }
  }
  return person
}
alert(topSalary({
  "John": 100,
  "Pete": 300,
  "Mary": 250
}))