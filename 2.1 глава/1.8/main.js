// Задание 1. Создать уведомление.
const container = document.querySelector('#task1')
const showNotification = ({ top = 10, right = 10, html = 'Notification', className }) => {
  const result = document.createElement('div')
  const classes = ['notification', className ? className : '']
  result.className = classes.join(' ');
  result.style.top = top + 'px';
  result.style.right = right + 'px';
  result.textContent = html
  document.body.append(result)
  setTimeout(() => result.remove(), 1500)
}
showNotification({ top: 10, right: 10, html: 'Hello!', className: 'welcome' })