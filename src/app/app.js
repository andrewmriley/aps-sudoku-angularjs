"use strict";

var sudokuApp = angular.module("sudokuApp", ["ui.router"]);

sudokuApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "play",
        url: "/play",
        component: "game",
    })
    .state({
        name: "menu",
        url: "/",
        component: "mainMenu",
    });

    $urlRouterProvider.otherwise('/');
});
