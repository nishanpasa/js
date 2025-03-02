
/* ---------------------start -multidimensional array and object--------------------*/
//object
namesSalary = {
    'mary' : 2343,
    'john' : 2134,
    'george' : 5342,
    'nicole' : 5342
}
//multidimensional array
namesSalaries = [
    ['mary', 2343],
    ['john', 2134],
    ['george' , 5342],
    ['nicole' , 5342]
]
console.log(namesSalary['mary']); //2343
console.log(namesSalaries[0]); // ['mary' , 2343] 
console.log(namesSalaries[0][0]); // mary 
/* ---------------------end-multidimensional array and object--------------------*/

// this will work as a boolean
isContinue = prompt(`Do you want to continue ?`);
isContinue = isContinue === `yes`;
console.log(isContinue);

// first letter to uppercase
fName = 'ram';
console.log(fName.charAt().toUpperCase() + fName.slice(1));
console.log(fName.slice(1));

//chaning the or manipulate value of an array with new values
employeesName = ['mary','john' , 'george' , 'nicole'];
employeesName=employeesName.slice(employeesName.length);
employeesName.push('ram','shyam','hari');
console.log(employeesName);

//In JavaScript, the spread syntax (...) is used for several purposes, and one of them is to spread the elements of an iterable (like an array) into individual elements.
console.log(Math.max(...employeesSalary));

// You can return an array containing multiple values.
function exampleFunction() {
    // ... some code
    return [value1, value2];
}
// Usage
const result = exampleFunction();
const value1 = result[0];
const value2 = result[1];

// indexOf 
employeesSalary = [2343, 2134, 5342, 542];
employeesSalary.indexOf(5342); // 2