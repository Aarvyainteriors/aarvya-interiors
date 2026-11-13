// Aarvya Interiors — business contact settings.
const WHATSAPP_NUMBER = "917760409127"; // International format, digits only.
const INSTAGRAM_URL = "https://www.instagram.com/aarvyainteriorsanddesigns/";

const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");

if (whatsappLink) {
  const message = encodeURIComponent("Hi Aarvya Interiors! I'd like to enquire about an interior design project.");
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
if (instagramLink) instagramLink.href = INSTAGRAM_URL;

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
