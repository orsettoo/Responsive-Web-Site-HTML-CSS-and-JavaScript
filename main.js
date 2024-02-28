let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
};

let cart=document.querySelector('.cart');
let cartIcon = document.querySelector('#cart-icon');

cartIcon.onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
};

let user = document.querySelector('.user');
let userIcon = document.querySelector('#user-icon');

userIcon.onclick = () => {
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}



window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}






let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView:0,
        },
        568: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:2,
        },
        1020: {
            slidesPerView:3,
        },
    },
});
