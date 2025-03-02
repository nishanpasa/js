function getElements(clickedId) {
    clickedElement = document.getElementById(clickedId);

    return {
        editButton: clickedElement.querySelector('#editButton'),
        btnElement: clickedElement.querySelector('#btnElement'),

        inputElement: clickedElement.querySelector('#inputElement'),
        submitElement: clickedElement.querySelector('#submitButton'),
    };
}


function editText(clickedId) {

let {editButton, btnElement, inputElement, submitElement } = getElements(clickedId);

    editButton.style.display = 'none';
    btnElement.style.display = 'none';
    textElement = btnElement.innerText;
    console.log(textElement);

    inputElement.style.display = 'block';
    submitElement.style.display = 'block';
    inputElement.value = textElement;
}

function submitSave(clickedId) {

    let {editButton, btnElement, inputElement, submitElement } = getElements(clickedId);

    btnElement.innerText = inputElement.value;

    editButton.style.display = 'block';
    btnElement.style.display = 'block';

    inputElement.style.display = 'none';
    submitElement.style.display = 'none';
}








/*
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return `Hello, my name is ${name} and I am ${age} years old.`;
        }
    };
}

// Calling the function
let person = createPerson("Alice", 25);

// Accessing the returned object
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25

// Using a method from the returned object
console.log(person.greet()); // Output: Hello, my name is Alice and I am 25 years old.
*/