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

        callback(startInd - 1, endInd - 1);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    return !this.isEmpty(startTowerIdx) && (this.isEmpty(endTowerIdx) ||
            this.getLast(startTowerIdx) < this.getLast(endTowerIdx));
  }

  move(startTowerIdx, endTowerIdx) {
    if(this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }

    return false;
  }

  isEmpty(towerIdx) {
    return this.stacks[towerIdx].length === 0;
  }

  getLast(towerIdx) {
    return this.stacks[towerIdx][this.stacks[towerIdx].length - 1];
  }

  isWon() {
    return this.isEmpty(0) && (this.stacks[1].length === 3 ||
                               this.stacks[2].length === 3);
  }

  close() {
    this.reader.close();
  }
}

const game = new Game();
// // game.promptMove((start, end) => {
// //   console.log(`Start: ${start}, End: ${end}`);
// //   game.close();
// // });
// game.close();
//
// console.log(game.isValidMove(0, 1));
// console.log(game.isValidMove(0, 2));
// console.log(!game.isValidMove(1, 0));
//
// game.stacks[1].push(game.stacks[0].pop());
// console.log(game.isValidMove(0, 2));
// console.log(!game.isValidMove(0, 1));
