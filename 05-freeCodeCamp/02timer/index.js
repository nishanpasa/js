let btnElements = document.querySelectorAll('button');
let timerText = document.querySelector('#timerElement').textContent;
let count = 0;

btnElements.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let x = e.currentTarget.classList;
        console.log(x);                
        let y = btn.classList;
        console.log(y);        

        if (x.contains('decreaseBtn')) {
            count--;
        }else if (x.contains('increaseBtn')) {
            count++;
        }else {
            count = 0;
        }

        if (count > 0) {
            color = 'green';
        }else if (count < 0) {
            color = 'red';
        }else {
            color = 'black';
        }
        document.querySelector('#timerElement').textContent = count;
        document.querySelector('#timerElement').style.color = color;
    })
});

