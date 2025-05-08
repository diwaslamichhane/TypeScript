// A function in TypeScript is a reusable block of code that performs a specific task. It can accept inputs (called parameters) and may return a value.

function abcd(name: string, age: number, callback:(value: string)=> void) {
    console.log("Hello World");
}
abcd("Diwas", 22, (value: string) =>{
    console.log(value);
})
