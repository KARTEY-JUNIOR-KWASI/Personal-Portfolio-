const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const animatedNodes = document.querySelectorAll("[data-animate]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const sections = document.querySelectorAll("main section[id]");
const scrollTopButton = document.querySelector(".scroll-top");
const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (animatedNodes.length && !prefersReducedMotion.matches) {
  const animationObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedNodes.forEach(node => animationObserver.observe(node));
} else {
  animatedNodes.forEach(node => node.classList.add("is-visible"));
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    });
  });
}

const activateLinkForSection = id => {
  navLinks.forEach(link => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateLinkForSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(section => sectionObserver.observe(section));
}

let lastScrollY = window.scrollY;
const headerScrollThreshold = 120;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (scrollTopButton) {
    scrollTopButton.classList.toggle("is-visible", currentScroll > 420);
  }

  if (nav) {
    const isScrollingDown = currentScroll > lastScrollY && currentScroll > headerScrollThreshold;
    nav.style.transform = isScrollingDown ? "translateY(-140%)" : "translateY(0)";
  }

  lastScrollY = currentScroll;
};

window.addEventListener("scroll", handleScroll, { passive: true });

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
  });
}

const focusTrapOnToggle = () => {
  if (!primaryNav || !navToggle) return;

  const focusable = primaryNav.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  const handleKeydown = event => {
    if (event.key !== "Tab" || !primaryNav.classList.contains("is-open")) return;

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  primaryNav.addEventListener("keydown", handleKeydown);
};

focusTrapOnToggle();

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && primaryNav?.classList.contains("is-open")) {
    primaryNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.focus();
  }
});
