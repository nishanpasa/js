console.log('43. **Function with Recursive Call**');
console.log('- Define a recursive function `factorial` that calculates the factorial of a number. What is the factorial of 5? What about 0?');


function factorial(x) {
    let a =1;
    for (let i = x; i > 0; i--) {
        a = a*i;
    }
    return a;
}
console.log(factorial(5));