// class name and file name is same
class Scene1 extends Phaser.Scene {
    constructor() {
        // inherit all the characteristics of its predecessor the class Scene from Phaser
        // as a parameter we pass "bootGame" that will be identifier for this scene
        super("bootgame")
    }

    // we are going to preload the background image with the load image funaction
    /**
     * this.load.image("key","url")
     * key: a string to identify the image
     * url: a string path to the image file
     */
    preload() {
        // know this image is ready to be used in our game since it's already loaded in memory
        this.load.image("background", "assets/images/background.png")
        this.load.image("ship","assets/images/ship.png")
        this.load.image("ship2","assets/images/ship2.png")
        this.load.image("ship3","assets/images/ship3.png")
    }
    



    create() {
        // add text funaction => this,add.text(x-axis,y-axis,"text")
        // we create a text object : x,y axis and text to display
        this.add.text(20, 20, "Loading game...")
        this.scene.start("playGame")

    }
}
