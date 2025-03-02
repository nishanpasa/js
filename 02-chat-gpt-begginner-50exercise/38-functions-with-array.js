console.log('38. **Function with Array**');
console.log('- Create a function `sumArray` that takes an array of numbers as a parameter and returns their sum. Given the array `[1, 2, 3, 4, 5]`, what is the sum?');

num = [1, 2, 3, 4, 5];
function sumArray(x) {
    let a =0;
    for (let i = 0; i < x.length; i++) {        
        a=a+num[i];        
    }
    return a;
}
console.log(sumArray(num));