// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  
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
