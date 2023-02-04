'use strict';

const BASE_URL = `http://127.0.0.1:8080/`;
const markup = `<span class="navigation__edge"></span>
      <span class="navigation__main">
        <ul class="navigation__list">
          <li class="navigation__list-item">
            <a href="/" class="navigation__link navigation__link-active">
              Home
            </a>
          </li>
          <li class="navigation__list-item">
            <a
              href="Books/TheWayOfKings/AboveSilence/prologue.html"
              class="navigation__link"
            >
              Books
            </a>
          </li>
          <li class="navigation__list-item">
            <a href="#" class="navigation__link">Characters</a>
          </li>
          <li class="navigation__list-item">
            <a href="#" class="navigation__link">Questions</a>
          </li>
          <li class="navigation__list-item">
            <a href="#" class="navigation__link">Theories</a>
          </li>
        </ul>
      </span>
      <span class="navigation__edge"></span>`;

const navigation = document.querySelector('.navigation');

const add = function () {
  let active = document.URL;

  const slash1 = active.indexOf('/', 0);
  active = active.slice(slash1);
  console.log(active);
  const slash2 = active.indexOf('/');
  const finalActive = active.slice(0, slash2);

  const listItems = document.querySelectorAll('.navigation__list-item');

  listItems.forEach(item => {
    if (item.textContent === finalActive) {
      item.classList.add('active');
    }
  });

  if (active === '') item[0].classList.add('active');
  navigation.insertAdjacentHTML('beforeend', markup);
};
add();
