// let array1 = ['a', 'b', 'c'];
// let array2 = ['c', 'c', 'd', 'e'];
// // let array3 = array1.concat(array2);
// array3 = [...new Set([...array1, ...array2])];

// console.log(array3);

// const validatePhoneNumber = (phonenumber) => {
//   let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
//   if (phonenumber == null) {
//     return 'false';
//   }

//   // Return true if the phonenumber
//   // matched the ReGex
//   if (regex.test(phonenumber) == true) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// };

function isValidPhoneNumber(phoneNumber) {
  // Regex to check valid
  // International Phone Numbers
  const phoneNumberRegex = /^[0-9]{1,4}[-\s]?[0-9]{6,12}$/;
  if (phoneNumberRegex.test(phoneNumber)) {
    return 'Valid phone number';
  } else {
    return 'Invalid phone number';
  }
}
const phoneNumber = '2348108755903';

// console.log(validatePhoneNumber('+919136812895'));
console.log(isValidPhoneNumber(phoneNumber));
