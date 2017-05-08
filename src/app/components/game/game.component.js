"use strict";

angular.module("sudokuApp").component("game", {
    controller: ['generator', gameController],
    templateUrl: "src/app/components/game/game.template.html"
});

function gameController(generator) {
    // L2R T2B linear array of board entries.
    let ctrl = this;

    ctrl.$onInit = function() {
        ctrl.entries = generator.newGame();
    }
}
