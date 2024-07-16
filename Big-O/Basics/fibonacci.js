const fibonacci = (prev, next) => {
  for (let index = 0; index < 10; index++) {
    const newFiboNumber = prev + next;

    console.log({ newFiboNumber });

    next = prev;

    prev = newFiboNumber;
  }
};

fibonacci(0, 1);
