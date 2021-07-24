//   Seek and Destroy
// You will be provided with an initial array
// (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that
// are of the same value as these arguments.

// Note: You have to use the arguments object.

function myDestroyer(arr, ...args) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      args.findIndex((item) => {
        return item === arr[i];
      }) === -1
    ) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
  return newArr;
}

myDestroyer([1, 2, 3, 1, 2, 3], 2, 3);

// -------------------------------

// FreeCodeCamp solution being one line again ;-;

function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
