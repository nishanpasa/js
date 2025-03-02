let btnContainer = document.querySelector('.btn-container');
let navBtns = btnContainer.querySelectorAll('button');
let slider = document.querySelectorAll('.slider');
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')

let counter = 0;
// add event listener to each button
navBtns.forEach(navBtn => {
    checkDisable();
    navBtn.addEventListener('click', function () {
        // next or prev
        if (navBtn.classList.contains('next')) {
            if (counter < slider.length - 1) {
                counter++;
            }
        } else {
            if (counter > 0) {
                counter--;
            }
        }
        carousel();
        checkDisable();
    });
});


// carousel function
function carousel() {
    slider.forEach((divSlider, index) => {
            divSlider.style.transform = `translateX(-${counter * 100}%)`;
        });
}

//disable button 
function checkDisable() { 
    prevBtn.classList.toggle('text-gray-400', counter === 0);
    nextBtn.classList.toggle('text-gray-400',counter ===slider.length - 1);
}

