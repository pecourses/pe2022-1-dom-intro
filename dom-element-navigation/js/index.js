'use strict';

// Батьківський елемент:
// element.parentElement – батько-елемент.

// Сусідні елементи:
// element.previousElementSibling - попередній сусідній елемент.
// element.nextElementSibling - наступний сусідній елемент.

// Дочірні елементи:
// element.children - колекція дітей, які є елементами.
// element.firstElementChild – перший дочірній елемент.
// element.lastElementChild – останній дочірній елемент.

// element.closest(selector) - найближчий батьківський елемент за селектором

const articleEl = document.querySelector('article.class1');
console.log('articleEl.parentElement :>> ', articleEl.parentElement);

const p1El = document.querySelector('p:first-of-type');
console.log('p1El.previousElementSibling :>> ', p1El.previousElementSibling);
console.log('p1El.nextElementSibling :>> ', p1El.nextElementSibling);
console.log('p1El.previouSibling :>> ', p1El.previousSibling);
console.log('p1El.nextSibling :>> ', p1El.nextSibling);

console.log('articleEl.children :>> ', articleEl.children);
console.log('articleEl.firstElementChild :>> ', articleEl.firstElementChild);
console.log('articleEl.lastElementChild :>> ', articleEl.lastElementChild);

// знайти h3 через ul
const ulEl = document.querySelector('ul');
console.log('findH3:>> ', ulEl.previousElementSibling.previousElementSibling);
// або
console.log('ulEl :>> ', ulEl.parentElement.firstElementChild);

// найближчий до ulEl батьківський елемент з класом class1
console.log('ulEl.closest(".class1") :>> ', ulEl.closest('.class1'));

// Ex.: Повісити обробника подійн на всі елементи списку
// і законсолеложити їх textContent, маючи посилання на ul

const liClickHandler = function (e) {
  console.log('this.textContent :>> ', this.textContent);
  // або
  console.log('e.target.textContent :>> ', e.target.textContent);
};

for (const liEl of ulEl.children) {
  liEl.onclick = liClickHandler;
}
// або
// [...ulEl.children].forEach(
//   liEl =>
//     (liEl.onclick = () => {
//       console.log('liEl.textContent :>> ', liEl.textContent);
//     })
// );
