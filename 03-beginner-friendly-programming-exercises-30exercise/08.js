console.log('The exercise is almost identical to a previous exercise with a minor change. In a company the monthly salary of an employee is calculated by minimum wage 400$ per month, plus 20$ multiply by the employment years, plus 30$ for each employee kid, plus 100$ if the employee didn\'t miss 1 day of work.,Create a program that:Reads the employment years,Reads the number of each employee kids,Prints the total amount the employee must take');

minWage = 400; //dollar per  month
yearsEmployed = 5; //yrs
yearWorkedIncentive = 20; //dollar per year
child = 2;
childIncentive = 30; //dollar for each child
regularityIncentive = 100; //dollar if he has never been absent

isAbsent = true ;
// isAbsent = false;

if (isAbsent){
    regularityIncentive = 0;
} 

totalSalary = minWage + (yearWorkedIncentive * yearsEmployed ) + (child * childIncentive) + regularityIncentive;
console.log(`${totalSalary}$`);