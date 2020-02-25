function capitalize(sentence) {
  return sentence
    .split(" ")
    .map(word => {
      return word
        .split("")
        .map((letter, index) => {
          if (index === 0) {
            return letter.toUpperCase();
          }
          return letter;
        })
        .join("");
    })
    .join(" ");
}

console.log(capitalize("hello world"));
