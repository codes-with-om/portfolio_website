const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const revealElements = document.querySelectorAll(
  ".section-heading, .glass-card, .skill-card, .project-card, .timeline-item, .contact-wrapper, .profile-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
}

function activeNavOnScroll() {
  const sections = document.querySelectorAll("section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  activeNavOnScroll();
});

window.addEventListener("load", () => {
  revealOnScroll();
  activeNavOnScroll();
});