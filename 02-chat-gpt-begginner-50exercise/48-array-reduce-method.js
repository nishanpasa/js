console.log('48. **Array Reduce Method**');
console.log('- Given an array `numbers`, use the `reduce` method to calculate their sum. What is the sum?');

numbers = [ 1,2,3,4,5];
reducedNumbers = numbers.reduce(function reduceNumber(accumulator, currentValue) {
    return accumulator + currentValue;
},0);
//or
reducedNumbers = numbers.reduce(function reduceNumber(x, y) {
    return x + y;
},0);
console.log(reducedNumbers);