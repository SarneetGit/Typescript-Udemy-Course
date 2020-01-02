import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([4, 3, 2, 1]);

// numbersCollection.sort();

// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('fZhcbRea');

// charactersCollection.sort();

// console.log(charactersCollection.data, charactersCollection.length);

const ll = new LinkedList();

ll.add(500);
ll.add(-20);
ll.add(-3);
ll.add(4);
ll.add(9);
ll.sort();

ll.print();
