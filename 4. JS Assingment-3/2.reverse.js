// Q 2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";

function reverseWords(inputStr) {
  let wordsArray = inputStr.split(" ");
  let reversedArray = wordsArray.reverse();

  let reversedStr = reversedArray.join(" ");
  return reversedStr;
}

let result = reverseWords(str);
console.log(result); //'India my love I'