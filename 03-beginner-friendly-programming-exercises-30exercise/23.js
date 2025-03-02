console.log('Create a program that reads numbers and sum them until the user inputs a negative value,Create a program that:Reads numbers,Sum them,Prints the sum,Input example: 5, 9, 3, 0, 2, 0, 4, -7,Output: "The sum is 23"');

input = [ 5, 9, 3, 0, 2, 0, 4, -7,25];
let a = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i]<0) {
        break
    }else  a =a +input[i];
}

console.log(a);