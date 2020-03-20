const discord = require("discord.js")
const client = new discord.client;

client.on("message", message => ( 
  (message.content == "ping")}
  message.reply("pong");
  )
});

client.login("Ur bot token here");
