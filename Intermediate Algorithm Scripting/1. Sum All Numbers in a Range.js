//   Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum
// of all the numbers between them.
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum
// of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);

  let a = [];
  let newArr = a.concat(arr[0]);

  for (let i = 0; newArr[i] != arr[arr.length - 1]; i++) {
    newArr[i + 1] = newArr[i] + 1;
  }

  console.log(newArr);

  let soma = newArr.reduce((total, num) => {
    return total + num;
  });

  console.log(soma);
  return soma;
}

sumAll([1, 4]);

// --------------------------------------------------------------

// FreeCodeCamp dope solution;

const sumAll = (arr) => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
