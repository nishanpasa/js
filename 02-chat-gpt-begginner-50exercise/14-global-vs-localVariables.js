console.log('14. **Global vs. Local Variables**');
console.log('    - Create a global variable `globalVar` and a function `myFunction` that defines a local variable `localVar`. What happens when you try to access these variables?');

let globalVar = 'I\'m a global variable';

function myFunction() {
    console.log(globalVar);
    let localVar = 'I\'m a local variable and i cannot be accessed outside of the function named as myFunction';
    console.log(localVar);
}
myFunction();
console.log(glbalVar);
console.log(localVar);// this will result in an error because it is defined outside of the funciton
