"use strict";const BASE_URL="http://127.0.0.1:8080/",markup='<span class="navigation__edge"></span>\n      <span class="navigation__main">\n        <ul class="navigation__list">\n          <li class="navigation__list-item">\n            <a href="/" class="navigation__link navigation__link-active">\n              Home\n            </a>\n          </li>\n          <li class="navigation__list-item">\n            <a\n              href="Books/TheWayOfKings/AboveSilence/prologue.html"\n              class="navigation__link"\n            >\n              Books\n            </a>\n          </li>\n          <li class="navigation__list-item">\n            <a href="#" class="navigation__link">Characters</a>\n          </li>\n          <li class="navigation__list-item">\n            <a href="#" class="navigation__link">Questions</a>\n          </li>\n          <li class="navigation__list-item">\n            <a href="#" class="navigation__link">Theories</a>\n          </li>\n        </ul>\n      </span>\n      <span class="navigation__edge"></span>',navigation=document.querySelector(".navigation"),add=function(){let n=document.URL;const a=n.indexOf("/",0);n=n.slice(a),console.log(n);const i=n.indexOf("/"),s=n.slice(0,i);document.querySelectorAll(".navigation__list-item").forEach((n=>{n.textContent===s&&n.classList.add("active")})),""===n&&item[0].classList.add("active"),navigation.insertAdjacentHTML("beforeend",markup)};add();
//# sourceMappingURL=index.c95edfa9.js.map
