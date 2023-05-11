// basic characteristics of a game, as are the dimension or the background color
var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    backgroundColor: "000000",
    // specify the scenes
    scene: [Scene1,Scene2]
}
// create new instance of phaser game
var game = new Phaser.Game(config);
// we need web server => this will allow the Js files to access your 
// computer files such as images and sounds that will need later on.
// for windowa => wampserver.com | macos => mamp.info



// #Phaser Scenes 
/**
 * Phaser use scenes to organize its content
 * scenes are the places where the elements of the game live in
 * In Phaser 3 yout can create as many scenes as you want,
 * and yout can create the dynamically at any time
 * 
 * you can hvae several scenes running at the same time in same game
 * for example a scene can be the title screen for the game
 * have another for game and another for the world map
 * having communication between each other
 */



// # Flow of Scene control 
/**
 * INIT() => 1st the Init funcation which is user to prepare data
 * PREALOAD() => then there's the preload funaction user to load the music and images into memory
 * CREATE() => is used to add the objects to the game
 * UPDATE() => which is a loop that runs constantly
 */