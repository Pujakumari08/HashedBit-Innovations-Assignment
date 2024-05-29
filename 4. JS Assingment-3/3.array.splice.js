// Q 3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

let stringArray = string.split("");

let substring = "ONES";

stringArray.splice(3, 0, ...substring);

let output = stringArray.join("");

console.log(output); // INDONESIA