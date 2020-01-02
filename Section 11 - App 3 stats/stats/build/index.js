"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var myReader = new MatchReader_1.MatchReader('football.csv');
myReader.read();
// console.log(myReader.data[0]);
var manUnitedWins = 0;
// console.log(matches);
for (var _i = 0, _a = myReader.data; _i < _a.length; _i++) {
    var game = _a[_i];
    if ((game[1] === 'Man United' && game[5] === MatchResult_1.MatchResult.HomeWin) ||
        (game[2] === 'Man United' && game[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log("Man united has a total of " + manUnitedWins + " games.");
console.log(new Date(2020, 11, 20));
