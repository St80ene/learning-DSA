const data = [
  {
    cDay: '1',
    daily_count: 8,
  },
  {
    cDay: '2',
    daily_count: 1,
  },
  {
    cDay: '3',
    daily_count: 6,
  },
  {
    cDay: '4',
    daily_count: 8,
  },
  {
    cDay: '5',
    daily_count: 32,
  },
  {
    cDay: '6',
    daily_count: 38,
  },
  {
    cDay: '7',
    daily_count: 1,
  },
  {
    cDay: '8',
    daily_count: 14,
  },
  {
    cDay: '9',
    daily_count: 9,
  },
  {
    cDay: '10',
    daily_count: 14,
  },
  {
    cDay: '11',
    daily_count: 5,
  },
  {
    cDay: '12',
    daily_count: 1,
  },
  {
    cDay: '13',
    daily_count: 6,
  },
  {
    cDay: '14',
    daily_count: 5,
  },
  {
    cDay: '15',
    daily_count: 11,
  },
  {
    cDay: '16',
    daily_count: 31,
  },
  {
    cDay: '17',
    daily_count: 16,
  },
  {
    cDay: '18',
    daily_count: 12,
  },
  {
    cDay: '19',
    daily_count: 13,
  },
  {
    cDay: '20',
    daily_count: 3,
  },
  {
    cDay: '21',
    daily_count: 1,
  },
  {
    cDay: '22',
    daily_count: 24,
  },
  {
    cDay: '23',
    daily_count: 49,
  },
  {
    cDay: '25',
    daily_count: 24,
  },
  {
    cDay: '26',
    daily_count: 1,
  },
  {
    cDay: '27',
    daily_count: 55,
  },
  {
    cDay: '28',
    daily_count: 13,
  },
  {
    cDay: '30',
    daily_count: 12,
  },
];

const filterNumbersFromArrayOfObjects = (array) => {
  // const result = array.filter((item) => {
  //   return Object.values(item);
  // });

  return array.map((element) => element.daily_count);
};

console.log(filterNumbersFromArrayOfObjects(data));
