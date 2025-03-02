console.log('47. **Array Filter Method**');
console.log('- Given an array `numbers`, use the `filter` method to find all even numbers. What is the result?');

numbers = [1,2,3,4,5];

allEven = numbers.filter(function isEven(elements) {
    // return elements%2 !=0 ; //gives odd //or 
    // return elements%2 ; //gives odd
    return elements%2===0; //gives even
})
console.log(allEven);