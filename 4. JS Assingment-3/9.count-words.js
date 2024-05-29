// Q 9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    const wordsArray = paragraph.split(" ");
    const wordCount = wordsArray.length;
    return wordCount;
  }
  
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  console.log(countWords(paragraph)); // 19