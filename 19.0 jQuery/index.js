//$("h1").addClass("big-title margin-50");

//$("h1").removeClass("big-title");

$("h1").hasClass("margin-50");

$("h1").text("Bye");

$("button").text("Don't Click Me");

$("button").html("<em>Hey</em>")

console.log($("img").attr("src"));

$("a").attr("href", "https://yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

// for (var i=0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>"); //after, prepend, append

// $("button").remove();

// $("h1").hide(); show(), toggle(), fadeIn(), fadeOut(), fadeToggle(), slideUp(), slideDown(), slideToggle()

$("button").on("click", function() {
    $("h1").animate({opacity: 0.5});
});

// slideUp().slideDown().animate({opacity: 0.5});