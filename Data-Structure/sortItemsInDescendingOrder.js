const listOfItems = [
  {
    country: 'United Kingdom',
    cities: [{ city_count: '1', country: 'United Kingdom', city: 'Scotland' }],
  },
  {
    country: 'Nigeria',
    cities: [
      { city_count: '92', country: 'Nigeria', city: 'Lagos' },
      { city_count: '3', country: 'Nigeria', city: 'Rivers State' },
    ],
  },
  {
    country: 'United States',
    cities: [
      { city_count: '38', country: 'United States', city: 'Texas' },

      { city_count: '4', country: 'United States', city: 'Florida' },
      { city_count: '3', country: 'United States', city: 'New York' },
    ],
  },
];

const sortInDescendingOrder = (arrayOfItems) => {
  let sortedArray = [];
  for (let index = 0; index < arrayOfItems.length; index++) {
    let totalUserByCountry = arrayOfItems[index].cities.reduce(function (
      acc,
      obj
    ) {
      return acc + Number(obj.city_count);
    },
    0);

    const sortArrayOfObjectsNumerically = totalUserByCountry.sort((a, b) => {
      if (b.city_count - a.city_count) {
        return sortedArray.push(arrayOfItems[index]);
      }
    });

    return sortArrayOfObjectsNumerically;
  }

  return sortedArray;
};

console.log(sortInDescendingOrder(listOfItems));
