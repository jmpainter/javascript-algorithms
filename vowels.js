function vowels(string) {
  string = string.toLowerCase().replace(/[^a-z]/, "");
  return string.length - string.replace(/[aeiou]/g, "").length;
}

function vowels2(string) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(vowels("Rainy Day"));
console.log(vowels2("Rainy Day"));
