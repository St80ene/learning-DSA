function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join('\n');
}

console.log(
  convertToCSV([
    {
      id: 1,
      name: 'Foo',
      timestamp: new Date(),
    },
    {
      id: 2,
      name: 'Bar',
      timestamp: new Date(),
    },
    {
      id: 3,
      name: 'Baz',
      timestamp: new Date(),
    },
  ])
);

const csvString = [
  ['Item ID', 'Item Reference'],
  ...itemsArray.map((item) => [item.itemId, item.itemRef]),
]
  .map((e) => e.join(','))
  .join('\n');

console.log(csvString);
