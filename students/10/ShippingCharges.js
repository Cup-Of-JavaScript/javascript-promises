const { default: axios } = require("axios");

const getShippingCharges = async () => {
  let zipArray = []
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let zip = result.data;
    for (let i = 0; i < zip.length; i++) {
      if (zip[i].address.zipcode.startsWith('5')) {
        zip = Object.assign({name: zip[i].name, zipcode: zip[i].address.zipcode, ShippingCharge: "$5.00"});
        zipArray.push(zip);
      }
    }
    return zipArray;
  } 
  catch (err) {
    console.log(err);
  }
  console.log(await getShippingCharges());
};

const main = async () => {
    console.table(await getShippingCharges());
}

main();
