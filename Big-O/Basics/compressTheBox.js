/**
 * 1. Write a function that logs
 * the first box in an array of boxes
 * 
 * 2. Find the Big O of the operation
 * 
 */

// Solution 1

const compressBoxes = (array) => {
    console.log(array[0]);
}

// Testing the solution

compressBoxes(['box1', 'box2', 'box3'])

/**
 * Solution 2: The Big O notation is 
 * O(1) => Constant time
 * 
 * No matter the size of the array, it's only 
 * going to pick the first element making the time
 * constant
 */
