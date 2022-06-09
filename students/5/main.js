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
  let userId = 1;
  let characters = await countCharsInBody(userId);
  console.log(characters);
};

const ex3 = async () => {
  let name = await getFirstName(1);
  console.log(name);
};

const ex4 = async () => {
  let names = await getNames();
  console.log(names);
};

const ex5 = async () => {
  let names = await getNamesShortZip();
  console.log(names);
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

//exercise 2
const countCharsInBody = async (userId) => {
  let retval = null;

  try {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    retval = result.data.body.length;
  } catch (err) {
    console.log(err);
  }
  return retval;
};

//exercise 3
const getFirstName = async (userId) => {
  let personName = null;
  let result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  personName = result.data.name;
  return personName;
};

//exercise 4
const getNames = async () => {
  let allNames = [];
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    //console.log(result.data) // array of objects [{user},{user},{user}...]
    for (let user of result.data) {
      allNames.push(user.name);
    }
    allNames.sort();
  } catch (err) {
    console.log(err.message);
  }
  return allNames;
};

//exercise 5
const getNamesShortZip = async () => {
  let retval=[];
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let array = result.data;
    for (let i = 0; i < array.length, i++; ) {
      if (array[i].address.zipcode.length < 6) {
        retval.push(array[i].name);
      }
    }
    return retval;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  ex5();
};

main();
