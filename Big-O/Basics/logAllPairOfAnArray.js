/**
 * Write a function that
 * logs all pairs in a
 * given array and determine
 * the Big O
 */

// Solution

function logAllPairsOfAnArray(array) {
  for (let index = 0; index < array.length; index++) { // O(n)
    for (let secondIndex = 0; secondIndex < array.length; secondIndex++) {// O(n)
      console.log(array[index], array[secondIndex]);
    }
  }
}

// Testing the solution

logAllPairsOfAnArray(["index0", "index1", "index2", "d", "e", "f"]);

/**
 * Since it is a nested loop,
 * it becomes multiplied
 * Big O => O(n * n)
 * which results in O(n^2) called Quadratic time
 * If the loops are one after
 * each other
 * it will be added
 * => O(n + n)
 */

/**
 * Rules of determining
 * the Big O of an operation
 * 
 * 1. Worst Case: Always look
 * at the worst case when looking at things 
 * because that is what BigO is concerned about
 * 
 * 
 * 2. Remove Constants 
 * i.e operations that require constant time no matter 
 * the size of the input
 * e.g of constants: 
 * let number = 1
 * 
 * 3. Different names for different inputs
 * 
 * 4. Remove the non-dominants
 */