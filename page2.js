/* ---------- Progress bar ---------- */
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
   const scrollTop = window.scrollY || window.pageYOffset;
   const docHeight = document.documentElement.scrollHeight - window.innerHeight;
   const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
   progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgressBar);
updateProgressBar();

/* ---------- bullets interaction & reveal ---------- */
const bullets = Array.from(document.querySelectorAll('#scroll-guide .bullet'));
const sections = Array.from(document.querySelectorAll('main section'));
const scrollGuide = document.getElementById('scroll-guide');
const header = document.getElementById('top-header');

// show scroll guide after user scrolls past header (fade-in)
function toggleScrollGuide() {
   const threshold = header.offsetHeight + 20;
   if (window.scrollY > threshold) {
      scrollGuide.classList.add('visible');
   } else {
      scrollGuide.classList.remove('visible');
   }
}
window.addEventListener('scroll', toggleScrollGuide);
toggleScrollGuide();

// IntersectionObserver to reveal sections and set active bullet
const ioOptions = { threshold: 0.38 }; // adjust to change how much of section needed
const io = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      const idx = sections.indexOf(entry.target);
      if (entry.isIntersecting) {
         // reveal the section (animation)
         entry.target.classList.add('reveal');

         // update bullets active state
         bullets.forEach(b => b.classList.remove('active'));
         if (bullets[idx]) bullets[idx].classList.add('active');
      }
   });
}, ioOptions);

sections.forEach(s => io.observe(s));

// click & keyboard navigation for bullets
bullets.forEach((b, i) => {
   b.addEventListener('click', () => {
      const id = b.dataset.target;
      const target = document.querySelector(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
   });
   b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         b.click();
      }
   });
});

// also update on resize (to handle header height changes)
window.addEventListener('resize', () => {
   updateProgressBar();
   toggleScrollGuide();
});

// initial reveal for first visible sections on load
window.addEventListener('load', () => {
   updateProgressBar();
   toggleScrollGuide();
   sections.forEach(s => {
      // if a section is already near viewport on load, mark reveal active:
      const rect = s.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) s.classList.add('reveal');
   });
});