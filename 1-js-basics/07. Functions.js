// Function
function Avg(x, y) {
    return (x + y) / 2;
  }
  
  // Arrow Function  --> This is Preffered 
  const sum=(x,y)=>{
    return x+y;
  }
  
  // Arrow Function without Arguments
  const hello = ()=>{
    console.log("Hello! I am Kushal.")
  }
  
  
  let a = 1, b = 2, c = 3;
  hello();
  console.log("Average of a and b is ", Avg(a, b));
  console.log("Sum of a and b is ",sum(a,b));