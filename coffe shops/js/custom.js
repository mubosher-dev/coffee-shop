window.addEventListener('DOMContentLoaded', () => {
    var images = document.querySelectorAll('.home-imgs'),
        homeImg = document.querySelector('.home-items'),
        navbar = document.querySelector('.navbar'),
        menBtn = document.querySelector('#menu-btn');

        menBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menBtn.classList.toggle('fa-times');
        })

        images.forEach(img => {
            img.addEventListener('click', () => {
                let src = img.getAttribute('data-src');
                homeImg.src = src;
            })
        });

        var swiper = new Swiper(".review-slider", {
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        });
  
})