var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function () {
            var buttonInnerHTML = this.innerHTML;           

            makeSound(buttonInnerHTML);

            buttonAnimation(buttonInnerHTML);
        }
    );
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}); 

function makeSound(key) {
    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            kickBass.play();
            break;
        case "l":
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation (key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}