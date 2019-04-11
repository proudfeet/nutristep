// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

let chapterNav = {
  headingTitles: [],
  getHeadingTitles: function(headings) {
    headings.forEach((heading, index) => {
      this.headingTitles.push({
        title: heading.innerText,
        scrollPos: heading.getBoundingClientRect().y
      });
      heading.id = index;
    });
    let chapterMarkup = this.headingTitles.map(heading => `
      <li class="chapter-nav__list-item">
        <a class="chapter-nav__item" data-scroll="${heading.scrollPos}">${heading.title}</a>
      </li>
    `);
    document.getElementById('chapter-nav').innerHTML = chapterMarkup.join('');
    this.bindChapterNav();
  },
  bindChapterNav: function() {
    const chapterNavItems = document.querySelectorAll('.chapter-nav__item');
    chapterNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: item.dataset.scroll,
          behavior: 'smooth'
        });
      });
    });
  },
  init: function(selector) {
    this.headingTitles = [];
    this.getHeadingTitles(selector);
  }
};

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
    	timeout = null;
    	if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const chapterHeadings = document.querySelectorAll('.content-heading');

  window.setTimeout(chapterNav.init(chapterHeadings), 5000);
  window.addEventListener('resize', () => {
    debounce(chapterNav.init(chapterHeadings), 250);
  });
  
  const navTriggers = document.querySelectorAll('.mobile-nav-trigger');
  navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('mobile-nav-active');
    });
  });

  const backToTop = document.getElementById('back-to-top');
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});
