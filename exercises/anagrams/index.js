// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   // make take out extra spaces and characters make both lower case
//   stringA = formatString(stringA);
//   stringB = formatString(stringB);
//   if (stringA.length !== stringB.length) {
//     // if they aren't the same length they can't be anagrams
//     return false;
//   } else {
//     // create character map of first string
//     let charMapA = createCharMap(stringA);
//     // create character map of second string
//     let charMapB = createCharMap(stringB);
//     // walk through character map and see if same characters are in the other character map
//     for (let key in charMapA) {
//       if(charMapB[key] === charMapA[key]){
//         return true;
//       } else {
//         return false;
//       };
//     };
//   };
// };
//
// function createCharMap(string) {
//   let charMap = {};
//   for (let char of string) {
//     if (charMap[char] ) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     };
//   };
//   return charMap;
// };
//
// function formatString(string) {
//   return string.toLowerCase().replace(/[^\w]/g,"");
// };

// COURSE SOLUTION
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]){
//       return false;
//     }
//   }
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//      charMap[char] = charMap[char] + 1 || 1;
//    }
// };

// COURSE SOLUTION #2 BEST!!!
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
};

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;
