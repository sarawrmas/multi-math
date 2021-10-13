import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

// variable to represent new game
let newGame: Game;

// click handler for start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  // create new player instance
  const player: Player = new Player();
  // set new Player name to user input
  // able to call getInputValue from Utility class without creating new instance because of its static property
  player.name = Helpers.getValue('playername');

  // retrieve # of problems and multiplication factor from the input boxes
  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

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