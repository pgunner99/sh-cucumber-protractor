
module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'specs/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    },

  cucumberjs: {
    options: {
      format: 'html',
      output: './public/report.html',
      theme: 'foundation'
    },
      features : []
  },


    protractor: {
          options: {
            keepAlive: true,
            configFile: "protractor.conf.js"
          },
          singlerun: {},
          auto: {
            keepAlive: true,
            options: {
              args: {
                seleniumPort: 4444
              }
            }
          }
        },

    protractor_webdriver: {
          start: {
              options: {
                  path: 'node_modules/protractor/bin/',
                  command: 'webdriver-manager start'
              }
          }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-selenium-launcher');

  grunt.loadNpmTasks('grunt-cucumberjs');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('e2e-tests', [ 'selenium-launch', 'cucumberjs' ] );

  grunt.registerTask('test', [
    'protractor_webdriver',
    'cucumberjs'
  ]);
};