
/* =========================================
   SOLOMON NDEGWA NJUGUNA
   CINEMATIC MODEL PORTFOLIO
   SCRIPT.JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       1. HEADER SCROLL EFFECT
    ===================================== */

    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();

    }


    /* =====================================
       2. CINEMATIC SCROLL REVEALS
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .portfolio-item, .contact h2, .contact-description"
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15

        });


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("is-visible");

        });

    }


    /* =====================================
       3. SMOOTH NAVIGATION
    ===================================== */

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {

                return;

            }

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


    /* =====================================
       4. CINEMATIC HERO IMAGE MOVEMENT
    ===================================== */

    const heroImage = document.querySelector(
        ".hero-image img"
    );


    if (heroImage && !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < window.innerHeight) {

                const movement = scrollPosition * 0.04;

                heroImage.style.transform =
                    `scale(1.03) translateY(${movement}px)`;

            }

        }, {

            passive: true

        });

    }


    /* =====================================
       5. PORTFOLIO IMAGE HOVER EFFECT
    ===================================== */

    const portfolioItems = document.querySelectorAll(
        ".portfolio-item"
    );


    portfolioItems.forEach((item) => {

        const image = item.querySelector("img");

        if (!image) return;


        item.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.035)";

        });


        item.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });


    /* =====================================
       6. CURRENT YEAR IN FOOTER
    ===================================== */

    const yearElement = document.querySelector(
        "[data-current-year]"
    );


    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    /* =====================================
       7. IMAGE LOADING EFFECT
    ===================================== */

    const images = document.querySelectorAll("img");


    images.forEach((image) => {

        image.addEventListener("load", () => {

            image.classList.add("loaded");

        });

    });


    console.log(
        "Solomon Ndegwa Njuguna — Portfolio loaded."
    );

});