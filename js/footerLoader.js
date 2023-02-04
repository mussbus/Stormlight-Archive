'use strict';

const markupFooter = `
<footer class="footer">
      <div class="footer__grid">
        <span class="footer__title">Home</span>
        <span class="footer__title">Books</span>
        <span class="footer__title">Characters</span>
        <span class="footer__title">Questions</span>
        <span class="footer__title">Theories</span>
      </div>
    </footer>`;

const footer = document.querySelector('.footer');

const addFooter = function () {
  footer.insertAdjacentHTML('beforeend', markupFooter);
};

addFooter();
