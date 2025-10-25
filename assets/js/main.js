// Popup open/close
const popup = document.getElementById('service-popup');
const openBtns = document.querySelectorAll('.service-btn');
const closeBtn = document.querySelector('.close-btn');

openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (popup) {
      popup.style.display = 'flex';
      popup.setAttribute('aria-hidden', 'false');
    }
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
  });
}

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
  }
});