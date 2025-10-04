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

// Scroll spy effect
document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("main section");
	const navLinks = document.querySelectorAll("nav ul li a");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute("id");
				const link = document.querySelector(`nav ul li a[href="#${id}"]`);

				if (entry.isIntersecting) {
					navLinks.forEach((link) => link.classList.remove("active"));
					link.classList.add("active");
				}
			});
		},
		{
			threshold: 0.6, // section must be 60% visible to trigger
			rootMargin: "-50px 0px -50px 0px", // fine-tune top/bottom margins
		}
	);

	sections.forEach((section) => {
		observer.observe(section);
	});
});

// document.addEventListener("DOMContentLoaded", () => {
//    const sections = document.querySelectorAll("main section");
//    const navLinks = document.querySelectorAll("nav ul li a");

//    window.addEventListener("scroll", () => {
//       let current = "";

//       sections.forEach((section) => {
//          const sectionTop = section.offsetTop - 100; // offset for header height
//          const sectionHeight = section.clientHeight;
//          if (
//             pageYOffset >= sectionTop &&
//             pageYOffset < sectionTop + sectionHeight
//          ) {
//             current = section.getAttribute("id");
//          }
//       });

//       navLinks.forEach((link) => {
//          link.classList.remove("active");
//          if (link.getAttribute("href").includes(current)) {
//             link.classList.add("active");
//          }
//       });
//    });
// });
