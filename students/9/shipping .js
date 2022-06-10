const shipping = async () => {
    let theDate = await getUTCDateTime();
    console.log(theDate);
  };

  const getNames = async () => {
    let array = [];
    try {
      let result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      let names = result.data;
      for (i = 0; i < names.length; i++) {
        array.push(names[i].name);
      }
      return array.sort();
    } catch (err) {
      console.log(err);
    }


  const makepeople = (peopleArray) => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }
  
    peopleArray.push(person1);
    peopleArray.push(person2);
    peopleArray.push(person3);
  
    peopleArray.sort((a, b) => (a.age > b.age) ? 1 : -1)
    return peopleArray;
  }