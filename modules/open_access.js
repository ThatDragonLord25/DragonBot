const Discord = require('discord.js');

module.exports = {
  help: (msg, prefix, args) => {
    const commands = {
      ...require("./open_access"),
      ...require("./moderation"),
    }
    console.log(Object.keys(commands));
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setThumbnail('https://cdn.discordapp.com/avatars/616382822613123074/cd0439dc8177e697448e573f7b96aca8.png')
      .setTitle("Dragon Bot").setURL("https://github.com/ThatDragonLord25/DragonBot/")
      .setFooter("Author: Dragon \nCollaborators: sebmandal")
      .setDescription("**Commands**\n" + Object.keys(commands))
    )
  },
  map: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle("**RESULTS**").setURL(`https://www.google.com/maps/@${args[1]},${args[2]},2z`)
    )
  },
  status: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setTitle("**Server Info**")
      .setDescription("Server Name: " + msg.guild.name + "\n Members: " + msg.guild.memberCount + "\n" + msg.guild.owner.user.username)
    )
  },
  avatar: (msg, prefix, args) => {
    const user = msg.mentions.users.first() || msg.author;
    return msg.channel.send(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024`);
  },
  github: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`https://github.com/${args[1]}/${args[2]}\n^your results^`
      )
    );
  },
  search: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setDescription(`https://google.com/?q=${args[1]}\n^your results^`)
    );
  },
  url: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`https://${args[1]}\n^your results^`)
    );
  },
  code: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(`
      **_LANGUAGES_**
      [Javascript](https://nodejs.org/en/)
      [Java](https://www.oracle.com/ca-en/java/technologies/javase-downloads.html)
      [C++](http://mingw-w64.org/doku.php/download)
      [C#](https://www.microsoft.com/en-us/download/details.aspx?id=7029)
      [Python](https://www.python.org/downloads/)
      [PHP](https://www.php.net/downloads.php)
      [Swift](https://swift.org/download/)
      
      **_IDE_**
      [VSCode](https://code.visualstudio.com/)
      [IntelliJ](https://www.jetbrains.com/idea/)
      [Pycharm](https://www.jetbrains.com/pycharm/)`)
    );
  },
  embed: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor(`${args[1]}`)
      .setTitle(`${args[2]}`)
      .setAuthor(`${args[3]}`)
      .setDescription(`${args[4]}`)
      .setThumbnail(`${args[5]}`)
      .setImage(`${args[6]}`)
      .setFooter(`${args[7]}`)
    )
  },
  embedHelp: (msg, prefix, args) => {
    return msg.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription ("1 = color \n 2 = Title \n 3 = Author \n 4 = Description \n 5 = Thumbnail \n 6 = Image \n 7 = Footer")
    )
  }
};