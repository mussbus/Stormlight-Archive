import View from './view.js';

class navigationView extends View {
  _parentElement = document.querySelector('.navigation');
  // BASE_URL = `http://127.0.0.1:8080/`;
  _generateMarkup() {
    if (screen.width > 800)
      return `<span class="navigation__edge"></span>
        <span class="navigation__main">
          <ul class="navigation__list">
            <li class="navigation__list-item">
            <a href="/" class="navigation__link navigation__link-active">
            Home
            </a>
            
            </li>
            <li class="navigation__list-item">
              <div class="navigation__dropdown-menu">
                <a
                  href="/Books/Books.html"
                  class="navigation__link"
                >
                  Books
                </a>
                <div class="navigation__dropdown-content">
                  <a href="/Books/TheWayOfKings/TheWayOfKings.html" class="navigation__dropdown-link">The Way Of Kings</a>
                  <a href="/Books/WordsOfRadiance/WordsOfRadiance.html" class="navigation__dropdown-link">Words Of Radiance</a>
                  <a href="/Books/Oathbringer/Oathbringer.html" class="navigation__dropdown-link">Oathbringer</a>
                  <a href="/Books/RhythmOfWar/RhythmOfWar.html" class="navigation__dropdown-link">Rhythm Of War</a>
                </div>
              </div>
            </li>
            <li class="navigation__list-item">
              <a href="/Characters/Characters.html" class="navigation__link">Characters</a>
            </li>
            <li class="navigation__list-item">
              <a href="/Questions/Questions.html" class="navigation__link">Questions</a>
            </li>
            <li class="navigation__list-item">
              <a href="/Theories/Theories.html" class="navigation__link">Theories</a>
            </li>
          </ul>
        </span>
        <span class="navigation__edge"></span>`;
    else
      return `<input
        type="checkbox"
        class="mobile-navigation__checkbox"
        id="mobile-navigation__toggle"
      />

      <label for="mobile-navigation__toggle" class="mobile-navigation__button">
        <span class="mobile-navigation__icon">&nbsp;</span>
      </label>

      <div class="mobile-navigation__background">&nbsp;</div>

      <nav class="mobile-navigation__nav">
        <ul class="mobile-navigation__list">
          <li class="mobile-navigation__item">
            <a href="/index.html" class="mobile-navigation__link">Home</a>
          </li>
          <li class="mobile-navigation__item">
            <a href="/Books/Books.html" class="mobile-navigation__link">
              Books
            </a>
          </li>
          <li class="mobile-navigation__item">
            <a
              href="/Characters/Characters.html"
              class="mobile-navigation__link"
            >
              Characters
            </a>
          </li>
          <li class="mobile-navigation__item">
            <a href="/Questions/Questions.html" class="mobile-navigation__link">
              Questions
            </a>
          </li>
          <li class="mobile-navigation__item">
            <a href="Theories/Theories.html" class="mobile-navigation__link">
              Theories
            </a>
          </li>
        </ul>
      </nav>`;
  }
  // active = document.URL;
  // slash1 = active.indexOf('/', 0);

  // active = active.slice(slash1);
  //   slash2 = active.indexOf('/');
  //   finalActive = active.slice(0, slash2);

  //   listItems = document.querySelectorAll('.navigation__list-item');

  //   listItems.forEach(item => {
  //     if (item.textContent === finalActive) {
  //       item.classList.add('active');
  //     }
  //   });

  //   if (active === '') item[0].classList.add('active');
}

export default new navigationView();
