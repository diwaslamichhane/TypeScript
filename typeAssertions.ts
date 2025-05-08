// Type Assertions also known as type casting. 
// - Use this when you know more about the type than TypeScript does.

let value: any = "DIWAS";

let valueLength: number = (<string>value).length; // Type Assertion using angle-bracket syntax
let valueLength2: number = (value as string).length; // Type Assertion using 'as' syntax

console.log(valueLength); // Output: 5
console.log(valueLength2); // Output: 5