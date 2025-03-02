
console.log('18. **Arrays of Objects**');
console.log('    - Create an array `students` containing objects with `name` and `grade` properties. How can you access the grade of a student named "Bob"?');

let ram = [1, 2, 3]; // array
let ram1 = { // object
    'ram': 'hello',
    'shyam': 'hi'
}

// incorrect way 
// let students = Array [
//     ram = {
//         'name' : 'Ram',
//         'grade': '80%'
//     }
// ]

let students = [
    {
        'name': 'Harry',
        'grade': 80
    },
    {
        'name': 'Mike',
        'grade': 35
    },
    {
        'name': 'Bob',
        'grade': 70
    }
]
console.log(students[0].name);
console.log(students[1].name == 'Bob');


for (let i = 0; i < students.length; i++) {
    if (students[i].name == 'Bob') {
        console.log('Dear, ' + students[i].name + '\'s parent, his grade is ' +students[i].grade);
        break
    }    
}

console.log('Alternative way by "do while loop"');


let x = 0;
let i = 0;
do {
    x++;
    // console.log(x);
    students[i].name;
    if (students[i].name == 'Bob') {
        console.log('Dear, ' + students[i].name + '\'s parent, his grade is ' +students[i].grade);
     break;
    } else {
        i++
    }

} while (i < students.length && x<5); 






