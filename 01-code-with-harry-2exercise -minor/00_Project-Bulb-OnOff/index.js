// 1. Ways to print in JavaScript
// alert("Welcome");

// 2.JavaScript console API
console.log("Hello World", 4 + 6, "Hi again");
console.warn("dont use pen");
console.error("quit");

// 3.Variables in JavaScript
var number1 = 1;
var number2 = 2;
console.log(number1 + number2);

// 4. Data types
var marks = {
    ram: 18,
    shyam: 20,
    hari: 10,
}
console.log(marks);

// 5. Booleans
var a = true;
var b = false;
console.log(a, b)

// 6. undefined variable
var und;
console.log(und)
var n = null;
console.log(n);

// 7. arrays
var arrays = [
    1, 2, 3, 4, 5
]
console.log(arrays[1])
console.log(arrays[2]);

// 8. if else
age = 2;
// if(age > 21){
//     console.log("you are young");
// }
// else{
//     console.log("you are teen");
// }

// 9. if-else ladder

if (age > 35) {
    console.log("you are a mid-age");
}
else if (age > 25) {
    console.log("you are adult");
}
else if (age > 18) {
    console.log("you are young");
}
else if (age > 11) {
    console.log("you are teen");
}

else {
    console.log("you are a kid");
}
console.log("End you Enquiry");


//10. array listing

var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
// for(var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function (element) {
    console.log(element)
}
)

//11. let const
// let j = 0;
// const x = 1;
// x++;

//12. while
let x=1;
// while(x<arr.length){
//     console.log(arr[x]);
//     x++;
// }
do{
    console.log(arr[x]);
    x++;
}while (x<arr.length);

