"use strict";

angular.module("sudokuApp").service('generator', function() {
    let board = [];

    let initBoard = function() {
        let row = 1;
        let column = 1;
        let block = 1;

        for (let x = 1; x < 82; x++) {
            board.push({
                entry: 0,
                clue: false,
                row: row,
                column: column,
                block: block
            });

            // New block
            if (column % 3 === 0) {
                ++block;
            }

            ++column;
            // New Row
            if (x % 9 === 0) {
                if (row % 3 !== 0) {
                    block = block - 3;
                }
                ++row;
                column = 1;
            }
        }
    };

    let assignClues = function(totalClues) {
        let lookup = {
            rows: [],
            columns: [],
            blocks: []
        };
        ['rows', 'columns', 'blocks'].forEach(function(chunk) {
            for (let x = 0; x < 9; x++) {
                lookup[chunk].push(new Set([1,2,3,4,5,6,7,8,9]));
            }
        });

        board.forEach(function(cell, boardIndex) {
            let rowcol = new Set(
                [...lookup.rows[cell.row - 1]].filter(x => lookup.columns[cell.column - 1].has(x))
            );
            let intersection = new Set(
                [...lookup.blocks[cell.block - 1]].filter(x => rowcol.has(x))
            );
            let intersectionLookup = Math.floor(Math.random() * intersection.size);
            let intersectionArray = [...intersection];
            let newCellValue = intersectionArray[intersectionLookup];
            board[boardIndex].entry = newCellValue;
            lookup.rows[cell.row - 1].delete(newCellValue);
            lookup.columns[cell.column - 1].delete(newCellValue);
            lookup.blocks[cell.block - 1].delete(newCellValue);
        });
    };

    this.newGame = function() {
        initBoard();
        assignClues(3);
        return board;
    };
});
