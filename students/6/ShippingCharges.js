const { default: axios } = require("axios");

const IGA2 = async () => {
    let charges = await ShippingCharges();
    console.table(charges);
}

const ShippingCharges = async () => {                //IGA
    let charge = [];
    try {
        let result = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        let names = result.data
        for (i = 0; i < names.length; i++) {
            if (names[i].address.zipcode.startsWith("5")) {
                let objects = {}
                objects = Object.assign({ name: names[i].name }, { zipcode: names[i].address.zipcode }, { shippingCharge: "$5.00" })
                charge.push(objects);
            }
        }
        return charge;
    }
    catch (err) {                                        //Promise rejection
        console.log(err);
    }

}


const main = async () => {
    IGA2();
}

main()
