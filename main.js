/* Harbourline Landscapes — demo proposal. Progressive enhancement only. */
document.documentElement.classList.add('js');

(function () {
  'use strict';

  /* Mobile nav */
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
    });
  }

  /* Masked-rise reveals */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Demo contact form: validate, then show the success state (no backend on a demo). */
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = document.getElementById('form-ok');
      form.hidden = true;
      if (ok) { ok.style.display = 'block'; ok.querySelector('h3').focus && ok.querySelector('h3').setAttribute('tabindex', '-1'), ok.querySelector('h3').focus(); }
      window.scrollTo({ top: ok ? ok.offsetTop - 120 : 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
