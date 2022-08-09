/**
 * A function that
 * generates random password of any length
 */

// Solution

const randomPasswordGenerator = (length) => {
  let password = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=~/<>?';

  for (let index = 0; index < length; index++) {
    let randomCharacters = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomCharacters, randomCharacters + 1);
  }

  return password;
};

// Testing the password algorithm

console.log(randomPasswordGenerator(15));