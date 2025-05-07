// Static members (properties or methods) belong to the class itself, not to instances of the class.
// You access them using the class name, not through an object.

class csit{
    static name: string = "CSIT";
    static college: string = "TU";
}

// we can access it without creating an instance of the class
console.log(csit.name); // CSIT
console.log(csit.college); // TU