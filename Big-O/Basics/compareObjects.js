// This function only checks uni-dimensional objects

const getDifferenceOfObjects = (original, testCase) => {
  const differences = {}; // initialize default object to catch differences
  // let hasDifferences = false;

  // add any difference to the global variable

  // return the differences if any else return default empty

  // you can return the whole data as an object, having status and the difference

  // status should be boolean to avoid wrong computations

  // iterate between both objects and return unique keys
  const uniqueKeys = new Set([
    ...Object.keys(original),
    ...Object.keys(testCase),
  ]);

  // compare keys and values of each object
  uniqueKeys.forEach((key) => {
    // check both values
    const isDifferent = original[key] !== testCase[key];

    console.log({ isDifferent });
    if (isDifferent) {
      differences[key] = testCase[key]; // return as key value pair;
      // hasDifferences = true; // Set the status flag to true if any difference is found
    }
  });

  return differences;
};

const original = {
  email: false,
  name: 'Alice',
  phone: '1234567890',
  title: 'Developer',
};

const testCase = {
  email: true,
  name: 'Alice',
  phone: '0987654321',
  title: 'Senior Developer',
  disclaimer_message: 'Updated disclaimer',
};

const result = getDifferenceOfObjects(original, testCase);

console.log(result);
