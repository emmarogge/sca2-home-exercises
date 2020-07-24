const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // DONE - write a function which reverses the string
  /* Split the string */
  var splitString = str.split("");
  // console.log("splitString: " + splitString);

  /* Reverse items in array */
  var reversedArray = splitString.reverse();
  // console.log("reversedArray: " + reversedArray);

  /* Join items in array into a string */
  var joinArray = reversedArray.join("");
  // console.log("joinArray: " + joinArray);
  return joinArray;
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  var product = 1;
  for (i = num; i > 0; i = i - 1){
    product = product * i;
    // console.log("i: " + i + " product: " + product);
  }  
  return product;
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
}

// Write tests here:
assert(reverse("emma rogge") === "eggor amme")
assert(reverse("") == "")
assert(factorial(5) === 120)
assert(factorial(1) === 1)