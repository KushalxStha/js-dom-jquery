// CH5 Q1     
let arr = [1, 2, 3, 4, 5];
console.log("Initial array:", arr);

// let ne = prompt("Enter a number");
// ne = Number.parseInt(ne);
// arr.push(ne);
// console.log(arr);


// CH5 Q2
let ar = [1, 2];
let n;

// do {
//   n = prompt("Enter a number");
//   n = Number.parseInt(n);
//   ar.push(n);
// } while (n != 0);

console.log(ar);


// CH5 Q3
let ar2 = [1, 2, 5, 10, 20, 15, 13, 40];

let da = ar2.filter(
  (e) => {
    return e % 10 == 0;
  }
)
console.log(da)


// CH5 Q4
let ar3 = [1, 2, 3, 4, 5];
let sqa = ar3.map(
  (value) => {
    return value * value;
  }
)
console.log(sqa);


// CH5 Q5
let ar4 = [1, 2, 3, 4, 5];
let fac = ar4.reduce(
  (x, y) => {
    return x * y;
  }
)
console.log("Factorial:", fac);