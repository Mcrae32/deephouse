//scroll for sidebar menu
let element = document.querySelectorAll('.navbar');
window.addEventListener('scroll', function () {

    if (window.scrollY > 56) {
        element.classList.add("padding-top");
    } else {
        element.classList.remove("padding-top");
    }

});