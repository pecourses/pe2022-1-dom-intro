'use strict';

// Кожен обробник приймає об'єкт події e, в якому є посилання:
// - e.target - є посиланням на об'єкт елементу, який був ініціатором події (найбільш вкладений)
// - e.currentTarget - є посиланням на об'єкт елементу, в якому в даний момент обробляється подія,
// методи:
// - e.stopPropagation() - припиняє подальшу передачу поточної події.

function eventHandler(e) {
  console.log('e.target :>> ', e.target);
  console.log('e.currentTarget :>> ', e.currentTarget);
  // e.stopPropagation(); // вимикає подальше розповсюдження події
}

// при { capture: true } спрацює на занурення (capturing/погружение)
document.body.addEventListener('click', eventHandler, {
  capture: true,
  once: true, // спрацює 1 раз післі першого запуску скрипта
});

document.body.firstElementChild.addEventListener('click', eventHandler, {
  capture: true,
});

document.body.firstElementChild.firstElementChild.addEventListener(
  'click',
  eventHandler,
  { capture: true }
);

// події  по дефолту спрацьовують на сплиття (bubbling/всплытие)
document.body.firstElementChild.firstElementChild.addEventListener(
  'click',
  eventHandler
);
document.body.firstElementChild.addEventListener('click', eventHandler);
document.body.addEventListener('click', eventHandler);

// Відписка від події на занурення
// document.body.removeEventListener('click', eventHandler, { capture: true });
