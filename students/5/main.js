//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");
const e = require("express");

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
  let result = await getPostWithName(11);
  console.log(result);
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
  let getNames = [];
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    for (let user of result.data) {
      if (user.address.zipcode.length < 6) {
        getNames.push(user.name);
      }
    }
  } catch (err) {
    console.log(err.message);
  }
  return getNames;
};

//exercise 6
const getPostWithName = async (Id) => {
  let postName = [];
  try {
   let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`);
   let result2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${result.data.userId}`);
    postName = Object.assign(result.data, {name: result2.data.name})
  } 
  catch (err) {
    console.log(err);
  }
  return postName;
};

const main = async () => {
  ex6();
};

main();
