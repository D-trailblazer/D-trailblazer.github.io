// Reveal animation
const reveals = document.querySelectorAll(".project, .about, .contact");

function revealOnScroll() {
	reveals.forEach((section) => {
		const top = section.getBoundingClientRect().top;
		if (top < window.innerHeight - 100) {
			section.classList.add("reveal");
		}
	});
}
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("active");
	navLinks.classList.toggle("open");
});

// Scroll spy
document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("main section");
	const navLinks = document.querySelectorAll("nav ul li a");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute("id");
			const link = document.querySelector(`nav ul li a[href="#${id}"]`);
			if (entry.isIntersecting) {
				navLinks.forEach((l) => l.classList.remove("active"));
				link.classList.add("active");
			}
		});
	}, { threshold: 0.6 });

	sections.forEach((section) => observer.observe(section));
});

// Formspree logic
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const status = document.getElementById("status");
	const data = Object.fromEntries(new FormData(form));

	try {
		const response = await fetch("https://formspree.io/f/xblzkdga", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		if (response.ok) {
			status.textContent = "✅ Message sent successfully!";
			form.reset();
		} else {
			status.textContent = "❌ Failed to send message.";
		}
	} catch {
		status.textContent = "⚠️ Network error. Try again later.";
	}
});
