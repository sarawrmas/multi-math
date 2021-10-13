// triple slash directive
// single line comment must appear at the very beginning of a file
// provides additional instructions to a compiler
// provides path to file you want to reference
/// <reference path="player.ts" />
/// <reference path="game.ts" />

// variable to represent new game
let newGame: Game;

// click handler for start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  // create new player instance
  const player: Player = new Player();
  // set new Player name to user input
  // able to call getInputValue from Utility class without creating new instance because of its static property
  player.name = Utility.getInputValue('playername');

  // retrieve # of problems and multiplication factor from the input boxes
  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  // create new Game instance and assign it to new Game variable by passing 3 values to constructor
  newGame = new Game(player, problemCount, factor);
  // display the game board on the screen
  newGame.displayGame();
});

// click handler for calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  // call calculateScore method on the new Game instance
  newGame.calculateScore();
});