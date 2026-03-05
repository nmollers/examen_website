const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  success.classList.remove("hidden");

  form.reset();
});

// Navbar shadow bij scroll

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});
