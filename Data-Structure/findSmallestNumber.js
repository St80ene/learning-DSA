// Find the lowest number when given a set of numbers in an array

/*
Steps to achieve this

1. Iterate through the array of number
2. Store the first element in a variable
3. check the current value against this number  is greater than
4. if all other values are greater than, return the current saved value
*/

const findSmallestNumber = (numbers) => {
  // check if numbers is an array and not empty
  if (!Array.isArray(numbers) || numbers?.length === 0) {
    return undefined;
  }
  let smallestNumber = numbers[0];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > smallestNumber) {
      smallestNumber = numbers[index];
    }
  }

  return smallestNumber;
};

const numbers = [3, 5, 2, 78, 45, 4, 100];

console.log(findSmallestNumber(numbers));
