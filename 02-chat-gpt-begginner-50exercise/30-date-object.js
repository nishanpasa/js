console.log('30. **Date Object**');
console.log('- How can you display the current date and time using JavaScript\'s Date object?');

let currentDate = new Date()
console.log(currentDate);
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getDay());//This is because Wednesday is the fourth day of the week (0-indexed), so getDay() returns 3 for Wednesday.