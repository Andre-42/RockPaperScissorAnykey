// global variables
var drawHistory = ["rock", "paper", "scissor", "lizard", "spock", "wormhole", "anykeybtn"];
var keyName = ["rock", "paper", "scissor", "lizard", "spock", "wormhole", "anykeybtn"];
var keyId = ["r", "p", "s", "l", "v", "x"];
var winColor = ["goldenrod", "1"];
var loseColor = ["white", "0.5"];
var drawColor = ["white", "1"];
var ultimateKeyEnabled = false;
var keyListenOn = false;

// event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        // click check
        button.addEventListener("click", function () {
            let todo = this.getAttribute("data-type");
            runGame(todo);
        });
        // hover check
        button.addEventListener("mouseenter", function () {
            let lastActive = this.getAttribute("data-type");
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules") || (lastActive === "playerid") || (lastActive === "commit-key")) {
            } else {
                countTime(lastActive);
            }
        });
        button.addEventListener("mouseleave", function () {
            let lastActive = this.getAttribute("data-type");
            if ((lastActive === "playpause") || (lastActive === "stop") || (lastActive === "anykey") || (lastActive === "rules") || (lastActive === "playerid") || (lastActive === "commit-key")) {
            } else {
                endTime(lastActive);
                shakeAgain(lastActive);
            }
        });
    }
    // create listener for keybord input
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let findInputBox = document.getElementById(event.target.id);
            commitInput(findInputBox);
        } else if (ultimateKeyEnabled && keyListenOn) {
            todo = keyInputTranslate(event.key);
            runGame(todo);
        }
    });
});
/**
 * The main game function, called when the player starts playing. This function controls the play mode asignments
 */
function runGame(todo) {
    tagfunc = document.getElementById(todo).innerText;
    if (tagfunc === "play") {
        play();
    } else if (tagfunc === "pause") {
        pause();
    } else if (tagfunc === "stop playing") {
        stop();
    } else if (tagfunc === "ultimate") {
        anyKeyMode();
    } else if (tagfunc === "rules") {
        console.log("reading the rules");
    } else if (todo === "playerid") {
        playerId();
    } else {
        // players hand selection: console.log("played " + todo);
        scoreHand(todo);
    }
}
/**
 * This function changes the play pause button design.
 */
function play() {
    currentText = document.getElementById("playicon").className;
    if (currentText === "fa-solid fa-circle-play") {
        // change button to pause mode availability
        document.getElementById("playicon").className = "fa-solid fa-pause";
        document.getElementById("playpause").innerText = "pause";
        document.getElementById("hideplayer").style.display = "none";
        document.getElementById("activeplayer").style.display = "inline-block";
        // shaking hands while player is idle
        document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist fa-shake";
        document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist fa-shake";
        // listen for keyboard input enabled
        keyListenOn = true;
    } else {
        // console.log("Error: play-function");
        keyListenOn = false;
    }
}
/**
 * This function provides the reverse action to play()
 */
function pause() {
    currentText = document.getElementById("playicon").className;
    if (currentText === "fa-solid fa-pause") {
        document.getElementById("playicon").className = "fa-solid fa-circle-play";
        document.getElementById("playpause").innerText = "play";
        document.getElementById("hideplayer").style.display = "inline-block";
        document.getElementById("activeplayer").style.display = "none";
        // shaking hands become idle
        document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist";
        document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist";
        // listener for keyboard input is shut down
        keyListenOn = false;
    } else {
        // console.log("Error: pause function");
        keyListenOn = false;
    }
}
/**
 * The stop function stops the game and resets the counter
 */
