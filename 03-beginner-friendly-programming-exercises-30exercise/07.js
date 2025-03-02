console.log('In a company the monthly salary of an employee is calculated by: the minimum wage 400$ per month, plus 20$ multiplied by the number of years employed, plus 30$ for each child they have.Create a program that:Reads the number of years employed,Reads the number of children the employee has,Prints the total amount of salary the employee makes (5yrs, 2 kids)');

 minWage = 400; //dollar per  month
 yearsEmployed = 5; //yrs
 yearWorkedIncentive = 20; //dollar per year
 child = 2;
 childIncentive = 30 //dollar for each child

totalSalary = minWage + (yearWorkedIncentive * yearsEmployed ) + (child * childIncentive);
console.log(`${totalSalary}$`);
