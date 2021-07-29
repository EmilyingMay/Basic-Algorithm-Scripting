//    Search and Replace
// Perform a search and replace on the sentence using
// the arguments provided and return the new sentence.

// First argument is the sentence to perform the search
// and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the
// second argument with (after).

// Note: Preserve the case of the first character in the
// original word when you are replacing it.
// For example if you mean to replace the word Book
// with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  let a = before.split("");
  console.log(a);

  let b = after.split("");
  console.log(b);

  if (a[0] == a[0].toUpperCase()) {
    b[0] = b[0].toUpperCase();
  } else {
    b[0] = b[0].toLowerCase();
  }

  let bef = a.join("");
  let aft = b.join("");

  let newStr = str.replace(bef, aft);

  console.log(newStr);

  return newStr;
}

myReplace("I think we should look up there", "up", "Down");
