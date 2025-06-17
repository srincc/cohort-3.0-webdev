// given an array, give me back a new array in which every value is multiplied by 2

const input = [1, 2, 3, 4, 5];

// basic method
const newArray = [];
for (let i = 0; i < input.length; i++) {
  newArray.push(input[i] * 2);
}
console.log(newArray);

//using map functionality of js
const newArray2 = input.map((n) => {
  return n * 2;
});
console.log(newArray2);
