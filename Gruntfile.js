"use strict";
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                options: {
                    pretty: true,
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
                  compress: false
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
        wiredep: {
            task: {
                src: ['./layout.jade'],
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
    grunt.registerTask( "wire_dep", ["wiredep"]);
    grunt.registerTask( "default", ["watch"]);
};
