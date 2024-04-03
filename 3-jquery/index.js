// 1. Selecting Elements in JQuery

document.querySelector("h1");
document.querySelectorAll("h1"); 
// same for both
$("h1");



// 2. Manipulating styles

// $("h1").css("color","blue");  // Setting if 2 prop.
$("h1").css("color");         // Getting if 1 prop.
console.log($("h1").css("font-size"));

// Manipulating styles from JQuery/JS is not good practice and doesn't look good either.
// So, we just add/remove class created in css file acc. to our requirement.
// i.e separating behaviour from style.

$("h1").addClass("theme");                 // Adding Class
$("h1").removeClass("theme");              // Removing Class
$("body").addClass("margin-50 theme");     // Adding multiple classes
console.log($("body").hasClass("theme"));  // Check has class



// 3. Manipulting Text & innerHTML
$("button").text("Hey");
$("button").html("<em>Submit</em>");

$("button.sec").text("bye");  // Same [No Hiear.]
$("body .sec").text("bye");   // Same [Hieararchy]



// 4. Manipulating Attributes
console.log($("img").attr("src"));            // Shows src of img
console.log($("button").attr("class"));       // Shows class of button
$("a").attr("href","https://www.bing.com");   // Changing link




// 5. Adding Event Listeners 
// Using Pure JS
for (var i=0;i<6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color="green";
    });
}

// Above code using JQuery
$("button").click(function(){      // No need for loop as it selects all Button tags
    $("h1").css("color","orange");
});



$("input").keypress(function(event){
    $("h1").text(event.key);
});

// addEventListener = on [JQuery]



// 6. Adding or Removing Elements
$("h1").before("<button>Before</button>");    // Before h1 tag
$("h1").after("<button>After</button>");      // After h1 tag

$("h1").prepend("<button>Prepend</button>");  // Before content of h1
$("h1").append("<button>Append</button>");    // After content of h1