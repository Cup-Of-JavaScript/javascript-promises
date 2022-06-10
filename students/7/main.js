//
// File: main.js
// Date: 6/6/2022
//

"use strict";

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
    let result = await getPostWithName(1);
    console.log(result)
}

const getPostWithName = async (postId) => {
    let userPost = {};
    try {
        let route1 = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        userPost = route1.data
        // console.log(userPost.userId)
    
        let route2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${userPost.userId}`);
        let user = route2.data
    
        userPost.name = user.name
    }
    catch (e) {
        console.log(e.message)
    } 
    return userPost;
}

const main = async () => {
    ex6();

    // let person1  = { name: "Joe", age: 10 }
    // let person2  = { name: "Alice", age: 20 }
    // let array = []
    // array.push(person1);
    // array.push(person2);
    // array[0].ssn = "111-11-1111"
    // array[1].ssn = "222-22-2222"
  
    // console.log(array)
}


main();
