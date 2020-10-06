var tmi = require("tmi.js")
var say = require("say")
var modnames = [

'topsen',
'razoringminds', //if you want me to remove it i can gladly do so
'',
'',
''

]

var opitons = {
    options: {
        debug: false
    },

    connection: {
        cluster: "aws",
        reconnect: true
    },

    identify: {
        username: "thebanfather", //idk if this is your real bot username i 
        password: "notprovidedyet"
    },
    channels: ["topsen"]
};

var client = new tmi.client(opitons);
client.connect();

client.on("chat", function (channel, userstate, message, self) {
    if(!userstate.username === modnames) return;
    if(message.startsWith("!tts")) {
    say.speak(userstate.username + " says " + message);
    }


});