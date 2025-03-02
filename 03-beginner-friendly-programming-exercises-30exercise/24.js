console.log('Create a program that reads numbers and sum them until the user inputs a negative value or zero,Create a program that:Reads numbers,Sum them,Prints the sum,Input example: 5, 9, 3, 7, 0,Output: "The sum is 24"');

input = [ 5, 9, 3, 7, 0];
let a = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i]<0 || input[i] == 0) {
        break
    }else  a =a +input[i];
}

console.log(a);