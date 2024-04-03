// More Array Methods

let a = [10, 2, 3, 41, 12, 25, 26];
console.log(a);

// It deletes element but not space ouccupied by that element
/* 
delete a[0];
console.log(a); 
*/

let b = [123, 45, 56, 78];
let c = [32, 65, 98, 78, 450];

// Returns new array does not change existing array.
let new_ar = a.concat(b, c);
console.log("Merging array")
console.log(new_ar);

// Sorts elements alphabetically but not in ascending
console.log("Sorting array alphabetically")
console.log(new_ar.sort())



let compare =(a,b)=>{
  return a-b;
}
console.log("Arranging array in ascending using func. & sort")
console.log(new_ar.sort(compare));


let nar=[1,2,3,12,11,332,25,26];
/* console.log(nar.reverse()); */

// splice(position,no. of element to delete, inserting elements)
nar.splice(2, 3, 1000, 1001, 1002);      
// Returns deleted values if, let ___=nar.splice()  & console.log(___)
// Modifies array.
console.log(nar);


let rr=[12,13,45,46,58,57];
// Slicing array with start & end position.
// Creates new array.
let nrr=rr.slice(2,4);
console.log(nrr);