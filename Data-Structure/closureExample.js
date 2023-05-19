function outerFunction() {
  let outerVariable = 'I am the outer variable';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction();
}

// Call the function
outerFunction();

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());

function createGreeting(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

let sayHello = createGreeting('Hello');
let sayHi = createGreeting('Hi');

console.log(sayHello('John')); // Output: 'Hello, John!'
console.log(sayHi('Jane')); // Output: 'Hi, Jane!'

const x = 0;
const y = -0;

console.log(x === y); // Output: true
console.log(Object.is(x, y)); // Output: false
