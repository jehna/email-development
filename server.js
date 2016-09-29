const N3 = require('pop3-n3').N3;
const MessageStore = require('pop3-n3/messagestore.js').MessageStore;
const fs = require('fs')

function AuthStore(user, auth){
  var password;
  if(user){
    password = '12345';
  }
  return auth(password);
}


MessageStore.prototype.registerHook = function() {
  const msg = String(fs.readFileSync('index.html'))
  this.addMessage({
    toName:         'Test Dude',
    toAddress:      'test.dude@testdude.com',
    fromName:       'Test Sender',
    fromAddress:    'test.sender@testsender.com',
    subject:        'Omg this is a test email',
    text:           '',
    html:           msg
  });
}

N3.startServer(6666, '127.0.0.1', AuthStore, MessageStore);
console.log('Server started')
