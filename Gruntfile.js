var N3 = require("pop3-n3").N3;
var MessageStore = require('pop3-n3/messagestore.js').MessageStore;
var messageStoreInstance;

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
    
    function AuthStore(user, auth){
        console.log("jeeejee");
        var password;
        if(user){
            password = "12345";
        }
        return auth(password);
    }
    
    
    MessageStore.prototype.registerHook = function() {
        messageStoreInstance = this;
        this.addMessage({
            toName:         "Test Dude",
            toAddress:      "test.dude@testdude.com",
            fromName:       "Test Sender",
            fromAddress:    "test.sender@testsender.com",
            subject:        "Omg this is a test email",
            text:           "",
            html:           grunt.file.read('index.html')
        });
    }
    
    N3.startServer(6666, '127.0.0.1', AuthStore, MessageStore);
    grunt.log.success("Server started")
};
