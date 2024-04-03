// Chapter-1 Q1
let a = "Kushal";
let b = 1;

console.log(a + b);


// Chapter-1 Q2
console.log(typeof (a + b));


// Chapter-1 Q3
const student = {
  Name: "Kushal",
  isStudent: true,
  Roll: 2026
}
// = We cannot change a constant to hold a number later


// Chapter-1 Q4
student['College'] = "ASCOL";
console.log(student);
// = We can add new key to a constant


// Chapter-1 Q5
const dict = {
  tenacious: "holding together",
  gul: "a large octagonal design derived from the shape of a rose",
  lambent: "running or moving lightly over a surface"
}

console.log(dict.gul);
// OR
console.log(dict['lambent'])