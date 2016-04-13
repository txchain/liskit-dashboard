"use strict";
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                options: {
                    pretty: false,
                    data: {
                    debug: true
                    }
                },
                files: [{
                    expand: true,
                    src: ["**/*.jade","!**/layout.jade"],
                    ext: '.html'
                }]
            }
        },
        stylus: {
            build: {
                options: {
                  compress: true
                },
                files: [{
                    expand: true,
                    cwd: './assets/css/src/',
                    src: [ '**/*.styl' ],
                    dest: './assets/css/dist/',
                    ext: '.css'
                }]
            }
        },
        concat: {
            options: {
                separator: ''
            },
            angular: {
                src:  './public/src/**/*.js',
                dest: './public/dist/angular-lisk-dashboard.js'
            },
            common_js: {
                src:  './assets/js/src/**/*.js',
                dest: './assets/js/dist/common.js'
            }
        },
        wiredep: {
            task: {
                src: ['**/layout.jade'],
            }
        },
        watch: {
            css: {
                files: './assets/css/src/*.styl',
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: './*.jade',
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            bower: {
                files: './bower_components/*',
                tasks: ['wiredep'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.registerTask( "compile_style", ["stylus"]);
    grunt.registerTask( "compile_jade", ["jade"]);
    grunt.registerTask( "js_concat", ["concat"]);
    grunt.registerTask( "wire_dep", ["wiredep"]);
    grunt.registerTask( "default", ["stylus", "jade", "concat", "wiredep", "watch"]);
};
