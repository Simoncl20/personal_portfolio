/*==================== Sticky Navbar =================== */

function stickyHeader(header) {
    header.classList.toggle("sticky", window.scrollY > 100);
}

/*==================== Swiper =================== */

function swiper() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

/*==================== Scroll Sections Active =================== */

function activeLink(navLinks, sections) {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
}

/*==================== Window Scrolling =================== */

function windowScrolling() {
    let header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav a");
    const sections = document.querySelectorAll("section");

    window.onscroll = () => {
        stickyHeader(header);
        activeLink(navLinks, sections);
    };
}

function main() {
    swiper();
    windowScrolling();
}

main();

