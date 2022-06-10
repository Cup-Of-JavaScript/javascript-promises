const { default: axios } = require("axios");000

const ex4 = async () => {
    let result = await shippingChar();
    console.log(result);
}

const shippingChar = async (user) => {
    let userInfo = 0;
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        userInfo = result.data
        let endRes = userInfo.map(o => ({name: o.name, zipcode: o.address.zipcode, shippingCharge: '$5.00'} ));
        userInfo = endRes;
        for (let user of userInfo) {
            if (user.address.zipcode >= '50000-0000' && user.address.zipcode <= '59999-9999') {
                userInfo.push(user)
            }
        }
    }
    catch (err) {
        console.log(err);
    }
    console.table(userInfo);
}

const main = async () => {
    ex4();
}

main();
