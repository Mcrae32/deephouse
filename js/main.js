//scroll for sidebar menu
let element = document.querySelectorAll('.navbar');
window.addEventListener('scroll', function () {

    if (window.scrollY < 56) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add("padding-top");
        }
    } else {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.remove("padding-top");
        }
    };

});

//button-hamburger

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
    } else {
        hamburger.classList.add('is-active');
    }
})
