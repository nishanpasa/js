console.log('42. **Function with Multiple Parameters**');
console.log('- Create a function `calculate` that takes two numbers, `a` and `b`, and an operator as parameters. It performs addition, subtraction, multiplication, or division based on the operator. What is the result of calling `calculate(4, 2, "+")`?');

function calculate(a,b,operator) {
    switch (operator) {
        case "+":
            return a+b;
            break;
        case "-":
            return a-b;
            break;
        case "*":
            return a*b;
            break;
        case "/":
            return a/b;
            break;       
    
        default:
            return 'This operator is invalid'
            break;
    }
}
console.log(calculate(4, 2, "/"));


