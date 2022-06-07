//
// https://youtu.be/PoRJizFvM7s
//

const doWork = () => {
    return new Promise((resolve, reject) => {
        let success = true;
        // Do some real work here...
        if (success) {
            resolve("ok")
        } else {
            reject("fail")
        }
    });
}

const main = async () => {
    // let myPromise = doWork();
    // myPromise
    //     .then(i => 
    //         {
    //             console.log("Resolve: " + i) // handle resolves
    //         }) 
    //     .catch( i => 
    //         {
    //             console.log("Reject: " + i) // handle the rejects
    //         })

    // console.log('here')

    try {
        let result = await doWork();
        console.log("Success: " + result) // resolve block
    }
    catch (err) {
        console.log("Catch: " + err)  // reject block
    }
}

main();

