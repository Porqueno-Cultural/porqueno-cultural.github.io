// =====================================
// MENÚ ACTIVO SEGÚN SCROLL
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// =====================================
// HEADER DINÁMICO
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#12343B";

    } else {

        header.style.background = "rgba(18,52,59,.95)";

    }

});

// =====================================
// ANIMACIÓN DE ENTRADA
// =====================================

const revealElements = document.querySelectorAll(
    ".card, .section h2, .section p"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

console.log("¿Por Qué No? Cultural cargado.");
