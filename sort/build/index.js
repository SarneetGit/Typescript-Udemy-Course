"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([4, 3, 2, 1]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('fZhcbRea');
// charactersCollection.sort();
// console.log(charactersCollection.data, charactersCollection.length);
var ll = new LinkedList_1.LinkedList();
ll.add(500);
ll.add(-20);
ll.add(-3);
ll.add(4);
ll.add(9);
ll.sort();
ll.print();
