/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/createElement/createElement.js
function createElement(options) {
  const {
    name,
    classes,
    text,
    attributes
  } = options;
  const element = document.createElement(name);
  if (classes) {
    classes.forEach(className => {
      element.classList.add(className);
    });
  }
  if (text) {
    element.textContent = text;
  }
  if (attributes) {
    attributes.forEach(attr => {
      element.setAttribute(attr.name, attr.value);
    });
  }
  return element;
}
/* harmony default export */ const createElement_createElement = (createElement);
;// CONCATENATED MODULE: ./src/js/whackGoblin/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/whackGoblin/whackGoblin.js


class WhackGoblin {
  constructor(element, rows, columns) {
    this.element = element;
    this.rows = rows;
    this.columns = columns;
  }
  start() {
    this.create();
    setInterval(() => {
      this.goblinInit();
    }, 500);
  }
  create() {
    const fieldWrapper = createElement_createElement({
      name: 'div',
      classes: ['field']
    });
    for (let i = 0; i < this.rows; i += 1) {
      const row = createElement_createElement({
        name: 'div',
        classes: ['field__row', `field__row_${i + 1}`]
      });
      for (let j = 0; j < this.columns; j += 1) {
        const cell = createElement_createElement({
          name: 'div',
          classes: ['field__cell', `field__cell_${i + 1}-${j + 1}`]
        });
        row.appendChild(cell);
      }
      fieldWrapper.appendChild(row);
    }
    this.element.appendChild(fieldWrapper);
    this.field = fieldWrapper;
  }
  goblinInit() {
    let goblinEl = this.field.querySelector('.goblin');
    let row;
    let cell;
    if (goblinEl) {
      const parent = goblinEl.parentNode;
      const currCell = parent.className.match(/[\d]/g);
      do {
        row = Math.floor(Math.random() * (this.rows - 1 + 1)) + 1;
        cell = Math.floor(Math.random() * (this.columns - 1 + 1)) + 1;
      } while (+currCell[0] === row && +currCell[1] === cell);
    } else {
      row = Math.floor(Math.random() * (this.rows - 1 + 1)) + 1;
      cell = Math.floor(Math.random() * (this.columns - 1 + 1)) + 1;
      goblinEl = createElement_createElement({
        name: 'img',
        classes: ['goblin'],
        attributes: [{
          name: 'src',
          value: goblin_namespaceObject
        }]
      });
    }
    const cellEl = this.field.querySelector(`.field__cell_${row}-${cell}`);
    cellEl.appendChild(goblinEl);
  }
}
/* harmony default export */ const whackGoblin_whackGoblin = (WhackGoblin);
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const whackGoblin = new whackGoblin_whackGoblin(body, 4, 4);
  whackGoblin.start();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;