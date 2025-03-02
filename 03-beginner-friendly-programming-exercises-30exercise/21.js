console.log('Create a program that reads 5 numbers and find the average of these numbers,Create a program that:Reads the 5 numbers you want,Calculates the average of these numbers, Input example: 4, 6, 1, 4, 9,Ouput: "the average is 4.8"');

number = [4,6,1,4,9];
// let a = 0;
// for (let i = 0; i < number.length; i++) {
    
//     function sum(x) {
//         return a = a + x;
//     }
// }

function sum(x) {
    let a = 0;
    for (let i = 0; i < x.length; i++) {
        a =a +x[i] ;       
    }
    return a ;
}

function avg(x,y) {
    return x/y
}

// let total = sum(number);
// let count = number.length;
// console.log(avg(total,count));
console.log(avg(sum(number),number.length));

