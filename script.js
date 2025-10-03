// Reveal animation on scroll
// Reveal sections on scroll
const reveals = document.querySelectorAll(".project, .about, .contact");

function revealOnScroll() {
   reveals.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
         section.classList.add("reveal");
      }
   });
}

// Run once on load to avoid blank page
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
