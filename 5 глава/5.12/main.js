// Задание 1. Преобразуйте объект в JSON, а затем обратно в обычный объект.
const user = {
  name: "Василий Иванович",
  age: 35,
};
alert(`
${JSON.stringify(user)}
${JSON.parse(JSON.stringify(user))}
`)

// Задание 2. Исключить обратные ссылки.
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  if (value === meetup && !!key) {
    return undefined
  } 
  return value
}));