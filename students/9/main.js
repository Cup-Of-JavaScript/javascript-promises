//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");

const ex1 = async () => {
  let theDate = await getUTCDateTime();
  console.log(theDate);
};

const ex2 = async () => {
  let characters = await countCharsInBody(1);
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

const getUTCDateTime = () => {
  return new Promise((resolve) => {
    resolve(new Date().toUTCString());
  });
};

const countCharsInBody = async (userId) => {
  let count = 0;
  try {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    count = result.data.body.length;
  } catch (err) {
    console.log(err);
  }
  return count;
};

const getFirstName = async (userId) => {
  let personName = null;
  let result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  personName = result.data.name;
  return personName;
};
const getNames = async () => {
  let array = [];
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let names = result.data;
    for (i = 0; i < names.length; i++) {
      array.push(names[i].name);
    }
    return array.sort();
  } catch (err) {
    console.log(err);
  }
};
const getNamesShortZip = async () => {
  let namesArray = [];
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let name = result.data;
    for (let i = 0; i < name.length; i++) {
      if (name[i].address.zipcode.length < 6) {
        namesArray.push(name[i].name);
      }
    }
    return namesArray;
  } catch (err) {
    console.log(err);
  }
};
const main = async () => {
  ex5();
};

main();

