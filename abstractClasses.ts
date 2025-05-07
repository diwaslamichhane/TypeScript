// An abstract class is like a blueprint that cannot be instantiated directly. It is meant to be extended by other classes.

abstract class Animal {
    abstract makeSound(): void;
  
    sleep(): void {
      console.log("Sleeping...");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  const dog = new Dog();
  dog.makeSound(); // Woof!
  dog.sleep();     // Sleeping...
  