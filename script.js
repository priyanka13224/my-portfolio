// Theme toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  btn.textContent = isDark ? '☀️' : '🌙';
});