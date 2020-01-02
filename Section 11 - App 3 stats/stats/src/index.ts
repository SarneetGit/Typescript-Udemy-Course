import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const myReader = new MatchReader('football.csv');

myReader.read();

// console.log(myReader.data[0]);

let manUnitedWins: number = 0;

// console.log(matches);

for (let game of myReader.data) {
  if (
    (game[1] === 'Man United' && game[5] === MatchResult.HomeWin) ||
    (game[2] === 'Man United' && game[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man united has a total of ${manUnitedWins} games.`);

console.log(new Date(2020, 11, 20));
