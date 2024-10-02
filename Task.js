"use strict";
// 100 Days Of Coding Challenge!
/* Day-65 Task
Learn about TypeScript functions by using the following guide and coding along with the examples provided in it:

Type Annotations With Function https://github.com/AsharibAli/100-days-of-code/blob/main/day-65/TS-Function/README.md */
//----------------------------------------------------------------------------------------------------------------------
/*
1. Type Annotations With Function
Type annotations in functions help specify the types of parameters and the return type.
This ensures type safety and better code readability. */
// Function with type annotations for parameters and return type
function add(a, b) {
    return a + b;
}
// Calling the function
const result = add(5, 3); // result is of type number
//----------------------------------------------------------------------------------------------------------------------
/*
2. Optional And Default Parameter
Optional parameters are parameters that may or may not be provided.
Default parameters have a default value if no value is provided.*/
// Function with an optional parameter
function greet(name, greeting) {
    return `${greeting || "Hello"}, ${name}!`;
}
// Function with a default parameter
function greetWithDefault(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
// Calling the functions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Hi")); // Output: Hi, Alice!
console.log(greetWithDefault("Bob")); // Output: Hello, Bob!
console.log(greetWithDefault("Bob", "Hey")); // Output: Hey, Bob!
//----------------------------------------------------------------------------------------------------------------------
/*
3. Function Rest Parameter
Rest parameters allow a function to accept an indefinite number of arguments as an array.*/
// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// Calling the function
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30
//----------------------------------------------------------------------------------------------------------------------
/*
4. Arrow Function
Arrow functions provide a concise syntax for writing functions and do not have their own this context.*/
// Arrow function with type annotations
const multiply = (a, b) => a * b;
// Calling the arrow function
console.log(multiply(4, 5)); // Output: 20
//-----------------------------------------------------------------------------------------------------------------------
/*
5. Anonymous Function
Anonymous functions are functions without a name, often used as arguments to other functions or assigned to variables.*/
// Anonymous function assigned to a variable
const divide = function (a, b) {
    return a / b;
};
// Calling the anonymous function
console.log(divide(10, 2)); // Output: 5
//----------------------------------------------------------------------------------------------------------------------
/*
6. void & never
void is used for functions that do not return a value.
never is used for functions that never return, such as functions that always throw an error or have an infinite loop.*/
// Function with void return type
function logMessage(message) {
    console.log(message);
}
// Function with never return type
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// Calling the functions
logMessage("This is a log message."); // Output: This is a log message.
try {
    throwError("This is an error."); // Throws an error
}
catch (e) {
    console.error(e.message); // Output: This is an error.
}
