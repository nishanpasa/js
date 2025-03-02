console.log('37. **Function with Loop**');
console.log('- Define a function `printNumbers` that takes a number `n` as a parameter and prints numbers from 1 to `n`. How do you use this function to print numbers from 1 to 5?');

function printNumbers(n) {
    for (let i = 1; i < n; i++) {
    console.log(i);        
    }
}
printNumbers(6);