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
