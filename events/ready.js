const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(c) {
        console.log(`Bot is ready, login as ${c.user.tag}`)
    },
};