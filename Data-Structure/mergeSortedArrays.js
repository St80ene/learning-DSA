/**
 * Write a function that merges
 * sorted arrays into one
 */

// Solution

const mergeSortedArrays = (array1, array2) => {
  let mergedArray = [];
  for (let index = 0; index < array1.length; index++) {
    mergedArray.push(array1[index])
  }

  for (let index = 0; index < array2.length; index++) {
    mergedArray.push(array2[index]);
  }
  return mergedArray;
};

// Testing the solution

const firstArray = [1, 3, 7, 9]
// const secondArray = [10, 13, 17, 19];
const secondArray = [];

console.log(mergeSortedArrays(firstArray, secondArray));
