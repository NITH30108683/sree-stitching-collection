// ======================================================
// Sree Stitching & Collection
// Main JavaScript
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Sticky Header Shadow
    ========================================== */

    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {
                header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
            } else {
                header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
            }

        });
    }

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    /* ==========================================
       Scroll Animation
    ========================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    document.querySelectorAll(".card, .product-card").forEach(card => {

        card.classList.add("hidden");

        observer.observe(card);

    });

    /* ==========================================
       Back To Top Button
    ========================================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    topBtn.setAttribute("aria-label", "Back to Top");

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       Product Search
    ========================================== */

    const searchInput = document.getElementById("search");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const filter = searchInput.value.toLowerCase();

            const products = document.querySelectorAll(".product-card");

            products.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(filter)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

});