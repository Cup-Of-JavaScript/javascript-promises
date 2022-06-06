# JavaScript Promises Assignments

## Ex. 1 

In general, most backend systems use UTC time to store and process data related to time.  This is also called GMT or Zulu time.  UTC/GMT/Zulu time is not affected by daylight savings time changes.

Create an arrow function called `getUTCDateTime` that returns a Promise that contains the current UTC time.  The Promise only implements the `resolve` callback function and not the `reject` callback function.

Usage:
```
let theDate = await getUTCDateTime();
console.log(theDate);
```

Output
```
Mon, 06 Jun 2022 18:38:11 GMT
```

Note: This is an academic example and should not be used in production (doesn't make sense to wrap this in a Promise).

## Ex. 2






