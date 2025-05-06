// A class is a blueprint to create objects with properties and methods.

// A constructor is a special method in a class that runs automatically when an object is created using new.
// It’s used to initialize class properties.

class iphoneMFactory {
    constructor(public name: string, public model: number, public color: string) {}
}

let iPhone1 = new iphoneMFactory("iPhone", 14, "black");