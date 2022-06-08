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

const getFirstName = async (userid) => {
    let fName = 0; 
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
        fName = result.data.name
    }
    catch (err) {  
        console.log(err);
    }
    return fName;
}

const getUTCDateTime = () => {
    return new Promise((resolve) => {
        let currentTD = new Date();
        let day = currentTD.toUTCString();
        let currently = day;
        resolve(currently) 
    });
}

const countCharsInBody = async (userid) => {
    
        let totalChar = 0;
        try {
            let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userid}`);
            totalChar = result.data.body.length;
        }
        catch (err) {  
            console.log(err);
        }
        return totalChar;
}

const main = async () => {
    ex3();
}

main();
