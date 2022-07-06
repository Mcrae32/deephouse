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