const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Bot by Crypto#9999`);
});

client.on("message", async message => {
  if (message.channel.name == "chatbot") {
  if (message.author.bot) return;
  let content = message.content;
  chatbot.getReply(content).then(r => message.channel.send(r));
  }
});
client.login(token);
