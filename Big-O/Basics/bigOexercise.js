/**
 * This is an exercise to
 * test our knowledge of 
 * Big 0 notation so far
 * @param {*} input 
 * @returns 
 */


function funChallenge(input) {
  let a = 10; // O(1) => Constant time
  a = 50 + 3; // O(1) => Constant time

  for (let index = 0; index < input.length; index++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // 0(n)
    a++; // 0(n)
  }

  return a; // 0(1)
}

/**
 * BIG O NOTATION ==> Totalling all steps
 * 3 + n + n + n + n
 * 3 + 4n
 *  => BIG O(3+4n)
 *  => O(n)
 */