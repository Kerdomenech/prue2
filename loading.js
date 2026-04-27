const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

