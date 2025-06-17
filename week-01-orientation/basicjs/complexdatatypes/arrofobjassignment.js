function returnEighteen(user) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].age >= 18) {
      console.log(user[i].name);
    }
  }
}

const users = [
  {
    name: "Harkirat",
    age: 17,
  },
  {
    name: "raman",
    age: 22,
  },
];

returnEighteen(users);
