import View from './view.js';

class footerView extends View {
  _parentElement = document.querySelector('.footer');
  _generateMarkup() {
    return `
    <footer class="footer">
    <div class="footer__grid">
    <span class="footer__title">Home</span>
    <span class="footer__title">Books</span>
    <span class="footer__title">Characters</span>
    <span class="footer__title">Questions</span>
    <span class="footer__title">Theories</span>
    </div>
    </footer>`;
  }
}

export default new footerView();
