// interfaces - used to make ur own custom type in typescript
interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface Userrr {
  firstName: string;
  age: number;
  address: Address
}

let user: Userrr = {
  firstName: "shriyansh",
  age: 19,
  address: {
    city: "rgh",
    country: "india",
    pincode: 496001,
  },
};

function isLegal(user: Userrr): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

let ans = isLegal(user);

if (ans) {
  console.log("legal");
} else {
  console.log("illegal");
}
