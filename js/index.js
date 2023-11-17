/*==================== Sticky Navbar =================== */

function stickyHeader() {
    window.onscroll = () => {
        let header = document.querySelector("header");

        header.classList.toggle("sticky", window.scrollY > 100);
    };
}

/*==================== Swiper =================== */

function swiper() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
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




function main() {
    stickyHeader();
    swiper();

}

main();

