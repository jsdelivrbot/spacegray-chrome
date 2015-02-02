module.exports = function(grunt) {

  var
    LIVERELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
    mountFolder = function( connect, dir ) {
      return connect.static(require('path').resolve(dir));
    };

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/Custom.css': 'scss/Custom.scss'
        }
      }
    },

    open : {
      dev : {
        path: 'http://localhost:9000'
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },

      livereload: {
        options: {
          middleware: function( connect ) {
            return [
              lrSnippet,
              mountFolder(connect, '.')
            ];
          }
        }
      }
    },

    watch: {
      sass: {
        files: ['**/*.scss', '**/*.html'],
        tasks: ['sass'],
        options: { livereload: LIVERELOAD_PORT }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'open', 'watch']);
};
