function reverseInteger(int) {
  const isNegative = int < 0;
  int = Math.abs(int);
  let intString = int.toString();
  intString = intString.trimEnd("0");

  let retVal = Number(
    intString
      .split("")
      .reverse()
      .join("")
  );
  return isNegative ? 0 - retVal : retVal;
}

function reverseInteger2(int) {
  return (
    parseInt(
      int
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(int)
  );
}

console.log(reverseInteger(1234));
console.log(reverseInteger(-1200));

console.log(reverseInteger2(1234));
console.log(reverseInteger2(-1200));
