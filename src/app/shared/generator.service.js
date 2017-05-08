"use strict";

angular.module("sudokuApp").service('generator', function() {
    let board = [];

    let initBoard = function() {
        let row = 1;
        let column = 1;
        let cluster = 1;

        for (let x = 1; x < 82; x++) {
            board.push({
                entry: 0,
                default: false,
                row: row,
                column: column,
                cluster: cluster
            });

            // New cluster
            if (column % 3 === 0) {
                ++cluster;
            }

            ++column;
            // New Row
            if (x % 9 === 0) {
                if (row % 3 !== 0) {
                    cluster = cluster - 3;
                }
                ++row;
                column = 1;
            }
        }
    };

    let assignDefaults = function(perCluster) {
        let assigned = [];
        while (assigned.length < perCluster) {
            let slot = Math.floor(Math.random() * (9 - 1)) + 1;
            if (!assigned.includes(slot)) {
                assigned.push(slot);
            }
        }
    };

    this.newGame = function() {
        initBoard();
        assignDefaults(3);
        return board;
    };
});
