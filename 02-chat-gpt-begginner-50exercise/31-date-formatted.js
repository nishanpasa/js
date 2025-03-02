console.log('31. **Date Formatting**');
console.log('- Create a Date object and format it to display the date in the "MM/DD/YYYY" format. What is the formatted date?');

let currentDate = new Date();
let month = currentDate.getMonth() + 1;
let date = currentDate.getDate();
let year = currentDate.getFullYear();

console.log(`${month}/${date}/${year}`);