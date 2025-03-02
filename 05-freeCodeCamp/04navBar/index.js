let navDiv = document.querySelector('#navDiv');
let navLinks = document.querySelector('#navLinks');
let socialLinks = document.querySelector('#socialLinks');
let navBurger = document.querySelector('#navBurger');

navBurger.addEventListener('click', function () {

    if ((navLinks.classList).contains('nav-links-height') && (socialLinks.classList).contains('social-links-height')) {
        (navLinks.classList).remove('nav-links-height');
        (socialLinks.classList).remove('social-links-height');
    } else {
        (navLinks.classList).add('nav-links-height');
        (socialLinks.classList).add('social-links-height');
    }

    //you can use toggle function insetad of if else
    /*
    navLinks.classList.toggle('nav-links-height');
    socialLinks.classList.toggle('social-links-height');
    */
})
