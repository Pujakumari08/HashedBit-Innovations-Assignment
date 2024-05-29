// Q 8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSumOfDigits(number) {
    function sumOfDigits(num) {
      return num
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }
  
    while (number >= 10) {
      number = sumOfDigits(number);
    }
  
    return number;
  }
  
  console.log(repeatedSumOfDigits(456)); 
  console.log(repeatedSumOfDigits(12345)); 
  console.log(repeatedSumOfDigits(9876)); 