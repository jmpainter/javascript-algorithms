function caesarCipher(phrase) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return phrase
    .split("")
    .map(char => {
      if (char === " ") {
        return char;
      }
      const index = (alpha.indexOf(char.toLowerCase()) + 100) % 26;
      return char === char.toUpperCase()
        ? alpha.charAt(index).toUpperCase()
        : alpha.charAt(index);
    })
    .join("");
}

console.log(caesarCipher("I love Javascript", 100));
