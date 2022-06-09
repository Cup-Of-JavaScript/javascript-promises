//
// File: main.js
// Date: 6/6/2022
//

const { default: axios } = require("axios");

const ex1 = async () => {
    let time = await getUTCDateTime();
    console.log(time);
    
}
const getUTCDateTime = () => {
    return new Promise ((res) => {
        const date = new Date().toUTCString()
        res(date);
    })
}


const ex2 = async () => {
    let characters = await countCharsInBody(1);
    console.log(characters)
}

const countCharsInBody = async (userId) => {
    let count = 0;

    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        count = result.data.body.length
    }
    catch(error) {
        console.log(error);
    }
    return count;
}


const ex3 = async () => {
    let name = await getFirstName(1);
    console.log(name);
}

const getFirstName = async (userId) => {
    let user = 0;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        user = result.data.name

    }
    catch(e) {
        console.log(e)
    }
    return user;
}

const ex4 = async () => {
    let names = await getNames();
    console.log(names);
}

const getNames = async () => {
    let userNames = [];
        try {
            
            let result = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
            //userNames = [result.data.name]
            for (let user of result) {
                userNames.push(user.name)
            }

           console.log(userNames)
        }
        catch(e) {
            console.log(e)
        }
   // return userNames;
}


const ex5 = async () => {
    console.log("TODO...")
}

const ex6 = async () => {
    console.log("TODO...")
}


const main = async () => {
    ex4();
}


main();
