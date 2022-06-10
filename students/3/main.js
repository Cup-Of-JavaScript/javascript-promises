//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");

const ex1 = async () => {
    try {
        let theDate = await getUTCDateTime();
        console.log(theDate);
    }
    catch (err) {
        console.log(err)
    }
}

const ex2 = async () => {
    let userId = 1;
    let characters = await countCharsInBody(userId);
    console.log(characters)
}

const ex3 = async () => {
    console.log("TODO...")
}

const ex4 = async () => {
    console.log("TODO...")
}

const ex5 = async () => {
    console.log("TODO...")
}

const ex6 = async () => {
    console.log("TODO...")
}

//
// Your functions here...
//

// EX 2
const countCharsInBody = async (userId) => {
    let retval = null;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        retval = result.data.body.length
    }
    catch (err) { 
        console.log(err);
    }
    return retval;
}

// EX 1
const getUTCDateTime = () => {
    return new Promise((resolve) => {
        let getUTCDateTime = new Date().toUTCString()
        resolve(getUTCDateTime)
    })
}
 const main = async () => {
    ex2();
}

main();
