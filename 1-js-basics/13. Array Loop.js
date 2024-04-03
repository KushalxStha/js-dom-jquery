// Array.from   (Converting to an Array)
let nam = "Kushal";
let anam = Array.from(nam);
console.log(anam);


let arr = [1, 2, 3, 4, 5];

// For Each loop
arr.forEach(
  (element) => {
    console.log(element + 10);
  }
)

// For in 
for (let k in arr) {
  console.log(k, arr[k])
}

// For of
for (let i of arr) {
  console.log(i);
}