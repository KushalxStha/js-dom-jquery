/* 1. Selecting HTML elements */

document.getElementsByTagName("li")    // will give an array
//document.getElementsByTagName("li").style.color="red"     // will generate error because we are changing color of an array.

document.getElementsByTagName("li")[2]
document.getElementsByTagName("li")[2].style.color="red"
//document.getElementsByClassName("btn").style.color="red"      // will not change color 
 
document.getElementsByClassName("btn")[0].style.color="red"
document.getElementById("list")        // will not return array as multiple id with same name cannot exist in same page.
document.getElementById("title").innerHTML="Good Bye";


/* This is more recommended */
// Selecting using CSS reference. [Query Selector]  
document.querySelector("#title")   // Selecting by id
document.querySelector(".btn")     // Selecting by class
document.querySelector("li")       // Selecting by tag name  // Selects 1st element only if there are multiple
document.querySelectorAll("li")    //      "  "              // Selects all element.

document.querySelector("ul li")    // Need to give space when there is hierarchy
document.querySelector("li.item")  // No space if there is no hierarchy.
document.querySelector("ul#list")  //    "   "   "   "

document.querySelectorAll("#list .item")[2].style.color="violet";



/* 2. Manipulating HTML elements */
document.querySelector("body button").style.backgroundColor="yellow"   // CSS properties are written in Camel case.




/* 3. Separation of Concerns (Structure vs Style vs Behaviour) */
// just adding or removing class. giving properties on respective files
document.querySelector("h1").classList.add("huge")
document.querySelector("h1").classList.remove("huge")

document.querySelector("h1").classList.toggle("huge")  //adds
document.querySelector("h1").classList.toggle("huge")  //removes



/* 4. Text manipulation */
document.querySelector("h1").innerHTML    //will show inner tags as well 
document.querySelector("h1").textContent   //will show only text content

document.querySelector("h1").innerHTML="<em>Good Bye</em>"



/* 5. Manipulating HTML Element Attributes */
document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.duckduckgo.com");