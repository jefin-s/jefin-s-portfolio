const body = document.body;
const desktopToggle = document.getElementById("theme-toggle-desktop");
const mobileToggle = document.getElementById("theme-toggle-mobile");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  desktopToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";
  mobileToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

// Theme toggle function
function toggleTheme() {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update both buttons
  desktopToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
  mobileToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
}

// Attach to both buttons
desktopToggle.addEventListener("click", toggleTheme);
mobileToggle.addEventListener("click", toggleTheme);

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
