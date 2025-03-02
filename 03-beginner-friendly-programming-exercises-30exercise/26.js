console.log('Create a program that read values of apartments you want to rent until the inpute value is 0 or a negative number.You will calculate the average price for rent and how many apartments you\'ve registered. Print the proper message.Then compare values of apartments you want to rent with the avarage price of the apartments you\'ve registered until you enter 0 or a negative value.If the price is above average price print the proper message, else if the price is below average print the proper message. If the input value is 0 or a negative number, print the proper message and exit.');

// Create a program that:

// Reads values until user inputs 0 or a negative value
// Calculates the average price
// Counts how many apartments registered
// Prints the average price and how many apartments registered
// Reads prices and compare with the average price and print proper message
// Input: 234, 764, 123, 654
// Output: "4 apartments have registed. The average price for rent is 443.75$"
// Input: 500, 200, 350, 450, 0, -7
// Output: "Above average price", "Above below price", "Above below price", "Above average price", "Quit Program","Quit Program"

// let apartmentsPrice = [1,2,3,4,0];
let apartmentsPrice = [234, 764, 123, 654,0,5];
let inquiredPrice = [500, 200, 350, 450, 0, -7];

function inputArray(x) {
    let sum = 0;
    let xCount = 0;


    for (let i = 0; i < x.length; i++) {
        if (x[i] <= 0) {
            break;
        } else {
            sum += x[i];
            xCount++;
        }
    }

    // return [sum, xCount];
    avg = sum / xCount;
    return [`${xCount} apartments have registered. The average price for rent is ${avg}$`, avg]
}

const inputArrayResult = inputArray(apartmentsPrice);
const avgOutput = inputArrayResult[0];
const average = inputArrayResult[1];

console.log(avgOutput);

function comparePrice(x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] <= 0) {
            x[i] = ` Quit Program`;
        } else if (x[i] < average) {
            x[i] = `Below Average Price`;
        }
        else if (x[i] > average) {
            x[i] = `Above Average Price`
        }
    }
    return x;
}
console.log(comparePrice(inquiredPrice));



