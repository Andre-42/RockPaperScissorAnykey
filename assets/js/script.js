// global variables
var drawHistory = ["paper", "scissor", "rock", "lizard", "spock", "wormhole", "anykeybtn"];
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
        button.addEventListener("mouseenter", function () {
            let lastActive = this.getAttribute("data-type");
            console.log("active hover" + lastActive);
            console.log(((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")));
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules") || (lastActive === "playerid")) {
            } else {
                console.log("register time");
                countTime(lastActive);
            }
        });
        button.addEventListener("mouseleave", function () {
            let lastActive = this.getAttribute("data-type");
            console.log("active hover" + lastActive);
            console.log(((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules")));
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules") || (lastActive === "playerid")) {
            } else {
                console.log("register time");
                endTime(lastActive);
            }
        });
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
    console.log(todo);
    tagfunc = document.getElementById(todo).innerText;
    if (tagfunc === "play") {
        play();
    } else if (tagfunc === "pause") {
        pause();
    } else if (tagfunc === "stop playing") {
        stop();
    } else if (tagfunc === "ultimate") {

    } else if (tagfunc === "rules") {
        console.log("reading the rules");
    } else if (todo === "playerid") {
        playerId();
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

        document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist fa-shake";
        document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist fa-shake";
    } else {
        console.log("Error: play-function");
    }
}
function pause() {
    console.log("game paused");

    currentText = document.getElementById("playicon").className;
    console.log(currentText);
    if (currentText === "fa-solid fa-pause") {
        document.getElementById("playicon").className = "fa-solid fa-circle-play";
        document.getElementById("playpause").innerText = "play";
        document.getElementById("hideplayer").style.display = "inline-block";
        document.getElementById("activeplayer").style.display = "none";

        document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist";
        document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist";
    } else {
        console.log("Error: pause function");
    }
}
function stop() {
    console.log("game finished");
    // reset play button
    document.getElementById("playicon").className = "fa-solid fa-circle-play";
    document.getElementById("playpause").innerText = "play";
    document.getElementById("hideplayer").style.display = "inline-block";
    document.getElementById("activeplayer").style.display = "none";

    document.getElementById("c-win").innerHTML = 0;
    document.getElementById("c-played").innerHTML = 0;
    document.getElementById("w-game").innerHTML = 0;
    document.getElementById("l-game").innerHTML = 0;
    document.getElementById("w-set").innerHTML = 0;
    document.getElementById("l-set").innerHTML = 0;

    document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist";
    document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist";
}
function anyKeyMode() {
    console.log("AnyKey mode enabled");
}
function playerId() {
    getIcon = document.getElementById("player-name-save").className;
    if (getIcon === "fa-solid fa-pen-to-square") {
        document.getElementById("inputTextField").style.display = "inline-block";
        document.getElementById("playerid").style.diaplay = "none";
        document.getElementById("player-name-save").className = "fa-solid fa-floppy-disk";
    } else {
        document.getElementById("inputTextField").style.display = "none";
        document.getElementById("playerid").style.diaplay = "inline-block";
        document.getElementById("player-name-save").className = "fa-solid fa-pen-to-square";
        changePlayerName();
    }
}
function changePlayerName() {
    let newName = document.getElementById('inputTextField').value;
    let oldName = document.getElementById('playerid').innerText;
    if (!((oldName === newName) || (newName.length == 0))) {
        document.getElementById('playerid').innerText = newName;
    }
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
    let score = parseInt(document.getElementById(player + 'Num').innerText); // reads string and makes integer
    document.getElementById(player + 'Num').textContent = ++score;
    endTime(player);
    let timeTaken = document.getElementById("endTime").innerHTML;
    let pc = pcHand(timeTaken);
    console.log("pc:"+pc+" vs player:"+player)
    // check for winner
    let gamescore = findWinner(player, pc);
    console.log(gamescore);

    if (gamescore > 0) {
        let win = parseInt(document.getElementById('c-win').innerText);
        document.getElementById("c-win").innerHTML = ++win;
        win = parseInt(document.getElementById('c-played').innerText);
        document.getElementById("c-played").innerHTML = ++win;
        win = parseInt(document.getElementById('w-game').innerText);
        document.getElementById("w-game").innerHTML = ++win;
    } else if (gamescore < 0) {
        let loss = parseInt(document.getElementById('c-played').innerText);
        document.getElementById("c-played").innerHTML = ++loss;
        loss = parseInt(document.getElementById('l-game').innerText);
        document.getElementById("l-game").innerHTML = ++loss;
    } else {
        let loss = parseInt(document.getElementById('c-played').innerText);
        document.getElementById("c-played").innerHTML = ++loss;
    }
    let cSet = parseInt(document.getElementById("c-win").innerText);
    let cGame = parseInt(document.getElementById("c-played").innerText);
    let cDiff = cGame - cSet;
    console.log("diff"+cDiff);
    if (cDiff >= 3) {
        let loss = parseInt(document.getElementById("l-set").innerText);
        document.getElementById("l-set").innerHTML = ++loss;
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
        
        let sum = parseInt(document.getElementById("w-set").innerText);
        let win = parseInt(document.getElementById("w-set").innerText); 
        sum = sum + parseInt(document.getElementById("l-set").innerText);
        document.getElementById("av-score").innerHTML = win / sum;
    } else if (cSet >= 3) {
        let win = parseInt(document.getElementById("w-set").innerText);
        document.getElementById("w-set").innerHTML = ++win;
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
        
        let sum = parseInt(document.getElementById("w-set").innerText);
        sum = sum + parseInt(document.getElementById("l-set").innerText);
        document.getElementById("av-score").innerHTML = win/sum;
    } else if (cGame == 5) {
        console.log("5 games found.");
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
    } else {
        console.log("undefined score condition...");
    }
}
function pcHand(timeTaken) {
    
    let drawOptions = drawHistory;
    let pcHandRand = Math.ceil(Math.random() * drawOptions.length)-1;
    console.log(pcHandRand)
    let draw = drawOptions[pcHandRand];
    return draw;
}
function findWinner(player, pc) {
    let playerStrength = document.getElementsByClassName(player + "-win");
    let playerWins = -1;
    if (player===pc) {
        playerWins = 0;
    }
    for (let strength of playerStrength) {
        if (strength.id === pc) {
            playerWins = 1;
        }
    }
    if (player === "wormhole" || player === "anykeybtn") {
        document.getElementById("showhand-player-img").src = document.getElementById("show-" + player).src;
        document.getElementById("showhand-player-img").alt = document.getElementById("show-" + player).alt;
        document.getElementById("showhand-player").className = "";
    } else {
        let classIcon = document.getElementById("show-" + player).className;
        document.getElementById("showhand-player").className = classIcon;
        document.getElementById("showhand-player-img").src = "";
        document.getElementById("showhand-player-img").alt = "";
    }
    if (pc === "wormhole" || pc === "anykeybtn") {
        document.getElementById("showhand-pc-img").src = document.getElementById("show-" + pc).src;
        document.getElementById("showhand-pc-img").alt = document.getElementById("show-" + pc).alt;
        document.getElementById("showhand-pc").className = "";
        } else {
        document.getElementById("showhand-pc").className = document.getElementById("show-" + pc).className;
        document.getElementById("showhand-pc-img").src = "";
        document.getElementById("showhand-pc-img").alt = "";
    }    
    
    scorePlayer = playerWins;
    return scorePlayer;
}