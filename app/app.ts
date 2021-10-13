function startGame() {
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = "MultiMath Player"): void {
  // a variable that can accept any function which has a string value and no return
  // use in conjuction with logError and logMessage which both have these properties
  // to return the proper message based on user input
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }
  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`)
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}

document.getElementById('startGame')!.addEventListener('click', startGame);