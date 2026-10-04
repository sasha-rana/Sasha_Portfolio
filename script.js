// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);
