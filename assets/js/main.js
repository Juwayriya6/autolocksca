// Popup open/close
const popup = document.getElementById('service-popup');
const openers = document.querySelectorAll('[data-open-popup]');
const closeBtn = document.querySelector('[data-close-popup], #service-popup .close');

openers.forEach(btn => btn.addEventListener('click', () => {
  popup.style.display = 'grid';
  popup.setAttribute('aria-hidden', 'false');
}));

if (closeBtn) closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
  }
});