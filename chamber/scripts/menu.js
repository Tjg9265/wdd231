document.addEventListener("DOMContentLoaded", () => {
  // Try to find button and nav (works for both pages)
  const menuBtn = document.querySelector(".menu-toggle, #menuToggle");
  const navMenu = document.querySelector(".mobile-nav, #primary-nav");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      // Update aria-expanded if it exists
      if (menuBtn.hasAttribute("aria-expanded")) {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !expanded);
      }
    });
  }
});
