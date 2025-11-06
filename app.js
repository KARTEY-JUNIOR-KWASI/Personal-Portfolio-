const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const typedOutput = document.getElementById("typed-output");
const typedPhrase = "Tech • Automation • Design • AI Tips";
let typedIndex = 0;
let isDeleting = false;

// Update these speeds to tweak the hero typed effect feel.
const typedSettings = {
  typeSpeed: 80,
  deleteSpeed: 35,
  holdDelay: 1800,
};

function runTypedEffect() {
  if (!typedOutput) return;

  if (prefersReducedMotion.matches) {
    typedOutput.textContent = typedPhrase;
    return;
  }

  const currentText = typedOutput.textContent;

  if (!isDeleting && typedIndex <= typedPhrase.length) {
    typedOutput.textContent = typedPhrase.slice(0, typedIndex++);
    setTimeout(runTypedEffect, typedSettings.typeSpeed);
    return;
  }

  if (!isDeleting) {
    isDeleting = true;
    setTimeout(runTypedEffect, typedSettings.holdDelay);
    return;
  }

  if (isDeleting && typedIndex >= 0) {
    typedOutput.textContent = currentText.slice(0, typedIndex--);
    setTimeout(runTypedEffect, typedSettings.deleteSpeed);
    return;
  }

  isDeleting = false;
  typedIndex = 0;
  setTimeout(runTypedEffect, 600);
}

runTypedEffect();

prefersReducedMotion.addEventListener("change", () => {
  if (!typedOutput) return;
  typedOutput.textContent = "";
  typedIndex = 0;
  isDeleting = false;
  runTypedEffect();
});

const revealNodes = document.querySelectorAll("[data-reveal]");

if (revealNodes.length) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  revealNodes.forEach(node => {
    const delay = node.getAttribute("data-reveal-delay");
    const duration = node.getAttribute("data-reveal-duration");
    if (delay) {
      node.style.transitionDelay = `${parseInt(delay, 10)}ms`;
    }
    if (duration) {
      node.style.transitionDuration = `${parseInt(duration, 10)}ms`;
    }
    revealObserver.observe(node);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll("[data-nav-link]");

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

const sections = document.querySelectorAll("[data-section]");

if (sections.length && navLinks.length) {
  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isActive);
        });
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(section => navObserver.observe(section));
}

const header = document.querySelector("[data-header]");
let lastScrollY = window.scrollY;

const handleScroll = () => {
  if (!header) return;
  const currentScroll = window.scrollY;
  const isBeyond = currentScroll > lastScrollY && currentScroll > 120;
  header.style.transform = isBeyond ? "translateY(-140%)" : "translateY(0)";
  lastScrollY = currentScroll;
};

window.addEventListener("scroll", handleScroll, { passive: true });

const cards = document.querySelectorAll("[data-project]");

const resetTilt = card => {
  card.style.setProperty("--tiltX", "0deg");
  card.style.setProperty("--tiltY", "0deg");
};

if (cards.length) {
  cards.forEach(card => {
    if (!prefersReducedMotion.matches) {
      card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltX = (x - 0.5) * 12;
        const tiltY = (0.5 - y) * 12;
        card.style.setProperty("--tiltX", `${tiltX}deg`);
        card.style.setProperty("--tiltY", `${tiltY}deg`);
      });
    }

    card.addEventListener("mouseleave", () => resetTilt(card));
    card.addEventListener("blur", () => resetTilt(card));
  });
}

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalCloseButtons = modal?.querySelectorAll("[data-modal-close]") ?? [];
let lastFocusedElement = null;
let modalTrapHandler = null;

const openModal = card => {
  if (!modal || !modalTitle || !modalDescription || !modalTech) return;
  lastFocusedElement = document.activeElement;

  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modalTech.textContent = `Tech: ${card.dataset.tech}`;

  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");

  const focusable = modal.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  focusable[0]?.focus();

  modalTrapHandler = event => {
    if (event.key !== "Tab") return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (modalTrapHandler) {
    modal.addEventListener("keydown", modalTrapHandler);
  }
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
  if (modalTrapHandler) {
    modal.removeEventListener("keydown", modalTrapHandler);
    modalTrapHandler = null;
  }
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
};

cards.forEach(card => {
  card.querySelector(".project-card__cta")?.addEventListener("click", () => openModal(card));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card);
    }
  });
});

modalCloseButtons.forEach(button => {
  button.addEventListener("click", closeModal);
});

modal?.addEventListener("click", event => {
  if (event.target === modal || event.target.hasAttribute("data-modal-close")) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal?.classList.contains("is-active")) {
    closeModal();
  }
});

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const readmeButton = document.getElementById("download-readme");

if (readmeButton) {
  readmeButton.addEventListener("click", () => {
    const readmeContent = `# BigJuu Tech Portfolio\n\nModern single-page portfolio featuring animated hero blobs, IntersectionObserver reveals, and vanilla JavaScript interactions.\n\n## Sections\n- Hero with typed focus states\n- About, Services, Projects with modal details\n- Contact form with README download\n\n## Tech\n- HTML5, CSS3 (glass + dark theme), vanilla JS\n- Smooth scrolling, custom cubic-bezier animations\n`; // Edit content above to change README copy

    const blob = new Blob([readmeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(url);
  });
}

const contactForm = document.querySelector(".contact__form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    contactForm.reset();
  });
}
