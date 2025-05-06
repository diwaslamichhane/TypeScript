// When we extend an interface, we can create interface that inherits the properties of one or more interface.

interface User{
    name: string;
    age: number;
    email: string;
}

interface Admin extends User {  // now Admin has all properties of user
    isAdmin: boolean;
}

function abc(obj: Admin){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.email);
    console.log(obj.isAdmin);
}extendinf
abc({name: "Diwas", age: 22, email: "diwas@gmail.com", isAdmin: true});