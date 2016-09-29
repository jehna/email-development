module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['template/*.js', 'template/**/*.js'],
            tasks: ['render']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['startServer', 'render', 'watch']);
    grunt.registerTask('render', 'render new email', function() {
      let rendered = require('./template/')();
      grunt.file.write('tmp/template.html', rendered);
    });

    grunt.registerTask('startServer', 'Start email server', () => {
      require('./server.js');
    })
};
