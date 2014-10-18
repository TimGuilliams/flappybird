// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(700, 410, Phaser.AUTO, 'game', stateActions);
var score = 0;
var player;
var label_score;

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
    game.physics.startSystem(Phaser.Physics.ARCADE);
    var game_width = 700;
    var game_height = 410;

    pipes = game.add.group();


    game.stage.setBackgroundColor("#FF47A3");
    var x = 0;
    var y = 0;
    //game.input.onDown.add(clickHandler);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    //game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    //game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    //game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    //game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);

    game.add.sprite(650, 410, "pipe");

    //player = game.add.sprite(x, y, "playerImg");

    player = game.add.sprite(35, game_height/2, "playerImg")
    player.anchor.setTo (0.5, 0.5);
    game.physics.arcade.enable(player);
    //player.checkWorldBounds = True;


    game.physics.arcade.enable(player);
    player.body.gravity.y=400;
    player.body.velocity.y=400;

    label_score = game.add.text(20, 20, "0");

    game.add.text(420, 350, "We are AMAZING!!", {font:"30px Arial",fill:"#CCCCCC"});

    var pipe_interval = 2;
    game.time.events.loop(pipe_interval * Phaser.Timer.SECOND, generate_pipes);



    //for(var count = 10; count >= 5; count--) {
      //  game.add.text(20, 20 * count, "Clap");
    //}

}

 /*/ This function updates the scene. It is called for every new frame.
 /*/
function update() {
    game.physics.arcade.overlap(player, pipes, game_over);
}

function game_over() {
    location.reload();

}

function player_jump(){
    player.body.velocity.y = -1000;

}

function spaceHandler(event){
    player.body.velocity.y = -120;

}

function add_pipe_part(x, y, pipe_part){
    var pipe = pipes.create (x, y, pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -200;
}

function generate_pipes(){
    var hole = Math.floor(Math.random() * 5) + 1;

    for(var count = 0; count < hole; count ++)  {
        add_pipe_part(705, 50 * count, "pipe");
    }
    for(var count = hole + 2; count < 15; count ++)  {
        add_pipe_part(705, 50 * count, "pipe");

       }
    score++;
    label_score.setText(score);

}

//function clickHandler(event){
    //player.x = event.x;
    //player.y = event.y;
//}

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