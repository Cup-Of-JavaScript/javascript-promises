//
// File: main.js
// Date: 6/6/2022
//

const ex1 = async () => {
    let theDate = await getUTCDateTime();
    console.log(theDate);
}

const ex2 = async () => {
    console.log("ex2...")
}

const ex3 = async () => {
    console.log("ex3...")
}

//
// Your functions here...
//

const getUTCDateTime = () => {
    return new Promise(resolve => {
        resolve(new Date().toUTCString())
    });
}

const main = async () => {
    ex1();
}

main();
