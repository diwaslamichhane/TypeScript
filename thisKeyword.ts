// this keyword refers to the current object instance — the one on which the method or constructor is being called.

class user{
    name: string;

    function (){
        console.log(this.name);
    }
}

// EXAMPLE

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; // 'this.name' refers to the class property 'name'
        this.age = age;   // 'this.age' refers to the class property 'age'
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the User class
const newUser = new User("Diwas", 22);

// Calling the greet method
newUser.greet();