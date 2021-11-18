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

/**
 * The 3 Pillars of Programming
 * 
 * 1.Readable
 * 2.Speed: Time Complexity
 * 3.Memory: Space Complexity
 * 
 * 2 ways a program remember things
 * 
 * 1. Heap: Where it keeps track of 
 * values assigned to variables
 * 
 * 2. Stack: Where function calls are tracked
 */


/**
 * What can cause time complexity in a function?
 * 1.Operation(+, -, *, /)
 * 2.Comparisons(===, ==, >, <)
 * 3.Looping(for loop, while loop)
 * 4.Outside function calls
 */

/**
 * What can cause space complexity in a function?
 * 1.Variables
 * 2.Data structures
 * 3.Allocations
 * 4.Function calls
 */