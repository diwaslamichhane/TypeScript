// A getter lets you access a property's value like it's a normal property but allows logic behind the scenes.
// A setter lets you set a property's value like it's a normal property but allows logic behind the scenes.

//Example

class user{
    constructor(public _name: string, public age: number){

    }

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}

let user1 = new user("Diwas", 22);