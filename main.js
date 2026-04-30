function toggleCase(hdr) {
  const body = hdr.nextElementSibling;
  const chev = hdr.querySelector('.chevron');
  body.classList.toggle('open');
  chev.classList.toggle('open');
}

function toggleStory(btn) {
  const content = btn.parentElement.querySelector('.story-content');
  const arrow = btn.querySelector('.story-arrow');
  content.classList.toggle('open');
  arrow.classList.toggle('open');
}

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

// Scroll fade-in (index page only — skips if no .fade-in elements present)
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => obs.observe(el));
  // Trigger hero immediately on load
  const heroFade = document.querySelector('#hero .fade-in');
  if (heroFade) heroFade.classList.add('visible');
}
