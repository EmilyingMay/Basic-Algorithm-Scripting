//    Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  let a = true;
  let b = false;
  if (bool === a) {
    console.log(true);
    return true;
  } else if (bool === b) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

booWho(false);
