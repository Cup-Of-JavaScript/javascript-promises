const { default: axios } = require("axios");

const getUser = async (userId) => {
    let retval = null;
    try {
        let result = await axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`);
        retval = result.data;
    }
    catch (err) {
        console.log(err);
    }
    return retval;
}

const main = async () => {
    let user = await getUser(1);
    console.log(user);
}

main();
