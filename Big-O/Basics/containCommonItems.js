/**
 * How to solve coding problems during interviews
 *
 * 1. When the interviewer says the question, jot down key points
 * (it actually shows how organized you are).
 * 2. Make sure you double check what the expected inputs and outputs are.
 * 3. What is the most important aspect of the problem,
 * is it to optimize for time, space or memory etc, what is the main goal?. How large the input is going to get
 * 4. Avoid asking too many questions as this might come off as annoying
 * 5. Start with the naive brute force approach. It showws you are
 * able to think things through and come up with a solution no matter how rough
 * 6. Tell them why this approach is not the best, you might not neccessarily have to write the code
 * 7. Walk through your approach. comment things and see where you will be able to break things
 * 8. Write down the steps before you start coding and walk through it
 * 9. Modularise and break down your code into small pieces from the very beginning
 * 10. Start writing your code
 * 11. Think about things that mught break your code and cause errors.
 * Never make assumptions about the inputs
 * 12. Write good readable code
 * 13. Test your code, ask the interviewer if you can make assumptions,
 * also if you can return errors in the code?
 * 14. Finally, talk to the interviewer on where you can improve the code.
 * Does it work?, can you gooogle on ways to improve e.t.c
 * 15. If the interviewer is satisfied, the interview usually ends here
 * else follow up questions mighr be asked
 */

/**
 * Given 2 arrays, write a function that lets a user know (true/false)
 * whether these 2 arrays contain common items
 * Example:
 * Given array1 = ['q', 'r', 1, 4, '5'], array2 = ['o', 'p', 19, 4, 'l']
 *
 * Output should return true
 */

/**
 * Inputs: Array
 * Output: Boolean
 * Step1: use a brute force that involve nested loops to compare both arrays and their items
 */

// Brute Force Approach

// Test arrays

let array1 = ['q', 'r', 1, 4, '5'],
  array2 = ['o', 'p', 19, 4, 'l'];

function containsCommonItems(firstArray, secondArray) {
  for (let index = 0; index < firstArray.length; index++) {
    for (let index = 0; index < secondArray.length; index++) {
      if (firstArray[index] === secondArray[index]) return true;
    }
  }
  return false;
} // Big O => O(n^2)

// An optimal solution: Using Hash Table, for loops that are not nested

const containsCommonItems2 = (array1, array2) => {
  /**
   * Steps
   * 1. We loop through the first array and create an
   * object whose properties are equal to the items in the array
   * 2. Loop through the second array and check if the items exists in created object
   */
  let mapToObjectOfFirstArray = {};
  
  for (let index = 0; index < array1.length; index++) {
    if (!mapToObjectOfFirstArray[index]) {
      const item = array1[index];
      mapToObjectOfFirstArray[item] = true;
    }
  }

  for (let index = 0; index < array2.length; index++) {
    if (mapToObjectOfFirstArray[array2[index]]) {
      return true
    }
  }
  return false
};
// Big O => O(a + b)

// A more optimal solution

// using in-built array methods

const containsCommonItems3 = (array1, array2) => {
  return array1.some((item) => array2.includes(item));
}

// Testing the solution

console.log(containsCommonItems(array1, array2));
console.log(containsCommonItems2(array1, array2));
console.log(containsCommonItems3(array1, array2));
