function DistinctList(arr) {
  let itemCountObj = {};
  let maxItem = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    itemCountObj[item] = itemCountObj[item] + 1 || 1;
  }

  return Object.values(itemCountObj).filter((num) => num >= 2);
  // // code goes here
  // return [...new Set(arr)]
  //   .map((unique) => arr.filter((j) => j === unique).length)
  //   .map((k) => k - 1)
  //   .reduce((a, b) => a + b, 0);
}

// keep this function call here
console.log(DistinctList([0, -2, -2, 5, 5, 5]));
