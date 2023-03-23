//          true    true    true
console.log(true && true && true); // true
            // true    false
console.log((true && true && false));


console.log(("potato" && true && true));


const isHappy = false;

//  condition ?  // condition true : // condition is false
// consider it as false
undefined ? console.log("yes i am happy ") : console.log("no i am not happy")




// filter

const myArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const idToFilter = 2;

const filteredArray = myArray.filter(name => name.id !== idToFilter);

console.log(filteredArray);

// [ { id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' } ]



let name = "hesham"


function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");

let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

console.log(`My name is ${name}, I am ${age} years old, and I am a student: ${isStudent}`);

