//
// https://youtu.be/PoRJizFvM7s
//

const sleep = ms => new Promise(r => setTimeout(r, ms));

const doWork = () => {
    return new Promise(async (resolve, reject) => {
        let success = false;
        if (success) {
            await sleep(3000)
            resolve("ok")
        } else {
            await sleep(3000)
            reject("fail")
        }
    });
}

const main = async () => {

    let myPromise = doWork();
    myPromise
        .then(i => console.log(i))
        .catch(i => console.log(i))

    console.log('here')

    // try {
    //     let result = await doWork();
    //     console.log(result)
    // }
    // catch (err) {
    //     console.log(err)
    // }
}

const nestedObjects = () => {
    let p = {
        firstName: "joe",
        lastName: "smith",
        address: {
            street: "123 green street",
            city: "NY",
            state: "NY",
            zip: 14519
        }
    }

    console.table(p.address.city + " " + p.address.street);
}

main();
//nestedObjects();
