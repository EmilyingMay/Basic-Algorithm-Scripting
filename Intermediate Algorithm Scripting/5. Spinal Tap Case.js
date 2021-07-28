//    Spinal Tap Case
// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

// ================================================================

//  My Solution

function mySpinalCase(str) {
  let a = str.toLowerCase();

  let c = str.replace(/[\W_]+/g, " ");

  var j;

  var arr = [];

  for (let i = 0; i < c.length; i++) {
    if (c.charAt(i) != a.charAt(i) || a.charAt(i) === " ") {
      arr.push(c.slice(j, i));
      j = i;
    }
    i === c.length - 1 ? arr.push(c.slice(j)) : "False";
  }

  let d = [];

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] != " ") & (arr[i] != "")) {
      d.push(arr[i].trim());
    }
  }

  let joined = d.join("-").trim();

  let lowercase = joined.toLowerCase();

  return lowercase;
}

mySpinalCase("Teletubbies say Eh-oh");

// ================================================================

// FreeCodeCamp dope solution ;-;

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("Teletubbies say Eh-oh");

// ================================================================

//  Why it works:

function whySpinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  console.log(str);

  let first = str.split(/\s|_|(?=[A-Z])/);
  console.log(first);

  let second = first.join("-");
  console.log(second);

  let third = second.toLowerCase();
  console.log(third);
}

whySpinalCase("thisIsSpinalTap");
