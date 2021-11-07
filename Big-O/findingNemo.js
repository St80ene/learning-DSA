// Write a function to find the word "nemo" in an array of strings
const { PerformanceObserver, performance } = require('perf_hooks');

function neMo(array) {
  for (let index = 0; index < array.length; index++){
    if (array[index] === 'nemo') {
      console.log(`Nemo Found at index ${index}`)
    }
  }
}

// Testing the solution

neMo(['a', 'second string', 'nemo'])

// Finding the performance

function neMoFunctionPerformance(array) {
  let t0 = performance.now()
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log(`Nemo Found at index ${index}`);
    }
  }
  let t1 = performance.now();

  console.log('Time it took to find nemo = ', (t1 - t0) + ' milliseconds');
}

// Testing the solution

neMoFunctionPerformance(['a', 'second string', 'nemo']);