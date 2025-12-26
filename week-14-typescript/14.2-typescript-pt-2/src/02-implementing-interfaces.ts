interface Userr {
  name: string;
  age: number;
  
  islegal(): boolean;
  //or
  // islegal: () => boolean;
}

// class Manager implements Userr{
//     name : string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     islegal(){
//         return this.age > 18
//     }
// }


// shorthand property
class Manager implements Userr {
  constructor(public name: string, public age: number) {}

  islegal() {
    return this.age > 18;
  }
}

const m = new Manager("shriyansh", 22);
console.log(m.islegal());
