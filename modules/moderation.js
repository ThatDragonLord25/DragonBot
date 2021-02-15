const { User } = require("discord.js");

module.exports = {
  createModerationRoles: (msg, prefix, args) => {
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      msg.guild.roles.create({ data: { name: 'Admin', permissions: ['ADMINISTRATOR'], color: '#ff0000', hoist: true} });
      msg.guild.roles.create({ data: { name: 'Mod', permissions: ['BAN_MEMBERS', 'KICK_MEMBERS', 'MANAGE_MESSAGES', 'MANAGE_CHANNELS'], color: '#00FF00', hoist: true} });
      msg.guild.roles.create({ data: { name: 'Helper', permissions: ['KICK_MEMBERS', 'MANAGE_MESSAGES'], hoist: true, color: '#87ceff'}});
      msg.guild.roles.create({ data: { name: 'mute', hoist: false, color: '#000'}});
      return msg.channel.send("Moderation Roles Created.  **WARNING** DO NOT RUN THIS COMMAND AGAIN UNLESS ALL MODERATION ROLES ARE DELETED");
    } else {
      return msg.channel.send("insufficient permissions this requires Admin permissions");
    }
  },
}