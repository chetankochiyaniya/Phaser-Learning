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
        // this.load.image("ship", "assets/images/ship.png")
        // this.load.image("ship2", "assets/images/ship2.png")
        // this.load.image("ship3", "assets/images/ship3.png")

        /**
         * ships destroyable when clicked
         * to make animation in phaser we need to use spritesheets
         * A Spritesheets -> is a collection of images in a sigle file separated by frames
         * using spritesheets in phaser is more expensive for the processor that's why we had not used them for the images
         */
        this.load.spritesheet("ship", "assets/images/ship.png", { frameWidth: 16, frameHeight: 16 }/* size of the frame in pixels */)
        this.load.spritesheet("ship2", "assets/images/ship2.png", { frameWidth: 32, frameHeight: 16 })
        this.load.spritesheet("ship3", "assets/images/ship3.png", { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", { frameWidth: 16, frameHeight: 16 })
    }

    create() {
        // add text funaction => this,add.text(x-axis,y-axis,"text")
        // we create a text object : x,y axis and text to display
        this.add.text(20, 20, "Loading game...")
        this.scene.start("playGame")

    }
}