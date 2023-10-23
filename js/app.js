/*
------------------------  
24. Hero
--------------------------
*/

let hero_heading = document.getElementById("hero_heading");
let sec_slider = document.querySelector("#sec_slider");
let header_navbar = document.querySelector(".header-navbar");

if (window.scrollY >= sec_slider.offsetTop) {
    header_navbar.classList.add("active");
} else {
    header_navbar.classList.remove("active");
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    hero_heading.style.bottom = value * 0.25 + "px";

    if (window.scrollY >= sec_slider.offsetTop) {
        header_navbar.classList.add("active");
    } else {
        header_navbar.classList.remove("active");
    }
});
/*
------------------------  
24. Swiper
--------------------------
*/

const swiper2 = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.wrap_pagination .swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: swiper,
    },
    effect: "fade",

});

var swiper = new Swiper(".PaginationSwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});


function load_pagination() {
    window.addEventListener("load", (e) => {
        let span = document.querySelectorAll(".swiper .swiper-pagination span");
        let slide = document.querySelectorAll(".swiper .swiper-slide");
        for (let i = 0; i < slide.length; i++) {
            let img = document.createElement('img');
            let imgSrc = slide[i].querySelector("img").src;
            img.src = imgSrc;
            span[i].append(img);
            span[i].classList.add(`slide_${i + 1}`);

        }

    })
}

let btn_1 = document.querySelectorAll(".btn_next");
let btn_2 = document.querySelectorAll(".btn_prev");

btn_1.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e)
        document.querySelector(".slide_1").click();
    })
})

btn_2.forEach(element => {
    element.addEventListener("click", (e) => {
        document.querySelector(".slide_2").click();
    })
})

load_pagination()