// scripts/menu.js
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primary-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
