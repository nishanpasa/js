console.log('20. **Array Sorting**');
console.log('- Sort the `numbers` array in ascending order. What is the sorted array?');
numbersArray = [3,7,1,9,2];
// not like this
// console.log(Math.acos(...numberArray));
numberArray.sort((a,b)=>a-b);
console.log(numberArray);