//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");

const ex1 = async () => {
  try {
    let theDate = await getUTCDateTime();
    console.log(theDate);
  } catch (err) {
    console.log(err);
  }
};

const ex2 = async () => {
  console.log("TODO...");
};

const ex3 = async () => {
  console.log("TODO...");
};

const ex4 = async () => {
  console.log("TODO...");
};

const ex5 = async () => {
  console.log("TODO...");
};

const ex6 = async () => {
  console.log("TODO...");
};

//
// Your functions here...
//exercise 1
const getUTCDateTime = () => {
  return new Promise((resolve) => {
    let utcDateTimeNow = new Date().toUTCString();
    resolve(utcDateTimeNow);
  });
};




const main = async () => {
  ex1();
};

main();
