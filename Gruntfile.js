module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig ({
        "angular-builder": {
            options: {
                mainModule: "sudokuApp"
            },
            app: {
                src: [
                    "src/app/**/*.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.js"
                    ],
                dest: ".tmp/sudoku.app.js"
            }
        },

        ngtemplates: {
            sudoku: {
                src: "src/app/**/**.html",
                dest: ".tmp/sudoku.templates.js"
            }
        },

        watch: {
            scripts: {
                files: [
                    "src/app/**/*.js",
                    "src/app/**/*.html"
                ],
                tasks: ["debug"],
                options: {
                    spawn: false,
                },
            },
        },

        clean: [".tmp", "build/**/*.js"],

        copy: {
            angular: {
                expand: true,
                cwd: "node_modules",
                src: ["angular/angular.min.js", "angular-ui-router/release/angular-ui-router.min.js"],
                dest: "build/js",
                flatten: true,
                filter: "isFile",
            }
        },

        concat: {
          dist: {
              src: [
                 "src/app/*.js",
                 "src/app/**/*.js"
              ],
              dest: ".tmp/sudoku.app.js"
          }
        },

        uglify: {
            options: {
                nameCache: ".tmp/grunt-uglify-cache.json",
            },
            all: {
                files: {
                    "build/js/sudoku.app.min.js": [".tmp/sudoku.app.js"],
                    "build/js/sudoku.templates.min.js": [".tmp/sudoku.templates.js"],
                }
            }
        },

        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    ".tmp/sudoku.app.js": ".tmp/sudoku.app.js"
                }
            }
        }

    });

    grunt.registerTask("release", [
        "clean",
        "ngtemplates",
        "concat",
        "uglify",
        "copy:angular"
    ]);
};
