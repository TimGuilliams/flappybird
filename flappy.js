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
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("#FF47A3");
    var x = 0;
    var y = 0;
    player = game.add.sprite(x, y, "playerImg");
    game.input.onDown.add(clickHandler);
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
