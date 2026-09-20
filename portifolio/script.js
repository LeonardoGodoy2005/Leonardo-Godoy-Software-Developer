/* ========================================
   CURSOR
======================================== */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    cursorRing.style.left = `${event.clientX}px`;
    cursorRing.style.top = `${event.clientY}px`;

});


/* ========================================
   CURSOR HOVER
======================================== */

const interactiveElements = document.querySelectorAll(
    "a, button, .project-image, .skill-row, .service"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "65px";
        cursorRing.style.height = "65px";
        cursorRing.style.borderColor = "#8b5cf6";

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "35px";
        cursorRing.style.height = "35px";
        cursorRing.style.borderColor =
            "rgba(255,255,255,0.5)";

    });

});


/* ========================================
   REVEAL NO SCROLL
======================================== */

const revealElements = document.querySelectorAll(
    ".section-number, .eyebrow, .intro h2, .intro-text, .project, .skill-row, .service, .contact-main, .contact-link"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


/* ========================================
   PARALLAX DA FOTO
======================================== */

const hero = document.querySelector(".hero");
const photo = document.querySelector(".photo-wrapper");

if (hero && photo) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        photo.style.transform = `
            translate(
                ${x * 12}px,
                ${y * 12}px
            )
        `;

    });

    hero.addEventListener("mouseleave", () => {

        photo.style.transform = "translate(0, 0)";

    });

}


/* ========================================
   PARALLAX DOS PROJETOS
======================================== */

const projectImages =
    document.querySelectorAll(".project-image");

projectImages.forEach((image) => {

    image.addEventListener("mousemove", (event) => {

        const rect = image.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        const img = image.querySelector("img");

        if (img) {

            img.style.transform = `
                scale(1.04)
                translate(
                    ${x * 8}px,
                    ${y * 8}px
                )
            `;

        }

    });


    image.addEventListener("mouseleave", () => {

        const img = image.querySelector("img");

        if (img) {
            img.style.transform = "scale(1)";
        }

    });

});


/* ========================================
   NAVEGAÇÃO SUAVE
======================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ========================================
   ANO AUTOMÁTICO
======================================== */

const year =
    document.querySelector(".footer p");

if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} Leonardo Godoy`;

}