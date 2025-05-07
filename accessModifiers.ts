// Access modifiers (public, private, protected) control visibility and accessibility of class members (properties or methods).

// public access modifier (default)
// Accessible from anywhere — inside or outside the class.

class car{
    constructor(public brand: string){
        this.brand = brand;
    }
}

let myCar = new car("Toyota");
console.log(myCar.brand); // Output: Toyota


// private access modifier
// Accessible only within the class where it is declared. Not accessible from outside or subclasses.

class bankAcc{
    constructor(private balance:number, private initBalance:number){
        this.balance = initBalance;
    }

    checkBalance(): number {
        return this.balance;
    }
}

let account = new bankAcc(1000, 500);
// console.log(this.balance); //Error: Property 'balance' is private and only accessible within class 'bankAcc'.

console.log(account.checkBalance()); // Output: 500 (initBalance)


// protected access modifier
// Accessible inside the class and in subclasses (not outside the class).

class vehicle{
    constructor(protected type: string, protected wheels: number){
        this.type = type;
        this.wheels = wheels;
    }
}
class bike extends vehicle{
    public model: string;

    changeType(): string{
        return this.type = "bike";
    }
}

let vehicle1 = new bike("car", 2);
vehicle1.changeType(); // Error: Property 'changeType' does not exist on type 'vehicle'.