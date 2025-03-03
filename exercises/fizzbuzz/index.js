// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // is number multiple of 3 & 5 - print fizzbuzz
    if ( i % 3 === 0 && i % 5 === 0 ) {
      console.log('fizzbuzz');
      // is number multiple of 3 - print fizz
    } else if( i % 3 === 0 ) {
      console.log('fizz');
      // is number multiple of 5 - print buzz
    } else if ( i % 5 === 0 ) {
      console.log('buzz');
      //otherwise print number 
    } else {
      console.log(i);
    }
  };
};

module.exports = fizzBuzz;
