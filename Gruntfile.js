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
        wiredep: {
            task: {
                src: ['**/layout.jade'],
            }
        },
        concat: {
            options: {
                separator: ''
            },
            angular: {
                src:  ['./public/src/*.js', './public/src/*/*.js', './public/src/**/*.js'],
                dest: './public/dist/angular-lisk-dashboard.js'
            },
            common_js: {
                src:  './assets/js/src/**/*.js',
                dest: './assets/js/dist/common.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'assets/js/dist/common.min.js': ['assets/js/dist/common.js'],
                    'public/dist/angular-lisk-dashboard.min.js': ['public/dist/angular-lisk-dashboard.js']
                }
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
                files: '**/*.jade',
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['./public/src/**/*.js', './assets/js/src/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    livereload: true
                }
            },
            bower: {
                files: './assets/lib/*',
                tasks: ['wiredep'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*'
                }
            }
        }
    });
    grunt.registerTask( "compile_style", ["stylus"]);
    grunt.registerTask( "compile_jade", ["jade"]);
    grunt.registerTask( "js_concat", ["concat"]);
    grunt.registerTask( "js_min", ["uglify"]);
    grunt.registerTask( "wire_dep", ["wiredep"]);
    grunt.registerTask( "install", ["wiredep", "stylus", "jade", "concat"]);
    grunt.registerTask( "default", ["wiredep", "stylus", "jade", "concat","connect", "watch"]);
};
