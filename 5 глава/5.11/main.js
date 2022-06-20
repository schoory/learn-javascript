// Задание 1. Создайте дату 20 февраля 2012 года, 3 часа 12 минут.
alert(new Date('2012-02-20 03:12'))

// Задание 2. Покажите день недели.
const getWeekDay = (date) => {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}
alert(getWeekDay(new Date(2012, 0, 3)));

// Задание 3. День недели в европейской нумерации
const getLocalDay = (date) => {
  return date.getDay() === 0 ? 7 : date.getDay()
}
alert( getLocalDay(new Date(2012, 0, 3)) ); 

// Задание 4. Какой день месяца был много дней назад?
const getDateAgo = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result.getDate()
}
const date = new Date(2015, 0, 2)
alert(getDateAgo(date, 1))

// Задание 5. Последнее число месяца?
const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1)
  date.setDate(date.getDate() - 1)
  return date.getDate()
}
alert(getLastDayOfMonth(2012, 11))

// Задание 6. Сколько сегодня прошло секунд?
const getSecondToday = () => {
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  return Math.round((Date.now() - start.getTime()) / 1000)
}
alert(getSecondToday())

// Задание 7. Сколько секунд осталось до завтра?
const getSecondsToTomorrow = () => {
  const today = new Date()
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
  return Math.round((tomorrow.getTime() - today.getTime()) / 1000)
}
alert(getSecondsToTomorrow())

// Задание 8. Форматирование относительной даты.
const formatDate = (date) => {
  const dif = Date.now() - date.getTime()
  if (Math.round(dif / 1000) < 1) return 'прямо сейчас'
  if (Math.round(dif / 1000) < 60) return `${Math.round(dif / 1000)} сек. назад`
  if (Math.round(dif / (1000 * 60)) < 60) return `${Math.round(dif / 1000 / 60)} мин. назад`

  return (
    date.getDate().toString().padStart(2, '0') + "." +
    (date.getMonth() + 1).toString().padStart(2, '0') + "." +
    date.getFullYear().toString().slice(-2).padStart(2, '0') + " " +
    date.getHours().toString().padStart(2, '0') + ":" +
    date.getMinutes().toString().padStart(2, '0')
  )
}
alert(`
  ${formatDate(new Date(new Date - 1))}
  ${formatDate(new Date(new Date - 30 * 1000))}
  ${formatDate(new Date(new Date - 5 * 60 * 1000))}
  ${formatDate(new Date(new Date - 86400 * 1000))}
`)