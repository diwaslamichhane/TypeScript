// Function overloading is a way to define multiple signatures for a single function.
// It allows you to call the same function with different types or numbers of parameters.

function student(name: string): void;

function student(name: string, age: number): void;

function student(name: any, age?:any):void{
    
}
student("Diwas");
student("Diwas", 22);