// Makes a property immutable after it’s been initialized (either in the declaration or in the constructor).

class Admin {
    constructor(public readonly name: string){

    }
}

let admin = new Admin("Diwas");
// this.name = "anybody" // Error: Cannot assign to 'name' because it is a read-only property.

console.log(admin.name); // Output: Diwas