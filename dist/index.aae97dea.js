class n{previous=null;next=null;render(){const n=this._generateMarkup();this._parentElement.insertAdjacentHTML("beforeend",n)}}var a=new class extends n{_parentElement=document.querySelector(".navigation");_generateMarkup(){return screen.width>800?'<span class="navigation__edge"></span>\n        <span class="navigation__main">\n          <ul class="navigation__list">\n            <li class="navigation__list-item">\n            <a href="/" class="navigation__link navigation__link-active">\n            Home\n            </a>\n            \n            </li>\n            <li class="navigation__list-item">\n              <div class="navigation__dropdown-menu">\n                <a\n                  href="/Books/Books.html"\n                  class="navigation__link"\n                >\n                  Books\n                </a>\n                <div class="navigation__dropdown-content">\n                  <a href="/Books/TheWayOfKings/TheWayOfKings.html" class="navigation__dropdown-link">The Way Of Kings</a>\n                  <a href="/Books/WordsOfRadiance/WordsOfRadiance.html" class="navigation__dropdown-link">Words Of Radiance</a>\n                  <a href="/Books/Oathbringer/Oathbringer.html" class="navigation__dropdown-link">Oathbringer</a>\n                  <a href="/Books/RhythmOfWar/RhythmOfWar.html" class="navigation__dropdown-link">Rhythm Of War</a>\n                </div>\n              </div>\n            </li>\n            <li class="navigation__list-item">\n              <a href="/Characters/Characters.html" class="navigation__link">Characters</a>\n            </li>\n            <li class="navigation__list-item">\n              <a href="/Questions/Questions.html" class="navigation__link">Questions</a>\n            </li>\n            <li class="navigation__list-item">\n              <a href="/Theories/Theories.html" class="navigation__link">Theories</a>\n            </li>\n          </ul>\n        </span>\n        <span class="navigation__edge"></span>':'<input\n        type="checkbox"\n        class="mobile-navigation__checkbox"\n        id="mobile-navigation__toggle"\n      />\n\n      <label for="mobile-navigation__toggle" class="mobile-navigation__button">\n        <span class="mobile-navigation__icon">&nbsp;</span>\n      </label>\n\n      <div class="mobile-navigation__background">&nbsp;</div>\n\n      <nav class="mobile-navigation__nav">\n        <ul class="mobile-navigation__list">\n          <li class="mobile-navigation__item">\n            <a href="/index.html" class="mobile-navigation__link">Home</a>\n          </li>\n          <li class="mobile-navigation__item">\n            <a href="/Books/Books.html" class="mobile-navigation__link">\n              Books\n            </a>\n          </li>\n          <li class="mobile-navigation__item">\n            <a\n              href="/Characters/Characters.html"\n              class="mobile-navigation__link"\n            >\n              Characters\n            </a>\n          </li>\n          <li class="mobile-navigation__item">\n            <a href="/Questions/Questions.html" class="mobile-navigation__link">\n              Questions\n            </a>\n          </li>\n          <li class="mobile-navigation__item">\n            <a href="Theories/Theories.html" class="mobile-navigation__link">\n              Theories\n            </a>\n          </li>\n        </ul>\n      </nav>'}};var t=new class extends n{_parentElement=document.querySelector(".footer");_generateMarkup(){return'\n    <footer class="footer">\n    <div class="footer__grid">\n    <span class="footer__title">Home</span>\n    <span class="footer__title">Books</span>\n    <span class="footer__title">Characters</span>\n    <span class="footer__title">Questions</span>\n    <span class="footer__title">Theories</span>\n    </div>\n    </footer>'}};var e=new class extends n{_parentElement=document.querySelectorAll(".btn__container");render(n,a,t,e){const i=this._generateMarkup(n,a,t,e);this._parentElement.forEach((n=>n.insertAdjacentHTML("beforeend",i)))}_generateMarkup(n,a,t,e){return console.log(n,a,t,e),0==n?`\n      <a href="${e}" class="btn__next">Forward</a>`:0==a?`\n      <a href="${t}" class="btn__previous">Back</a>`:`\n    <a href="${t}" class="btn__previous">Back</a>\n    <a href="${e}" class="btn__next">Forward</a>`}};const i=["Prologue.html","Alight/Chapter1.html","Alight/Chapter2.html","Alight/Chapter3.html","Alight/Chapter4.html","Alight/Chapter5.html","Alight/Chapter6.html","Alight/Chapter7.html","Alight/Chapter8.html","Alight/Chapter9.html","Alight/Chapter10.html","Alight/Chapter11.html","Alight/Chapter12.html","Alight/Interlude1.html","Alight/Interlude2.html","Alight/Interlude3.html","Alight/Interlude4.html","WindsApproach/Chapter13.html","WindsApproach/Chapter14.html","WindsApproach/Chapter15.html","WindsApproach/Chapter16.html","WindsApproach/Chapter17.html","WindsApproach/Chapter18.html","WindsApproach/Chapter19.html","WindsApproach/Chapter20.html","WindsApproach/Chapter21.html","WindsApproach/Chapter22.html","WindsApproach/Chapter23.html","WindsApproach/Chapter24.html","WindsApproach/Chapter25.html","WindsApproach/Chapter26.html","WindsApproach/Chapter27.html","WindsApproach/Chapter28.html","WindsApproach/Chapter29.html","WindsApproach/Chapter30.html","WindsApproach/Chapter31.html","WindsApproach/Chapter32.html","WindsApproach/Chapter33.html","WindsApproach/Chapter34.html","WindsApproach/Interlude5.html","WindsApproach/Interlude6.html","WindsApproach/Interlude7.html","WindsApproach/Interlude8.html"],l=["Books/Books.html","Books/TheWayOfKings/TheWayOfKings.html","Books/WordsOfRadiance/WordsOfRadiance.html","Books/Oathbringer/Oathbringer.html","Books/RhythmOfWar/RhythmOfWar.html"];let s;const o=window.location.pathname,r="/Books/",h=o.replace(r,""),p=h.slice(h.indexOf("/")+1),c="WordsOfRadiance";let _="#",m="#",d=!1,g=!1;const v=function(){s=function(){if("Books"!==o.slice(1,6))return!1;for(let n=0;n<l.length;n++)if(o.includes(l[n]))return!1;return!0}(),s&&(!function(){if(h.includes(c))for(let n=0;n<i.length;n++)if(i[n]===p)return n>0&&(d=!0,_=r+c+"/"+i[n-1]),void(n<i.length&&(g=!0,m=r+c+"/"+i[n+1]))}(),e.render(d,g,_,m))};a.render(),t.render(),v();
//# sourceMappingURL=index.aae97dea.js.map