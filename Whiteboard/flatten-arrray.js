function flattenArray(array) {
  const flatArray = [];

  function flatten(element) {
    if (!Array.isArray(element)) {
      flatArray.push(element);
    } else {
      element.forEach(element => flatten(element));
    }
  }

  flatten(array);
  return flatArray;
}

function flattenArray2(array) {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray2(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

console.log(flattenArray([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]));
console.log(flattenArray2([1, 2, [3, 4, [5, 6, 7], 8], 9, 10]));
