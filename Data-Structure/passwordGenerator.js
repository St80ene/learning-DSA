const randomPasswordGenerator = (lengthOfPassword) => {
  // Define the characters to be used in the password
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_-+=<>?][';

  // Ensure the minimum password length is 8 characters
  const minLength = Math.max(lengthOfPassword, 8);

  // Create a pool of characters to choose from
  const characterPool = lowercase + uppercase + numbers + symbols;

  // Generate the password
  let password = '';
  for (let i = 0; i < minLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};

console.log(randomPasswordGenerator(12));
