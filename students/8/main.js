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
    let name = await getFirstName(1);
    console.log(name);
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

// Ex 3

const getFirstName = async (userId) => {
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let name = result.data.name
        return name;
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }

}

// Ex 2

const countCharsInBody = async (userId) => {
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        let chars = result.data.body.length
        return chars;
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }

}


//Ex 1

const getUTCDateTime = () => {
    return new Promise((resolve) => {
        resolve(new Date().toUTCString())
    });
}


const main = async () => {
    ex2();
}

main();
