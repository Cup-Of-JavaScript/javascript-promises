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

//
// Your functions here...
//

//ex5
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

//ex4
const getNames = async () => {
  let nameArray = [];
  let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  for (let user of result.data) {
    nameArray.push(user.name);
  }

  nameArray.sort();

  return nameArray;
};

//ex3
const getFirstName = async (userid) => {
  try {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userid}`
    );
    let name = result.data.name;
    return name;
  } catch (err) {
    console.log(err);
  }
};

//ex2
const countCharsInBody = async (userId) => {
  let count = 0;
  try {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    count = result.data.body.length;
  } catch (error) {
    console.log(error);
  }
  return count;
};

//ex1
const getUTCDateTime = () => {
  return new Promise((resolve) => {
    let currentday = new Date();
    let current = currentday.toUTCString();
    resolve(current);
  });
};

const main = async () => {
  ex5();
};

main();
