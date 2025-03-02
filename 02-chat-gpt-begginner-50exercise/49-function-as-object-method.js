console.log('49. **Function as Object Method**');
console.log('- Create an object `calculator` with methods `add` and `subtract`. What is the result of calling `calculator.add(5, 3)` and `calculator.subtract(5, 3)`?');


calculator = {
    add : function add(a,b) {
        return a+b;
    },
    sub : function sub(a,b) {
        return a-b
    }
}
console.log(calculator.add(5,3));