// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString().split('').reverse().join('');
  let newN = parseInt(str);
  if (Math.sign(n) === -1) {
    newN = -newN;
  };
  return newN;
};

// COURSE SOLUTION
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(n);
// };


module.exports = reverseInt;
