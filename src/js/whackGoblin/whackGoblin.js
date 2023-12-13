import createElement from '../createElement/createElement';
import goblinImg from './img/goblin.png';

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
    const fieldWrapper = createElement({
      name: 'div',
      classes: ['field'],
    });

    for (let i = 0; i < this.rows; i += 1) {
      const row = createElement({
        name: 'div',
        classes: ['field__row', `field__row_${i + 1}`],
      });
      for (let j = 0; j < this.columns; j += 1) {
        const cell = createElement({
          name: 'div',
          classes: ['field__cell', `field__cell_${i + 1}-${j + 1}`],
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

      goblinEl = createElement({
        name: 'img',
        classes: ['goblin'],
        attributes: [{ name: 'src', value: goblinImg }],
      });
    }
    const cellEl = this.field.querySelector(`.field__cell_${row}-${cell}`);

    cellEl.appendChild(goblinEl);
  }
}

export default WhackGoblin;
