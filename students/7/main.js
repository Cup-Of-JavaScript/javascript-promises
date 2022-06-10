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
         for (let i of result.data) {
             userNames.push(i.name)
        }
    }
    catch(e) {
                console.log(e)
    }
    return userNames.sort();
}
    

const ex5 = async () => {
    let names = await getNamesShortZip();
    console.log(names);}

const getNamesShortZip = async () => {
    let userNames = [];

    try {     
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
         for (let i of result.data) {
             if (i.address.zipcode.length == 5){
             userNames.push(i.name)
            }
        }
    }
    catch(e) {
        console.log(e)
    }
    return userNames.sort();
}


const ex6 = async () => {
    let answer = await getPostWithName(1);
    console.log(answer)
}

const getPostWithName = async (id) => {
    let user = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/${postId}`);
        let result2 = await axios.get(`https://jsonplaceholder.typicode.com/${userId}`);


    }
    catch (e) {
        console.log(e)
    }
}

const main = async () => {
    ex6();
}


main();
