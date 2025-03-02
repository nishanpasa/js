console.log('Create a program that reads a number that you want to get the sum until that number and then calculate the averge of these numbers ,Create a program that:Reads the number you want to sum,Calculates the sum of 1+2+3+4...+98+99+n,Prints the sum of 1+2+3+4...+98+99+n,Input example: 100,Output: "The sum is 5050" and  "The average is 50.5"');

let sumTill = 100;
let a  = 0;
for (let i = 0; i <= sumTill; i++) {
    a = a+i;
}
function avg(x,y) {
    return x/y
}
console.log(a);
console.log(avg(a,sumTill));