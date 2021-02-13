var allButtons = document.querySelectorAll(".drum");

for (i=0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        checkForKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
};

function checkForKey (key) {
    switch (key) {
        case "w":
            var wDrum = new Audio("./sounds/tom-1.mp3");
            wDrum.play();
            break;

        case "a":
            var aDrum = new Audio("./sounds/tom-2.mp3");
            aDrum.play();
            break;
        
        case "s":
            var sDrum = new Audio("./sounds/tom-3.mp3");
            sDrum.play();
            break;

        case "d":
            var dDrum = new Audio("./sounds/tom-4.mp3");
            dDrum.play();
            break;            
            
        case "j":
            var jDrum = new Audio("./sounds/crash.mp3");
            jDrum.play();
            break;

        case "k":
            var kDrum = new Audio("./sounds/kick-bass.mp3");
            kDrum.play();
            break;
                
        case "l":
            var lDrum = new Audio("./sounds/snare.mp3");
            lDrum.play();
            break;

        default:
            break;
    }
}

document.addEventListener("keydown", function (event) {
    checkForKey(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout (function () {
        activeButton.classList.remove("pressed");
    }, 250);
}