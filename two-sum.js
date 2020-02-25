function twoSum(array, sum) {
  const counterparts = [];
  const pairs = [];

  array.forEach(element => {
    const counterpart = sum - element;
    if (counterparts.indexOf(counterpart) !== -1) {
      pairs.push([element, counterpart]);
    }
    counterparts.push(element);
  });
  return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4));
