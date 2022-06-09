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
    let result = await getPostWithName(11); // 1 is the post id.
    console.log(result);
}

//
// Your functions here...
//

// Ex 6

const getPostWithName = async (Id) => {
    let postName = null;
    try {
        let post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`);
        retval = post.data
        user = post.data.userId
        let userdata = await axios.get(`https://jsonplaceholder.typicode.com/users/${user}`);
        retval2 = { name: userdata.data.name}
        postName = Object.assign(retval, retval2)
        
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }
    return postName;

}
// Ex 5

const getNamesShortZip = async () => {
    let nameArray = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        let names = result.data
        for (i = 0; i < names.length; i++) {
            if (names[i].address.zipcode.length < 6) {
                nameArray.push(names[i].name)
            }
        }
        return nameArray;
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }
}

// Ex 4

const getNames = async () => {
    let nameArray = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        let names = result.data
        for (i = 0; i < names.length; i++) {
            nameArray.push(names[i].name)
        }
        return nameArray.sort();
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }
}


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
    ex6();
}

main();
