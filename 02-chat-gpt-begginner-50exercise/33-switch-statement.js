console.log('33. **Switch Statement**');
console.log('- Write a switch statement that checks the value of the variable `day` and prints different messages based on the day of the week.');

currentDate = new Date();
day = currentDate.getDay();

switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}