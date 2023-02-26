import navigationView from './views/navigationLoader.js';
import footerView from './views/footerLoader.js';
import buttonView from './views/buttonLoader.js';
import { WordsOfRadianceChapter } from './constants.js';

const chapterReturn = [
  'Books/Books.html',
  'Books/TheWayOfKings/TheWayOfKings.html',
  'Books/WordsOfRadiance/WordsOfRadiance.html',
  'Books/Oathbringer/Oathbringer.html',
  'Books/RhythmOfWar/RhythmOfWar.html',
];
const Books = 'Books';
let booButtons;
const relativeURL = window.location.pathname;
const booksURL = '/Books/';
const subBookURL = relativeURL.replace(booksURL, '');
const chapterURL = subBookURL.slice(subBookURL.indexOf('/') + 1);
const WORDS_OF_RADIANCE = 'WordsOfRadiance';
let previousURL = '#',
  nextURL = '#';
let booPrevious = false,
  booNext = false;

const checkIsChapter = function () {
  if (relativeURL.slice(1, 6) !== Books) return false;
  for (let i = 0; i < chapterReturn.length; i++)
    if (relativeURL.includes(chapterReturn[i])) return false;
  return true;
};

const calculateButtonURL = function () {
  if (subBookURL.includes(WORDS_OF_RADIANCE)) {
    for (let i = 0; i < WordsOfRadianceChapter.length; i++) {
      if (WordsOfRadianceChapter[i] === chapterURL) {
        if (i > 0) {
          booPrevious = true;
          previousURL =
            booksURL + WORDS_OF_RADIANCE + '/' + WordsOfRadianceChapter[i - 1];
        }
        if (i < WordsOfRadianceChapter.length) {
          booNext = true;
          nextURL =
            booksURL + WORDS_OF_RADIANCE + '/' + WordsOfRadianceChapter[i + 1];
        }
        return;
      }
    }
  }
};

const controlNavigation = function () {
  navigationView.render();
};

const controlFooter = function () {
  footerView.render();
};

const controlButtons = function () {
  booButtons = checkIsChapter();
  if (booButtons) {
    calculateButtonURL();
    buttonView.render(booPrevious, booNext, previousURL, nextURL);
  }
};

const init = function () {
  controlNavigation();
  controlFooter();
  controlButtons();
};

init();
