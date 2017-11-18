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
  helper(1)

  function helper(a) {
    if (a % 15 === 0) {
      console.log('fizzbuzz')
    } else if (a % 5 === 0) {
      console.log('buzz')
    } else if (a % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(a)
    }
    if (a < n) {
      helper(a + 1)
    }
  }

}

module.exports = fizzBuzz;
