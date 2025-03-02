function getElements(...elements) { // Use rest parameter (...)  
    const elementsArray = {};
    elements.forEach(element => {
        elementsArray[element] = document.querySelector(`#${element}`);
    });
    return elementsArray;
}
let { decreaseBtn, increaseBtn, timerElement, resetBtn } = getElements('decreaseBtn', 'increaseBtn', 'timerElement', 'resetBtn');

decreaseBtn.addEventListener('click',()=>timerStart('--'));
increaseBtn.addEventListener('click',() => timerStart('++'));


function timerStart(operation) {
    timerValue = timerElement.innerText;
    timerValue = Number(timerValue);
    if (operation === '--') {
        timerValue --;
    }else if (operation === '++'){
        timerValue ++;
    }
    timerElement.innerText = timerValue;
    
    if (timerValue >0) {
        timerElement.style.color = 'green';
    }
    else if (timerValue < 0){
        timerElement.style.color = 'red';
    }else{
        timerElement.style.color = 'black';
    }
}

resetBtn.addEventListener('click', function timerStart() {
    timerElement.textContent = 0;
    timerElement.style.color = 'black';
});