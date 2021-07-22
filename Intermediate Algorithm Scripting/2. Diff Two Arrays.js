//   Diff Two Arrays
// Compare two arrays and return a new array
// with any items only found in one of the two
// given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// ------------------------------------------------------------------------

// My ugly ass solution

function myDiffArray(arr1, arr2) {
  var newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.some((item) => item === arr1[i]) === false) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.some((item) => item === arr2[i]) === false) {
      newArr.push(arr2[i]);
    }
  }

  console.log(newArr);
  return newArr;
}

myDiffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

// ------------------------------------------------------------------------

// FreeCodeCamp dope solution :)

function diffArray(arr1, arr2) {
  console.log(
    arr1
      .concat(arr2)
      .filter((item) => !arr1.includes(item) || !arr2.includes(item))
  );
}

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
