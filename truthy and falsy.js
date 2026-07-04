
// ===========================================================
// Example 1: Basic True Condition
// ===========================================================

if (true) {
    // This block executes because the condition is true
    console.log("Hello");
} else {
    // This block is skipped
    console.log("World");
}

// Output:
// Hello



// ===========================================================
// Example 2: Basic False Condition
// ===========================================================

if (false) {
    // This block is skipped because the condition is false
    console.log("Hello");
} else {
    // This block executes
    console.log("World");
}

// Output:
// World



// ===========================================================
// Example 3: Using Comparison Operators
// ===========================================================

let age = 20;

// Check if age is greater than or equal to 18
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// Output:
// Eligible to Vote



// ===========================================================
// Example 4: Another Comparison Example
// ===========================================================

let marks = 35;

// Check if student has passed
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Fail



// ===========================================================
// Example 5: Number as Condition (Truthy)
// ===========================================================

// Any non-zero number is Truthy
if (1) {
    console.log("1 is Truthy");
}

// Output:
// 1 is Truthy



// ===========================================================
// Example 6: Number as Condition (Falsy)
// ===========================================================

// Zero is a Falsy value
if (0) {
    console.log("This will never execute");
} else {
    console.log("0 is Falsy");
}

// Output:
// 0 is Falsy



// ===========================================================
// Example 7: Non-Empty String (Truthy)
// ===========================================================

// Non-empty string is Truthy
if ("JavaScript") {
    console.log("Non-empty string is Truthy");
}

// Output:
// Non-empty string is Truthy



// ===========================================================
// Example 8: Empty String (Falsy)
// ===========================================================

// Empty string is Falsy
if ("") {
    console.log("This will never execute");
} else {
    console.log("Empty String is Falsy");
}

// Output:
// Empty String is Falsy



// ===========================================================
// Example 9: null (Falsy)
// ===========================================================

let value = null;

if (value) {
    console.log("Value Exists");
} else {
    console.log("Value is Null");
}

// Output:
// Value is Null



// ===========================================================
// Example 10: undefined (Falsy)
// ===========================================================

let name;

if (name) {
    console.log("Name Exists");
} else {
    console.log("Name is Undefined");
}

// Output:
// Name is Undefined



// ===========================================================
// Example 11: NaN (Falsy)
// ===========================================================

let result = 0 / 0;

if (result) {
    console.log("Valid Number");
} else {
    console.log("Result is NaN");
}

// Output:
// Result is NaN



// ===========================================================
// Example 12: Empty Array (Truthy)
// ===========================================================

// Empty array is still Truthy
let fruits = [];

if (fruits) {
    console.log("Array is Truthy");
} else {
    console.log("Array is Falsy");
}

// Output:
// Array is Truthy



// ===========================================================
// Example 13: Empty Object (Truthy)
// ===========================================================

// Empty object is also Truthy
let student = {};

if (student) {
    console.log("Object is Truthy");
} else {
    console.log("Object is Falsy");
}

// Output:
// Object is Truthy



// ===========================================================
// Example 14: Boolean Variable
// ===========================================================

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome Back!");
} else {
    console.log("Please Login");
}

// Output:
// Welcome Back!



// ===========================================================
// JavaScript Falsy Values
// ===========================================================

// These values are always treated as false:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN



// ===========================================================
// JavaScript Truthy Values
// ===========================================================

// These values are treated as true:
//
// true
// 1
// -10
// 100
// "Hello"
// "0"
// []
// {}
// function(){}
// ===========================================================
