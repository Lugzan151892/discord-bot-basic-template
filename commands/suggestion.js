const {SlashCommandBuilder} = require('discord.js');
const {channels} = require('../utils/data.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestion')
        .setDescription('Sends suggestion to the suggestion\'s channel')
        .setDescriptionLocalization('ru', 'Отпраьте предложение по улучшению сервера или бота')
        .addStringOption(option =>
            option.setRequired(true)
            .setName('suggestion')            
            .setDescription('Suggestion you want to leave'))
            .setDescriptionLocalization('ru', 'Введите Ваше предложение'),
    async execute(interaction, bot) {
        let suggestion = interaction.options.getString('suggestion');
        let suggestionChannel;
        if(interaction.locale === 'ru') {
            await interaction.reply({content: 'Спасибо за предложение!', ephemeral: true});
        } else await interaction.reply({content:'Thank\'s for the suggestion!', ephemeral: true});

        suggestionChannel = bot.channels.cache.get(channels.suggestionChannel);
        await suggestionChannel.send(`New suggestion: ${suggestion}`)
            .then(message => {
                message.react('✅');
                message.react('🚫');
            });      
    }
}