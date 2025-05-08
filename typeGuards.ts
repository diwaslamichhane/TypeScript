// Type Guards: Type Guards are a way to narrow down the type of a variable within a conditional block.
// Using typeof and instanceof


// Using typeof
function abcd(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length); // TypeScript knows 'value' is a string here
    } else {
        console.log(value.toFixed(2)); // TypeScript knows 'value' is a number here
    }
}

console.log(abcd("Hello"));
console.log(abcd(123.456));


// Using instanceof
class Car {
    drive() {
      console.log("Driving...");
    }
  }
  
  class Bike {
    ride() {
      console.log("Riding...");
    }
  }
  
  function move(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
      vehicle.drive();
    } else {
      vehicle.ride();
    }
  }
console.log(move(new Car()));
console.log(move(new Bike()));