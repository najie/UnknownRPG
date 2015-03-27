/**
 * Created by jeremylaurain on 27/03/15.
 */
var states = {

    theGame: {

        preload: function() {
            this.game.load.image('sky', 'game/images/background.png');

            this.game.load.spritesheet('hero', 'game/images/hero-white.png', 182, 144, 4);
        },
        create: function() {
            var world = this.game.world;
            var bg = this.game.add.tileSprite(0, 0, world.width, world.height, 'sky');
            //bg.autoScroll(-30, 0);

            this.game.world.setBounds(0, 0, 6000, 550);
            this.game.physics.arcade.gravity.y = 500;
            this.cursors = this.game.input.keyboard.createCursorKeys();

            this.Hero = new Hero(this.game, this.cursors);
            this.Hero.create();
            this.hero = this.Hero.character;

            this.cameraPos = new Phaser.Point(0, 0);
            this.cameraPos.setTo(this.hero.x, this.hero.y);
        },
        update: function() {
            this.Hero.update();
        }
    }

};