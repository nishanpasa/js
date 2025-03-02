let imgList = [
    'img-1.jpeg',
    'img-2.jpeg',
    'person-1.jpeg',
]

let imgContainer = document.querySelector('#imgContainer').querySelector('img');

let imgIndex = 0;
function updateImage() {
    imgContainer.src = imgList[imgIndex];

    // mute the button 
    document.querySelector('.prev').classList.toggle('text-gray-500', imgIndex ===0);
    document.querySelector('.next').classList.toggle('text-gray-500', imgIndex === imgList.length-1);
}

updateImage();

// setting the image 
let btnsContainer = document.querySelector('.btns-container');
controlBtns = btnsContainer.querySelectorAll('button');

controlBtns.forEach(controlBtn => {
    controlBtn.addEventListener('click', function () {
        if (controlBtn.classList.contains('prev')) {            
            if (imgIndex > 0) { 
                imgIndex--;
            }
        } else {
            if (imgIndex < imgList.length - 1) {
                imgIndex++;
            }
        }
    updateImage();

    });
});





