/*
    CIT 281 Project 2
    Name: Arissa Samaniego
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };


// getRandomLetter() will return a single, random, lowercase letter.
const getRandomLetter = function() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.charAt(getRandomInteger(0, alphabet.length));
};

// Returns the random length string
const getRandomString = function(minLength, maxLength) {
  const length = getRandomInteger(minLength, maxLength + 1);
  let result = "";

  for (let i = 0; i < length; i++) {
  result += getRandomLetter();
}
return result;
};
  // will return a string in ascending order
const getSortedString = function(string) {
    return string.split('').sort().join('');
};

console.log(getRandomString(10, 20));