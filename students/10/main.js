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
  let result = await getPostWithName(11); // 1 is the post id.
  console.log(result);
};

//
// Your functions here...
//

//ex6
const getPostWithName = async (Id) => {
  let posts = null;
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`);
    let result2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${result.data.userId}`);
    posts = Object.assign(result.data, { name: result2.data.name });
  } catch (err) {
    console.log(err);
  }
  return posts;
};

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