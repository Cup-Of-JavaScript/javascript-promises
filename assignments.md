# JavaScript Promises/Web API Assignments

## Ex. 1 

In general, most backend systems use UTC time to store and process data related to time.  This is also called GMT or Zulu time.  UTC/GMT/Zulu time is not affected by daylight savings time changes.

Create an arrow function called `getUTCDateTime` that returns a Promise that contains the current UTC time.  The Promise only implements the `resolve` callback function and not the `reject` callback function.

Usage:
```
let theDate = await getUTCDateTime();
console.log(theDate);
```

Output:
```
Mon, 06 Jun 2022 18:38:11 GMT
```

Note: This is an academic example and should not be used in production (doesn't make sense to wrap this in a Promise).

## Ex. 2

Create an arrow function called `countCharsInBody` that accepts a userId as a parameter.  This function calls the following
web API endpoint where user id falls between 1 and 10:

```
Method: GET 
URL: https://jsonplaceholder.typicode.com/posts/{user id}
```

This arrow function returns the number of characters in the post's body:

```
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

Usage:
```
let characters = await countCharsInBody(1);
console.log(characters)
```

Output:
```
158
```

## Ex. 3

Create an arrow function called `getFirstName` that accepts a userId as a parameter.  This function calls the following
web API endpoint where user id falls between 1 and 10:

```
Method: GET
URL: https://jsonplaceholder.typicode.com/users/{user id}
```

The function returns the name of the user.

Usage:
```
let name = await getFirstName(1);
console.log(name);
```

Output:
```
Leanne Graham
```

## Ex. 4

Create an arrow function called `getNames`. This function calls the following  web API endpoint:

```
Method: GET
URL: https://jsonplaceholder.typicode.com/users
```

This function returns the names of all the people in alphabetical order.

Usage:
```
let names = await getNames();
console.log(names);
```

Output:
```
[
  'Chelsey Dietrich',
  'Clementina DuBuque',
  'Clementine Bauch',
  'Ervin Howell',
  'Glenna Reichert',
  'Kurtis Weissnat',
  'Leanne Graham',
  'Mrs. Dennis Schulist',
  'Nicholas Runolfsdottir V',
  'Patricia Lebsack'
]
```

## Ex. 5

Create an arrow function called `getNamesShortZip` This function calls the following web API endpoint:

```
Method: GET
URL: https://jsonplaceholder.typicode.com/users
```

This function returns the names of all the people in alphabetical order that have a zipcode whose length is 5 digits.

Usage:
```
let names = await getNamesShortZip();
console.log(names);
```

Output:
```
[ 'Chelsey Dietrich', 'Nicholas Runolfsdottir V' ]
```


## Ex. 6

Create an arrow function called `getPostWithName` that accepts a post id. This function calls the following web API endpoints:

```
Methods: GET
URLs: 
  https://jsonplaceholder.typicode.com/posts/{postId}
  https://jsonplaceholder.typicode.com/users/{userId}
```

This function augments the `/posts/` endpoint by adding the users name.

Usage #1:
```
let result = await getPostWithName(1); // 1 is the post id.
console.log(result);
```

Output:
```
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +        
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto',        
  name: 'Leanne Graham'  <=========== our function adds this field for userId: 1
}
```


Usage #2:
```
let result = await getPostWithName(11); // 11 is the post id.
console.log(result);
```

Output:
```
{
  userId: 2,
  id: 11,
  title: 'et ea vero quia laudantium autem',
  body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\n' +
    'accusamus in eum beatae sit\n' +
    'vel qui neque voluptates ut commodi qui incidunt\n' +        
    'ut animi commodi',
  name: 'Ervin Howell' <=========== our function adds this field for userId: 11
}
```
