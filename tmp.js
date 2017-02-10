var assert = require('chai').assert
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
        return totalSum
     }
}   
console.log(sumOfArray(testArray))


// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var maxOfArray = function(input) {
    return Math.max.apply(null,input)
}
console.log(maxOfArray([9,2,7,0,3]))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

 var isVowel = function (char){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    return true
    }
    else {
        return false
    }
}
console.log(isVowel('a'))


/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverseStr = function(input) {
    var output = input.split('').reverse().join('')
    return output
}

console.log(reverseStr('koob'))



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


 var test = 15

var fizzbuzz = function (numStr) {
    if(numStr % 3 != 0 && numStr % 5 != 0){
        return '.' 
    }
    else if (numStr % 3 === 0 && numStr % 5 === 0) {
        return 'fizzbuzz'
    }
    else if (numStr % 3 === 0) {
         return 'fizz'        
    }
    else{
         return 'buzz'
    }
}

console.log(fizzbuzz(test))

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
        return grtCommDen
        }
    }
  }
 }                 
}  

console.log(GCD(12, 30))

console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('sumOfArray()', function(){
	it('should calculate sum of all numbers in an array', function(){
		checkFuncBasics('sumOfArray',1)
		assert.equal(3, sumOfArray([1, 2]))
		assert.equal(0, sumOfArray([]))
		assert.equal(6, sumOfArray([1, 2, 3]))
		assert.equal(27, sumOfArray([10, 9, 8]))
	})
})
describe('maxOfArray()', function(){
	it('should output a number if the array is not empty, else null', function() {
		checkFuncBasics('maxOfArray',1)
		expect(maxOfArray([5,10,2])).to.be.a('number')
		expect(maxOfArray([])).to.be.null
	})
	it('should return the highest number of an array', function(){
		checkFuncBasics('maxOfArray',1)
		assert.equal(4, maxOfArray([2, 4, 3]))
		assert.equal(100, maxOfArray([10,9,8,100,7,6]))
	})
})
describe('isVowel()', function(){
	it('should return true if character is a vowel, otherwise false', function(){
		checkFuncBasics('isVowel',1)
		assert.equal(false, isVowel(0))
		assert.equal(false, isVowel("B"))
		assert.equal(false, isVowel("b"))
		assert.equal(true, isVowel("a"))
		assert.equal(true, isVowel("E"))
	})
})
describe('reverse()', function(){
	it('should return the reversal of an input string', function(){
		checkFuncBasics('reverse',1)
		assert.equal("skoob", reverse("books"))
		assert.equal("elbuort on tnaw t'nod ew", reverse("we don't want no trouble"))
	})
})
describe('fizzbuzz()', function(){
	it('should meet the standards listed in Part 4 instructions', function(){
		checkFuncBasics('fizzbuzz',1)
		assert.equal(".", fizzbuzz(1))
		assert.equal("..", fizzbuzz(2))
		assert.equal("..fizz", fizzbuzz(3))
		assert.equal("..fizz.buzz", fizzbuzz(5))
		assert.equal("..fizz.buzzfizz..fizzbuzz", fizzbuzz(10))
	})
})
describe('findLongestWord()', function(){
	it('should return the longest word in a string of words', function(){
		checkFuncBasics('findLongestWord',1)
		assert.equal("book", findLongestWord("a book full of dogs"))
		assert.equal("Texas", findLongestWord("don't mess with Texas"))
	})
})
describe('GCD()', function(){
	it('should find the Greatest Common Denominator of two numbers', function(){
		checkFuncBasics('GCD',2)
		assert.equal(1, GCD(5,1))
		assert.equal(3, GCD(15,3))
		assert.equal(5, GCD(15,5))
		assert.equal(10, GCD(50,20))
	})
})
