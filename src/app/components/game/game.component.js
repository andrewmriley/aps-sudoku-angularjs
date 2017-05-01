"use strict";

angular.module("sudokuApp").component("game", {
    controller: gameController,
    templateUrl: "src/app/components/game/game.template.html"
});

function gameController() {
    // L2R T2B linear array of board entries.
    var entries = [];
    // Index of entries that were defaulted and cannot be edited.
    var defaultEntryLocations = [];

    this.$onInit = function() {
        console.log('game controller');

        // @todo - Dev code testing board
        for (var x = 1; x < 82; x++) {
            entries.push(x);
        }
        console.log(entries);
    }
}
