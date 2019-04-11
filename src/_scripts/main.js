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
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const chapterHeadings = document.querySelectorAll('.content-heading');

  window.setTimeout(chapterNav.getHeadingTitles(chapterHeadings), 2500);
  window.addEventListener('resize', () => {
    chapterNav.headingTitles = [];
    chapterNav.getHeadingTitles(chapterHeadings);
  });

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
