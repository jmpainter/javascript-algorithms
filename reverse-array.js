function reverseArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArray2(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

function reverseArray3(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i]
    ];
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray2([1, 2, 3, 4, 5]));
console.log(reverseArray3([1, 2, 3, 4, 5]));
