// METHODS APPLY ON STRINGS

let x = 'i am a book keeper';
// Initialized Variable x with some value

console.log(x.length);
// Checks the length

console.log(x[0]);
// What is at given index = i

console.log(x.__proto__);
// Returns all Applicable Methods

console.log(x.toUpperCase());
// Makes all Upper Case

console.log(x.toLowerCase());
// Makes all Lower Case

console.log(x.charAt(0));
//This will return character that is present at given index

console.log(x.indexOf('b'));
// This will find where "b" is and will provide its index

console.log(x.substring(7, 12));
// example to get result from index 1 to 10

console.log(x.substring(5));
// Returns all that is after provided Index

console.log(x.slice(0, -7));
// Slice Method can work on (POS)(NEG) Values

console.log(x.trim());
// Its used to remove intial white spaces

console.log(x.replace('keeper', ' of JavaScript'));
// Its used to replace

console.log(x.includes('k'));
// It's used for checking is a char or word their or not

console.log(x.valueOf());
// used for checking present value

console.log(x.split(''));
// It Splits character into arrays

console.log(x.split(' '));
// it Splits value into words

// METHODS APPLY ON NUMBERS

let n = 5;

console.log(n);

console.log(typeof n.toString());
// converts a number into a string

console.log(n.toFixed(4));
// Is used to add zeros after decimal point

console.log(n.toPrecision(4));
// It Gives total of those numbers that are passed as a parameter

console.log(n.toLocaleString('ar-EG'));
// It Converts the number into string to another countries number like egypts 5.

console.log(Number.MAX_VALUE);
// It's used for checking largest number that can be stored

console.log(Number.MIN_VALUE);
// It's used for checking smallest number that can be stored

console.log(n.valueOf());
// checking for knowing what current value that variable has

// Time and Dates In JavaScript

let z;
let d = new Date();
console.log(d);
// Gets the Current Date with Current Time and Time Zone

z = d.getDate();
console.log(z);
// This Method brings Current Month's todays Date 23

z = d.getTime();
console.log(z);
// This Method brings the Time with Year in Milli Seconds

z = d.getFullYear();
console.log(z);
// This Method brings Current Year like 2023

z = d.getMonth();
console.log(z + 1);
// This method brings previous month

z = d.getHours();
console.log(z);
// This Method brings Current Hour 12 or 14,15,24

z = d.getMinutes();
console.log(z);
// This Method brings Current Times Minutes 11,17,59 or the current minute

z = d.getSeconds();
console.log(z);
// This Method brings Current Seconds

z = d.getMilliseconds();
console.log(z);
// This Method brings Current milliseconds

z = d.valueOf();
console.log(z);
// This method also provides Current Date and Time in milliseconds

z = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
console.log(z);
// This way we can get todays date with Year - Month -Day

z = Intl.DateTimeFormat('default', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
}).format(d);
console.log(z);
// This is another way to get Date with Day Month name and Year = 23 November 2023

z = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'IST',
});
console.log(z);
// This Way we get Time in this Format = Thursday, 23 November, 2023 at 3:00:30 pm

d = d.toString();
d = new Date(2023, 10, 23, 15, 12, 10);
console.log(d);
// Can also use our own Time with Date: Year Month Day Hour Minutes and Seconds
