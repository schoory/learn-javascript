// Задание 1. Получите атрибут.
const element1 = document.querySelector('div[data-widget-name]')
console.log('element1.dataset.widgetName :>> ', element1.dataset.widgetName);

// Задание 2. Сделайте внешние ссылки оранжевыми.
const links = document.querySelectorAll('a')
for (const link of links) {
  const href = link.getAttribute("href")
  if (!!href && (href.match(/\:\/\//g) && !href.startsWith("http://internal.com"))) {
    link.style.color = "orange"
  }
}