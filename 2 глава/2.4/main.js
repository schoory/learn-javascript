
// Задание 1. Работа с переменными.
let admin, name;
name = 'Джон';
admin = name;
alert(admin);

// Задание 2. Придумайте правильные имена.
const ourPlanet = 'Earth';
const currentUserName = 'Some user';

// Задание 3. Какие буквы (заглавные или строчные) использовать для имён констант?
/* 
  Используем заглавные буквы только для BIRTHDAY
  BIRTHDAY известна заранее
  age вычисляется в процессе работы скрипта
*/
const someCode = (birthday) => '40';
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY)