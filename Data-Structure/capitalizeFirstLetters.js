let string = 'good morning, my beautiful people. It\'s such a beautiful day';

const capitalize = (string) => {
  let arrayOfSplitString = string.split(' ');
  let result = [];
  for (let index = 0; index < arrayOfSplitString.length; index++) {
    result.push(
      arrayOfSplitString[index].charAt(0).toUpperCase() +
        arrayOfSplitString[index].substring(1)
    );
  }
  return result.join(' ');
};

console.log(capitalize(string));
