"use strict";

var sudokuApp = angular.module("sudokuApp", ["ui.router"]);

sudokuApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
       name: "play",
       url: "/play",
    })
    .state({
       name: "menu",
       url: "/",
       component: "mainMenu",
       templateUrl: 'src/app/components/main-menu/main-menu.template.html'
    });

    $urlRouterProvider.otherwise('/');
});
