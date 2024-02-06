export function isPalindrome(text) {
  return text === text.split("").reverse().join("");
}

export function getEmailRegExp() {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
}

export function capitalizeText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getFirstCoincidence(text, subtext) {
  return text.indexOf(subtext);
}

export function getLongestWord(words) {
  return words.sort((word1, word2) => word2.length - word1.length)[0];
}

export function countWords(words, predicate) {
  return words.filter(predicate).length;
}

export function getTextStats(text) {
  return {
    characters: text.length,
    words: text.split(" ").length,
    lines: text.split("\n").length,
  };
}

export function processTextStats(words, stats) {
  console.log(
    `There are ${stats.longWordsCount} words longer than 12 characters`
  );
  console.log(`There are ${stats.palindromesCount} palindromes`);
  console.log(`There is ${stats.hasEmail ? "an" : "no"} email in the text`);
}
