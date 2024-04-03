// Arrays

let marks_std = [75, 70, 82, 86, false, "Absent"];

/* console.log(marks_std);
console.log(marks_std[0]);
console.log(marks_std[6]);

console.log(marks_std.length);
marks_std[6]=90;    // Adding data in an array
marks_std[4]=65;    // Changing data in an array
console.log(marks_std); */

for (let i = 0; i < marks_std.length; i++) {
  console.log(marks_std[i]);
}

for (let n in marks_std) {
  console.log(marks_std[n]);
}