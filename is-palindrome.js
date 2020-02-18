function isPalindrome(string) {
  let ptr1 = 0;
  let ptr2 = string.length - 1;

  while (ptr2 >= ptr1) {
    if (string.charAt(ptr1) !== string.charAt(ptr2)) {
      return false;
    }
    ptr1++;
    ptr2--;
  }
  return true;
}

function isPalindrome2(string) {
  let cleanedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    cleanedString
      .split("")
      .reverse()
      .join("") === cleanedString
  );
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("abbcbba"));
console.log(isPalindrome("abba"));

console.log(isPalindrome2("Cigar? Toss it in a can. It is so tragic"));
console.log(isPalindrome2("Cigar? Toss it in a can. It is so."));
