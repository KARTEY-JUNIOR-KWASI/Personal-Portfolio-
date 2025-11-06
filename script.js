const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const yearEl = document.getElementById("currentYear");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = [...document.querySelectorAll("section[id]")];
const navAnchors = [...document.querySelectorAll(".site-nav a")];

const highlightNav = () => {
  const scrollPos = window.scrollY + window.innerHeight * 0.25;

  let currentId = sections[0]?.id;
  for (const section of sections) {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  }

  navAnchors.forEach(anchor => {
    anchor.classList.toggle("active", anchor.getAttribute("href") === `#${currentId}`);
  });
};

highlightNav();
window.addEventListener("scroll", highlightNav, { passive: true });
window.addEventListener("resize", highlightNav);

// Custom cursor interactions
const cursor = document.querySelector(".cursor");
if (cursor) {
  let rafId;
  let cursorVisible = false;
  const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { ...position };

  const render = () => {
    position.x += (target.x - position.x) * 0.2;
    position.y += (target.y - position.y) * 0.2;
    cursor.style.transform = `translate(${position.x}px, ${position.y}px)`;
    rafId = requestAnimationFrame(render);
  };

  const activate = event => {
    cursorVisible = true;
    cursor.classList.add("is-active");
    target.x = event.clientX;
    target.y = event.clientY;
    if (!rafId) {
      render();
    }
  };

  const move = event => {
    if (!cursorVisible) {
      activate(event);
      return;
    }
    target.x = event.clientX;
    target.y = event.clientY;
  };

  const hide = () => {
    cursorVisible = false;
    cursor.classList.remove("is-active");
    cancelAnimationFrame(rafId);
    rafId = null;
  };

  document.addEventListener("mousemove", move);
  document.addEventListener("mouseleave", hide);
  document.addEventListener("mousedown", () => cursor.classList.add("is-pressed"));
  document.addEventListener("mouseup", () => cursor.classList.remove("is-pressed"));
}

// Tilt effect for project tiles
document.querySelectorAll(".project-tile").forEach(tile => {
  const strength = 18;
  const handleMove = event => {
    const rect = tile.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * strength;
    const rotateX = -((y - rect.height / 2) / rect.height) * strength;
    tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    tile.style.transform = "rotateX(0) rotateY(0)";
  };

  tile.addEventListener("mousemove", handleMove);
  tile.addEventListener("mouseleave", reset);
});
