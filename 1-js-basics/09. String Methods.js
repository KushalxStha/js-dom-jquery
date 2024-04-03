// String Methods

let nam = "Kushal Shrestha";
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.slice(2, 10));
console.log(nam.slice(2));
console.log(nam.replace("Shrestha", "Stha"));   //replace("old","new")


let sp = "    Hi    ";
console.log(sp);
console.log(sp.trim());    //Remove space from start & end.

console.log(sp.trim().concat(" ", nam, "\n"));    //.concat()

for (let i = 0; i < nam.length; i++) {
  console.log(nam.toUpperCase()[i]);
}