'use strict';

// data-* -- data-атрибути

// Іменування
//      html      =>    js
// data-user-name => userName
// data-userName  => username

// const buttons = document.querySelectorAll('button');

// function clickHandler(e) {
//   console.log('e.target.dataset.host :>> ', e.target.dataset.host);
// }

// for (const btn of buttons) {
//   btn.onclick = clickHandler;
// }

// Task: в контейнер помістити 4 кнопки
// в залежності від того, на яку натиснули, змінювати колір контейнера

const buttons = document.querySelectorAll('button');

function clickHandler(e) {
  e.currentTarget.parentElement.style.backgroundColor =
    e.currentTarget.dataset.color;
}

for (const button of buttons) {
  button.onclick = clickHandler;
}
