// basic syntax
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Alice", 25);
p.greet(); // Hello, my name is Alice


// Access modifiers
// | Modifier    | Meaning                                    |
// | ----------- | ------------------------------------------ |
// | `public`    | Accessible anywhere (default)              |
// | `private`   | Accessible only within the class           |
// | `protected` | Accessible within the class and subclasses |

class Employeee {
  public name: string;
  private salary: number;
  protected role: string;

  constructor(name: string, salary: number, role: string) {
    this.name = name;
    this.salary = salary;
    this.role = role;
  }

  getSalary(): number {
    return this.salary;
  }
}

let e = new Employeee("shriyansh",100000, "head")
e.getSalary();


// inheritance
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const d = new Dog();
d.move(); // Moving...
d.bark(); // Woof!

// When a class extends another class, you must call super() before using this in the constructor. It ensures the base class constructor runs, initializing inherited properties.