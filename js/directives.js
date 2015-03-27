/**
 * Created by najie on 14/03/15.
 */
unknown.directive("gameCanvas",function($injector) {
    return {
        scope: {
        },
        template: "<div id='gui'><div class='health'>{{health}}<i class='fa fa-heart'></i></div></div>" +
        "<div id='game-canvas'></div>"
        ,
        link: function(scope, elem, attrs) {

            var h = parseInt($("#game-canvas").css('height'), 10);
            var w = parseInt($("#game-canvas").css('width'), 10);

            var game = new Phaser.Game(w, h, Phaser.AUTO, 'game-canvas');
            scope.health = 100;

            game.state.add('Game', states.theGame);
            game.state.start('Game');
        }
    }
});
