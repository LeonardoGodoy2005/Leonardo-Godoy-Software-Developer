
// ================================
// HEADER AO ROLAR A PÁGINA
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ================================
// ANIMAÇÃO DAS SEÇÕES
// ================================

const elements = document.querySelectorAll(
    ".section-title, .about-content, .skill, .service-card, .project-card, .contact-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// ================================
// ANIMAÇÃO DOS PROJETOS
// ================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});


// ================================
// ANO AUTOMÁTICO DO FOOTER
// ================================

const footerText = document.querySelector(".footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML = `
        © ${currentYear} Leonardo Godoy. Desenvolvido com 💻 e ☕
    `;
}


// ================================
// NAVEGAÇÃO SUAVE
// ================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

