/**
 * Write a function that reverses
 * a given string
 */

// Solution 1

const reverseString = (string) => {
  // Check the input

  if (!string || string.length < 2 || typeof string !== 'string')
    return 'The input must be a String';

  let arrayOfReversedString = [];

  let thelastCharacter = string.length - 1;

  for (let index = thelastCharacter; index >= 0; index--) {
    arrayOfReversedString.push(string[index]);
  }

  return arrayOfReversedString.join('');
};

// Solution 2

const reverseString2 = (string) => {
  if (!string || string.length < 2 || typeof string !== 'string')
    return 'The input must be a String';

  return string.split('').reverse().join('');
};

// Solution 2

// const reverseString3 = (string) => [...string].reverse().join('');

// console.log(reverseString('the quick brown fox jumped over the lazy dog'));

// console.log(reverseString2('the quick brown fox jumped over the lazy dog'));

// console.log(reverseString3('the quick brown fox jumped over the lazy dog'));

const foo = {
  name: 'Etiene',
};

let bar = foo;

bar.name = 'James';

console.log(bar.name); // result => Etiene
