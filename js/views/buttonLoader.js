import View from './view.js';

class buttonView extends View {
  _parentElement = document.querySelector('.btn__container');

  _generateMarkup() {
    return `
    <a href="#" class="btn__previous">Back</a>
    <a href="#" class="btn__next">Forward</a>`;
  }
}

export default new buttonView();
