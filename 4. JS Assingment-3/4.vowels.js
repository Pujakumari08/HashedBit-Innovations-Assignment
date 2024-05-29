// Q 4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "I is a good boy";

function countConsonantsAndVowels(inputStr) {
  let lowerCaseStr = inputStr.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = "bcdfghjklmnpqrstvwxyz";

  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of lowerCaseStr) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (consonants.includes(char)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

const counts = countConsonantsAndVowels(str);
console.log("Vowel Count:", counts.vowels); //  Vowel Count: 6
console.log("Consonant Count:", counts.consonants); //  Consonant Count: 5