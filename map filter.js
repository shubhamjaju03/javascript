let students = [
    { name: "Shubham", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Amit", age: 23 }
];

let names = students.map(student => student.name);
students.map(student => student.age).forEach(age => console.log(age));    
students.map(student => student.age).forEach(age => console.log(age));

console.log(names);

// Output: ["Shubham", "Rahul", "Amit"]

let marks = [85, 90, 78, 92, 88]; // Array of marks
let totalMarks = marks.reduce((total, mark) => total + mark, 0); // Using reduce to calculate the total marks
console.log(totalMarks); // Output: 433
let averageMarks = totalMarks / marks.length; // Calculating the average marks
console.log(averageMarks); // Output: 86.6
let mappedMarks = marks.map(mark => mark * 2); // Using map to create a new array with marks doubled
console.log(mappedMarks); // Output: [170, 180, 156, 184, 176]
