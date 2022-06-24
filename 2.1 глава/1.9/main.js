// Задание 1. Поместите мяч в центр поля.
const field = document.querySelector('#field')
const ball = document.querySelector('#ball')
ball.style.left = Math.round(field.clientWidth / 2 - ball.getBoundingClientRect().width / 2) + 'px';
ball.style.top = Math.round(field.clientHeight / 2 - ball.getBoundingClientRect().height / 2) + 'px';
