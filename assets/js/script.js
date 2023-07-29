// global variables
var drawHistory = ["paper","scissor","rock","lizard","spock","wormhole","anykeybtn"];
// event listeners
document.addEventListener("DOMContentLoaded", function () {
    
    let buttons = document.getElementsByTagName("button");
    // old syntax: for (let i=0; i<buttons.length; i++){
    for (let button of buttons) {
        // click check
        button.addEventListener("click", function () {
            //if (this.getAttribute("data-type") === "playpause") {
            //    alert("You clicked play");
            //    runGame();
            //} else {
            //    let gameType = this.getAttribute("data-type");
            //    alert(`You clicked ${gameType}`);
            //}
            let todo = this.getAttribute("data-type");
            console.log(todo);
            runGame(todo);
        });

        // hover check
        button.addEventListener("mouseenter", function() {
            let lastActive = this.getAttribute("data-type");
            console.log("active hover" + lastActive);
            console.log(((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")));
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")) {
            } else {
                console.log("register time")
                countTime(lastActive);
            } 
        })
        button.addEventListener("mouseleave", function () {
            let lastActive = this.getAttribute("data-type");
            console.log("active hover" + lastActive);
            console.log(((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")));
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")) {
            } else {
                console.log("register time");
                endTime(lastActive);
            }
        })
    }
    // check answer when enter is pressed instead of button
    //document.getElementById("answer-box").addEventListener("keydown", function (event) {
    //    console.log(event.key);
    //    if (event.key === "Enter") {
    //        checkAnswer();
    //    }
    //});

    //runGame();
});
function runGame(todo) {
    tagfunc = document.getElementById(todo).innerText;
    if (tagfunc === "play") {
        play();
    } else if (tagfunc === "pause") {
        pause();
    } else if (tagfunc === "stop playing") {
        stop();
    } else if (tagfunc === "rules") {
        console.log("reading the rules");
    } else {
        console.log("played " + todo);
        scoreHand(todo);
    }
}
function play() {
    console.log("game running");
    
    currentText = document.getElementById("playicon").className;
    console.log(currentText);
    if (currentText === "fa-solid fa-circle-play") {
        document.getElementById("playicon").className = "fa-solid fa-pause";
        document.getElementById("playpause").innerText = "pause";
        document.getElementById("hideplayer").style.display = "none";
        document.getElementById("activeplayer").style.display = "inline-block";
    } else {
        console.log("Error: play-function")
    }
}
function pause() {
    console.log("game paused")

    currentText = document.getElementById("playicon").className;
    console.log(currentText);
    if (currentText === "fa-solid fa-circle-play") {
        document.getElementById("playicon").className = "fa-solid fa-pause";
        document.getElementById("playpause").innerText = "pause";
        document.getElementById("hideplayer").style.display = "inline-block";
        document.getElementById("activeplayer").style.display = "none";
    } else {
        console.log("Error: pause function");
    }
}
function stop() {
    console.log("game finished")
    // reset play button
    document.getElementById("playicon").className = "fa-solid fa-circle-play";
    document.getElementById("playpause").innerText = "play";
    document.getElementById("hideplayer").style.display = "inline-block";
    document.getElementById("activeplayer").style.display = "none";
}
function anyKeyMode() {
    console.log("AnyKey mode enabled")
}
function countTime(hoverButton) {
    let checkHand = hoverButton === document.getElementById("lastActive").innerHTML;
    document.getElementById("lastActive").innerHTML = hoverButton;
    document.getElementById("startTime").innerHTML = Date.now();
    if (!checkHand) {
        document.getElementById("endTime").innerHTML = NaN;
    }
}
function endTime(hoverButton) {
    let checkHand = hoverButton === document.getElementById("lastActive").innerHTML;
    if (checkHand) {
        document.getElementById("endTime").innerHTML = Date.now() - document.getElementById("startTime").innerHTML;
    }
    console.log(checkHand);
}
function scoreHand(player) {
    ++document.getElementById(player).innerHTML;
    endTime(player);
    let timeTaken = document.getElementById("endTime").innerHTML;
    let pc = pcHand(timeTaken);
    // check for winner
    let gamescore = findWinner(player,pc);

    if (gamescore>0) {
        ++document.getElementById("c-win").innerHTML;
        ++document.getElementById("c-played").innerHTML;
        ++document.getElementById("w-games").innerHTML;
    } else if (gamescore<0) {
        ++document.getElementById("c-played").innerHTML;
        ++document.getElementById("l-games").innerHTML;
    } else {
        ++document.getElementById("c-played").innerHTML;
    }
    let cSet = document.getElementById("c-win").innerHTML;
    let cGame = document.getElementById("c-played").innerHTML;
    let cDiff = cGame-cSet;
    if (cDiff>=3) {
        ++document.getElementById("l-set").innerHTML;
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
    } else if (cSet>=3) {
        ++document.getElementById("w-set").innerHTML;
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
    } else if (cGame == 5) {
        console.log("5 games found.")
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
    } else {
        console.log("undefined score condition...")
    }
}
function pcHand(timeTaken) {
    let handWeight = [document.getElementById("paper").innerHTML,
        document.getElementById("scissor").innerHTML,
        document.getElementById("rock").innerHTML,
        document.getElementById("lizard").innerHTML,
        document.getElementById("spock").innerHTML,
        document.getElementById("wormhole").innerHTML,
        document.getElementById("anykeybtn").innerHTML];
    console.log(handWeight);
    let drawOptions = drawHistory;
    let pcHandRand = Math.ceil(Math.random()*drawOptions.length);
    let draw = drawOptions[pcHand];
    return draw;
}
function findWinner(player, pc) {
    let playerStrength = document.getElementsByClassName(player + "-win").id;
    let playerWins = 0;
    for (let strength of playerStrength) {
        if (strength === pc) {
            playerWins = 1;
        }
    }

    let pcStrength = document.getElementsByClassName(pc + "-win").id;
    let pcWins = 0;
    for (let strength of pcStrength) {
        if (strength === player) {
            pcWins = 1;
        }
    }
    scorePlayer = playerWins - pcWins;
    return scorePlayer;
}