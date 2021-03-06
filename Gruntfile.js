// Generated on 2015-06-01 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    examples: 'examples'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    // Project settings
    yeoman: appConfig,

    banner: '/*\n' +
            '* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage : "" %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.authors %>\n' +
            '* Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
            '*/\n',

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      examples: {
        options: {
          open: true,
          base: '<%= yeoman.examples %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      examples: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.examples %>/{,*/}*',
            '!<%= yeoman.examples %>/.git{,*/}*'
          ]
        }]
      },
      build: 'build',
      server: '.tmp',
      src: '<%= yeoman.examples %>/<%=pkg.name %>/src'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      examples: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      }
    },
    // Renames files for browser caching purposes
    filerev: {
      examples: {
        src: [
          '<%= yeoman.examples %>/scripts/{,*/}*.js',
          '<%= yeoman.examples %>/styles/{,*/}*.css',
          '<%= yeoman.examples %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.examples %>/styles/fonts/*'
        ]
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.examples %>/{,*/}*.html'],
      css: ['<%= yeoman.examples %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.examples %>',
          '<%= yeoman.examples %>/images',
          '<%= yeoman.examples %>/styles'
        ]
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      examples: {
        files: {
          'build/expandtable.min.js': [
            'bower_components/expandtable/src/expandtable.js'
          ]
        }
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      examples: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      examples: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.examples %>',
          src: '**/*'
        }, {
          expand: true,
          cwd: 'bower_components',
          src: '**/*',
          dest: '<%= yeoman.examples %>/bower_components'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      build: {
        files:[{
          expand: true,
          cwd: 'build',
          dest: 'bower_components/expandtable/build',
          src: '**/*'
        }, {
          expand: true,
          cwd: 'bower_components/expandtable/src',
          dest: 'build',
          src: '**/*'
        }]  
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      examples: [
        'copy:styles'//,
        // 'imagemin',
        // 'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'examples') {
      return grunt.task.run(['build', 'connect:examples:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', [
    'clean:examples',
    'clean:build',
    'concurrent:examples',
    // 'autoprefixer',
    'ngAnnotate',
    'uglify',
    'copy:examples',
    'copy:build'
    // 'filerev',
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
