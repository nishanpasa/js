window.addEventListener('load', function () {
    let preloaderElement = this.document.querySelector('.preloader');
    preloaderElement.classList.add('d-none');
});



let playBtn = this.document.querySelector('#playBtn');
let pauseBtn = this.document.querySelector('#pauseBtn');

playBtn.addEventListener('click', function () {
    document.querySelector('.video-element').
    play();
})
pauseBtn.addEventListener('click', function () {
    document.querySelector('.video-element').
    pause();
})