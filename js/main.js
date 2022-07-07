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

// function addActiveBlutton(button) {
//     for (let i = 0; i < button.length; i++) {
//         button[i].classList.add('is-active');
//     }
// };

// function removeActiveBlutton(button) {
//     for (let i = 0; i < button.length; i++) {
//         button[i].classList.remove('is-active');
//     }
// };

// container.onclick = function() {
//     container.classList.toggle("container_color_red");
// }

function addActiveBlutton(button) {
    button.classList.toggle("is-active");
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('is-active');
    }
};

hamburger.addEventListener('click', addActiveBlutton);