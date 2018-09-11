var error = function() {
    console.log("error!");
};
var callback = function(content, reply) {
    reply("Backgound job got the message '" + content + "', and replied back!");
};

forge.message.listen("background-message", callback, error);
console.log('i am in the background..yay!');

alert('This is the background script running..yay!');
