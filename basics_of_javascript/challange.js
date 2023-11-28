// Challenge No 1.

let occupation = 'developer';

console.log(`${occupation.toUpperCase(0).charAt(0)}${occupation.slice(1)}`);

console.log(occupation.charAt(0).toUpperCase() + occupation.slice(1));

console.log(occupation.charAt(0).toUpperCase() + occupation.substring(1));

console.log(occupation[0].toUpperCase() + occupation.slice(1));

//=====================================================\\
// Challenge No 2.

// let a = 51;

// let b = 40;

let a = Math.floor(Math.random() * 100 + 1);
console.log(a);

let b = Math.floor(Math.random() * 50 + 1);
console.log(b);

// Sum Operation

let sumOutput = a + b;

console.log(`${a} + ${b} = ${sumOutput}`);

// Difference Operation
let differenceOutput = a - b;

console.log(`${a} - ${b} = ${differenceOutput}`);

// Multiplication Operation
let productOutput = a * b;

console.log(`${a} * ${b} = ${productOutput}`);

// Divide Operation
let quotientOutput = a / b;

console.log(`${a} / ${b} = ${quotientOutput}`);

// Remainder Operation
let remainderOutput = a % b;

console.log(`${a} % ${b} = ${remainderOutput}`);

//=====================================================\\
// Challenge No 3.

let firstArray = [1, 2, 3, 4, 5];
firstArray.push(6);
firstArray.unshift(0);
console.log(firstArray.reverse());

//=====================================================\\
// Challenge No 4. A
let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [6, 7, 8, 9, 10];
secondArr.splice(0, 1);
let jointArray = [...firstArr, ...secondArr];
console.log(jointArray);

// Challenge No 4. B

// let fsArr = firstArr.splice(0, 5).concat(secondArr);
// console.log(fsArr);

// Challenge No 4. C

// let multiArr = [...firstArr, ...secondArr];
// multiArr.splice(5, 1);
// console.log(multiArr);

// Challenge 5
