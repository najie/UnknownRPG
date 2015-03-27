/**
 * Created by jeremylaurain on 27/03/15.
 */
var states = {

    theGame: {
        preload: function() {
            this.game.load.image('sky', 'game/images/background.png');
            this.game.load.image('hero', 'game/images/hero.png');
        },
        create: function() {
            var world = this.game.world;
            var bg = this.game.add.tileSprite(0, 0, world.width, world.height, 'sky');
            //bg.autoScroll(-30, 0);

            this.game.world.setBounds(0, 0, 6000, 6000);

            var hero = new Hero(this.game);
            hero.create();
            this.hero = hero.character;

            this.cameraPos = new Phaser.Point(0, 0);
            this.cameraPos.setTo(this.hero.x, this.hero.y);
        },
        update: function() {
            
        }
    }

};