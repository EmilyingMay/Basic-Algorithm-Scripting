//     Title Case a Sentence
// Return the provided string with the
// first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you
// should also capitalize connecting words like the and of.

function titleCase(str) {
  console.log(str);
  let arr = str.split(" ");
  let c = [];

  for (let i = 0; i < arr.length; i++) {
    let letters = arr[i].split("");
    let a = [];
    for (let j = 0; j < letters.length; j++) {
      if (j === 0) {
        let capital = letters[j].toUpperCase();
        a.unshift(capital);
      } else {
        let lower = letters[j].toLowerCase();
        a.push(lower);
      }
    }
    let b = a.join("");
    c.push(b);
  }

  let d = c.join(" ");
  console.log(d);
  return d;
}

titleCase("sHoRt AnD sToUt");
