// Array Methods


let a = [15, 52, 42, 32, 63];
console.log(typeof a);

// Converting to string
let sa = a.toString();
console.log(sa, typeof sa);

// Joining elements of array
let ja = a.join(" and ");
console.log(ja);

// Poping --> removes last element and returns value
let poa = a.pop();
console.log(a, poa);

// Pushing  --> adds new element at last and returns length
let pua = a.push(100);
console.log(a, pua);

// Shift --> removes first element and returns value
let sha = a.shift();
console.log(a, sha);

// Unshift  --> adds new element at first and returns length
let usa = a.unshift(200);
console.log(a, usa);