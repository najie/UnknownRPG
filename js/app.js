/**
 * Created by najie on 14/03/15.
 */
var app = angular.module('unknownApp', [
    'ui.router',

    'unknown'
]);
angular.module("unknown", []);

var unknown = angular.module("unknown");

app.run(['$rootScope',
    function($rootScope){

    }
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('game', {
            url: '',
            templateUrl: 'game.html'
        });
});