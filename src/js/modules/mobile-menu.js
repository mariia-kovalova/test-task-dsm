const refs = {
  body: document.querySelector('body'),
  openMenuBtn: document.querySelector('[data-open-menu-btn]'),
  closeMenuBtn: document.querySelector('[data-close-menu-btn]'),
  menu: document.querySelector('[data-menu]'),
  menuLink: document.querySelectorAll('[data-menu-link]'),
  backdrop: document.querySelector('.backdrop'),
};

document.addEventListener('keydown', handleKey);

refs.backdrop.addEventListener('click', handleBackDropClick);

refs.openMenuBtn.addEventListener('click', () => {
  toggleMenu();
});

refs.closeMenuBtn.addEventListener('click', () => {
  toggleMenu();
});

refs.menuLink.forEach(function (link) {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

function handleKey(e) {
  if (refs.menu.classList.contains('is-open')) {
    if (e.key === 'Escape') toggleMenu();
  }
}

function handleBackDropClick(e) {
  if (
    !e.target.closest('.mobile-menu') &&
    refs.menu.classList.contains('is-open')
  )
    toggleMenu();
}

function toggleMenu() {
  if (window.innerWidth < 1024) {
    const expanded =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openMenuBtn.setAttribute('aria-expanded', !expanded);
    refs.body.classList.toggle('scroll-hidden');
    refs.menu.classList.toggle('is-open');
    refs.backdrop.classList.toggle('is-open');
  }
}
