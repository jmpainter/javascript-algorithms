function maxCharacter(string) {
  const map = {};

  for (let char of string) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  let maxCharCount = 0;
  let maxChar;
  for (let key in map) {
    if (map[key] > maxCharCount) {
      maxCharCount = map[key];
      maxChar = key;
    }
  }
  return [maxChar, maxCharCount];
}
console.log(maxCharacter("Hello World!"));
