import navigationView from './views/navigationLoader.js';
import footerView from './views/footerLoader.js';
import buttonView from './views/buttonLoader.js';

const controlNavigation = function () {
  navigationView.render();
};

const controlFooter = function () {
  footerView.render();
};

const controlButtons = function () {
  buttonView.render();
};

const init = function () {
  controlNavigation();
  controlFooter();
  controlButtons();
};

init();
