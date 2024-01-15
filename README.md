![Title image](assets/documentation/am-i-responsive-01.png)

## Rock, Paper, Scissors ... ANY key

Welcome,

Visit the deployed site: [Rock, Paper, Scissor, Anykey](https://andre-42.github.io/RockPaperScissorAnykey/)

## Contents

* [General Intent](#general-intent)
    * [Concept](#concept)
    * [Usage](#usage)
* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
    * [Wireframes](#wireframe)
    * [HTML And CSS Features](#features)
    * [Accessibility](#accessibility)
* [Deployment And Local Development](#deployment--local-development)
    * [Deployment](#deployment)
    * [Local Development](#local-development)
* [Testing](#testing)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)

## General Intent

This is my second project at the code institute. The core of this project is the java script functionalization of a front-end website. For this reason I chose the game "rock, paper, scissors, spock". However I put a little twist on it and added the "any key" move. As pretty much everybody knows the phrase: "Press any key to continue."

### Concept

- **Pass your time:** This game is just a little gadget to get distracted, have a few minutes for yourself and than you can push on in your endeavors of the day.

- **Informative Content:** There is not much informative content necessary for the game. Once you play, your score is tracted and you can see how you do. Of course you can inform yourself about the rules of the game in a seperate section of the site or check my contact links if you feel the need to learn more about me or get in touch.

- **Visual Presentation:** I use visual aids, images and well-structured content with a simplistic design. The website is designed with clarity and user-friendliness in mind.

- **Accessibility:** This is a pass time endevour. So it is accessibile to everyone and in particular to any key users.

- **Future Intent:** This website is intended to give a place to get a few moments to yourself, recoupe by playing a simple game and than power on. Thus, future developments will likely add additional game play features to diversify gameplay options.
This can include features like randomized button configuration (placement and size) or moving buttons to make the game more interesting for mobile devices.

### Usage

1. Visit the [Rock, Paper, Scissor, Anykey website](https://andre-42.github.io/RockPaperScissorAnykey/).
2. Press play and off you go.
3. Pause your game or reset it using the pause and stop button.
4. Read the rules if you are not familiar already.
4. Contact us if you have a cool idea to improve the game.

## Design

### Color Scheme

Back in the 90s, keyboards were pretty dull. I wanted to capture that vibe in the appearacne of the game. So I chose a relatively simple and contrasting dull color scheme. The palette was created at [Canva] (https://www.canva.com/colors/color-wheel/).

![Color palette](assets/documentation/color-palette.png)

* I have used #fffaf0 and #2f4f4f as the main background colors for alternating sections.
* They are slightly transparent to allow the background image to show through for some decorative effect.
![background image](assets/images/rock-paper-scissors-2-1241086.jpg)
* Writing is done in contrasting colors to the background color.
* Fallback colors in the body are white and black.

### Typography

Standard build in fonts Verdana and Times New Roman as backup were used.

### Imagery

Icons for buttons are sourced from [Fontawesome](https://fontawesome.com/) when freely available. The additional wormhole icon was sourced from [Flaticon](https://www.flaticon.com/free-icons/wormhole) and the ANY key icon was made in powerpoint and saved as png to allow for transparency when necessary.
![ANYkey](assets/images/anykey_2x2cm_2f4f4f.png)
Variations of it were created to be used as favicon or winning icon template (gold filled inner space).
The background image was sourced from [Freeimage](https://www.freeimages.com/photo/rock-paper-scissors-2-1241086).

### Features

The website is comprised of a home page that includes all features.

The page is responsive and has:

* A favicon in the browser tab.
![Favicon](assets/favicon/favicon-32x32.png)

#### Header
* The main title, a secondary title and menu buttons are located in the header. 
* The navbar is located under the title. The cursor changes when hovering over a button/link.
![Page Change](assets/documentation/curserresponce-button.mp4)
Depending on the screen orientation and size, it will switch between a 2x2 and a 1x4 button arangement. 
![button configuration depends on screen size and orientation](assets/documentation/responsive-arrangement.png)
The same is true for move buttons in the game section.
* The play button activates the game and reveals the move buttons in the gaming area. Once a game is active the editing icon next to the player icon is hidden. Additionally the icon of the play button changes to pause. 
* Once pause is pressed the move buttons are hidden again and the editing icon next to the player is available again.
* The stop button resets the score board below the gaming area.
* The rules button will take you to the rules section of the website.

#### Gaming Section
* The section is organized into 3 areas:
    - pc player icons
    - player icons
    - control panel
* The pc and player icon sections are made up of 2 fontawesome icons each. One representing the pc which is Mr. Smith and the player Mr. Anderson by default.
* While the game is paused it is possible to change the players name by clicking on the edit icon next to the player. This will reveal a input box that the user can write into to change the name. After clicking on the floppy disc icon the name changes are registered and the input box is hidden again. This feature is hidden when actively playing.
* Each player has a closed hand in front and to the left of themself as a representation of the hand for playing rock paper scissors. While the mouse is hovering over the game section these hands begin to shake as if they are ready for play. This feature is hover based and thusfar I haven't been able think of a good solution to make this feature responsive on touch displays without a mouse.
* In play mode the hands next to the player will change to their selected moves once you choose one for yourself. The winning move will be highlighted in gold while the loser will have a white background and become slightly transparent.
* The control panel is by default hidden when the game is stopped or in pause mode.
* Once you press the play button in the header you are able to play by clicking on the icons that just poped up in the control panel section below the player icons. You can pause at anytime by pressing the pause button in the header.
* Clicking on any of the available choices will lock your selection after which the computer will choose a move at random from the moves that are available. After both selections are made you will see the winner as described before. If a draw is reached both hands next to the player will have a white background and no transparency.
* Once you start moving the mouse away from the selection you have made, the player hands will switch back to shaking fists in order to demonstrate that they are ready for the next round. Again this feature only really works when having a hoverable mouse as touch screens can't track the finger once it looses contact with the device.
* The ultimate anykey button will ramp up the stacks by allowing the pc player to not just play random but anticipate your next move by learning from your previous behaviour. In normal play the pc chooses randomly from the available selection of moves. These are defined in a JS list variable. When enabling the ultimate anykey button your last selection is added to the available movements list for the pc. This list will save the standard moveselection and one optional winning move for your last 100 moves if you play that long. Thus, if you play in this mode the randomization of the pc player will be biased towards the winning moves of your selections. However if you are fast enough (<0.5s hovering on your selection befoe selecting it>) the pc will not track your movement. 

#### Score Sheet
The score sheet is a vital part of the gaming function. 
* The primary function is the one you see on the website, which is showing you your results in the game.
* The game is scored as 3 out of 5 games. Thus it tracks your game in such increments of max. 5 games per set. However if you win the first 3 rounds in one 1 it will see that set concluded and start the next set of games, since the opponent would not be able to win that set if you already lead 3 to 0 out of 5.
* This is why you see an output for won sets and games, lost sets and games, your current wins out of a set and your average score per set.

#### Rules Section
The rules section is what it says it is. 
* Here you can find the rules of the game i.e., what move wins against which other moves. As you could play with a keyboard in anykey mode the game checks also for keyboard inputs during the active anykey game as responses to movement selection.
* Here you can define the input key for the available movements by editing the input fields after clicking the edit icon.

#### Footer
The footer has a hidden section as well as the affiliated links to my facebook, github and linked in which open in a seperate tab.
* The hidden section is responsible for movement tracking. This is where JS stores how often you have used which movement by writing your movement counts into a table. Additionally it saves your last active movement, and the duration it was active for. This information is processed during the pc player move selection to bias the random move selection if all criteria are met.

#### JS functions running website features

In order to run this game a lot of minor an major functions need to be coordinated in JS.

## Tests

I've tested the code for html, css and javascript.
