const locationData = [
  {
    city_count: '39',
    country: 'United States',
    city: 'Texas',
  },
  {
    city_count: '87',
    country: 'Nigeria',
    city: 'Lagos',
  },
  {
    city_count: '3',
    country: 'Nigeria',
    city: 'Rivers State',
  },
  {
    city_count: '3',
    country: 'United States',
    city: 'Florida',
  },
  {
    city_count: '3',
    country: 'United States',
    city: 'New York',
  },
  {
    city_count: '1',
    country: 'United Kingdom',
    city: 'Scotland',
  },
  {
    city_count: '1',
    country: 'Spain',
    city: 'Madrid',
  },
];

/**
 * Return each country, the total count of each cities location
 * and each city with it's count
 */

const groupLocationByCountry = (dataArray = []) => {
  const groupedData = dataArray.reduce((map, location) => {
    const country = location?.country;

    if (!map.has(country)) {
      map.set(country, [location]);
    } else {
      const newLocation = map.get(country);
      newLocation.unshift(location);
      map.set(country, newLocation);
    }

    return map;
  }, new Map());

  const entries = groupedData.entries();
  const groupedCitiesArrays = [];

  for (const [key, cities] of entries) {
    groupedCitiesArrays.unshift({
      country: key,
      cities,
    });
  }

  return groupedCitiesArrays;
};

console.log(groupLocationByCountry(locationData));
