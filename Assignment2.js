// Student Management System

let students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

console.log("Task 1 - Add Student");

// Task 1
students.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
console.log(students);

console.log("\nTask 2 - Remove Last Student");

// Task 2
let removedLast = students.pop();
console.log(removedLast);

console.log("\nTask 3 - Add Student at Beginning");

// Task 3
students.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
console.log(students);

console.log("\nTask 4 - Remove First Student");

// Task 4
let removedFirst = students.shift();
console.log(removedFirst);

console.log("\nTask 5 - Update Array using splice");

// Task 5
let index = students.findIndex(student => student.id === 103);

students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log(students);

console.log("\nTask 6 - First Three Students");

// Task 6
let firstThree = students.slice(0, 3);
console.log(firstThree);

console.log("\nTask 7 - for...of");


// Task 7
for (let student of students) {
    console.log(student.name + " - " + student.course + " - " + student.marks);
}

console.log("\nTask 8 - forEach");

// Task 8
students.forEach(function(student) {
    console.log(student.name);
});

console.log("\nTask 9 - map");

// Task 9
let names = students.map(function(student) {
    return student.name;
});

console.log(names);

console.log("\nTask 10 - filter");

// Task 10
let topStudents = students.filter(function(student) {
    return student.marks >= 80;
});

console.log(topStudents);

console.log("\nTask 11 - reduce");

// (a) Total Marks
let totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);

console.log("Total Marks =", totalMarks);

// (b) Average Marks
let average = totalMarks / students.length;
console.log("Average Marks =", average);

console.log("\nTask 12 - sort");

// Ascending
let ascending = [...students];
ascending.sort(function(a, b) {
    return a.marks - b.marks;
});

console.log("Ascending Order:");
ascending.forEach(function(student) {
    console.log(student.marks);
});

// Descending
let descending = [...students];
descending.sort(function(a, b) {
    return b.marks - a.marks;
});

console.log("Descending Order:");
descending.forEach(function(student) {
    console.log(student.marks);
});