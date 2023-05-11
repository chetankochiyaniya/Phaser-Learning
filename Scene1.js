// class name and file name is same
class Scene1 extends Phaser.Scene{
    constructor(){
        // inherit all the characteristics of its predecessor the class Scene from Phaser
        // as a parameter we pass "bootGame" that will be identifier for this scene
        super("bootgame")
    }
    create(){
        
        // we create a text object : x,y axis and text to display
        this.add.text(20,20,"Loading game...")
        this.scene.start("playGame")
    }
}