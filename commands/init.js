exports.run = (client, message, args) => {

    const fs = require("fs");
    const prefix = "!";
  
    let cont = message.content.slice(prefix.length).split(" ");
  
    //msg.channel.messages.fetch("701574160211771462");

    var MessageData = JSON.parse(fs.readFileSync('./message.json', 'utf-8'));

    // Test
    if (!MessageData[args[0]]) { 
        message.channel.send("Il manque l'argument");
    } else {
        if(args[1] != "") {
            MessageData[args[0]] = {
                quantité: args[1],
            }
        } else {
            message.channel.send("Il manque la quantité");
        }
    }
  
    /*
    message.channel.send(
        "```test```"
    );
    */

    fs.writeFile('./message.json', JSON.stringify(MessageData), (err) => {
        if (err) console.error(err);
    });
  }