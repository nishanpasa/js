console.log('46. **Array Map Method**');
console.log('- Given an array `numbers` with elements [1, 2, 3, 4, 5], use the `map` method to double each number. What is the resulting array?');

numbers = [1,2,3,4,5];

doubleNumbers = numbers.map(function double(element) {
    return element*2
})
console.log(`The new doubled number is: ${doubleNumbers}`);



let sellingPrice = [100,50,100,200];
console.log('Here the Actual Selling Price doesnt change rather a new price "Discounted Price" is created.'); 

discountedPrice = sellingPrice.map(function discount(elements) {
    return elements-20;    
});
console.log(discountedPrice);

console.log('');
console.log('Here the Actual Selling Price changes to new Price.'); 

sellingPrice.forEach((element,index,array) => {
    return array[index] = element -30;
});
console.log(sellingPrice);
