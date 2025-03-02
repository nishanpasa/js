console.log('You are interested in buying crypto-currencies. You want to check the current amount of money you have and see how many coins you can buy in Bitcoin, Ethereum, and Litecoin.Create a program that:Reads the total amount of money you have,Reads the price of Bitcoin, Ethereum, and Litecoin,Prints the amount of Bitcoin, Ethereum, and Litecoin you can buy');

money=100;
bitcoinPrice = 50;
ethereumPrice = 25;
litecoinPrice = 20;

function unit(rate) {
    return money/rate;
}

console.log(`You can buy ${unit(bitcoinPrice)} bitcoin with $${money}.`);
console.log(unit(ethereumPrice));
console.log(unit(litecoinPrice));

