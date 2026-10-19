// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Image carousels: swipe, arrows, dots, keyboard
document.querySelectorAll(".carousel").forEach((c) => {
  const track = c.querySelector(".carousel-track");
  const slides = [...track.children];
  const dots = c.querySelector(".carousel-dots");
  const current = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = (i) => {
    i = (i + slides.length) % slides.length;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  };
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Show image " + (i + 1));
    b.addEventListener("click", () => go(i));
    dots.appendChild(b);
  });
  const update = () =>
    [...dots.children].forEach((d, i) => d.classList.toggle("active", i === current()));
  c.querySelector(".prev").addEventListener("click", () => go(current() - 1));
  c.querySelector(".next").addEventListener("click", () => go(current() + 1));
  track.addEventListener("scroll", () => requestAnimationFrame(update));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
  });
  update();
});
