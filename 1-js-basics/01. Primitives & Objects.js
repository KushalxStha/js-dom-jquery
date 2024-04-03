// nn bb ss u - Primitive Data types in JS

let a = null;
let b = 123;
let c = true;
let d = BigInt("545") + BigInt("5");
let e = "Kushal";
let f = Symbol("$#@");
let g;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);
console.log(typeof f);


// Non Primitive Data type - Objects in JS

const item = {
  "Kushal": true,
  "Kusum": 18,
  "Kristal": undefined
}

console.log(item);
console.log(item["Kusum"]);
console.log(typeof item);