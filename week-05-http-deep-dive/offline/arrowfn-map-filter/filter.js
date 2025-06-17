// filtering
// what if I tell u given an input array, give me back all the even values from it

const input = [1, 2, 3, 4, 5];

// basic method
const newArray = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    newArray.push(input[i]);
  }
}
console.log(newArray);

// using filter functionality
const newArray2 = input.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
