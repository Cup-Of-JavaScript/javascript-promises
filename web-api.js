const { default: axios } = require("axios");

const getUser = async (userId) => {
    let retval = null;
    try {
        let result = await axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`);
        retval = result.data
    }
    catch (err) {  // Promise reject("hey you failed")
        console.log(err);
    }
    return retval;
}

const main = async () => {
    let userId = 1;
    let user = await getUser(userId);
    console.log(user);
}

main();
