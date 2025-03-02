console.log('45. **Array forEach Method**');
console.log('- Given an array `fruits` containing ["apple", "banana", "cherry"], use the `forEach` method to transform the elements to uppercase. What is the transformed array?');
console.log('');

const fruits = ['apple', 'banana', 'cherry'];

console.log('start doesnt solve the complete problem ');
fruits.forEach(element => {
    element = element.toUpperCase();
    console.log(element);
});
console.log(fruits);
console.log('end doesnt solve the complete problem ');
console.log('');

console.log('Correct Way : ');

fruits.forEach((element, index, array) => {
    array[index] = element.toUpperCase()
    console.log(array[index]);
});
console.log(fruits);