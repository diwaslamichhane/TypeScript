// Parameter properties let you declare and initialize class properties directly in the constructor by adding access modifiers (public, private, protected, or readonly) in front of constructor parameters.

// We have already seen this before.


// ?:
// Marks the property as optional. It may or may not be provided.

// Example

class people{
    constructor(public name: string, public gender?: string){

    }
}

let goodPeople = new people("Diwas", "Male");
let misguided = new people("Trans"); //They don't want to say their gender so they left it empty.
