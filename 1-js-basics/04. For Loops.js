const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Multiplication Table using For loop.
rl.question("Enter a number to get multiplication table: ", (num) => {
  num = Number.parseInt(num);
  for (let i = 1; i <= 10; i++) {
    console.log(num + " X " + i + " = " + num * i);
  }
  console.log("-------------------------");
  
  // Program to find sum of N natural numbers.
  let sum=0;
  rl.question("Enter value of n: ", (n) => {
    n=Number.parseInt(n);
    for (let i=1; i<=n; i++){
      sum+=i;
    }
    console.log("Sum of first "+n+" natural numbers is: "+sum);
    rl.close();
  });
});


// Multiplication Table using For loop.
// let num = prompt("Enter a number to get multiplication table:");
// num = Number.parseInt(num);
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " X " + i + " = " + num * i);
// }

// Program to find sum of N natural numbers.
// let sum=0;
// let n=prompt("Enter value of n:");
// n=Number.parseInt(n);
// for (let i=1;i<=n;i++){
//   sum+=i;
// }
// console.log("Sum of first "+n+" natural numbers is: "+sum);