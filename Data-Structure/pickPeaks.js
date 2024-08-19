const pickPeaks = (array) => {
  // initialize variable to hold the response
  const response = { pos: [], peaks: [] };

  // loop through the given array to find the highest value
  // First and last items in the array not to be included

  for (let index = 1; index < array.length - 1; index++) {
    // initialize the next item index as a variable
    let next = 1;
    // check if current number is the same as next, else stop
    while (array[index] === array[index + next]) next++;

    // compare current item with previous one using their indexes
    // Check if it is greater than the previous and next,
    // return the position in the array and the item if so.
    if (array[index] > array[index - 1] && array[index] > array[index + next]) {
      response.pos.push(index);
      response.peaks.push(array[index]);
    }
  }

  return response;
};

console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);
