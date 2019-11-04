// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? obj[char] = 1 : obj[char] ++;
//   }
//   let largestN = Object.values(obj).sort((a,b) => b - a)[0];
//   let largestK;
//   Object.entries(obj).forEach(([key,value]) => {
//      if (value === largestN) {
//        largestK = key;
//      };
//   });
//   return largestK;
// };


// COURSE SOLUTION
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    if (charMap[char] ) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;

};

module.exports = maxChar;
