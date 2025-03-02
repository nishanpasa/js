console.log('21. **Array Filtering**');
console.log('- Filter the `numbers` array to find all even numbers. What is the result?');
numbersArray = [3,7,1,9,2,6];


for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i]%2==0) {
        // console.log('its even');
        console.log(numbersArray[i]);
    }
//     else{
//         console.log('its odd');
//     }
}

/*
//how to make this functino work
function isEven(x){
    numbersArray[x]%2;
}
for (let i = 0; i < numbersArray.length; i++) {
    if (isEven==0) {
        console.log('its even');
    }
    else{
        console.log('its odd');
    }
}
*/

