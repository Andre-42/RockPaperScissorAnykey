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

## Features

The website is useable in all formats and adjusts to the screen size.

The header is made up of the primary headline of the website and the most important buttons, like play, pause, stop, ultimate anykey and a link to the rules section.

The next section holds the actual play feature.
Here you are able to write down your name and play against a computer player. Once you press the play button in the header you are able to play by clicking on the icons that just poped up. You can pause at anytime by pressing the pause button in the header. The ultimate anykey button will ramp up the stacks by allowing the pc player to not just play random but anticipate your next move by learning from your previous behaviour.
If you have played to your hearts content and want to stop, press stop in the header and the website is set back to zero. Meaning you can start fresh.

The next small section holds a small score sheet which tracks your stats while you play. It counts wins and loses as well as how many sets (3 out of 5 wins/loses) you played.

The Next section explains the rules. Here you can also change the keyboard settings for each symbol. Since the anykey button allows for keyboard use addityional to mouse clicks.

At the bottom you will also find a small footer where you can find some links to facebook, LinkedIN and Github. However, only Github actually goes further than the websites homepage.

The footer has a hidden segment where your progress is recoreded during the game in order to run all the functions with as little  global variables as possible.

## Tests

I've tested the code for html, css and javascript.
