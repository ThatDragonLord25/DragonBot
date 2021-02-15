const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.author);
  // essential imports and consts
  console.log(`${msg.content} from -> ${msg.author.username} in -> ${msg.guild.name} - #${msg.channel.name}`);
  const prefix = "DB "
  const args = msg.content.slice(prefix.length).split(" ");
  const command = args[0]
  const commands = {
    ...require("./modules/open_access.js"),
    ...require("./modules/moderation.js")
  };
  
  if (msg.content.startsWith(prefix)) {
    // command processor (runs through commands for a match)
    try {
      commands[
        args[0]
      ](msg, prefix, args);
    } catch (err) { console.log(err); }
  }
});

// deleted or sent message
client.on("message", (msg) => {
  if (msg.channel != "807381952243826709" && msg.guild.id == "773413789487464488") {
    const embed = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setTitle("New message!")
      .setDescription(`"${msg.content}" \nfrom -> @${msg.author.tag} \nin -> ${msg.guild.name} #${msg.channel.name}`)
    client.guilds.cache.get("773413789487464488").channels.cache.get("807381952243826709").send(embed);
  }
  if (msg.channel != "807412604170403840" && msg.guild.id == "806614505831661579") {
    const embed = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setTitle("New message!")
      .setDescription(`"${msg.content}" \nfrom -> @${msg.author.tag} \nin -> ${msg.guild.name} #${msg.channel.name}`)
    client.guilds.cache.get("806614505831661579").channels.cache.get("807412604170403840").send(embed);
  }
});
client.on("messageDelete", (msg) => {
  if (msg.channel != "807381952243826709" && msg.guild.id == "773413789487464488") {
    const embed = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setTitle("Deleted message!")
      .setDescription(`"${msg.content}" \nfrom -> @${msg.author.tag} \nin -> ${msg.guild.name} #${msg.channel.name}`)
    client.guilds.cache.get("773413789487464488").channels.cache.get("807381952243826709").send(embed);
  }
  if (msg.channel != "807412604170403840" && msg.guild.id == "806614505831661579") {
    const embed = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setTitle("Deleted message!")
      .setDescription(`"${msg.content}" \nfrom -> @${msg.author.tag} \nin -> ${msg.guild.name} #${msg.channel.name}`)
    client.guilds.cache.get("806614505831661579").channels.cache.get("807412604170403840").send(embed);
  }
});

tokenFile = { ...require('./token') };
client.login(tokenFile.token);