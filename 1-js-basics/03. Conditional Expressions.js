/* 
  Conditional Statements
  1. if
  2. if else
  3. if elseif ... else
*/

let a = prompt("What is your age?");
console.log(typeof a);
a = parseInt(a);      // Coverting String to a Number
console.log(typeof a);


// if else
if (a > 18) {
  alert("This is a valid age.");
}
else {
  alert("This is an invalid age.");
}


// Using Switch Case
const c = 5;
switch (c) {
  case 1:
    console.log("It is one");
    break;

  case 2:
    console.log("It is two");
    break;

  case 5:
    console.log("It is five");
    break;

  default:
    console.log("Not found!!");
}


// Ternary Operator

let y = prompt("What is your age?");
console.log("You are " + (y > 18 ? "eligible." : "not eligible."));