// <!-- ========== Start "divisible or not" LONG PROCESS========== -->

// console.log('start of : checks if the input is even or odd and if even, divides it by 2 and shows the result else rejects ');

/*
let number = 32;
let is_even = number % 2;
let quotient = number / 2;

if (is_even === 0) {

    console.log('The mentioned number was "' + number + '" and it is an even number whose when divide by 2 is "' + quotient + '"');  //displays if the number is even  and divides by 2

    if (quotient % 2 != 0) {
        console.log('the output was odd i.e. "' + quotient+ '"'); //checks if the output is odd or even
    }else{
        console.log(quotient / 2 + ' hello');

        if (quotient%2 != 0){
            console.log('now it cant be divided by 2 and it is a odd number')
        }else{
            console.log(  (quotient/2)/2 +' it can be divided further agian')
        }
    }

} else {
    console.log('The mentioned number was "' + number+ '" which is odd, nd I dont work for odd numbers');
}
console.log('');
*/

// console.log('end of :  checks if the input is even or odd and if even, divides it by 2 and shows the result else rejects ');

// <!-- ========== End "divisible or not" LONG PROCESS ========== -->

console.log('"Divisible or Not" SHORT PROCESS')
// <!-- ========== Start "divisible or not" SHORT PROCESS ========== -->

let a = 24; //24
function is_odd(x) {
    return x % 2;
}
function divide(x) {
    return x / 2;
}
remainder = is_odd(a); //0 : even , 1:odd 

console.log('Number input = ' + a);
console.log('quotient = ' + divide(a)); // finds the quotient
console.log('remainder = ' + remainder); //finds odd or even

console.log('');

if (remainder === 0) {
    console.log('It is Even');
    console.log(a);//24
    do {
        a = divide(a); //new 'a' it is divided by 2
        console.log(a); // 12
    } while (is_odd(a) === 0); // is it odd 

} else {
    console.log('It is Odd , . so it wont process "' + a);
}
// <!-- ========== End "divisible or not" SHORT PROCESS ========== -->


// <!-- ========== Start loop and function ========== -->

let number_array = Array('0', 1, 2);
let number_word_array = Array('zero', 'one', 'two');

// Start of : by using function  
console.log('');
console.log('Using Loop inside Function');
function number_array_function() {
    for (let i = 0; i < number_array.length; i++) {
        console.log('The number at position ' + number_word_array[i] + ' is ' + number_array[i]);
        // console.log(number_word_array[i]);
    }
}
number_array_function();

// End of : by using function 

console.log('');

// Start of : by using for loop only

console.log('Using "for loop"');
for (let i = 0; i < number_array.length; i++) {
    console.log('The number at position ' + number_word_array[i] + ' is ' + number_array[i]);
    // console.log(number_word_array[i]);
}
// End of : by using for loop only
// <!-- ========== End loop and function ========== -->


// <!-- ========== Start DOM Manipulation Basic ========== -->
console.log('');
console.log('DOM Maniputlation')
document.getElementById('demo').innerHTML = 'hellofsdfdsf';//this is not showing

for (i = 0; i < 2; i++) {
    document.write(' for loop  <br> ');
    console.log(' for loop  <br> ');
}

//alternate method
document.getElementById('demo').innerHTML = 'repeat() <br>'.repeat(2);
console.log('repeat() <br> , '.repeat(2));

// <!-- ========== End DOM Manipulation Basic ========== -->



// <!-- ========== Start ODD EVEN ========== -->
console.log('');
console.log('Find out odd even');
const x = 5;
isEven = x % 2;
if (isEven == 0) {
    console.log('The number was "' + x + '" It is EVEN.');
} else {
    console.log('The number was "' + x + '" It is ODD.');
}
// <!-- ========== End ODD EVEN ========== -->


// <!-- ========== Start Is Leap Year  ========== -->
/* To Code
1. year 
2. if the year is divisible by 100 then it should also be divisible by 400,
3. if the year is not divisible 100 , then it should be divisible by 4.
    Either 2 or 3 should be true 
*/
console.log('');
console.log('Is it a Leap Year?');
const year = 2020;

if ((year % 100 === 0 && year % 400 === 0) || (year%100 !==0 && year % 4 === 0)) {   

    console.log('yes it is a leap year');
} else {
    console.log('not a leap year');
}
// <!-- ========== Start Is Leap Year  ========== -->

// <!-- ========== Start things to do  ========== -->
/* 
string's count (how many characs)
leap year (done)
palindrom or not (madam)
simple and compund interst calculator 
calculater
area of circle
*/
// <!-- ========== End things to do  ========== -->