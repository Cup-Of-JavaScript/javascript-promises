const { default: axios } = require("axios");

const main = async () => {
    let users = await getUsers();
    let total = calcShippingCharges(users);
    console.table(total);
}

const calcShippingCharges = (users) => {
    let = retval = []
    for (let user of users) {
        if (user.zipcode[0] == "5") {
            user.shippingCharge = "$5.00"
            retval.push(user)
        }
    }
    return retval;
}

const getUsers = async () => {
    let retval = []
    let users = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    retval = users.data.map(i => { return { name: i.name, zipcode: i.address.zipcode } })
    return retval;
}

main();
