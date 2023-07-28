// event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    // old syntax: for (let i=0; i<buttons.length; i++){
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "playpause") {
                alert("You clicked play");
                
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            
            }
        });
    }
    // check answer when enter is pressed instead of button
    //document.getElementById("answer-box").addEventListener("keydown", function (event) {
    //    console.log(event.key);
    //    if (event.key === "Enter") {
    //        checkAnswer();
    //    }
    });

    runGame("addition");
});
function play() {
    comsole.log("game running")
}
function pause() {
    console.log("game paused")
}
function stop() {
    console.log("game finished")
}
function anyKeyMode() {
    console.log("AnyKey mode enabled")
}