"use strict";

angular.module("sudokuApp").component("board", {
    controller: boardController,
    templateUrl: "src/app/components/board/board.template.html",
    bindings: {
        entries: "<"
    }
});

function boardController() {
    let ctrl = this;

    ctrl.$onInit = function() {
    };
}
