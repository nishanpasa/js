console.log('You want to buy something from Amazon. The seller charges different prices for shipping cost based on location. For US it\'s 5$ for Europe it\'s 7$ for Canada it\'s 3$ for other places it\'s 9\$,Create a program that:Reads the cost of the product,Reads your location,Print the amount of money you have to pay');

let usRate = 5; //us dollar
let europeRate = 7; //usdollar
let canadaRate = 3; //usdollar
let otherRate = 9; //usdollar
let phonePrice = 500; //usd

country = 'europe';

if (country == 'us') {
    rate = usRate;
} else if (country == 'europe') {
    rate = europeRate;
} else if (country == 'canada') {
    rate = canadaRate;
} else {
    rate = otherRate
}

// totalPrice = 

console.log(rate);