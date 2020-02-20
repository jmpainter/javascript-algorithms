function reverseWords(string) {
  return string
    .split(" ")
    .map(string =>
      string
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
}
console.log(reverseWords("I love JavaScript!"));
