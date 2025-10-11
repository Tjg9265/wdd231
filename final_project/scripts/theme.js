// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

themeToggle.addEventListener('click', () => {
  let theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});
