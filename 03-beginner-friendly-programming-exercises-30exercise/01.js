/* https://github.com/py-study-group/beginner-friendly-programming-exercises/blob/master/exercises.md#ex23*/
console.log('01-Create two variables a and b, and initially set them each to a different number. Write a program that swaps both values.');
let a = 10;
let b = 20;
console.log(`Atfirst, a is ${a}`);
console.log(`and b  is ${b}`);
let c=0;
c = a;
a = b;
b = c;
console.log('');
console.log(`Now a is ${a}`);
console.log(`and b is ${b}`);