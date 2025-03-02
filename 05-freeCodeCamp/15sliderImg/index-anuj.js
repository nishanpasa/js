let imgList = [
    'img-1.jpeg',
    'img-2.jpeg',
    'person-1.jpeg',
]

let imgContainer = document.querySelector('#imgContainer').querySelector('img');

let imgIndex = 0;
imgContainer.src = imgList[imgIndex];

let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');

prevBtn.classList.add('text-gray-500');

nextBtn.addEventListener('click', function () {
    prevBtn.classList.remove('text-gray-500');

    if (imgIndex < imgList.length-1 || imgIndex >imgList.length) {  
        imgIndex++;
    }
    imgContainer.src = imgList[imgIndex];

    if (imgIndex == imgList.length-1) {      
        nextBtn.classList.add('text-gray-500');
    }

});

prevBtn.addEventListener('click', function () {
    nextBtn.classList.remove('text-gray-500');
    if (imgIndex > 0) {
        imgIndex--;        
    };
    imgContainer.src = imgList[imgIndex];

    if (imgIndex == 0) {      
        prevBtn.classList.add('text-gray-500');
    }
});
