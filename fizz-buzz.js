function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 6 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
