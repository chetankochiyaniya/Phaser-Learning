class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }

    create() {

        /**
         * this.add.image(0,0,"background")
         * position: the x and y cordinates for the image
         * key: the name of the image defined when loaded
         */
        // setting a class varibale for the background named this.background 
        // so we can access its properties at anytime inside this class
        this.background = this.add.image(0, 0, "background")
        // setting origin at 0,0 (beacuse i want it's pivot (Gujarati->dhari) to be int the top left of the image instead of the center)
        // if you want in center than use position as 100,100
        this.background.setOrigin(0, 0)

        // use config varibale to position the ships on the stage
        this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship")
        this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2")
        this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3")

        /** Play with image propeties
         * this.ship1.setScale(2) => we can chage the scale (size) of an image
         * this.ship1.flipY = tru => Flip it on both axis
         * this.ship1.angle +=3 => rotate it continuously from inside the update funaction
         * 
         */

        // pixelgameart.org => free 2D pixel art assets

        this.add.image()
        this.add.text(20, 20, "Playing game", { font: "25px Arial", fill: "yellow" })
    }

    /** 
 * the 1st thing we are going to do is , move the ship on the vertical axis by inscreasing its Y value
 * and when it reaches the bottom of the screen we move it back to the top of the screen
 */
    // take two para -> 1) object 2)Y velocity
    moveShip(ship, speed) {
        ship.y += speed;

        // if ship vertical position exceds the height of our game call reset position funactiom 
        if (ship.y > config.height) {
            this.resetShipPosition(ship);
        }
    }

    resetShipPosition(ship) {
        // reset object position
        ship.y = 0;
        // ship on a random position on the X axis
        var randomX = Phaser.Math.Between(0, config.width)
        ship.x = randomX
    }

    update() {
        this.moveShip(this.ship1, 1)
        this.moveShip(this.ship2, 2)
        this.moveShip(this.ship3, 3)
    }


}


