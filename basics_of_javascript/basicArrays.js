// How to create an array
let players = ['John', 'Johnny'];
console.log(players);

// How to create an Array using object litteralls
let clients = new Array('One', 'Two', 'Three', 'Four');
console.log(clients);

// How to log element of an Array using it's index.
console.log(clients[0]);

// How to check length of an Array using Length
console.log(players.length);

// How to add an element to an array on a specific index

players[2] = 'mike';
console.log(players);

// Another way of adding element to the Array using push Method

players.push('Billy');
console.log(players);

// How to remove last element from an Array

players.pop();
console.log(players);

// How to Add an Element to the Start of an Array

players.unshift('Tyson');
console.log(players);

// How to remove first Element from An Array
players.shift();
console.log(players);

// How to combine 2 Array's Together
let comb = players.concat(clients);
console.log(comb);

// How to Reverse elements of from An Array using reverse Method.
players.reverse();
console.log(players);

// How to know Index of a Specific Element from An Array
let z = players.indexOf('mike');
console.log(z);

// How to check is this element present in the array by using includes method
let q = players.includes('nike');
console.log(q);

// Step I: Remove the first three elements from the 'comb' array using splice
comb.splice(0, 3); // first parameter is index,Second parameter is element
console.log(comb);

// Step II: Remove the first two elements from the modified 'comb' array using splice
comb.splice(0, 2); // first parameter is index,Second parameter is element
console.log(comb);

// How to create a new array from an old array with the help of slice Method
// Step 1: Create an array named 'newArr' with elements 1, 2, 3, 4, 5, and 6
let oldArr = [1, 2, 3, 4, 5, 6];

// Step 2: Use the slice method to create a new array 's' that includes elements from index 0 to (2-1)
let newArr = oldArr.slice(0, 2);

// Step 3: Display the 's' array
console.log(newArr);

// To replace, And Add element using splice Method
newArr.splice(1, 1, 'two');
let w = newArr.indexOf('two');
console.log(w);
newArr.splice(2, 2, 4);

console.log(newArr);
console.log(oldArr);

// Using Spread Operator with Arrays

let spreadedArray = [...players, ...clients];
console.log(spreadedArray);

// spread operator adds multiple arrays together and can also add new element to an existing Array
spreadedArray = [...clients, 'five'];
console.log(spreadedArray);
let player = [...players, 'johnson'];
console.log(player);

// Flat Method on Array Combines Nested Arrays together
let flattened = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
let f = flattened.flat();
console.log(f);

// To check its an Array or Not using isArray Method
let isAnArray = Array.isArray(players);
console.log(isAnArray);

// Multiple variables formed into an Array use of

let a1 = 1;
let a2 = 2;
let a3 = 3;
let off = Array.of(a1, a2, a3);
console.log(off);

// To convert a String in to Arrays using Array.form method
let abc = Array.from('abcdefghijklmnopqrstuvwxyz');
console.log(abc);

// To grab an element from Nested Arrays
let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];
let arr3 = arr1 + arr2;
console.log(arr3);
let g = arr3[0][0];
console.log(g);

