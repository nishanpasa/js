console.log('The previous exercise but store the names and salaries into one list.Input : [Mary, 2343, John, 2134, George, 5342, Nicole, 5342] Output: George - 5342, Nicole - 5432,');

console.log('Notice that if the programming language you are using doesn\'t support different kind of values in lists try to store the numbers as characters and convert to numbers when you want to compare');

// 'A company asked you to create a program that reads an employee name and salary and store them into proper lists.The number of employees is unknown. To exit the program the user must input "quit". Before the exit find the employees with the maximum salary and print who they are.'


let employee_log = [];
let condition = true


while(condition){
    let employee_name = prompt('Enter your name');
    let employee_salary = prompt('Enter your salary');
    let isContinue = prompt('Do you want to continue ?');
    employee_log.push([employee_name, employee_salary]);
    if (isContinue=='yes') {
        condition = true
    }    
    else if (isContinue=='no') {
        break
    }
   
}
// console.log(employee_log);
let employee_record = []
for (let i = 0; i < employee_log.length; i++) {
    // console.log(employee_log[i][0], '-', employee_log[i][1]);
    employee_record.push(employee_log[i][0]+ '-'+ employee_log[i][1] );
}
employee_record = employee_record.join(', ' + '\n')

console.log(`These are the records of the employes:\n ${employee_record}`);
