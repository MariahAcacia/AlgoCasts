// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let arr = str.split('');
  let newString = [];
  for (let i = 0; i < arr.length; i++) {
    // debugger; pauses in execution - have to manually call function in order for this to work 
    newString.unshift(arr[i]);
  }
  return newString.join('');
}

// COURSE SOLUTION - cheating with helper array method
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// COURSE SOLUTION - BETTER
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed
// }


// COURSE SOLUTION - BEST
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }


module.exports = reverse;
