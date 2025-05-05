// Understanding The Concepts of Type Inference and Type Annotation

// 1. Type Inference (Automatic Type Detection)
// Type inference is the automatic detection of the data type of a variable by the TypeScript compiler.
// The compiler analyzes the value assigned to a variable and infers its type.

let username = "Diwas";   // inferred as string
let age = 21;             // inferred as number
let isAdmin = true;       // inferred as boolean


// 2. Type Annotation (Explicit Type Declaration)
// Type annotation is the explicit declaration of the data type of a variable.
// It allows developers to specify the type of a variable, function parameter, or return value.

let userName: string = "Diwas";   // explicitly declared as string
let ageNumber: number = 21;       // explicitly declared as number
let isAdminBoolean: boolean = true; // explicitly declared as boolean