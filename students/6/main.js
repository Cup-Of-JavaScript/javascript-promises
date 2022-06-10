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

const getNamesShortZip = async () => {                        //5
    let zip = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let names = result.data
        for (i = 0; i < names.length; i++) {
            if(names[i].address.zipcode.length == 5){
                zip.push(names[i].name);
                
            }
        }   
       return zip;
    }
    catch (err) {                                           //Promise rejection
        console.log(err);
   }
}

const getNames = async () => {                         //ex4
    let array = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let names = result.data
        for (i = 0; i < names.length; i++) {
            array.push(names[i].name)
        }

        return array.sort();
    }

    catch (err) {                                           //Promise rejection
        console.log(err);
    }
}

const getFirstName = async (userId) => {                         //ex3
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let name = result.data.name
        return name;
    }
    catch (err) {                                           //Promise rejection
        console.log(err);
    }
}

const countCharsInBody = async (userId) => {                //ex2
    let count = 0;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        count = result.data.body.length
    }
    catch (err) {                                        //Promise rejection
        console.log(err);
    }
    return count;

}

const getUTCDateTime = () => {                              //ex1
    return new Promise((resolve) => {
        let current = new Date()
        resolve(current.toUTCString())
    });
}

const main = async () => {
    ex5();
}

main()
