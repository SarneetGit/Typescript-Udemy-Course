let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//Built in objects

let now: Date = new Date();

let colors: string[] = ['Hello', 'World'];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false];

let anyArr: any[] = ['tgest', 2, true];

//Classes

class Car {}

let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//WHen to use annotations
//1) When you hae a Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2) When we declare a variable on one line
// and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}

