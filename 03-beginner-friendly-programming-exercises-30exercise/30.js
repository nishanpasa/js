console.log('A company asked you to create a program that reads an employee name and salary and store them into proper lists.The number of employees is unknown. To exit the program the user must input "quit". Before the exit find the employees with the maximum salary and print who they are.');
/* 
Create a program that:

Reads employee name and salary, store them into different lists
Asks the user to continue
If the user wants to exit the program find and print the employees with maximum salary
Input: [Mary, John, George, Nicole], [2343, 2134, 5342, 5342]
Output: George - 5342, Nicole - 5432
Notice that we have to find the maximum salary and then compare the salaries in case someone has the exactly same salary with someone else.
*/

function entryName() {
    let names = [];
    let salary = [];
    do {
        entryNames = prompt('Enter Name');
        entrySalary = parseInt(prompt('Enter Salary'));
        names.push(entryNames);
        salary.push(entrySalary);

        // add name or not ? 
        Continue = prompt('Do you want to continue');
        isContinue = Continue.toLowerCase() === 'yes';

    } while (isContinue);
    return [names, salary];
}
entryNameValues = entryName();
employeesName = entryNameValues[0];//returns names array
// employeesName = ['mary', 'john', 'george', 'nicole'];
employeesName = toTitleCase(employeesName);
employeesSalary = entryNameValues[1]; //returns salary array
// employeesSalary = [2343, 2134, 5342, 5342];


 /*-------------- to know the salary of a particular employee  ------------- */
// employeeName = prompt('Whose salary do you want to know');
// employeeName = employeeName.charAt(0).toUpperCase() + employeeName.slice(1);
// employeesNameId = employeesName.indexOf(employeeName);
// console.log(`The salary of ${employeeName} is ${employeesSalary[employeesNameId]}`);

// to find out max salary amt and who has the max salary
maxSalary = Math.max(...employeesSalary);

for (let i = 0; i < employeesSalary.length; i++) {
    if (employeesSalary[i] === maxSalary) {
        console.log(`The max salary amount is ${maxSalary} and name is  ${employeesName[i]}`);
    }
}

function toTitleCase(arrayName) {
    titleCasedArray = [];
    for (let index = 0; index < arrayName.length; index++) {
        //to uppercase the letter
        elements = arrayName[index].charAt(0).toUpperCase() + arrayName[index].slice(1);
        titleCasedArray.push(elements)
    }
    return titleCasedArray;
}

console.log(`Employees Name are ${employeesName}`);
console.log(`Employees Salary are ${employeesSalary}`);


