console.log('13. **Return vs. Console.log**');
console.log('    - Define a function `sayHello` that prints "Hello, " + `name` + "!" and also returns "Hi, " + `name` + "!". What is the difference between the printed output and the return value when you call this function?');

function sayHello() {
    console.log('Hello,' + 'name' + '!');
    return ('Hello,' + 'name' + '!');
}

sayHello();
console.log(sayHello());