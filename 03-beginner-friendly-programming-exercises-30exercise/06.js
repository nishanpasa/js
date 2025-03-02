console.log('You are interested in buying a new laptop. You check the price and you see that the price is 300$ without the 10% tax.Create a program that:Reads the price of the laptop,Reads the tax percentage, Prints the total amount');

price = 300; //dollar
taxRate = 10; //in percent

taxAmount = price * taxRate/100;
totalAmount = price + taxAmount;
console.log(`$${totalAmount} `);

