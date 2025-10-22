// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle
const btn = document.getElementById('toggleTheme');

const applyMode = (mode) => {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    btn.textContent = 'Light';
  } else {
    document.body.classList.remove('dark');
    btn.textContent = 'Dark';
  }
};

const saved = localStorage.getItem('theme');
applyMode(saved || 'light');

btn.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyMode(next);
});
