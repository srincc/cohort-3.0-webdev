type User = {
    firstName : string;
    age : number
}

function isLegalll(user : UserAge){
    if (user.age >= 18){
        console.log("legal to vote")
    }else{
        console.log("illegal")
    }
}

let user2 : User = {
    firstName : "Shriyansh",
    age : 18
}
isLegalll(user2);


// Unions using type
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


// intersection using type
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};