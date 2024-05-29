// 4.Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
  
    str1 = str1.split("").reverse().join("");
    str2 = str2.split("").reverse().join("");
  
    let sum = 0;
  
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
      const digit1 = i < str1.length ? parseInt(str1[i], 10) : 0;
      const digit2 = i < str2.length ? parseInt(str2[i], 10) : 0;
  
      sum += digit1 * digit2;
    }
  
    return sum;
  }
  
  console.log(sumOfProducts(6, 34)); 
  console.log(sumOfProducts(123, 456)); 
  console.log(sumOfProducts(0, 789)); 
  console.log(sumOfProducts(1234, 567)); 