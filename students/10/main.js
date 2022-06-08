//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");

const ex1 = async () => {
    let theDate = await getUTCDateTime();
    console.log(theDate);
}

const ex2 = async () => {
    let characters = await countCharsInBody(1);
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

//ex2
const countCharsInBody = async (userId) => {
    let count = 0;
    try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        count = result.data.body.length
    }
    catch (error) {
        console.log(error);
    }
        return count;
    }
    

//ex1
const getUTCDateTime = () => {
    return new Promise((resolve) => {
        let currentday = new Date()
        let current = currentday.toUTCString();
        resolve(current)
    });
}
    


const main = async () => {
    ex2();
}

main();
