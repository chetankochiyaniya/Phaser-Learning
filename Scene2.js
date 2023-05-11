class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame")
    }

    create(){

    /**
     * this.add.image(0,0,"background")
     * position: the x and y cordinates for the image
     * key: the name of the image defined when loaded
     */
    // setting a class varibale for the background named this.background 
    // so we can access its properties at anytime inside this class
    this.background = this.add.image(0,0,"background")
    // setting origin at 0,0 (beacuse i want it's pivot (Gujarati->dhari) to be int the top left of the image instead of the center)
    // if you want in center than use position as 100,100
    this.background.setOrigin(0,0)

    // use config varibale to position the ships on the stage
    this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship")
    this.ship1 = this.add.image(config.width/2, config.height/2, "ship2")
    this.ship1 = this.add.image(config.width/2 + 50, config.height/2, "ship3")

    /** Play with image propeties
     * this.ship1.setScale(2) => we can chage the scale (size) of an image
     * this.ship1.flipY = tru => Flip it on both axis
     * this.ship1.angle +=3 => rotate it continuously from inside the update funaction
     * 
     */

    // pixelgameart.org => free 2D pixel art assets

    this.add.image()
        this.add.text(20,20,"Playing game", {font: "25px Arial", fill: "yellow"})
    }
}