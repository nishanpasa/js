console.log('44. **Function with Callback**');
console.log('- Define a function `greet` that takes a `name` and a callback function. The callback function returns an emoticon. How can you use this function to greet "Alice" with an emoticon?');

function greet(name,emoticonCallback) {
    return emoticonCallback(name);
}

function loveEmoticon(a) {
    return a + "❤"
}

function happyEmoticon(a) {
    return a + "✌"
}

console.log(greet('Alice', happyEmoticon));


console.log('');
console.log('Create a JavaScript function called performOperation that takes two numbers, a and b, and a callback function as parameters. The callback function should perform an operation on a and b (e.g., addition or multiplication) and return the result. The performOperation function should call the callback function and display the result. Provide two examples of using the performOperation function with different operations, such as addition and multiplication.');


function performOperation(a,b,operationCallback) {
    //  return operationCallback(a,b); 
    // or 
     const result = operationCallback(a,b);
     console.log('Result',result);
}

function add(a,b) {
    return a+b;
}

function multiply(a,b) {
    return a*b
}

// console.log(performOperation(3,2,multiply));
performOperation(3,2,multiply)