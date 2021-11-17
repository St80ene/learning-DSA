/**
 * Write a function that prints
 * all numbers and each pair sums
 * in an array
 */

// Solution

const printAllNumbersThenAllPairSums = (array) => {
    for (let index = 0; index < array.length; index++) { // O(n)
        for (let j = 0; j < array.length; j++) { // O(n)
            // console.log('index', array[index]);
            console.log(array[index] + array[j]);
        }
    }
}


// Testing the solution

const arrayOfNumbers = [1, 3, 4, 6, 9, 12, 8, 5, 7, 11]

printAllNumbersThenAllPairSums(arrayOfNumbers);