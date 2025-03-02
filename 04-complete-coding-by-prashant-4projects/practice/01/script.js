
/*2 
function sum(x,y) {
    return x+y;
}

function runTwice(y) {
    console.log(y());
    console.log(y());    
}
runTwice(() => sum(3,5)); // runTwice(sum(3,5)); this doesnt work 
*/


// 3 and 4 // like a nav mega menu 
/*
function doubleSize() {
    document.querySelector('button').classList.add ('double-button');
}

function doubleOnHover() {
    setTimeout(doubleSize,2000)    
}

document.querySelector('button').addEventListener("mouseover",doubleOnHover);
*/

// 5 
/*
let numArr = [1,2,3,4,5]
function sumArr(arr) {
    let sum = 0;
    arr.forEach(element => {        
        sum = sum + element;    
    });
    console.log(sum);    
}
sumArr(numArr); 
*/


// 6
/**/
let numArr = [1,2,3,4,5];
let sqArr = numArr.map(x=> x*x)
console.log(sqArr);

