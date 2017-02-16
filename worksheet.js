/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


var testArray = [2,3,1]

var sumOfArray = function(numbersArray) {
    var totalSum = 0
   for(var i = 0; i < numbersArray.length; i++) {
        totalSum = totalSum += (numbersArray[i])
     }
     return totalSum
}   
console.log(sumOfArray(testArray))


// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(input) {
  var largest = 0
  for(var i=0; i< input.length; i++) {
    if(input[i] > largest) {
      largest = input[i]
    }
    else if(isNaN(input[i])) {
      return isNaN 
    }
     return largest
  }
}
console.log(maxOfArray([7,3,9]))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

 var isVowel = function (char){
   var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

   for(var i=0; i<vowels.length; i++) {
    if(char === vowels[i]) {
      return true
    }
  }
        return false
  }

// console.log(isVowel('a'))


/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(input) {
    var output = input.split('').reverse().join('')
    return output
}

console.log(reverse('koob'))



 /* Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */


var fizzbuzz = function (numStr) {
    var saveString = ""
    for(var i = 1; i <= numStr; i += 1){
      if( i % 3 !== 0 && i % 5 !== 0){
        saveString = saveString + "."
      }
      else if(i % 3 === 0 || i % 5 !== 0){
        saveString = saveString + 'fizz'
      }
      else if (i % 5 === 0 || i % 3 !== 0 ) {
        saveString = saveString + 'buzz'
      }
      else if (i % 3 === 0 && i % 5 === 0) {
        saveString = saveString + 'fizzbuzz'
      }
      else {
        return null
      }
    }
    return saveString
}


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
var findLongestWord = function (str) {
    
    var newStr = str.split(/\W+/)
    var longestWord = ''
    longestWord = newStr[0]
    
    for(var i = 0; i < newStr.length; i = i + 1)
        if(longestWord.length < newStr[i].length) {                 
          longestWord = newStr[i]
                    }
     return longestWord
}

console.log(findLongestWord('the books loooks fine loveee'))
/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 var GCD = function(num1, num2) {
	var grtCommDen = 1
     for (var i = 1; i <= num1; i++) {
	    if (num1 % i === 0) { 
	      for (var j = 1; j <= num2; j++) {
		    if (num2 % j === 0 && i === j){
		      grtCommDen = j
        }
    }
  }
 }       
 return grtCommDen          
}  

console.log(GCD(12, 30))

