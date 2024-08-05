const testNumbers = [3, 5, 2, 78, 45, 4, 100, 200];

// Given the set of numbers above, return the largest

const findLargestNumber = (arrayOfNumbers) => {
  let target = arrayOfNumbers[0];
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    const currentNumber = arrayOfNumbers[index];
    if (currentNumber > target) {
      target = currentNumber;
    }
  }
  return target;
};

console.log(findLargestNumber(testNumbers));
