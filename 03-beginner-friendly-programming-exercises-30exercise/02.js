console.log('It\'s the end of the semester and you got your grades from three classes: Geometry, Algebra, and Physics.');
console.log('Create a program that:Reads the grades of these 3 classes (Grades range from 0 - 10\)Calculate the average of your grades');


/* -----------------start Simple way --------------*/ 
let geometry,algebra,physics;
    geometry = parseFloat(prompt('Geometry'));
    algebra = parseFloat(prompt('Algebra'));
    physics = parseFloat(prompt('Physics'));

 while (geometry > 10 || algebra > 10 || physics > 10){
    geometry = parseFloat(prompt('Geometry Grade must be between 0-10'));
    algebra = parseFloat(prompt('Algebra Grade must be between 0-10'));
    physics = parseFloat(prompt('Physics Grade must be between 0-10'));
 }


function average(x, y, z) {
    let a = x + y + z;
    return a / 3;

}
console.log(geometry, algebra, physics);
console.log(average(geometry, algebra, physics));

/* --------------- End Simple Way---------------*/


/* -------------------------START Long Method--------------*/
/*

courses = ['Geometry', 'Algebra', 'Physics', 'Astronomy']

function marks(course) {
    let grade = parseFloat(prompt(course));
    return gradeRange(grade, course);

}

function gradeRange(grade, course) {
    while (grade > 10 || grade==undefined || grade<0) {
        grade = parseFloat(prompt('Please Enter Valid Grade for : ' + course ));
    }
    return grade;
}

function avg(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum / x.length;
}

let allGrades = [];

for (let i = 0; i < courses.length; i++) {
    let mark = marks(courses[i]);
    allGrades.push(mark);
}

console.log(avg(allGrades));
*/
/* -------------------------END Long Method--------------*/


// -----------------START alternate method -------------//

// courses = ['Geometry', 'Algebra', 'Physics'];

// function marks(course) {
//     let grade;
//     do {
//         grade = parseFloat(prompt(course));
//     } while (grade > 10);
//     return grade;
// }

// for (let i = 0; i < courses.length; i++) {
//     console.log(marks(courses[i]));
// }

// -----------------END alternate method -------------//