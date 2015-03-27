/**
 * Created by jeremylaurain on 27/03/15.
 */
function Hero(game, cursors) {

    this.game = game;
    this.cursors = cursors;

    this.create = function() {
        this.character = this.game.add.sprite(50, 480, 'hero');
        this.character.game.physics.enable(this.character, Phaser.Physics.ARCADE);
        this.character.anchor.set(0.5);
        this.character.body.collideWorldBounds = true;
        this.character.body.bounce.y = 0.05;
        this.character.frame = 1;
    };

    this.update = function() {
        if(this.cursors.right.isDown) {
            console.log("go");
            this.character.x += 5;
            this.character.frame = 1;
        }
        else {
            this.character.body.acceleration.set(0);
        }
        if(this.cursors.left.isDown) {
            this.character.x -= 5;
            this.character.frame = 0;
        }
        if(this.cursors.up.isDown) {
            //JUMP
            this.character.y -= 10;
        }
        else if (this.cursors.down.isDown) {
            //ESQUIVE ?
        }
        else {
            this.character.body.angularVelocity = 0;
        }
    };

}