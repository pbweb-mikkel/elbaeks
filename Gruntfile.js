module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: { 
            dist: {
              src: ['js/lib/fancybox.js', 'js/lib/lazyload.js', 'js/utils.js', 'js/transition.js', 'js/map.js', 'js/animations.js', 'js/main.js', 'js/init.js'],
              dest: 'js/build/production.js',
            },
            lib: {
              src: ['js/lib/gsap.min.js', 'js/lib/ScrollTrigger.min.js', 'js/lib/ScrollToPlugin.min.js', 'js/lib/player.min.js', 'js/lib/flatpickr.js', 'js/lib/imagesloaded.pkgd.min.js', 'js/lib/splide.min.js', 'js/lib/barba.umd.js', 'js/lib/barba-prefetch.umd.js'],
              dest: 'js/build/bundle.js',
            },
            gutenberg: {
              src: ['gutenberg/*.jsx'],
              dest: 'gutenberg/build/blocks.js',
            },
        },
        browserify: {
            dist: {
                files: {
                    // 'js/build/production.es5.js': 'js/build/production.es5.js',
                    'gutenberg/build/blocks.js' : 'gutenberg/build/blocks.js'
                },
                options: {
                    transform: [['babelify', { 
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"],
                        ] 
                    }]],
                    browserifyOptions: {
                        debug: false
                    }
                }
            }
        },
        jshint: {
            options: {
                'esversion': 8
            },
            all: ['js/*.js']
        },
        uglify: {
            my_target: {
              files: {
                'js/build/bundle.min.js': ['js/build/bundle.js'],
                'js/build/production.min.js': ['js/build/production.js'],
                // 'js/build/production.es5.min.js': ['js/build/production.es5.js'],
              }
            }
        },
        autoprefixer: {
              options: {
                browsers: ['last 8 version', 'ie >= 8', 'ie 11', 'Safari 8', 'iOS >= 5', 'Safari >= 4'],
                map: true
              },
            dist: {
                files: {
                    'style.css': 'style.css'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    // sourcemap: 'inline'
                    // style: 'compressed'
                },
                files: {
                    'style.css': ['sass/style.scss', '/sass/*.scss']
                }
            } 
        },
        react: {
          jsx: {
            files: [
              {
                expand: true,
                cwd: 'gutenberg',
                src: [ '*.jsx' ],
                dest: 'gutenberg/build',
                ext: '.js'
              }
            ]
          }
        },
        watch: {
            options: {
                livereload: true
            },
            markup: {
                files: ['*.php', 'img/*.svg', 'templates/*.php', 'templates/*.php', 'templates/**/*.php'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['js/*.js', 'js/lib/*.js', 'gutenberg/*.jsx'],
                tasks: ['jshint', 'concat', 'browserify', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['sass/*.scss', 'sass/**/*.scss', 'sass/**/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            } ,
           styles: {
                files: ['style.css'],
                tasks: ['autoprefixer']
            }
        },
        // babel: {
            // options: {
            //     sourceMap: false,
            //     presets: ["env", "react"],
            //     plugins: ["transform-es2015-modules-amd"]
            // },
            // dist: {
            //     files: [{
            //         expand: true,
            //         cwd: './gutenberg',
            //         src: ['*.jsx'],
            //         dest: './gutenberg/build',
            //         ext: '.js'
            //     }]
            // }
        // }
        // babel: {
        //     options: {
        //       sourceMap: true,
        //       presets: [
        //         ['@babel/preset-env',
        //             {
        //             "useBuiltIns": false
        //             }
        //         ]
        //       ],
        //       plugins: ["@babel/plugin-transform-modules-amd", "babel-plugin-transform-es2015-modules-amd", "@babel/plugin-transform-runtime"],
        //     },
        //     dist: {
        //         files: {
        //             'js/build/production.js': 'js/build/production.js',
        //         }
        //     }
        // },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-postcss');
    // grunt.loadNpmTasks('browserify');
    // grunt.loadNpmTasks('grunt-contrib-compress');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask("default", ["concat", "uglify", "watch"]);
    // grunt.registerTask("default", ["sass", "autoprefixer", "concat", "uglify"]);
    // grunt.registerTask("default", ['babel']);
    grunt.registerTask('default', [
        // 'jshint',
        'concat', //<-- Probably don't need to concat the files, assuming index.es6 imports the necessary modules.
        'browserify:dist',
        'uglify'
    ]);

};