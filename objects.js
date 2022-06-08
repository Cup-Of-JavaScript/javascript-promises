
const person = () => {
    let p = {
        name: "Joe", 
        age: 10
    }

    p.ssn = "111-11-1111"
    p.hairColor = "Brown"

    let array = []
    array.push(p)
    array[0].shoeSize = 10

    console.log(array[0])
}

const car = () => {
    let make = "Toyota"
    let model = "GR86"

    let car = {
        make,
        model
    }

    console.log(car);
}

const main = () => {
    //person();
    //car();
}

main();
