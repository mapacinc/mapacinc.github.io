/* Google Tag Manager (GTM-NFV8NB7T) — loaded here because index.html (5.4 MB) is too large for the push tool's request limit; the other pages carry the same snippet in <head>. */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NFV8NB7T';
  document.head.appendChild(s);
})();

(function () {
  var burger = document.getElementById('mapacBurger');
  var menu = document.getElementById('mapacMenu');
  var header = document.querySelector('header.site');

  if (!burger || !menu || !header) return;

  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) setMenu(false);
  });

  function updateHeaderShadow() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }

  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });
})();
