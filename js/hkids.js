let btn = document.querySelector('.header__nav__contenedor__btnMenu');
let icon = document.querySelector('.fa-bars');
let menu = document.querySelector('.header__nav__contenedor__menu');
let disableScroll = document.querySelector('body');

btn.addEventListener('click', function() {
    if(icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-times');
        menu.classList.toggle('mostrarMenu');
        disableScroll.classList.add('scroll');
    }
    else {
        icon.classList.replace('fa-times', 'fa-bars');
        menu.classList.toggle('mostrarMenu');
        disableScroll.classList.remove('scroll');
    }
})