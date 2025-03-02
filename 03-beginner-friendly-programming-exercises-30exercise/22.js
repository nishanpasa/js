console.log('Create a program that reads 5 numbers and prints if the number is negative or positive,Create a program that: Reads the 5 numbers you want,Print if a number is negative or positive,Input example: 4, 6, -11, -4, 9,Ouput: "Positive", "Positive", "Negative", "Negative", "Positive",');
console.log('');

let input = [4, 6, -11, -4, 9];

for (let i = 0; i < input.length; i++) {
    // const element = array[i];

    if (input[i]<0) {
        input[i] = 'Negative'
    }else{
        input[i] = 'Positive'
    }    
}

console.log(input);