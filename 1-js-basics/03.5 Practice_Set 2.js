// Chapter 2 Q1
let age1 = prompt("What is you age?");
if (age1 > 10 && age1 < 20) {
  console.log("Your age lies between 10 and 20.")
}
else {
  console.log("Your age does not lie between 10 and 20.")
}


// Chapter 2 Q2
let num = prompt("Enter a number");
num = Number.parseInt(num)
switch (num) {
  case 5:
    console.log("It is five.");
    break;
  case 10:
    console.log("It is ten.");
    break;
  default:
    console.log("It is other number.");
    break;
}

// Chapter 2 Q3
let n = prompt("Enter a number");
n = Number.parseInt(n);
if (n % 2 == 0 && n % 3 == 0) {
  console.log("Entered number is divisible by 2 & 3.");
}
else {
  console.log("Entered number is not divisible by 2 & 3.");
}



// Chapter 2 Q4
let n1 = prompt("Enter a number");
n1 = Number.parseInt(n1);
if (n1 % 2 == 0 || n1 % 3 == 0) {
  if (n1 % 2 == 0) {
    console.log("It is divisible by 2.")
  }
  else {
    console.log("It is divisible by 3.")
  }
}
else {
  console.log("Entered number is not divisible by either 2 or 3.");
}


// Chapter 2 Q5
let age = prompt("Enter you age");
age = Number.parseInt(age);
console.log("You are " + (age > 18 ? "eligible to drive." : "not eligible to drive."));