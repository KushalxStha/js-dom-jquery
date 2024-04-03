// CH3 Q1
const marks = {
    Kushal: 50,
    Manjil: 55,
    Kusum: 60,
    Manil: 65,
    Kristal: 70
  }
  
  for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks obtained by " + Object.keys(marks)[i] + " is", marks[Object.keys(marks)[i]])
  }
  
  
  console.log("--------Using For In Loop-------");
  // CH3 Q2
  for (let key in marks) {
    console.log("The marks obtained by " + key + " is", marks[key]);
  }
  
  
  console.log("--------------------------------");
  // CH3 Q3
  let cn = 5;
  let i;
  // while (i != cn) {
  //   i = prompt("Enter a number Five:");
  
  //   if (i != cn) {
  //     console.log("Try again!!")
  //   }
  // }
  // console.log("You entered correct number.")

  
  console.log("--------------------------------");
  // CH3 Q4
  const mean = (w, x, y, z) => {
    return (w + x + y + z) / 4;
  }
  
  console.log(mean(5, 6, 9, 8));