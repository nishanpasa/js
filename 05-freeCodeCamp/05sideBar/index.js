let navDiv = document.querySelector('#navDiv');
let navLinks = document.querySelector('#navLinks');
let socialLinks = document.querySelector('#socialLinks');
let navBurger = document.querySelector('#navBurger');
let navBurgerClose = document.querySelector('#navBurgerClose');

navBurger.addEventListener('click', function () {

    if ((navDiv.classList).contains('navDiv-width')) {
        (navDiv.classList).remove('navDiv-width');
    } else {
        (navDiv.classList).add('navDiv-width');
    }
});

navBurgerClose.addEventListener('click', function () { 
    navDiv.classList.toggle('navDiv-width');
    
})
