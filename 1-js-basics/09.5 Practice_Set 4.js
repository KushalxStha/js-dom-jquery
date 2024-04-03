// CH4 Q1
console.log("Kus\"".length);

// CH Q2
let sentence="Kamal lives in Dhading.";
let word="soul";
// Exploring includes
console.log(sentence.includes(word));
console.log(`The word "${word}" is ${sentence.includes(word)?"in the sentence.":"not in the sentence."}`)

// CH Q3
console.log(sentence.toUpperCase());

// CH Q4
let str="Please give Rs 1000";
let amount=Number.parseInt(str.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof amount);

// CH Q5
let f="King";
f[0]="R";
console.log(f);      // f did not change because string is immutable.
console.log(f.replace("K","B"))