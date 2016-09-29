require('./server.js'); // Kicks in server

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['index.html'],
            tasks: ['sendemail']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('sendemail', 'send new email', function() {
    });
};
