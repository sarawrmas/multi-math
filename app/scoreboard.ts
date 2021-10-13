import { Result } from './result';

export class Scoreboard {
  // array of objects that implement the Result interface
  private results: Result[] = [];

  // add new results to results array
  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  // generate the html representing all results and printing to screen
  updateScoreboard(): void {
    let output: string = '<h2>Scoreboard</h2>';

    for (let i = 0; i < this.results.length; i++) {
      const result: Result = this.results[i];
      output += '<h4>';
      output += result.playerName + ' : ' + result.score + ' /' + result.problemCount + ' for factor ' + result.factor;
      output += "<h4>";
    }

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}