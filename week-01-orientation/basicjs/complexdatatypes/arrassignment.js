function filterEvenNumbers(inputArray) {
    return inputArray.filter((number) => (number % 2 === 0));
}

// Example usage:
const inputNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(inputNumbers);
console.log(evenNumbers); // Output: [2, 4, 6] 