/**
 * Created by jeremylaurain on 27/03/15.
 */
function Hero(game) {

    this.game = game;

    this.create = function() {
        this.character = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'hero');
    };

    this.update = function() {

    };

}