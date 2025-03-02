// function checkAnswer(){
//     this.
// }

let ans = 37;

let ansArray = [32,1,11];
function checkAnswer(element) {
    allLabel = document.querySelectorAll('label');
    allLabel.forEach(label => label.style.background = '');

    let labelElement = element.closest('label');  
    if (element.value === `${ans}`) {
        console.log(`${ans}`);
        
        console.log('right answer');  
        labelElement.style.background = 'green';
    }
    
    else{
        if(element.value === 'a3' || element.value === '2' ){
            document.querySelector('#messiKids').style.display = 'block';
        }
        console.log('wrong answer');
        console.log(`${ans}`);
        labelElement.style.background = 'red';
        document.getElementById(`${ans}`).closest('label').style.backgroundColor = 'green';
    }
}

let count=0 
function nextQ(x) { 
    

    
    document.getElementById(`${x}`).classList.add('d-none'); 
    if (count === 0 ) {
        ans = 1;  
        
        document.getElementById ('q1').classList.add('d-none');

        document.getElementById ('q2').classList.remove('d-none');
        document.getElementById ('q2').classList.add('d-block');

    }
    console.log(count);
        
    if (count === 1) {
        ans = 11;
        document.getElementById ('q2').classList.remove('d-block');
        document.getElementById ('q3').classList.remove('d-none');
        document.getElementById ('q3').classList.add('d-block');
    }

    count++;    
    
}


