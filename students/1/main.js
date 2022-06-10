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
    let names = await getNames();
    console.log(names);
}

const ex5 = async () => {
    let names = await getNamesShortZip();
    console.log(names);
}

const ex6 = async () => {
    console.log("TODO...")
}

//
// Your functions here...
//
const getNamesShortZip = async () => {
    let nameZip = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        //console.log(result.data) // [{user: 1}, {user: 2}, {user: 3}, ...]
        for (let user of result.data) {
            if (user.address.zipcode.length == 5) {
                nameZip.push(user.name)
            }
        }
        nameZip.sort()
    }
    catch (err) {  
        console.log(err);
    }
    return nameZip;
}

const getNames = async () => {
    let allNames = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
         // allNames is an array that contains objects
        
        for(let users of result.data){
            allNames.push(users.name)
        }
        allNames.sort()
    }   
    catch (err) {  
        console.log(err);
    }
    return allNames;
}


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
    ex5();
}

main();
