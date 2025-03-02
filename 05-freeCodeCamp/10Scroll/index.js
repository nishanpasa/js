// set date 
document.getElementById('date').innerText = new Date().getFullYear();

// phone device nav bar open close
linksContainer = document.querySelector('.links-container');
burger = document.querySelector('#burger');

burger.addEventListener('click', function () {
    linksContainer.classList.toggle('links-container-active');
});

// showing nav if scrolled Y below 200 
window.addEventListener('scroll', function () {
    window.pageYOffset > 200 ? document.querySelector('header').classList.add('header-white') : document.querySelector('header').classList.remove('header-white');
    backToTop();  

})

// closing the nav bar when clicked in the nav links and ofsetting the scroll to header height 
linksElement = document.querySelectorAll('.links');
linksElement.forEach(link => {
    link.addEventListener('click', function (event) {

        event.preventDefault();
        
        targetElement = link.querySelector('a').getAttribute('href'); 
        targetElement = targetElement.slice(1);  
        
        // targetElementPosition = document.getElementById(targetElement).getBoundingClientRect().top;   
        targetElementPosition = document.getElementById(targetElement).offsetTop;   
        

        const headerElementHeight = document.querySelector('header').getBoundingClientRect().height;
        

        isLinkContainerActive = linksContainer.classList.contains('links-container-active');

        position = targetElementPosition - headerElementHeight; 
        

        if (isLinkContainerActive) {
            position = targetElementPosition -95; 
        }

        
        // position = targetElementPosition  + pageYOffset - headerElementHeight 

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.classList.remove('links-container-active');        
    })
});

// back to top 
backToTop = () => {
    window.pageYOffset > 400 ? document.querySelector('.back-to-top').classList.add('back-to-top-active') : document.querySelector('.back-to-top').classList.remove('back-to-top-active');
}






