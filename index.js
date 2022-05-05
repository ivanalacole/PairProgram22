
EASY
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const even = [];
const odd = [];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}
console.log(even);
console.log(odd);

//EASY(2) Create a function that checks an array for prime numbers then inserts any primes into a new array.
let primeNum = (x) => {
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      return false;
    }
  }
};
let findPrimeNum = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (primeNum(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};
console.log(findPrimeNum(6));
console.log(findPrimeNum(18));
console.log(findPrimeNum(42));


Medium(1) Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
let vowelChecker = (x) => {
  let vowels = ["a", "e", "i", "o", "u"];
  for (var i in vowels) {
    if (x === i) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(vowelChecker("o", "z"));
//MEDIUM(2) Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.
const isItaString = (string1, string2) => {
  let n1 = string1.length;
  let n2 = string2.length;
  if (n1 != n2) return false;
  for (let i = 0; i < n1; i++) if (string1[i] != string2[i]) return false;
  return true;
};
let string1 = ["Today is going to be a great day."];
let string2 = ["Today is going to be a great day."];
if (isItaString(string1, string2))
  console.log(`String1 and String2 is an anagram`);
else console.log(`String1 and String2 is not an anagram`);
//MEDIUM(3) Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.
function divide(x, y) {
  if (x > y) {
    console.log(x / y);
  } else console.log(y / x);
}
console.log(divide(5, 25));
console.log(divide(12, 4));
//Medium(4) Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
let car = {
  make: "Jaguar",
  model: "S-Type",
  year: "2008",
  milage: "81,000",
  color: "White",
};
driveToWork: () => {
  alert(`Old Milage is ${car.milage}`);
  car.milage = car.milage + 33;
  console.log(`New milage is ${car.milage}`);
};
driveAroundTheWorld: () => {
  alert(`Old Milage is ${car.milage}`);
  (car.milage = car.milage + 24), 000;
  console.log(`New milage is ${car.milage}`);
};
runErrands: () => {
  alert(`Old Milage is ${car.milage}`);
  car.milage = car.milage + 30;
  console.log(`New milage is ${car.milage}`);
};
console.log(driveToWork);u
console.log(driveAroundTheWorld);
console.log(runErrands);
//Hard(1) Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
const matchBrack = (brackets) => {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    if (xn == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;
  }
};