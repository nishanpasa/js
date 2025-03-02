console.log('A Park Garage company asked you to create a program that asks if the driver is a member and then charge the driver with 1,5$ fixed cost, if the driver is not a member the fixed cost is 3$. Make sure to keep asking if the driver enters the proper response Then asks the driver how many hours have parked. For the 1st hour the cost is 2$, for the 2nd hour the price is 1,5$ for the 3rd hour the price is 1$. From the 4th hour and after the cost is 0.5$ per hour. Make sure to keep asking the driver enters a valid value.');

/*
Finds the cost the driver has to pay and print it. Ask the user to continue the program or not.

On exit Counts and print how many drivers payed and the total amount of earnings. Ask the user to continue the program or not.

Create a program that:

Reads if the driver is a member or not
Check if the driver entered the proper response
Charge the driver with the proper fixed cost
Asks the driver how many hours have parked
Check if the driver entered the proper value
Finds how many drivers payed and the total amount of earnings
Input: Yes(Driver is member), 6(Hours has parked), No(exit program)
Output: "Total amount is 7,5$"
Output: "1 Driver payed. The total earnings are 7,5$"
*/
let totalPrice = 0;
let driverCount = 0;
do {
    driverCount++;
    // let isMember = true;
    let isMember = prompt(`Are you a member`);
    isMember = isMember === 'yes';
    // let hoursParked = 6;
    let hoursParked = parseFloat(prompt(`How many hours you parked`));
    let firstHourCost = 2;
    secondHourCost = 1.5;
    thirdHourCost = 1;
    fourOrMoreCost = 0.5;

    // checking if the customer is a member or not 
    if (isMember == true) {
        fixedCost = 1.5;
    } else {
        fixedCost = 3;
    }

    for (let i = 1; i <= hoursParked; i++) {
        if (i == 1) {
            totalPrice = totalPrice + firstHourCost + fixedCost; //2 // 1.5
        } else if (i == 2) {
            totalPrice += secondHourCost;//1.5
        } else if (i == 3) {
            totalPrice += thirdHourCost;//1
        } else if (i <= 4) {
            totalPrice += fourOrMoreCost; //0.5            
            for (let index = i; index < hoursParked; index++) {
                totalPrice += fourOrMoreCost;
            }
        }
    }
    isContinue = prompt(`Do you want to continue ?`);
    isContinue = isContinue === `yes`;
} while (isContinue);
console.log(`${driverCount} Driver payed. The total earnings are  ${totalPrice}`);