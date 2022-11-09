const { Events } = require('discord.js');
const {languageEmbedEn, languageEmbedRu, languageButtons} = require('../utils/templates.js');
const { channels } = require('../utils/data.js');

module.exports = {
    name: Events.GuildMemberAdd,
    on: true,
    async execute(member, bot) { 
        let rulesChannel = bot.channels.cache.get(channels.rulesChannel);
        let {user} = member;
        if (member.locale === 'ru') {
            await rulesChannel.send(`Добро пожаловать на сервер, ${user.username}, пожалуйста, выбери язык`);
            await rulesChannel.send({content: 'Пожалуйста, выберите язык', ephemeral: true, embeds: [languageEmbedRu], components: [languageButtons]})
        } else {
            await rulesChannel.send(`Have a nice time, ${user.username}, please, choose your language`);
            await rulesChannel.send({content: 'Choose your language', ephemeral: true, embeds: [languageEmbedEn], components: [languageButtons]})
        } 
    }
}