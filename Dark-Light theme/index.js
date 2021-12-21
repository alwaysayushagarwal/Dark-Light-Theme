const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
}

function enableLightMode() {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
}

function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();