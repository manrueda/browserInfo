module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/browserInfo.min.map'
        },
        files: {
          'dist/browserInfo.min.js': 'browserInfo.js'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', '*.js']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('release', ['jshint', 'uglify:build']);

};
