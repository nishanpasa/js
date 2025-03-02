console.log('41. **Function with Default Parameter**');
console.log('  - Define a function `greet` that takes a `name` as a parameter, with a default value of "Guest." What is the greeting when you call `greet("Alice")`? What about when you call it without an argument?');

function greet(name) {

    if (name===undefined) {
        console.log('Hello, Guest!');
    }else{
        console.log(`Hello ${name}!`);
    }
    
    // switch (name) {
    //     case 'Alice':
    //         console.log('Alice');
    //         break;

    //     default:
    //         console.log('Guest');
    //         break;
    // }
}
greet('Alice');
greet();