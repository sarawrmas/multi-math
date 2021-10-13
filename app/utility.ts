function getInputValue(elementID: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  return inputElement.value;
}

function logger(message: string): void {
  console.log(message);
}

export { getInputValue as getValue, logger };

// class Utility {
//   // static keyword allows you to use the function throughout the app without having to create a new instance of Utility class
//   static getInputValue(elementID: string): string {
//     const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
//     return inputElement.value;
//   }
// }