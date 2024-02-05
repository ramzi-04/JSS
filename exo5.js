function removeVowels(inputString) {
  return inputString.replace(/[aeiouAEIOU]/g, "");
}

const originalString = "Hello, World!";
const resultString = removeVowels(originalString);
console.log(resultString);
