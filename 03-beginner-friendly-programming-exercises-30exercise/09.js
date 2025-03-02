console.log(' It is as same as "02.js", just add the condition If the average score is 7 and above print "Good job!", if the average score is between 6 and 4 print "You need to work harder!", if the average score is below 4 print "Failed, you really need to work harder!".');


/* -----------------start Simple way --------------*/
let geometry, algebra, physics;
geometry = parseFloat(prompt('Geometry'));
algebra = parseFloat(prompt('Algebra'));
physics = parseFloat(prompt('Physics'));

while (geometry > 10 || algebra > 10 || physics > 10) {
    geometry = parseFloat(prompt('Geometry Grade must be between 0-10'));
    algebra = parseFloat(prompt('Algebra Grade must be between 0-10'));
    physics = parseFloat(prompt('Physics Grade must be between 0-10'));
}


function average(x, y, z) {
    let a = x + y + z;
    return a / 3;

}

averageMark = average(geometry, algebra, physics);

console.log(geometry, algebra, physics);
console.log(averageMark);

if (averageMark >= 7) {
    console.log('Good Job');
} else if (averageMark <= 6 && averageMark >4) {
    console.log('You need to work harder');
}else {
    console.log('Failed, You really need to work harder!');
}

/* --------------- End Simple Way---------------*/

