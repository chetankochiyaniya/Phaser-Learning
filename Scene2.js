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
        /**
         * make background scroll to make it more appealing
         * we are changing the definintion of the background from image to TileSprite
         * A TileSprite => is a sprite that has a repeating texture => insted of moving image we will move the texture if the image
         * this.background = this.add.image(0, 0, "background") => this.background = this.add.tileSprite(0,0,config.width, config.height,"background")
        */
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background")

        // setting origin at 0,0 (beacuse i want it's pivot (Gujarati->dhari) to be int the top left of the image instead of the center)
        // if you want in center than use position as 100,100
        this.background.setOrigin(0, 0)

        // use config varibale to position the ships on the stage
        // this.ship1 = this.add.image(config.width / 2 - 50, config.height / 2, "ship")
        // this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2")
        // this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3")

        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship")
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2")
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3")


        /** Play with image propeties
         * this.ship1.setScale(2) => we can chage the scale (size) of an image
         * this.ship1.flipY = tru => Flip it on both axis
         * this.ship1.angle +=3 => rotate it continuously from inside the update funaction
         * 
         */

        // pixelgameart.org => free 2D pixel art assets


        // create a basic animation for our ship with a 2 frame lopping cycle
        /**
         * this.anims.create({key, frames, frameRate, repeat})
         * key -> id for this animation
         * frames -> an aaray of frames
         * frameRate -> the speed of the animation
         * repeat => will it loop ? 
         */
        this.anims.create({
            //animation name
            key: "ship1_anim",
            // unsing the frames from the ship spritesheet
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            //for infinite loops use -1
            repeat: -1
        })
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            framerate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            framerate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            framerate: 20,
            // the explosion animation have to disappear when it completes cause we want it to run just once
            repeat: 0,
            hideOnComplete: true
        })

        // to see the animation for all 
        this.ship1.play("ship1_anim")
        this.ship2.play("ship2_anim")
        this.ship3.play("ship3_anim")

        // this.ship1.setInteractive() -> we have to enable them to receive input using this function
        //make each ship interactive
        this.ship1.setInteractive()
        this.ship2.setInteractive()
        this.ship3.setInteractive()

        // Event that listens whenever an interactive object is clicked
        /**
         * "gameobjectdown" -> defines that the event triggers when the oobject is clicked 
         * and it automatically scpes the callback funation to the object itself , in thius case the ship
         * this.destroyShip -> callback funaction
         * this -> to pass the scope to the callback funaction
         */
        this.input.on("gameobjectdown", this.destroyShip, this)

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
    // two para -> 1) mouse pointer in case we need it (we won't)
    //             2) for the clicked object in this case the ship
    destroyShip(pointer, gameObj) {
        // when the ship is clicked , we switch its texture for the explosion spritesheet.
        gameObj.setTexture("explosion")
        // play the explode animation
        gameObj.play("explode")
    }

    update() {
        this.moveShip(this.ship1, 1)
        this.moveShip(this.ship2, 2)
        this.moveShip(this.ship3, 3)

        // secrease the position of the texture of the background
        this.background.tilePositionY -= 0.5
    }


}


