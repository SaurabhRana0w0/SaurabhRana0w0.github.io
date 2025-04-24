// Desktop Warning
function checkViewport() {
  document.getElementById('desktop-warning')
    .classList.toggle('hidden', window.innerWidth <= 600);
}
window.addEventListener('load', checkViewport);
window.addEventListener('resize', checkViewport);

// Menu Toggle
const menuBtn = document.getElementById('menu-toggle');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('change');
  nav.classList.toggle('active');
});
// Close on link click, removing 'change'
document.querySelectorAll('nav ul li a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('change');
  })
);

// Theme toggle (sidebar)
const themeToggle = document.getElementById('nav-theme-toggle');
const current = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', current);
if (current === 'dark') themeToggle.classList.replace('bx-sun','bx-moon');

themeToggle.addEventListener('click', () => {
  let t = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeToggle.classList.toggle('bx-moon');
  themeToggle.classList.toggle('bx-sun');
});

// Go-top button
const goTop = document.getElementById('go-top');
window.addEventListener('scroll', () =>
  goTop.style.display = window.scrollY > 200 ? 'block' : 'none'
);
goTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// Scroll down arrow
document.querySelector('.down-arrow').addEventListener('click', () =>
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
);
const words = ["  Researcher ", "  Developer ", "  Creator ",  "  Engineer  "];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = "";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const typedText = document.getElementById("typed-text");
    const fullWord = words[wordIndex];

    if (isDeleting) {
      currentText = fullWord.substring(0, charIndex--);
    } else {
      currentText = fullWord.substring(0, charIndex++);
    }

    typedText.textContent = currentText;

    if (!isDeleting && charIndex === fullWord.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
