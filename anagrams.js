function areAnagrams(str1, str2) {
  const map = {};
  for (let char of str1) map[char] = map[char] + 1 || 1;
  for (let char of str2) {
    if (!map[char]) {
      console.log(char);
      return false;
    } else {
      map[char]--;
    }
  }
  return true;
}
console.log(areAnagrams("hello world", "world hello"));
console.log(areAnagrams("world", "worlds"));
