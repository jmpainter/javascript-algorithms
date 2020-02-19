function chunkArray(array, chunkSize) {
  const chunks = [];
  let tempArray = [];
  let counter = 0;
  if (chunkSize >= array.length) return array;
  for (let i = 0; i < array.length; i++) {
    tempArray.push(array[i]);
    counter++;
    if (counter === chunkSize || array.length - i < chunkSize) {
      counter = 0;
      chunks.push(tempArray);
      tempArray = [];
    }
  }
  return chunks;
}

function chunkArray2(array, chunkSize) {
  const chunks = [];
  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length === chunkSize) chunks.push([item]);
    else lastChunk.push(item);
  }
  return chunks;
}

function chunkArray3(array, chunkSize) {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4], 3));
console.log(chunkArray([1, 2, 3, 4], 5));

console.log(chunkArray2([1, 2, 3, 4], 2));
console.log(chunkArray2([1, 2, 3, 4], 3));
console.log(chunkArray2([1, 2, 3, 4], 5));

console.log(chunkArray3([1, 2, 3, 4], 2));
console.log(chunkArray3([1, 2, 3, 4], 3));
console.log(chunkArray3([1, 2, 3, 4], 5));
