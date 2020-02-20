function removeDuplicates(string) {
  return Array.from(new Set(string.split(" "))).join(" ");
}

function removeDuplicates2(string) {
  debugger;
  const newArray = [];
  string.split(" ").forEach(item => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray.join(" ");
}

console.log(removeDuplicates("This is is a test test string."));
console.log(removeDuplicates2("This is is a test test string."));
