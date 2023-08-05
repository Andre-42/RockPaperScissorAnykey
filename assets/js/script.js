// global variables
var drawHistory = ["paper", "scissor", "rock", "lizard", "spock", "wormhole", "anykeybtn"];
var winColor = ["goldenrod","1"];
var loseColor = ["white","0.5"];
var drawColor = ["white","1"];
var ultimateKeyEnabled = false;
var keyListenOn = false;
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
                shakeAgain(lastActive);
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
    // create listener for keybord input
    document.addEventListener("keydown",function (event) {
        console.log(event.key)
        if (ultimateKeyEnabled && keyListenOn) {
            todo = keyInputTranslate(event.key);
            runGame(todo);
        }
    })
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

        keyListenOn = true;
    } else {
        console.log("Error: play-function");
        keyListenOn = false;
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

        keyListenOn = false;
    } else {
        console.log("Error: pause function");
        keyListenOn = false;
    }
}
function stop() {
    console.log("game finished");
    keyListenOn = false;
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
    ultimateKeyEnabled = true;
}
function keyInputTranslate(selectedKey) {
    selectedKey = selectedKey.toLowerCase();
    let activity = "playpause";
    if (selectedKey === "r") {
        activity = "rock";
    } else if (selectedKey === "p") {
        activity = "paper";
    } else if (selectedKey === "s") {
        activity = "scissor";
    } else if (selectedKey === "l") {
        activity = "lizard";
    } else if (selectedKey === "v") {
        activity = "spock";
    } else if (selectedKey === "x") {
        activity = "wormhole";
    } else {
        activity = "anykeybtn";
    }
    return activity;
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

        resultColor(winColor, loseColor);
    } else if (gamescore < 0) {
        let loss = parseInt(document.getElementById('c-played').innerText);
        document.getElementById("c-played").innerHTML = ++loss;
        loss = parseInt(document.getElementById('l-game').innerText);
        document.getElementById("l-game").innerHTML = ++loss;

        resultColor(loseColor, winColor);
    } else {
        let loss = parseInt(document.getElementById('c-played').innerText);
        document.getElementById("c-played").innerHTML = ++loss;

        resultColor(drawColor, drawColor);
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
        let avScore = Math.round((win / sum) * 10000) / 10000;
        document.getElementById("av-score").innerHTML = avScore;
    } else if (cSet >= 3) {
        let win = parseInt(document.getElementById("w-set").innerText);
        document.getElementById("w-set").innerHTML = ++win;
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
        
        let sum = parseInt(document.getElementById("w-set").innerText);
        sum = sum + parseInt(document.getElementById("l-set").innerText);
        let avScore = Math.round((win / sum)*10000)/10000;
        document.getElementById("av-score").innerHTML = avScore;
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
        if (player === "anykeybtn" && playerWins === 1) {
            document.getElementById("showhand-player-img").src = "assets/images/AnyKey_2x2cm_DAA520.png";
        } else {
            document.getElementById("showhand-player-img").src = document.getElementById("show-" + player).src;
        }
        if (playerWins === -1) {
            document.getElementById("showhand-player-img").style.opacity = 0.5;
        } else {
            document.getElementById("showhand-player-img").style.opacity = 1;
        }
        document.getElementById("showhand-player-img").alt = document.getElementById("show-" + player).alt;
        document.getElementById("showhand-player").className = "";
    } else {
        let classIcon = document.getElementById("show-" + player).className;
        document.getElementById("showhand-player").className = classIcon;
        document.getElementById("showhand-player-img").src = "";
        document.getElementById("showhand-player-img").alt = "";
    }
    if (pc === "wormhole" || pc === "anykeybtn") {
        if (pc === "anykeybtn" && playerWins === -1) {
            document.getElementById("showhand-pc-img").src = "assets/images/AnyKey_2x2cm_DAA520.png";
            document.getElementById("showhand-pc-img").style.opacity = 1;
        } else {
            document.getElementById("showhand-pc-img").src = document.getElementById("show-" + pc).src;
            document.getElementById("showhand-pc-img").style.opacity = 1; 
        }
        if (playerWins === 1) {
            document.getElementById("showhand-pc-img").style.opacity = 0.5;
        } else {
            document.getElementById("showhand-pc-img").style.opacity = 1;
        }
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
function resultColor(playerColor,pcColor) {

    document.getElementById("showhand-player").style.backgroundColor = playerColor[0];
    document.getElementById("showhand-player-img").style.backgroundColor = document.getElementById("showhand-player").style.backgroundColor;
    document.getElementById("showhand-player").style.opacity = playerColor[1];
    document.getElementById("showhand-player-img").style.opacity = document.getElementById("showhand-player").style.opacity;

    document.getElementById("showhand-pc").style.backgroundColor = pcColor[0];
    document.getElementById("showhand-pc-img").style.backgroundColor = document.getElementById("showhand-player").style.backgroundColor;
    document.getElementById("showhand-pc").style.opacity = pcColor[1];
    document.getElementById("showhand-pc-img").style.backgroundColor = document.getElementById("showhand-player").style.opacity;
}
function shakeAgain(lastActive) {
    //let checkHand = hoverButton === document.getElementById("lastActive").innerHTML;
    //if (checkHand) {
        document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist fa-shake";
        document.getElementById("showhand-player-img").src = "";
        document.getElementById("showhand-player-img").alt = "";

        document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist fa-shake";
        document.getElementById("showhand-pc-img").src = "";
        document.getElementById("showhand-pc-img").alt = "";
    //}
}