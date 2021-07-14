// Chunky Monkey
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let mainArr = [];

  console.log(arr.length);

  for (let i = 0; i < arr.length; i += size) {
    let subArr = arr.slice(i, size + i);
    mainArr.push(subArr);
    console.log(mainArr);
  }

  return mainArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
