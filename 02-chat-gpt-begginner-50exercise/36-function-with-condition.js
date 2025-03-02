console.log('36. **Function with Conditional**');
console.log('- Create a function `isEven` that takes a number as a parameter and returns true if it\'s even and false if it\'s not. What does `isEven(4)` return?');


function isEven(x) {
    if (x%2===0) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}

isEven(4);