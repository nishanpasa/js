console.log('50. **Function as Constructor**');
console.log('- Define a constructor function `Person` that creates objects with `name` and `age` properties. Create two instances, `person1` and `person2`. What are their properties?');

function Person(name,age) {
    return `My Name is ${name} and my age is ${age}`;
}

let person1 = Person('Alice',30);
let person2 = Person('Baker',35);

console.log(person1);