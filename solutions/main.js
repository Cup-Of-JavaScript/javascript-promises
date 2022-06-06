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
    console.log(characters);
}

const ex3 = async () => {
    let name = await getFirstName(1);
    console.log(name);
}

//
// Your functions here...
//

const getFirstName = async (userId) => {
    let retval = null;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        retval = result.data.name
    }
    catch (err) {
        console.log(err)
    }
    return retval
}

const countCharsInBody = async (userId) => {
    let retval = null;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        retval = result.data
    }
    catch (err) {
        console.log(err)
    }
    return retval
}

const getUTCDateTime = () => {
    return new Promise(resolve => {
        resolve(new Date().toUTCString())
    });
}

const main = async () => {
    ex3();
}

main();
