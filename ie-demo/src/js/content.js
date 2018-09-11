var error = function() {
    console.log("error!");
};
var callback = function(content) {
    console.log('Backgound script responded with: ' + content);
};
var message = 'Hello there!';

console.log('this is the content script!');
alert('this is the content script!');

console.log("Sending message '" + message + "' to the background script...");
forge.message.broadcastBackground("background-message", message, callback, error);
