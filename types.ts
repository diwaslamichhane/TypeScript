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


//Primitive Types

// 1. Number
let num: number = 10;
let num2: number = 10.10;

// 2. String
let str: string = "Diwas";
let greeting: string = `Hello, {str}`;

// 3. Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// 4. Array
let arr: number[] = [1, 2, 3];
let arr2: string[] = ["apple", "banana", "orange"];

// 5. Tuple: A tuple defines an array with fixed number of elements and known types.
let tup: [number, string] = [1, "Diwas"];

// 6. Enum: Enums define a set of named constants.
enum Status{
    Success = 200,
    ServerError = 500,
    NotFound = 404
}

let responseStatus: Status = Status.Success;
console.log(responseStatus); // 200

// 7. Any: Allows any type — disables type checking.
let data: any = "DIWAS"
data = 123;
data = true;

// 8. Unknown: Similar to any, but requires type checking before use. (Safer version of any)
let input: unknown = "diwas";
if (typeof input === "string") {
    console.log(input.toUpperCase()); // DIWAS
}

// 9. Void: Used for functions that don’t return anything.
function greet(): void {
    console.log("Hello, World!");
}

// 10. Null: A value that is empty or non-existent.
let emptyValue: null = null;

// 11. Undefined: A variable that is declared but not assigned.
let unassignedValue: undefined;

// 12. Never: Represents a value that never occurs (e.g., a function that always throws an error).



// tsc Type.ts or tsc --watch 