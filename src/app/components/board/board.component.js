"use strict";

angular.module("sudokuApp").component("board", {
    controller: boardController,
    templateUrl: "src/app/components/board/board.template.html"
});

function boardController() {
    console.log('this is the board controller');
}
