// JS MANIPULA EL DOM
// DOCUMENT OBJECT MODEL -> HTML COMO UN OBJETO

// console.log(document)
// var
// let y const
// console.log(window.document);
// let nav = document.querySelector('.nav');
let welcomeNav = document.querySelector('.nav__welcome');
let searchNav = document.querySelector('.nav__search');
let menuNav = document.querySelector('.nav__menu__contenedor__right__box');
let btnMenu = document.querySelector('.nav__menu__contenedor--iconMenu');

btnMenu.addEventListener('click', function (e) {
    // console.log(e);
    e.preventDefault();
    // console.log('hiciste click');
    // menuNav.classList.add('active');
    menuNav.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    // console.log('hiciste scroll');
    // console.log(scrollY);
    if (scrollY > 0) {
        // console.log('Es mayor a cero');
        welcomeNav.classList.add('d-hide');
        searchNav.classList.add('d-hide');
    } else {
        // console.log('regresaste al punto cero');
        welcomeNav.classList.remove('d-hide');
        searchNav.classList.remove('d-hide');
    }
});
