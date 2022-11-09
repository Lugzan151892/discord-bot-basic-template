const config = require('../config.json');
const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    on: true,
    async execute(msg, bot) {  
        if(!msg.content.startsWith(config.prefix)) return;
        let command = msg.content.substring(1);
        command = command.split(' ')[0];
        if(!bot.commands.has(command)) return;

        try {
            await bot.commands.get(command).execute(msg, bot);
        } catch (error) {
            console.log(error);
            await msg.reply('Here an error');
        }
    }
}