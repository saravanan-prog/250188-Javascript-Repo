function arrayLength() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  console.log("length===>", fruits.length);
}

//arrayLength()

function converttoString() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  console.log("fruit===>", fruits);
  console.log("String===>", fruits.toString());
}

//converttoString()

function atMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.at(i));
  }
}

//atMethod()

function joinMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  console.log("fruit===>", fruits);
  console.log("String===>", fruits.join(" "));
}

//joinMethod()

function pushandPopMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  fruits.push("banana");
  fruits.push("papaya"); // Last-IN

  fruits.pop(); // Last-Out

  console.log("Fruits====>", fruits);
}

//pushandPopMethod()

function shiftandUnshiftMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];

  fruits.unshift("Banana");
  fruits.unshift("mango"); // First - IN

  fruits.shift(); // First - OUT

  console.log("Fruits====>", fruits);
}

//shiftandUnshiftMethod()

function deletefunctionality() {
  let person = {
    firstName: "Saravanan",
    lastName: "Durai",
    work: "Tcs",
    location: "Chennai",
  };
  delete person.lastName;
  console.log("Person===>", person);
}

//deletefunctionality()

function concatFuncinality() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  let vegtables = ["Onion", "Cabage", "Potatoo", "Bringal"];

  let carryBag = fruits.concat(vegtables);
  //let bag = [...fruits,...vegtables]

  carryBag[0] = "Mango";

  console.log("fruits===>", fruits);
  console.log("vegtables===>", vegtables);
  console.log("carryBag===>", carryBag);
}

//concatFuncinality()

function copyWithinMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  fruits.copyWithin(0, 2);
  console.log("fruits===>", fruits);
}

//copyWithinMethod()

function sliceMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  let result = fruits.slice(1, 2);

  console.log("result===>", result);
  console.log("fruits===>", fruits);
}

//sliceMethod()

function spliceMethod() {
  let fruits = ["apple", "Orange", "Grapes", "pineapple"];
  fruits.splice(0, 3, "Banana", "kiwi", "litchi");

  console.log("fruits===>", fruits);
  //console.log("result===>",result)
}

//spliceMethod()

/* Sorting method */

function arraySortmethod() {
  let fruits = [
    "kiwi",
    "cucmber",
    "carrot",
    "apple",
    "Orange",
    "Grapes",
    "pineapple",
  ];
  let result = fruits.toString().toLowerCase().split(",").sort();
  console.log("sorted value===>", result);
}

//arraySortmethod()

function reverseMethod() {
  let fruits = [
    "kiwi",
    "cucmber",
    "carrot",
    "apple",
    "Orange",
    "Grapes",
    "pineapple",
  ];
  let result = fruits.reverse();
  console.log("reverse sorted value===>", result);
}

//reverseMethod()

function checkpalindrom() {
  let str = "madam";
  let resverseString = str.split("").reverse().join("");
  let result = str === resverseString ? "palindrome" : "Not-palindrome";

  console.log("result===>", result);
}

//checkpalindrom()

function checkAnagram(str1, str2) {
  let firstString = str1.toLowerCase().split("").sort().join("");
  let secondString = str2.toLowerCase().split("").sort().join("");
  let result =
    firstString === secondString
      ? "This string is anagram"
      : "Given String is not anagram";

  console.log("result ===>", result);
}

// checkAnagram("RAT","TAR")

function numbersSorting() {
  let number = [100, 50, 80, 20, 1000, 400];

  let mintoMaxResult = number.sort((a, b) => a - b);

  console.log("mintoMaxResult ====>", mintoMaxResult);
}
//numbersSorting()

function numberSortingResversalOrder() {
  let number = [100, 50, 80, 20, 1000, 400];

  let mintoMaxResult = number.sort((a, b) => b - a);

  console.log("mintoMaxResult ====>", mintoMaxResult);
}

numberSortingResversalOrder();
