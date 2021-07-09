
// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
 const array = str.split(" ");
 let length = 0;
 for(let i = 0; i < array.length; i++) {
  if (length < array[i].length) {
   length = array[i].length;
  }
 }

 console.log(length);
 return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


