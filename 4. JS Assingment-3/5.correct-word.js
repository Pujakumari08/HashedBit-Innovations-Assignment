// Q 5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctWord(sentence, wrong, correct) {
    let regex = new RegExp("\\b" + wrong + "\\b", "gi");
  
    let correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
  }
  
  let sentence = "I lovee programming";
  let correctedSentence = correctWord(sentence, "lovee", "love");
  console.log(correctedSentence); // "I love programming"