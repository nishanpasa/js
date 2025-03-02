console.log('You start flipping a coin, count and print how many times the result was head or tails until you enter the word "stop". Then find and print the percentage of how many head or tails was the result.');
/*
Create a program that:

Reads if the flipped coin was head or tails
If the value is "stop", print proper message and quit program
While value not "stop", count the result
Print the proper message
Calculates the percentage of head and tails
Prints the proper message
Input: "head", "tails", "tails", "tails", "head", "head", "tails", "tails", "tails", "head"
Ouput: "Head won 4 times and tails won 6 times"
Output: "40% Head, 60% Tails"
*/

let input = ["head", "tails", "tails", "tails",'stop', "head", "head", "tails", "tails", "tails", "head"];
// let input = ["head", "head", "head", "head", "head",'tails'];
let head = 0;
let tails = 0;
for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if (input[i] == 'head') {
        // console.log('its head');
        head = head +1;        
    } else if (input[i] == 'tails') {
        // console.log('its head');
        tails = tails +1;        
    } else if (input[i] == 'stop'){
        break;
    }   
}

function sum(a,b) {
   return a+b;       
}
function percentage(i,sum) {
     return percent = i/sum *100; 
}

totalSum = sum(head,tails);

headPercent = percentage(head,totalSum);
tailsPercent = percentage(tails,totalSum);

console.log(headPercent);
console.log(tailsPercent);
console.log(`Head won ${head} times and tails won ${tails} times`);

