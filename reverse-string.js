function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}

function reverseString2(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("hello"));
console.log(reverseString2("hello"));
