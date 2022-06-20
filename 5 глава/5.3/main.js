// Задание 1. Сделать первый символ заглавным.
const ucFirst = (str) => {
  if (!str) return str
  return str[0]?.toUpperCase() + str.slice(1)
}
alert(ucFirst('вася'))

// Задание 2. Проверка на спам.
const checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam('innocent rabbit'))

// Задание 3. Усечение строки.
const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength-1) + '…'
  }
  return str
}
alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
alert(truncate('Всем, привет!', 20))

// Задание 4. Выделить число.
const extractCurrencyValue = (str) => +str.slice(1)
alert(extractCurrencyValue('$120'))

