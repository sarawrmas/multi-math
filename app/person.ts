export interface Person {
  name: string;
  // optional parameter
  age?: number;
  // function that produces a string
  formatName: () => string;
}