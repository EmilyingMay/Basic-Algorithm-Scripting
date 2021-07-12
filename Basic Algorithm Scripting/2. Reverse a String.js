//  Reverse a StringPassed
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
  const a = str.split("");
  const b = a.reverse();
  const c = b.join("");
  console.log(c);

  return c;
}

reverseString("hello");
