import View from './view.js';

class buttonView extends View {
  _parentElement = document.querySelectorAll('.btn__container');

  render(booPrevious, booNext, previousURL, nextURL) {
    const markup = this._generateMarkup(
      booPrevious,
      booNext,
      previousURL,
      nextURL
    );
    this._parentElement.forEach(el =>
      el.insertAdjacentHTML('beforeend', markup)
    );
  }

  _generateMarkup(booPrevious, booNext, previousURL, nextURL) {
    console.log(booPrevious, booNext, previousURL, nextURL);
    if (booPrevious == false)
      return `
      <a href="${nextURL}" class="btn__next">Forward</a>`;
    if (booNext == false)
      return `
      <a href="${previousURL}" class="btn__previous">Back</a>`;
    return `
    <a href="${previousURL}" class="btn__previous">Back</a>
    <a href="${nextURL}" class="btn__next">Forward</a>`;
  }
}

export default new buttonView();
