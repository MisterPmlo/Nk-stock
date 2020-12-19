module.exports = (client, user, userID, channelID, message, evt) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    console.log("Je suis en ligne !");

    client.user.setActivity(`l'espace avec ${client.users.size} membres 👀`, { type: "WATCHING"})
  }