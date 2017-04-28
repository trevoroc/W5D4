const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", (input) => {
      const number = parseInt(input);
      sum += number;

      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  } else {
    console.log("Cannot add a negative amount of numbers");
  }
}

addNumbers(0, 3, sum => console.log(`Total sum: ${sum}`));
