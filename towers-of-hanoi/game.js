const readline = require("readline");

class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
    this.reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  dumpStacks() {
    console.log("");
    console.log(`Stack 1: ${this.stacks[0]}`);
    console.log(`Stack 2: ${this.stacks[1]}`);
    console.log(`Stack 3: ${this.stacks[2]}`);
    console.log("");
  }

  promptMove(callback) {
    this.dumpStacks();

    const rd = this.reader;
    rd.question("Enter the tower to take from: ", function (startInd) {
      rd.question("Enter the tower to move to: ", function (endInd) {
        const start = parseInt(startInd);
        const end = parseInt(endInd);

        callback(startInd, endInd);
      });
    });
  }

  close() {
    this.reader.close();
  }
}

const game = new Game();
game.promptMove((start, end) => {
  console.log(`Start: ${start}, End: ${end}`);
  game.close();
});
