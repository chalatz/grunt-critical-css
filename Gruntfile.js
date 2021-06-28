"use strict";

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    critical: {
        test: {
            options: {
                base: './',
                css: [
                    'test/styles.css'
                ],
                dimensions: [{
                    width: 320,
                    height: 480
                  },{
                    width: 768,
                    height: 1024
                  },{
                    width: 1280,
                    height: 960
                  }],
                  minify: true
            },
            src: 'test/index.html',
            dest: 'test/generated/critical.css'
        }
    }

  });

//   grunt.registerTask('go', 'critical:test');

};