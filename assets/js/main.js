// Handle Popup Form
const serviceButtons = document.querySelectorAll('.service-btn');
const popup = document.getElementById('service-popup');
const closeBtn = document.querySelector('.close-btn');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});