function stop() {
    console.log("game finished");
    keyListenOn = false;
    // reset play button
    document.getElementById("playicon").className = "fa-solid fa-circle-play";
    document.getElementById("playpause").innerText = "play";
    document.getElementById("hideplayer").style.display = "inline-block";
    document.getElementById("activeplayer").style.display = "none";
    // reset scoreboard
    document.getElementById("c-win").innerHTML = 0;
    document.getElementById("c-played").innerHTML = 0;
    document.getElementById("w-game").innerHTML = 0;
    document.getElementById("l-game").innerHTML = 0;
    document.getElementById("w-set").innerHTML = 0;
    document.getElementById("l-set").innerHTML = 0;
    // shaking hands become idle
    document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist";
    document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist";
}
/**
* activation of the anykef tracking feature
**/
function anyKeyMode() {
    if (ultimateKeyEnabled) {
        ultimateKeyEnabled = false;
        document.getElementsByClassName("btn btn-anykey")[0].style.backgroundColor = "floralWhite";
        
    } else {
        ultimateKeyEnabled = true;
        document.getElementsByClassName("btn btn-anykey")[0].style.backgroundColor = "cadetBlue";
    }
}
/**
* This function translates the user input by keyboard as defined in the rules section to the corresponding hand signals
**/
function keyInputTranslate(selectedKey) {
    selectedKey = selectedKey.toLowerCase();
    let activity = "playpause";
    if (selectedKey === keyId[0]) {
        activity = "rock";
    } else if (selectedKey === keyId[1]) {
        activity = "paper";
    } else if (selectedKey === keyId[2]) {
        activity = "scissor";
    } else if (selectedKey === keyId[3]) {
        activity = "lizard";
    } else if (selectedKey === keyId[4]) {
        activity = "spock";
    } else if (selectedKey === keyId[5]) {
        activity = "wormhole";
    } else {
        activity = "anykeybtn";
    }
    console.log(activity)
    return activity;
}
/**
* This function allows keyboard adjustments within rules section
**/
function commitInput(idTag) {
    changedItem = idTag.value;
    let selectedInput = NaN;
    if (idTag.id === "input-rock-key") {
        selectedInput = 0;
    } else if (idTag.id === "input-paper-key") {
        selectedInput = 1;
    } else if (idTag.id === "input-scissor-key") {
        selectedInput = 2;
    } else if (idTag.id === "input-lizard-key") {
        selectedInput = 3;
    } else if (idTag.id === "input-spock-key") {
        selectedInput = 4;
    } else if (idTag.id === "input-wormhole-key") {
        selectedInput = 5;
    }
    if (changedItem.length === 0 || changedItem.length > 1) {
        document.getElementById(idTag.id).value = keyId[selectedInput];
    } else {
        let checkList = ["input-rock-key",
            "input-paper-key",
            "input-scissor-key",
            "input-lizard-key",
            "input-spock-key",
            "input-wormhole-key"];
        for (let keycheck of checkList) {
            if (!(idTag.id === keycheck)) {
                let valcheck = document.getElementById(keycheck).value;
                if (valcheck === changedItem) {
                    document.getElementById(keycheck).value = keyId[selectedInput];
                }
            }
        }
        let i = 0;
        for (let keyset of checkList) {
            keyId[i++] = document.getElementById(keyset).value;
        }
    }
}
/**
* Changes the name tag assembly for the player between edit- and display-mode
**/
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
/**
* checks the new name. If it is empty is not changed.
**/
function changePlayerName() {
    let newName = document.getElementById('inputTextField').value;
    let oldName = document.getElementById('playerid').innerText;
    if (!((oldName === newName) || (newName.length == 0))) {
        document.getElementById('playerid').innerText = newName;
    }
}
// game relevant functions
/**
* This function writes the current hover time into the html on an invisible field
**/
function countTime(hoverButton) {
    let checkHand = hoverButton === document.getElementById("lastActive").innerHTML;
    document.getElementById("lastActive").innerHTML = hoverButton;
    document.getElementById("startTime").innerHTML = Date.now();
    if (!checkHand) {
        document.getElementById("endTime").innerHTML = NaN;
    }
}
/**
* This function records the exit from play relevant buttons
**/
function endTime(hoverButton) {
    let checkHand = hoverButton === document.getElementById("lastActive").innerHTML;
    if (checkHand) {
        document.getElementById("endTime").innerHTML = Date.now() - document.getElementById("startTime").innerHTML;
    }
    console.log(checkHand);
}
/**
* function regulates the win or lose execution
**/
function scoreHand(player) {
    // get player score
    let score = parseInt(document.getElementById(player + 'Num').innerText); // reads string and makes integer
    document.getElementById(player + 'Num').textContent = ++score;
    endTime(player);
    // pc choice comes next
    let timeTaken = document.getElementById("endTime").innerHTML;
    let pc = pcHand(timeTaken);
    // console.log("pc:" + pc + " vs player:" + player);
    // check for winner
    let gamescore = findWinner(player, pc);
    // visual changes to the game area
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
    // Set score
    let cDiff = cGame - cSet;
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
        let avScore = Math.round((win / sum) * 10000) / 10000;
        document.getElementById("av-score").innerHTML = avScore;
    } else if (cGame == 5) {
        document.getElementById("c-played").innerHTML = 0;
        document.getElementById("c-win").innerHTML = 0;
    }
}
/**
* PC decision function
**/
function pcHand(timeTaken) {
    // if PC is listening in
    let bestChance;
    if (ultimateKeyEnabled) {
        let lastSelected = document.getElementById("lastActive").innerHTML;
        let dontChoose = document.getElementsByClassName(lastSelected + "-win");
        let sumChance = [lastSelected];
        // select winning moves to user input
        for (let looseItem of dontChoose) {
            for (let handOption of keyName) {
                if (!(looseItem.id === handOption)) {
                    sumChance.push(handOption);
                }
            }
        }
        // random choice of one.
        let sumChanceId = Math.ceil(Math.random() * sumChance.length) - 1;
        bestChance = sumChance[sumChanceId];
    }
    let drawOptions = drawHistory;
    // time dependant decision if the user is to slow the pc will find out and update its choice
    if (timeTaken > 0.5) {
        drawOptions.push(bestChance[0]);
    }
    // random selector for pc
    let pcHandRand = Math.ceil(Math.random() * drawOptions.length) - 1;
    let draw = drawOptions[pcHandRand];
    // user reaction is remembered for the next moves
    if (ultimateKeyEnabled) {
        drawHistory.push(bestChance[0]);
        if (drawHistory.length>=100) {
            drawHistory = keyName.push(drawHistory.slice(-94));
        }
    }
    console.log(drawHistory);
    return draw;
}
/**
* this function will show the results of the match after hand selection
**/
function findWinner(player, pc) {
    let playerStrength = document.getElementsByClassName(player + "-win");
    let playerWins = -1;
    if (player === pc) {
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
/**
* background color change of result icon
**/
function resultColor(playerColor, pcColor) {
    document.getElementById("showhand-player").style.backgroundColor = playerColor[0];
    document.getElementById("showhand-player-img").style.backgroundColor = document.getElementById("showhand-player").style.backgroundColor;
    document.getElementById("showhand-player").style.opacity = playerColor[1];
    document.getElementById("showhand-player-img").style.opacity = document.getElementById("showhand-player").style.opacity;
    document.getElementById("showhand-pc").style.backgroundColor = pcColor[0];
    document.getElementById("showhand-pc-img").style.backgroundColor = document.getElementById("showhand-player").style.backgroundColor;
    document.getElementById("showhand-pc").style.opacity = pcColor[1];
    document.getElementById("showhand-pc-img").style.backgroundColor = document.getElementById("showhand-player").style.opacity;
}
/**
* shake response during gameplay
**/
function shakeAgain(lastActive) {
    document.getElementById("showhand-player").className = "fa-regular fa-hand-back-fist fa-shake";
    document.getElementById("showhand-player-img").src = "";
    document.getElementById("showhand-player-img").alt = "";
    document.getElementById("showhand-pc").className = "fa-regular fa-hand-back-fist fa-shake";
    document.getElementById("showhand-pc-img").src = "";
    document.getElementById("showhand-pc-img").alt = "";
}
