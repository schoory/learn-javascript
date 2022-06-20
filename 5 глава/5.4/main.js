// Задание 1. Операции с массивами.
const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles.splice(Math.round(styles.length / 2) - 1, 1, 'Классика')
alert(styles.shift())
styles.unshift('Рэп', 'Рэгги')

// Задание 2. Сумма введенных чисел.
const sumInput = () => {
  const result = []
  while (true) {
    const value = prompt('Введите число', '')
    if (!value || isNaN(+value)) {
      break;
    }
    result.push(+value)
  }
  return result.reduce((previous, item) => previous + item, 0)
}
alert(sumInput())

// Задание 3. Подмассив наибольшей суммы.
const getMaxSubSum = (array) => {
  let maxSum = 0;
  let arraySum = 0;
  for (let item of array) {
    arraySum += item
    if (arraySum < 0 ) {
      arraySum = 0
      continue
    }
    maxSum = Math.max(maxSum, arraySum)
  }
  return maxSum
}

alert(getMaxSubSum([-1, 2, 3, -9]))
alert(getMaxSubSum([-1, 2, 3, -9, 11]))
alert(getMaxSubSum([-1, -2, -3]))


