// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(700, 410, Phaser.AUTO, 'game', stateActions);
var score;
var player;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/flappy_superman.png");
    game.load.audio("score","assets/point.ogg");
    game.load.image("pipe", "assets/pipe2-body.png");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("#FF47A3");
    var x = 0;
    var y = 0;
    game.input.onDown.add(clickHandler);
    //game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    //game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    //game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    //game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    //game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);
    game.add.text(460, 350, "'Coding is fun!'", {font:"30px Arial",fill:"#CCCCCC"});
    game.add.sprite(650, 410, "pipe");

    var hole = Math.floor(Math.random() * 5) + 1;


    for(var count = 0; count < hole; count ++)  {
        game.add.sprite(50, 100 * count, "pipe");
    }
    for(var count = hole + 3; count < 10; count ++)  {
        game.add.sprite(50, 60 * count, "pipe");
    }


    for(var count = 0; count < hole; count ++)  {
        game.add.sprite(200, 50 * count, "pipe");
    }
    for(var count = hole + 3; count < 10; count ++)  {
        game.add.sprite(200, 50 * count, "pipe");
    }


    player = game.add.sprite(x, y, "playerImg");

    //for(var count = 10; count >= 5; count--) {
      //  game.add.text(20, 20 * count, "Clap");
    //}

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}

function clickHandler(event){
    player.x = event.x;
    player.y = event.y;
}

function moveRight(){
    player.x+=20;

}

function moveLeft(){
    player.x+=40;

}

function moveUp(){
    player.y-=10;

}

function moveDown(){
    player.y+=55;

}