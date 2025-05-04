// Primitive Types (Value Types)
// -These store actual values directly in memory. When you assign them to another variable, a copy is made.
// Eg:

let a = 10;
let b = a; // b is a copy of a.

b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// changing b doesn't affect a. They are independent.

// Reference Types (Objects, Arrays, Functions)
// -They store references to memory, not the actual values. So when you assign one to another variable, they both point to the same object in memory.
// Eg:

let person1 = {
    name: "Diwas",
    age: 22
}

let person2 = person1; // both point to the same object.
person2.age = 21;

console.log(person1.age); // 21 (original value is changed)
console.log(person2.age); // 21


// tsc --watch 