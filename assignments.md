# JavaScript Promises Assignments

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
web API endpoint where user id falls between 1 and 10.

```
Method: GET 
URL: https://jsonplaceholder.typicode.com/posts/{user id}
```

This arrow function returns the number of characters in the body.

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
web API endpoint where user id falls between 1 and 10.

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

