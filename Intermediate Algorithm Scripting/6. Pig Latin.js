//    Pig Latin
// Pig Latin is a way of altering English Words.
// The rules are as follows:

// - If a word begins with a consonant, take the
// first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.

// ================================================================

// My broken-ass solution;

function myTranslatePigLatin(str) {
  let arr = str.split("");

  let newArr = [];

  let vogal = ["a", "e", "i", "o", "u"];

  if (vogal.some((letter) => letter === arr[0]) === true) {
    newArr.push(arr.slice(0).join("") + "way");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (vogal.some((letter) => letter === arr[i]) === true) {
        newArr = arr.splice(i);
        newArr.push(arr.slice(0, i).join("") + "ay");
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (vogal.some((letter) => letter === arr[i]) != true) {
        newArr.push(arr[i]);
      }
      if (i === arr.length - 1) {
        newArr.push("way");
      }
    }
  }

  let newStr = newArr.join("");

  console.log(newStr);
  return newStr;
}

myTranslatePigLatin("rhythm");

// ================================================================

// FreeCodeCamp dope solution

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

// ================================================================

// Why FreeCodeCamp dope solution works ;-;

function expTranslatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  console.log(myConsonants);

  if (myConsonants !== null) {
    let a = str.replace(consonantRegex, "");
    console.log(a);

    let b = a.concat(myConsonants);
    console.log(b);

    let c = b.concat("ay");
    console.log(c);

    return c;
  } else {
    let d = str.concat("way");
    console.log(d);

    return d;
  }
}

expTranslatePigLatin("consonant");
