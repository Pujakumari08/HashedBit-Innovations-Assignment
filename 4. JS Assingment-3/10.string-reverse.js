// Q 10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(input) {
    const charactersArray = input.split("");
    const reversedArray = charactersArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
  }
  
  const input = "Hello";
  console.log(reverseString(input)); 