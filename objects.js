
const person = () => {
    let p = {
        name: "Joe", 
        age: 10
    }
    // p.ssn = "111-11-1111"
    console.log(p)
}

const car = () => {
    var make = "Toyota"
    var model = "GR86"

    let car = {
        make,
        model
    }
    console.log(car);
}

const main = () => {
    person();
    //car();
}

main();
