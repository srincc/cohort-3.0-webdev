abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet() : string;
  
  // abstract classes can include implemented methods, fields, and constructors (default implementation) but interfaces cannot
  hello() : void {
    console.log("hi there");
  }
}

class Employee extends User{
    name : string;
    constructor(name : string){
        super(name);
        this.name = name;
    }

    greet(): string {
        return "hi " + this.name;
    }
}