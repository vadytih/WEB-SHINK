let nav = document.querySelector('.serviceNav');
let navLink = nav.querySelectorAll('.header_service__link');
let slider = document.querySelector('.slider');
let slide = slider.querySelectorAll('.slide');

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("mouseover", slideOn);
    navLink[i].addEventListener("mouseout", slideOff);
    function slideOn() {
        slide[i].classList.add('slide_active');
    }
    
    function slideOff() {
        slide[i].classList.remove('slide_active');
    }
}


